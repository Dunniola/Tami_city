import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import About from './Pages/About/About';
import AreasOfFocus from './pages/AreasofFocus/SustainableDev';
import AboutTamicity from './pages/About/AboutTamicity';
import EnhancingLivehoods from './pages/AreasofFocus/EnhancingLivehoods';
import NutritionalOutcome from './pages/AreasofFocus/NutritionalOutcome';
import CropInnovation from './pages/AreasofFocus/CropInnovation';
import SustainableDev from './pages/AreasofFocus/SustainableDev';
import AreasOfFocuses from "./pages/AreasofFocus/AreasOfFocuses";
import Coffee from './pages/Products/Coffee';
import PrivacyPolicy from './pages/footer/Privacypolicy';
import TermsOfService from './pages/footer/TermsOfService';
import Disclaimer from './pages/footer/Disclaimer';
import Discover from './components/General/Discover';

// Lazy load the components
const Layout = lazy(() => import("./components/General/Layout"));
const Home = lazy(() => import('./Pages/Home/Home'));
const Login = lazy(() => import("./Pages/Auth/Login"));
const Register = lazy(() => import("./Pages/Auth/Register"));
const Blog = lazy(() => import("./Pages/Products/Blog"));
const Products = lazy(() => import("./Pages/Products/Products"));
const ExportProcess = lazy(() => import("./Pages/ExportProcess/ExportProcess"));
const OrderHistory = lazy(() => import("./Pages/OrderHistory/OrderHistory"));
const Trade = lazy(() => import("./Pages/Trade/Trade"));
const GetQuote = lazy(() => import("./Pages/GetQuote/GetQuote"));
const ProductDetailPage = lazy(() => import("./Pages/ProductDetailPage/ProductDetailPage"));
const TrackOrder = lazy(() => import("./Pages/TrackOrder/TrackOrder"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Resources = lazy(() => import("./Pages/Resources/Resources"));
const OurStory = lazy(() => import("./Pages/About/OurStory"));
const Team = lazy(() => import("./Pages/About/Team"));
const Sustainability = lazy(() => import("./Pages/About/Sustainability"));


const Cashew = lazy(() => import("./Pages/Products/Cashew"));

const Cocoa = lazy(() => import("./Pages/Products/Cocoa"));

const Cassava = lazy(() => import("./Pages/Products/Cassava"));

const ProductSustainability = lazy(() => import("./pages/Products/ProductSustainability"));
const RiskManagement = lazy(() => import("./Pages/Products/RiskManagement"));

const ProductDetailsPage = lazy(() => import("./Pages/Products/ProductDetailsPage"));
const ProductQuote = lazy(() => import("./Pages/Products/ProductQuote"));
const Documentation = lazy(() => import("./Pages/ExportProcess/Documentation"));
const Shipping = lazy(() => import("./Pages/ExportProcess/Shipping"));
const HowitWorks = lazy(() => import("./Pages/ExportProcess/HowitWorks"));
const FAQs = lazy(() => import("./Pages/Resources/FAQs"));
const Blogs = lazy(() => import("./Pages/Resources/Blogs"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        {/* Default route for Home */}
        <Route index element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />

        {/* About page */}
        <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
        <Route path="/about-tamicity/" element={<Suspense fallback={<div>Loading...</div>}><AboutTamicity /></Suspense>} />
        <Route path="/about/team" element={<Suspense fallback={<div>Loading...</div>}><Team /></Suspense>} />
        <Route path="/about/our-story" element={<Suspense fallback={<div>Loading...</div>}><OurStory /></Suspense>} />
        <Route path="/about/sustainability" element={<Suspense fallback={<div>Loading...</div>}><Sustainability/></Suspense>} />
        <Route path="/about/areas-of-focus" element={<Suspense fallback={<div>Loading...</div>}><AreasOfFocuses /></Suspense>} />


        <Route path="/sustainability-development" element={<Suspense fallback={<div>Loading...</div>}><SustainableDev /></Suspense>} />

        
        <Route path="/enhancing-livehoods" element={<Suspense fallback={<div>Loading...</div>}><EnhancingLivehoods /></Suspense>} />
        <Route path="/nutritional-outcome" element={<Suspense fallback={<div>Loading...</div>}><NutritionalOutcome /></Suspense>} />
        <Route path="/crop-innovation" element={<Suspense fallback={<div>Loading...</div>}><CropInnovation /></Suspense>} />
        

        {/* Auth page */}
        <Route path="/login" element={<Suspense fallback={<div>Loading...</div>}><Login /></Suspense>} />
        <Route path="/register" element={<Suspense fallback={<div>Loading...</div>}><Register /></Suspense>} />

        {/* Products page */}
        <Route path="/products" element={<Suspense fallback={<div>Loading...</div>}><Products /></Suspense>} />
       
        <Route path="/products/details" element={<Suspense fallback={<div>Loading...</div>}><ProductDetailsPage /></Suspense>} />
        <Route path="/products/quote" element={<Suspense fallback={<div>Loading...</div>}><ProductQuote /></Suspense>} />
        

        {/* product list */}
        <Route path="/products/cocoa" element={<Suspense fallback={<div>Loading...</div>}><Cocoa /></Suspense>} />
        <Route path="/products/cashew" element={<Suspense fallback={<div>Loading...</div>}><Cashew /></Suspense>} />
        <Route path="/products/cassava" element={<Suspense fallback={<div>Loading...</div>}><Cassava /></Suspense>} />
        <Route path="/products/coffee" element={<Suspense fallback={<div>Loading...</div>}><Coffee /></Suspense>} />
        <Route path="/products/sustainability" element={<Suspense fallback={<div>Loading...</div>}><ProductSustainability /></Suspense>} />
        <Route path="/products/risk-management" element={<Suspense fallback={<div>Loading...</div>}><RiskManagement /></Suspense>} />
        
        

        {/* Export page */}
        <Route path="/export-process" element={<Suspense fallback={<div>Loading...</div>}><ExportProcess /></Suspense>} />
        <Route path="/export-process/how-it-works" element={<Suspense fallback={<div>Loading...</div>}><HowitWorks /></Suspense>} />
        <Route path="/export-process/shipping" element={<Suspense fallback={<div>Loading...</div>}><Shipping /></Suspense>} />
        <Route path="/export-process/documentation" element={<Suspense fallback={<div>Loading...</div>}><Documentation /></Suspense>} />

        {/* Contact page */}
        <Route path="/contact" element={<Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>} />

        {/* Resources Page */}
        <Route path="/resources" element={<Suspense fallback={<div>Loading...</div>}><Resources /></Suspense>} />
        <Route path="/resources/blog" element={<Suspense fallback={<div>Loading...</div>}><Blogs /></Suspense>} />
        <Route path="/resources/FAQs" element={<Suspense fallback={<div>Loading...</div>}><FAQs /></Suspense>} />
        <Route path="/privacy-policy" element={<Suspense fallback={<div>Loading...</div>}><PrivacyPolicy/></Suspense>} />
        <Route path="/disclaimer" element={<Suspense fallback={<div>Loading...</div>}><Disclaimer/></Suspense>} />
        <Route path="/terms" element={<Suspense fallback={<div>Loading...</div>}><TermsOfService/></Suspense>} />


        <Route path="/discover" element={<Discover />} />

      </Route>
    ),
    { basename: '/Tami_city/' } // This is the correct place for basename
  );

  return <Suspense fallback={<div>Loading...</div>}><RouterProvider router={router} /></Suspense>;
}

export default App;
