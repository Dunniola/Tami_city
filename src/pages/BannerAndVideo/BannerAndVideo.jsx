import { useState } from "react";
import { AlertCircle } from "lucide-react";
import Sidebar from "../../components/General/Sidebar";
import { useDataContext } from "../../context/DataContext";
import { toast } from "react-hot-toast";
import "@vime/core/themes/default.css";

// Optional light theme (extends default). ~400B
import "@vime/core/themes/light.css";
import { Player, DefaultUi, Video, ClickToPlay } from "@vime/react";
import Progressbar from "../../components/General/Progressbar";
import { FaFile, FaTrashCan } from "react-icons/fa6";
import { BsUpload } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/General/Loading";

const userInterests = [
  "Technology & Gadgets 📱",
  "Fashion & Style 👗",
  "Health & Fitness 🏋️‍♂️",
  "Food & Cooking 🍳",
  "Travel & Adventure ✈️",
  "Music & Concerts 🎵",
  "Movies & TV Shows 🎬",
  "Books & Literature 📚",
  "Sports & Outdoors ⚽",
  "Gaming & Esports 🎮",
  "Beauty & Skincare 💄",
  "Parenting & Family 👨‍👩‍👧‍👦",
  "Home Improvement 🛠️",
  "Automobiles & Motorcycles 🚗",
  "Art & Design 🎨",
  "Pets & Animals 🐾",
  "Entrepreneurship 🚀",
  "Marketing & Advertising 📊",
  "Education & Learning 🎓",
  "Business & Finance 💼",
];

const adSizes = [
  { name: "Medium Rectangle", width: 300, height: 250 },
  { name: "Leaderboard", width: 728, height: 90 },
  { name: "Skyscraper", width: 160, height: 600 },
  { name: "Large Rectangle", width: 336, height: 280 },
];

export default function BannerAndVideo({ type }) {
  const { handleCloudinaryUpload, uploadProgress, postRequestFeedback } =
    useDataContext();
  const [adType, setAdType] = useState(type);
  const [media, setMedia] = useState(null);
  
  const [campaignName, setCampaignName] = useState("");
  const [categories, setCategories] = useState([]);
  const [visitLink, setVisitLink] = useState("");
  const [error, setError] = useState(null);
  const [preview, setPreview] = useState(null);
  const [selectedSize, setSelectedSize] = useState(adSizes[0]);
  const [amountPerDay, setAmountPerDay] = useState(null);
  const [stopAmount, setStopAmount] = useState(null);
  const [caption, setCaption] = useState(null);
  const [showBar, setShowBar] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (adType === "banner" && !file.type.startsWith("image/")) {
        setError("Please upload an image file for banner ads.");
        return;
      }
      if (adType === "video" && !file.type.startsWith("video/")) {
        setError("Please upload a video file for video ads.");
        return;
      }
      setShowBar(true);
      const result = await handleCloudinaryUpload(e, adType);
      if (result) {
        setMedia(result?.url);
      }
      setShowBar(false);
      // setMedia(file)
      // setError(null)
      // setPreview(URL.createObjectURL(file))
    }
  };

  const handleCategoryChange = (category) => {
    setCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (!media) {
      setError("Please upload a media file.");
      return;
    }
    if (categories.length === 0) {
      setError("Please select at least one category.");
      return;
    }
    if (!visitLink) {
      setError("Please enter a visit link.");
      return;
    }
    // Here you would typically send the data to your backend
    const result = await postRequestFeedback(`campaigns`, {
      type: adType === "banner" ? 3 : 1,
      // country_id: selectedCountry?.value,
      // state_id: selectedState?.value,
      // age_group: selectedAge?.value,
      name: campaignName,
      categories: categories,
      campaign_type: "ppv",
      uri: media,
      caption: caption,
      visit_link: visitLink,
      amount_per_day: amountPerDay,
      stop_amount: stopAmount,
      ...(adType === "banner" && { size: selectedSize }),
    });

    if (result.status === "success") {
      toast.success("Ad created successfully")
     navigate('/active-campaigns')
    } else {
      setError(result.message ? result.message : "Unknown Error Occurred");
      toast.error(result.message ? result.message : "Unknown Error Occurred");
    }
    setLoading(false);
    // console.log({
    //   adType,
    //   media,
    //   categories,
    //   visitLink,
    //   ...(adType === "banner" && { bannerSize: selectedSize }),
    // });
    toast.success("Ad created successfully!");
  };

  return (
   <>
   {loading && <Loading/>}
    <Sidebar>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-2xl bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center mb-6">
              Create Your Ad
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Ad Type
                </label>
                <div className="flex space-x-4">
                  {["banner", "video"].map((type) => (
                    <label key={type} className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-blue-600"
                        name="adType"
                        value={type}
                        checked={adType === type}
                        onChange={() => setAdType(type)}
                      />
                      <span className="ml-2 capitalize">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {adType === "banner" && (
                <div className="space-y-2">
                  <label
                    htmlFor="bannerSize"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Banner Size
                  </label>
                  <select
                    id="bannerSize"
                    value={JSON.stringify(selectedSize)}
                    onChange={(e) =>
                      setSelectedSize(JSON.parse(e.target.value))
                    }
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  >
                    {adSizes.map((size) => (
                      <option key={size.name} value={JSON.stringify(size)}>
                        {size.name} ({size.width}x{size.height})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {showBar ? (
                <>
                  <div className="w-full h-[250px] bg-gray-100  px-4 flex justify-center items-center">
                    <div className="w-full">
                      <p className="text-center mb-4">
                        Uploading...{uploadProgress}%
                      </p>
                      <Progressbar value={uploadProgress} />
                    </div>
                  </div>
                </>
              ) : (
                <div className="min-h-[250px] w-full rounded border relative group">
                  {adType === "video" && media ? (
                    <>
                      <div className="w-full h-full relative">
                        <div
                          className="absolute cursor-pointer top-[-10px] right-[-10px] h-7 w-7 flex justify-center items-center z-30 rounded-full bg-red-600"
                          onClick={() => setMedia(null)}
                        >
                          <FaTrashCan size={12} className="text-white" />
                        </div>
                        <Player>
                          <Video
                            version="latest"
                            // config={VideoConfig}
                            // poster="/media/poster.png"
                          >
                            <source
                              data-src={media}
                              type="video/mp4"
                            />
                          </Video>
                          <DefaultUi>
                            {/* We can place our own UI components here to extend the default UI. */}
                            <ClickToPlay />
                            {/* <DefaultControls hideOnMouseLeave activeDuration={2000} /> */}
                          </DefaultUi>
                        </Player>
                      </div>
                    </>
                  ) : null}

                  {adType === "banner" && media ? (
                    <>
                      <div
                        className="absolute cursor-pointer top-[-10px] right-[-10px] h-7 w-7 flex justify-center items-center z-30 rounded-full bg-red-600"
                        onClick={() => setMedia(null)}
                      >
                        <FaTrashCan size={12} className="text-white" />
                      </div>

                      <div className="w-full h-[250px] flex flex-col justify-center items-center">
                        <img src={media} className="w-full h-full object-contain" alt="" />
                        {/* <FaFile className="text-gray-500" size={30} />
                        <p className="text-center text-gray-500">
                          Upload Successful
                        </p> */}
                      </div>
                    </>
                  ) : null}

                  {!media && (
                    <>
                      <label
                        htmlFor="link"
                        className="absolute top-0 left-0 right-0 bottom-0 bg-gray-100 text-gray-500 border-dashed border-2 bg-opacity-30 flex flex-col justify-center items-center"
                      >
                        <BsUpload size={30} />
                        Add File
                      </label>

                      <input
                        type="file"
                        className="p-2 hidden rounded border border-gray-300 w-full"
                        name="link"
                        onChange={handleFileChange}
                        id="link"
                      />
                    </>
                  )}
                </div>
              )}

<div className="space-y-2">
                <label
                  htmlFor="campaignName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Campaign Name
                </label>
                <input
                  id="campaignName"
                  type="text"
                  placeholder="An Exciting Content Material"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Categories (Select all that apply)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {userInterests.map((interest) => (
                    <label key={interest} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-blue-600"
                        checked={categories.includes(interest)}
                        onChange={() => handleCategoryChange(interest)}
                      />
                      <span className="ml-2 text-sm">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="visitLink"
                  className="block text-sm font-medium text-gray-700"
                >
                  Visit Link
                </label>
                <input
                  id="visitLink"
                  type="url"
                  placeholder="https://example.com"
                  value={visitLink}
                  onChange={(e) => setVisitLink(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="caption"
                  className="block text-sm font-medium text-gray-700"
                >
                  Caption
                </label>
                <input
                  id="caption"
                  type="text"
                  placeholder="An Exciting Content Material"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="amountPerDay"
                  className="block text-sm font-medium text-gray-700"
                >
                  Amount Per Day
                </label>
                <input
                  id="amountPerDay"
                  type="number"
                  placeholder="5000"
                  value={amountPerDay}
                  onChange={(e) => setAmountPerDay(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="stopAmount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Stop Amount
                </label>
                <input
                  id="stopAmount"
                  type="number"
                  placeholder="5000"
                  value={stopAmount}
                  onChange={(e) => setStopAmount(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              {error && (
                <div className="rounded-md bg-red-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertCircle
                        className="h-5 w-5 text-red-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">
                        Error
                      </h3>
                      <div className="mt-2 text-sm text-red-700">
                        <p>{error}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Create Ad
              </button>
            </form>
          </div>
        </div>
      </div>
    </Sidebar>
   </>
  );
}
