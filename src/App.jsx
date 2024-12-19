import "./App.css";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Loading from "./components/General/Loading";
import Home from "./pages/Home/Home";
import AllListings from "./pages/Dashboard/AllListings";
import PrivateRoutes from "./utils/PrivateRoutes";
import Login from "./pages/Auth/Login";
import Contact from "./pages/Contact/Contact";
import Discover from "./pages/Discover/Discover";
import About from "./pages/About/About";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Layout from "./components/General/Layout";
import Privacy from "./pages/Privacy/Privacy";
// import PrivateRoutes from "./utils/PrivateRoutes";
import Register from "./pages/Auth/Register";
import EmailSent from "./pages/Auth/EmailSent";
import VerifyEmail from "./pages/Auth/VerifyEmail";
import Dashboard from "./components/Dashboard";
import Advertise from "./pages/Advertise/Advertise";
import BulkEmails from "./pages/BulkEmails/BulkEmails";
import Lists from "./pages/Lists/Lists";
import Wallet from "./pages/Wallet/Wallet";
import ListTypes from "./pages/Lists/ListTypes";
import CreateList from "./pages/Lists/CreateList";
import SendBulkMail from "./pages/SendBulkMail/SendBulkMail";
import Profile from "./pages/Profile/Profile";
import Market from "./pages/Market/Market";
import BulkEmailDetails from "./pages/BulkEmails/BulkEmailDetails";
import PublisherCodes from "./pages/PublisherCodes/PublisherCodes";
import BannerAndVideo from "./pages/BannerAndVideo/BannerAndVideo";
import ActiveCampaigns from "./pages/ActiveCampaigns/ActiveCampaigns";
import StepOne from "./pages/SchoolInfo/StepOne";
import StepTwo from "./pages/ContactDetails/StepTwo";
import StepThree from "./pages/PrimaryContact/StepThree";
import StepFour from "./pages/SchoolCode/StepFour";
import Summary from "./pages/Summary/Summary";
import SuccessMessage from "./pages/SuccessMessage/SuccessMessage";
import { FormProvider } from "./context/FormContext";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout/>}>
        {/**Public Routes */}
        <Route index element={<Home />} />
        <Route path='/school-info' element ={<StepOne/>}/>
        <Route path='/contact-info' element ={<StepTwo/>}/>
        <Route path='/primary-contact' element ={<StepThree/>}/>
        <Route path='/school-code' element ={<StepFour/>}/>
        <Route path='/summary' element ={<Summary/>}/>
        <Route path='/success' element ={<SuccessMessage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/email-verification" element={<EmailSent />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/" element={<BlogDetails />} />
        <Route path="/" element ={<StepOne/>}/>
        
        

        {/*Protected Routes */}
        

        {/* <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/advertise/bulk-emails" element={<BulkEmails />} />
        <Route path="/advertise/bulk-emails/:id" element={<BulkEmailDetails />} />
        <Route path="/advertise/create-bulk-email" element={<SendBulkMail />} />
        <Route path="/advertise/banners" element={<BannerAndVideo type={"banner"} />} />
        <Route path="/advertise/video" element={<BannerAndVideo type={"video"} />} />
        <Route path="/all-lists" element={<Lists />} />
        <Route path="/all-lists/create-list" element={<ListTypes />} />
        <Route path="/all-lists/create-email-list" element={<CreateList listType="email" />} />
        <Route path="/all-lists/create-phone-list" element={<CreateList listType="phone" />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/marketplace" element={<Market />} />
        <Route path="/active-campaigns" element={<ActiveCampaigns />} /> */}


        {/* publisher routes */}
        {/* <Route path="/website-integration" element={<PublisherCodes />} /> */}
        {/* </Route> */}


       
      </Route>
    ),
    { basename: "/" }
  );
  return (
    <>
      {/* <Suspense fallback={<Loading />}> */}
      <FormProvider>
      <RouterProvider router={router} />
      {/* </Suspense> */}
      </FormProvider>
        
    </>
  );
}

export default App;
