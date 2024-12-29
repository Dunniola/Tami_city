import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/General/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Blog from "./Pages/Products/Blog";
import Products from "./Pages/Products/Products";
import ExportProcess from "./Pages/ExportProcess/ExportProcess";
import OrderHistory from "./Pages/OrderHistory/OrderHistory";
import Trade from "./Pages/Trade/Trade";
import GetQuote from "./Pages/GetQuote/GetQuote";
import ProductDetailPage from "./Pages/ProductDetailPage/ProductDetailPage";

import TrackOrder from "./Pages/TrackOrder/TrackOrder";
import { ChakraProvider } from "@chakra-ui/react";
import Contact from "./Pages/Contact/Contact";
import Resources from "./Pages/Resources/Resources";
import OurStory from "./Pages/About/OurStory";
import Team from "./Pages/About/Team";
import Sustainability from "./Pages/About/Sustainability";
import Categories from "./Pages/Products/Categories";
import ProductDetailsPage from "./Pages/Products/ProductDetailsPage";
import ProductQuote from "./Pages/Products/ProductQuote";
import Documentation from "./Pages/ExportProcess/Documentation";
import Shipping from "./Pages/ExportProcess/Shipping";
import HowitWorks from "./Pages/ExportProcess/HowitWorks";
import FAQs from "./Pages/Resources/FAQs";
import Blogs from "./Pages/Resources/Blogs";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        {/* Default route for Home */}
        <Route index element={<Home />} />

        {/* about page  */}
        <Route path="/about" element={<About />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/our-story" element={<OurStory />} />
        <Route path="/about/sustainability" element={<Sustainability />} />

        {/* Auth page */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* products page */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/categories" element={<Categories />} />
        <Route path="/products/details" element={<ProductDetailsPage />} />
        <Route path="/products/quote" element={<ProductQuote />} />

        {/* Export page */}
        <Route path="/export-process" element={<ExportProcess />} />
        <Route path="/export-process/how-it-works" element={<HowitWorks />} />
        <Route path="/export-process/shipping" element={<Shipping />} />
        <Route
          path="/export-process/documentation"
          element={<Documentation />}
        />

        {/*Contact page */}
        <Route path="/contact" element={<Contact />} />

        {/*Resources Page  */}
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/blog" element={<Blogs />} />
        <Route path="/resources/FAQs" element={<FAQs />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
