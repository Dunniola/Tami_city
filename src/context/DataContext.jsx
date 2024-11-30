import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useAuthContext } from "./AuthContext";
import { toast } from "react-hot-toast";

const DataContext = createContext();

export default DataContext;

export const DataProvider = ({ children }) => {
  //states i want to keep
  const { token, shouldKick } = useAuthContext();
  const [cachedRoute, setCachedRoute] = useState("");
  const [refetchHelp, setRefetchHelp] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleRefetchHelp = () => {
    setRefetchHelp(!refetchHelp);
  }

  const [globalSwitch, setGlobalSwitch] = useState(false);

  const handleGlobalSwitch = (bool) => {
    setGlobalSwitch(bool);
  }

  const handleCachedRoute = (route) => {
    setCachedRoute(route);
  };

  const handleFileUpload = async (e) => {
    let imgObj = e.target.files[0];
    if (imgObj.size > 1100000) {
      return toast.error("Maximum file size is 1mb");
    }
    const formdata = new FormData();
    formdata.append("image", imgObj);
    toast.loading("uploading image...");
    const result = await postRequest("public-img-upload", formdata);
    if (result.status === "success") {
      toast.dismiss();
      toast.success("upload successful");
      return result.imageName;
    } else {
      toast.dismiss();
      toast.error("upload failed");
      return false;
    }
  };

  const handleCloudinaryUpload = async (e, type) => {
    setUploadProgress(0);
    try {
      
      const file = e.target.files[0];
      if (file.size > 99000000) {
        return toast.error("Maximum file size is 99MB");
      }
      const formdata = new FormData();
      formdata.append("file", file);
      formdata.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);
      formdata.append("upload_preset", "neovarsity");
      const config = {
        onUploadProgress: (e) => {
          const { loaded, total } = e;
          setUploadProgress(Math.round((loaded / total) * 100));  
        },
      };
  
      let url;
      if (type == "video") {
        url = `${import.meta.env.VITE_CLOUDINARY_URL}/video/upload`;
      } else {
        url = `${import.meta.env.VITE_CLOUDINARY_URL}/raw/upload`;
      }
      toast.loading("uploading file...");
      const { data } = await axios.post(url, formdata, config);
      console.log(data);
      toast.dismiss();
      toast.success("Upload completed successfully");
      return data;
    } catch (e) {
      return false;
    }
  };

  const deleteRequest = (route, id) => {
    const url = `${import.meta.env.VITE_SERVER_URL}/${route}/${id}`;
    return axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        import.meta.env.VITE_WORK_ENV == 'development' && console.log(response.data);
        return true;
      })
      .catch((err) => {
        shouldKick(err);
        return false;
      });
  };

  const getRequest = (route) => {
    const url = `${import.meta.env.VITE_SERVER_URL}/${route}`;
    return axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        import.meta.env.VITE_WORK_ENV == 'development' && console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        shouldKick(err);
        return false;
      });
  };

  const showRequest = (route, id) => {
    const url = `${import.meta.env.VITE_SERVER_URL}/${route}/${id}`;
    return axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        import.meta.env.VITE_WORK_ENV == 'development' && console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        shouldKick(err);
        return false;
      });
  };

  const postRequest = (route, data) => {
    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_SERVER_URL}/${route}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    return axios(config)
      .then(function (response) {
        import.meta.env.VITE_WORK_ENV == 'development' && console.log(response.data);
        return response.data;
      })
      .catch(function (e) {
        console.log(e.response.data.message);
        shouldKick(e);
        return false;
      });
  };

  const postRequestFeedback = (route, data) => {
    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_SERVER_URL}/${route}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    return axios(config)
      .then(function (response) {
        import.meta.env.VITE_WORK_ENV == 'development' && console.log(response.data);
        return response.data;
      })
      .catch(function (e) {
        import.meta.env.VITE_WORK_ENV == 'development' && console.log(e.response.data.message);
        shouldKick(e);
        return e.response.data;
      });
  };

  let contextData = {
    deleteRequest,
    getRequest,
    postRequest,
    postRequestFeedback,
    showRequest,
    cachedRoute,
    handleCachedRoute,
    refetchHelp,
    handleRefetchHelp,
    globalSwitch,
    handleGlobalSwitch,
    handleFileUpload,
    uploadProgress,
    handleCloudinaryUpload,
  
  };

  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
