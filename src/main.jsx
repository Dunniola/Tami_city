import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import { DataProvider } from "./context/DataContext";
import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <Toaster />
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>
);
