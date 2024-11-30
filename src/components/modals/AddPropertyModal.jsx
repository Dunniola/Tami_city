import React, { useEffect, useState } from "react";
import SammyModal from "../General/SammyModal";
import toast from "react-hot-toast";
import Button from "../General/Button";
import { useDataContext } from "../../context/DataContext";
import { MdOutlineCameraAlt } from "react-icons/md";

const initialForm = {
  name: "",
  image: "",
  price: 0,
  rent_or_buy: "",
  property_type: "",
  state_id: null,
  lga_id: null,
  address: "",
};

const AddPropertyModal = ({
  isOpen,
  onClose,
  selectedProperty,
  handleUpdateSchools,
}) => {
  const { postRequest, getRequest, handleFileUpload, handleRefetchHelp } =
    useDataContext();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);
  const { VITE_FULL_URL, VITE_IMAGE_URL } = import.meta.env;

  useEffect(() => {
    console.log(form);
  }, [form]);

  useEffect(() => {
    if (selectedProperty) {
      setForm({
        id: selectedProperty?.id,
        name: selectedProperty?.name,
        address: selectedProperty?.address,
        image: selectedProperty?.image,
        price: selectedProperty?.price,
        rent_or_buy: selectedProperty?.rent_or_buy,
        property_type: selectedProperty?.property_type,
        state_id: selectedProperty?.state_id,
        lga_id: selectedProperty?.lga_id,
      });
    } else {
      setForm(initialForm);
    }
  }, [selectedProperty]);

  const handleInputChange = async (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const imageName = await handleFileUpload(e);
      return setForm({ ...form, [name]: imageName });
    }
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    let isValid = true;
    setErrors(false);

    if (form.name === "") {
      isValid = false;
      setErrors(true);
    }
    if (form.image === "") {
      isValid = false;
      setErrors(true);
    }
    if (form.price < 10) {
      isValid = false;
      setErrors(true);
    }
    if (form.rent_or_buy === "") {
      isValid = false;
      setErrors(true);
    }
    if (form.property_type === "") {
      isValid = false;
      setErrors(true);
    }
    if (form.address === "") {
      isValid = false;
      setErrors(true);
    }

    if (form.state_id === null) {
      isValid = false;
      setErrors(true);
    }
    if (form.lga_id === null) {
      isValid = false;
      setErrors(true);
    }

    return isValid;
  };

  //getting data for the select boxes
  const [stateList, setStateList] = useState(null);
  const [lgaHolder, setLgaHolder] = useState(null);
  const [lgaList, setLgaList] = useState(null);
  useEffect(() => {
    const getStatesLga = async () => {
      const result = await getRequest("client/state-and-lga");
      if (result) {
        setStateList(result.states);
        setLgaHolder(result.lga);
      }
    };

    getStatesLga();
  }, []);

  useEffect(() => {
    if (form.state_id != "") {
      const selectedLga = lgaHolder?.filter((i) => {
        return i.state_id == form.state_id;
      });
      setLgaList(selectedLga);
    }
  }, [form.state_id]);

  const handleSubmit = async () => {
    const isFilled = validate();
    if (!isFilled) {
      return toast.error("Please fill all fields");
    }
    setLoading(true);

    const result = await postRequest(`update-or-create-listings`, form);

    if (result.status === "success") {
      toast.success("Success");
      setForm(initialForm);
      handleRefetchHelp();
      onClose();
    } else {
      toast.error("An error occurred, please try again");
    }
    setLoading(false);
  };
  return (
    <>
      <SammyModal
        clickBackgroundToClose={true}
        isOpen={isOpen}
        onClose={onClose}
        modalClass={"lg:w-[800px] w-screen"}
      >
        <div className="">
          <div className="px-6">
            <h2 className="font-extrabold text-lg mb-2">
              {selectedProperty ? (
                <>Edit Property Information</>
              ) : (
                <>Property Registration</>
              )}
            </h2>
            <p className="mb-2 text-sm text-gray-400">Fill in property info</p>
          </div>
          <div className="max-h-[70vh] px-6 overflow-y-scroll border-t">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-10">
              <div className="mb-3">
                <p className="text-gray-600 mb-2 text-sm">Name</p>
                <input
                  name="name"
                  onChange={handleInputChange}
                  value={form.name}
                  type="text"
                  className="border border-gray-300 rounded py-2 px-2 w-full"
                />
                {errors && form.name === "" ? (
                  <p className="text-sm text-red-600">Name is required</p>
                ) : null}
              </div>
              <div className="mb-3">
                <p className="text-gray-600 mb-2 text-sm">Image</p>
                <div className="h-[150px] w-full rounded border relative group">
                  <img
                    src={
                      form.image
                        ? `${VITE_FULL_URL}/${VITE_IMAGE_URL}/${form.image}`
                        : "/placeholder-img.webp"
                    }
                    className="h-full w-full object-cover"
                    alt=""
                  />
                  <label
                    htmlFor="image"
                    className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 group-hover:flex group-hover:flex-col justify-center items-center text-white  hidden"
                  >
                    <MdOutlineCameraAlt />
                    Add image
                  </label>

                  <input
                    type="file"
                    className="p-2 hidden rounded border border-gray-300 w-full"
                    name="image"
                    onChange={handleInputChange}
                    id="image"
                  />
                </div>
                {errors && form.image === "" ? (
                  <p className="text-sm text-red-600">Image is required</p>
                ) : null}
              </div>
              <div className="mb-3">
                <p className="text-gray-600 mb-2 text-sm">Rent or Buy</p>

                <select
                  name="rent_or_buy"
                  onChange={handleInputChange}
                  value={form.rent_or_buy}
                  className="border border-gray-300 rounded py-2 px-2 w-full"
                >
                  <option value="">select option</option>
                  <option value="rent">Rent</option>
                  <option value="buy">Buy</option>
                </select>
                {errors && form.rent_or_buy === "" ? (
                  <p className="text-sm text-red-600">
                    Rent or Buy is required
                  </p>
                ) : null}
              </div>
              <div className="mb-3">
                <p className="text-gray-600 mb-2 text-sm">Property Type</p>
              
                <select
                  name="property_type"
                  onChange={handleInputChange}
                  value={form.property_type}
                  className="border border-gray-300 rounded py-2 px-2 w-full"
                >
                  <option value="">select option</option>
                  <option value="house">House</option>
                  <option value="room">Room</option>
                </select>
                {errors && form.property_type === "" ? (
                  <p className="text-sm text-red-600">
                    Property Type is required
                  </p>
                ) : null}
              </div>
              <div className="mb-3">
                <p className="text-gray-600 mb-2 text-sm">Price</p>
                <input
                  name="price"
                  onChange={handleInputChange}
                  value={form.price}
                  type="number"
                  className="border border-gray-300 rounded py-2 px-2 w-full"
                />
                {errors && form.price === "" ? (
                  <p className="text-sm text-red-600">Price is required</p>
                ) : null}
              </div>
              <div className="mb-3">
                <p className="text-gray-600 mb-2 text-sm">Address</p>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded py-2 px-2 w-full"
                />
                {errors && form.address === "" ? (
                  <p className="text-sm text-red-600">Address is required</p>
                ) : null}
              </div>

              <div className="mb-3">
                <p className="text-gray-600 mb-2 text-sm">State</p>

                <select
                  className="border border-gray-300 rounded py-2 px-2 w-full"
                  placeholder="Select State"
                  name="state_id"
                  value={form.state_id}
                  onChange={handleInputChange}
                >
                  <option value={null}>Select State</option>
                  {stateList &&
                    stateList.map((i) => (
                      <option value={i.id}>{i.name}</option>
                    ))}
                </select>
                {errors && form.state_id === "" ? (
                  <p className="text-sm text-red-600">State is required</p>
                ) : null}
              </div>

              <div className="mb-3">
                <p className="text-gray-600 mb-2 text-sm">Lga</p>
                <select
                  className="border border-gray-300 rounded py-2 px-2 w-full"
                  value={form.lga_id}
                  name="lga_id"
                  onChange={handleInputChange}
                >
                  {lgaList ? (
                    <option value={null} selected>
                      Select Lga
                    </option>
                  ) : (
                    <option value={null} selected>
                      Select State First
                    </option>
                  )}
                  {lgaList &&
                    lgaList.map((i) => <option value={i.id}>{i.name}</option>)}
                </select>
                {errors && form.lga_id === "" ? (
                  <p className="text-sm text-red-600">Lga is required</p>
                ) : null}
              </div>
            </div>
          </div>

          <div className="w-full flex justify-end">
            <div className="w-[100px] flex  pt-3 mx-6">
              <Button
                text={"Save"}
                isLoading={loading}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </SammyModal>
    </>
  );
};

export default AddPropertyModal;
