import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, Route, createBrowserRouter } from "react-router";
import { createRoutesFromElements } from "react-router";
import Home from "./Component/Home/Home.jsx";
import Login from "./Component/Login/Login.jsx";
import Signup from "./Component/Signup/Signup.jsx";
import Houses from "./Component/Houses/Houses.jsx";
import Listing from "./Component/Listing/Listing.jsx";
import Contact from "./Component/Contactus/Contact.jsx";
import Usercontext from "./Context/Usercontext.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="signup" element={<Signup />}></Route>
      <Route path="houses" element={<Houses />}></Route>
      <Route path="listing" element={<Listing />}></Route>
      <Route path="contact" element={<Contact />}></Route>
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Usercontext>
      <RouterProvider router={router} />
    </Usercontext>
    
  </StrictMode>
);
