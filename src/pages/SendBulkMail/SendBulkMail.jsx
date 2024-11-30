import { useState, ChangeEvent } from "react";
import { Upload, Search, ChevronDown, X } from "lucide-react";
import Sidebar from "../../components/General/Sidebar";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDataContext } from "../../context/DataContext";
import Loading from "../../components/General/Loading";
import { useNavigate } from "react-router-dom";

// const emailLists = [
//   { id: 1, name: "Newsletter Subscribers" },
//   { id: 2, name: "Product Updates" },
//   { id: 3, name: "Abandoned Cart" },
//   { id: 4, name: "Welcome Series" },
//   { id: 5, name: "Re-engagement" },
// ];

const emailTemplates = [
  {
    id: 1,
    name: "Welcome Email",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Product Announcement",
    image: "/placeholder.svg?height=200&width=300",
  },
  { id: 3, name: "Newsletter", image: "/placeholder.svg?height=200&width=300" },
  {
    id: 4,
    name: "Promotional Offer",
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function SendBulkMail() {
  const [logo, setLogo] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [selectedList, setSelectedList] = useState("");
  const [subject, setSubject] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isListDropdownOpen, setIsListDropdownOpen] = useState(false);
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  const [emailLists, setEmailLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getRequest, postRequest } = useDataContext();
  const navigate = useNavigate();

  const getEmailList = async() => {
    const result = await getRequest(`email-lists`);
    if (result.status === 'success') {
      setEmailLists(result.data);
    }
  }

  const handleLogoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setLogo(e.target.files[0]);
    }
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    const result = await postRequest(`email-lists/${selectedList}/send-bulk-emails`, {
      subject: subject,
      message: messageBody
    })
    if (result.status === 'success') {
      toast.success(result.message);
      navigate("/advertise/bulk-emails");
    }else{
      toast.error("Failed to send bulk emails");
    }
    setLoading(false);
   
  };

  useEffect(() => {
   getEmailList();
  }, [])
  

  return (
    <>
    {loading && <Loading/>}
      <Sidebar>
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <h1 className="text-4xl font-bold mb-12 text-center">
            Send Bulk Message
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Logo Upload */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <label
                  htmlFor="logo"
                  className="block text-lg font-medium text-gray-700 mb-4"
                >
                  Upload Logo
                </label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="logo"
                    className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition duration-300 ease-in-out"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-10 h-10 mb-3 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id="logo"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleLogoChange}
                    />
                  </label>
                </div>
                {logo && (
                  <p className="mt-4 text-sm text-gray-600">
                    Selected file: {logo.name}
                  </p>
                )}
              </div>

              {/* Email Template Selection */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <label className="block text-lg font-medium text-gray-700 mb-4">
                  Select Email Template
                </label>
                <button
                  type="button"
                  onClick={() => setIsTemplateModalOpen(true)}
                  className="w-full px-4 py-3 text-left text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                >
                  {selectedTemplate ? selectedTemplate : "Choose a template"}
                </button>
              </div>

              {/* Email List Selection */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <label
                  htmlFor="emailList"
                  className="block text-lg font-medium text-gray-700 mb-4"
                >
                  Select Email List
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="emailList"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setIsListDropdownOpen(true)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
                    placeholder="Search email lists..."
                  />
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  {isListDropdownOpen && (
                    <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                      {emailLists?.map((list) => (
                        <li
                          key={list.id}
                          className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out"
                          onClick={() => {
                            setSelectedList(list.id);
                            setSearchTerm(list.list_name);
                            setIsListDropdownOpen(false);
                          }}
                        >
                          {list.list_name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <label
                  htmlFor="subject"
                  className="block text-lg font-medium text-gray-700 mb-4"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
                  placeholder="Enter email subject"
                />
              </div>
            </div>

            {/* Message Body */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <label
                htmlFor="messageBody"
                className="block text-lg font-medium text-gray-700 mb-4"
              >
                Message Body
              </label>
              <textarea
                id="messageBody"
                value={messageBody}
                onChange={(e) => setMessageBody(e.target.value)}
                rows={8}
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
                placeholder="Compose your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-4 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 ease-in-out"
            >
              Send Bulk Message
            </button>
          </form>

          {/* Email Template Modal */}
          {isTemplateModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Select Email Template</h2>
                  <button
                    onClick={() => setIsTemplateModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {emailTemplates.map((template) => (
                    <div
                      key={template.id}
                      className="border rounded-lg p-4 cursor-pointer hover:border-blue-500 transition duration-300 ease-in-out"
                      onClick={() => {
                        setSelectedTemplate(template.name);
                        setIsTemplateModalOpen(false);
                      }}
                    >
                      <img
                        src={template.image}
                        alt={template.name}
                        className="w-full h-40 object-cover rounded-md mb-4"
                      />
                      <p className="text-center font-medium">{template.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </Sidebar>
    </>
  );
}
