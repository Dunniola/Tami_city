import React from "react";
import { useState, useCallback } from "react";
import CopyTextButton from "../../General/CopyTextButton";
import {
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import { useDropzone } from "react-dropzone";
import { MdCancel } from "react-icons/md";

import { BsCheckCircleFill } from "react-icons/bs";
import { useDataContext } from "../../../context/DataContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
import CurrencyInput from "react-currency-input-field";

const TajiComponent = ({ activeTab, onClose }) => {
  const { postRequest, handleRefetchHelp } = useDataContext();
  const [deposit, setDeposit] = useState(null);
  const navigate = useNavigate();

  //uploading proof of payment
  //form data
  const [images, setImages] = useState([]);

  //image upload logic
  const onDrop = useCallback((acceptedFiles) => {
    // do something with the accepted files

    setImages([...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 1000000,
    multiple: false,
  });

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const validate = () => {
    if (images.length < 1 && deposit != null) {
      return false;
    } else {
      return true;
    }
  };

  const handleClick = async () => {
    const isFilled = validate();
    if (!isFilled) {
      return toast.success("Please Upload Proof of payment");
    }
    toast.loading("processing request...");
    var formdata = new FormData();

    formdata.append("proof_of_payment", images[0]);
    formdata.append("deposit", deposit);

    // formdata.append("status", status);

    const result = await postRequest("client/manual-taji-payment", formdata);

    if (result) {
      toast.dismiss();
      toast.success("request sent successfully");
      navigate(`/wallet?activeTab=pending_taji_transactions`);
      handleRefetchHelp();
      onClose();
    } else {
      toast.dismiss();
      toast.error("request failed");
    }
  };
  if (activeTab === "tajiri")
    return (
    
        <div>
          <p className="text-gray-700 font-semibold">
            Send{" "}
            <span className="text-white bg-green-600 rounded pt-1 px-1 mr-1">
              TAJI
            </span>
            to the wallet blow and upload payment proof. once we confirm, we
            will credit your wallet
          </p>
          <div className="px-3 text-gray-700 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <input
                type="text"
                name="query"
                value={import.meta.env.VITE_TAJI_ADDRESS}
                readOnly={true}
                className=" rounded px-4 py-2 w-full bg-slate-100"
              />
              <CopyTextButton text={import.meta.env.VITE_TAJI_ADDRESS} />
            </div>
            <FormControl id="amount">
              <FormLabel>Amount Sent</FormLabel>
              <CurrencyInput
                prefix={`TAJI${" "}`}
                id="input-example"
                name="input-name"
                className="bg-gray-50 p-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                placeholder="Please enter a number"
                defaultValue={deposit}
                value={deposit}
                decimalsLimit={2}
                onValueChange={(value, name) => setDeposit(value)}
              />
            </FormControl>

            <FormControl id="">
              <FormLabel>
                Upload proof of payment{" "}
                <span className="text-red-400">(Max Size: 1mb )</span>
              </FormLabel>
              <div className="dropzone-container bg-slate-100 border-2 py-4 border-dotted">
                <input {...getInputProps()} />
                <div className="flex justify-center">
                  <div
                    {...getRootProps()}
                    className="bg-primary px-6 py-2 rounded-lg text-white"
                  >
                    Upload
                  </div>
                </div>
                {/* <div className="absolute top-0 left-0 right-0 bg-red-700 z-50 w-full h-full" {...getInputProps()} >
                        helkrnrn
                      </div> */}

                {isDragActive ? (
                  <h4 className="font-bold">Drop the images here ...</h4>
                ) : (
                  <p {...getRootProps()} className="text-center pt-3">
                    Drag and drop or click the button to upload
                  </p>
                )}
                <div className="flex justify-center">
                  {images.map((image, index) => (
                    <div
                      style={{
                        marginRight: "10px",
                        marginBottom: "10px",
                      }}
                      className="col-3"
                    >
                      <img
                        key={image.name}
                        src={URL.createObjectURL(image)}
                        alt={image.name}
                        style={{
                          width: "300px",
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                      <MdCancel
                        color="red"
                        size={28}
                        onClick={() => removeImage(index)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </FormControl>
          </div>

          <div className="flex justify-center items-center mt-8">
            <button
              className="text-white bg-primary px-4 py-2 rounded-lg flex items-center gap-2 hover:translate-y-1 transition-all duration-300"
              onClick={handleClick}
            >
              i have paid{" "}
              <BsCheckCircleFill color="white" size={16} className="" />
            </button>
          </div>
        </div>
      
    );
};

export default TajiComponent;
