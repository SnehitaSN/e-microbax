import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { RiMapPinUserLine } from "react-icons/ri";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
// import { MdOutlineFactory } from "react-icons/md";
import { FaFax } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
// import { RiInformation2Fill } from "react-icons/ri";
import { GiGears } from "react-icons/gi";
import { FaServicestack } from "react-icons/fa6";
import { GrCatalog } from "react-icons/gr";
// import { FaGraduationCap } from "react-icons/fa";
import { AiTwotonePicture } from "react-icons/ai";
import { MdOutlineContactPhone } from "react-icons/md";
// import { TbHelpTriangleFilled } from "react-icons/tb";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import microbax_name from "../../assets/images/microbax_name.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const products = [
    "All Products",
    "Human Health Care",
    "Agriculture",
    "Animal Health care",
    "Bioremediation",
    "Aquaculture",
    "Vector Control",
  ];

  const handleProductSelect = (product) => {
    console.log(selectedProduct);
    setSelectedProduct(product);
    setShowProductsMenu(false);
  };

  return (
    <div>
      <div className="bg-white sticky top-0 z-50  ">
        {/* desktop  */}
        <header className="relative bg-white">
          {/* header content */}
          <div className="mt-1">
            <p className="flex h-10 items-center justify-center px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
              <div className="flex items-center mr-4">
                <FaPhone className="text-gray-700 text-xl mr-2 w-6 h-6 cursor-pointer" />
                <span className="text-blue-700 text-lg font-sans">
                  <span className="text-gray-700 text-xl myText cursor-pointer">
                    Call:
                  </span>{" "}
                  +91-40-66360055, 66360056
                </span>
              </div>
              {/* Email */}
              <div className="flex items-center">
                <FaEnvelope className="text-gray-700 text-xl mr-2" />
                <a
                  href="mailto:example@example.com"
                  className="text-blue-700 text-lg font-sans "
                >
                  <span className="text-gray-700 myText text-xl">Email:</span>{" "}
                  sales@microbax.com 
                  
                </a>
              </div>
            </p>

            <div className="mt-1">
              <div className="">
                <h1 className="text-orange-700 font-semibold myText text-center text-md animate-pulse">
                  In-house R&D facility Recognised by Department of Scientific &
                  Industrial Research.Govt.of.India.
                </h1>
              </div>
            </div>

            {/* Media Queries */}
            <style jsx>{`
              @media only screen and (max-width: 639px) {
                /* Small mobile devices */
                .mt-1 {
                  margin-top: 0.5rem;
                }
                .h-10 {
                  height: auto; /* Adjust height for smaller screens */
                  line-height: 1.5; /* Center text vertically */
                }
                .text-sm {
                  font-size: 0.75rem; /* Decrease font size for smaller screens */
                }
                .text-lg {
                  font-size: 0.875rem; /* Decrease font size for smaller screens */
                }
                .text-xl {
                  font-size: 1rem; /* Decrease font size for smaller screens */
                }
                .text-md {
                  font-size: 0.875rem; /* Decrease font size for smaller screens */
                }
                .animate-pulse {
                  animation: none; /* Disable pulse animation for smaller screens */
                }
              }

              @media only screen and (min-width: 640px) and (max-width: 767px) {
                /* Medium devices */
                .h-10 {
                  height: auto; /* Adjust height for medium screens */
                  line-height: 1.5; /* Center text vertically */
                }
                .text-md {
                  font-size: 1rem; /* Adjust font size for medium screens */
                }
              }
            `}</style>
          </div>
          {/* navbar */}
          <nav aria-label="Top" className=" px-4 sm:px-6 lg:px-8 mb-8 mt-6 ">
            <div className="">
              <div className="flex h-16 items-center">
                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <Link to={"/"} className="flex">
                    <div className="flex flex-1 justify-start place-items-start  transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer">
                      <img
                        src={microbax_name}
                        alt="logo"
                        style={{ width: "210px", height: "100px" }}
                      />
                    </div>
                  </Link>
                </div>

                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 mr-8">
                    {/* home */}
                    <Link
                      to={"/"}
                      className="text-2xl  myText font-semibold text-gray-900 hover:text-blue-700 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
                    >
                      Home
                    </Link>

                    {/* about us */}
                    {/* <Link
                      to={"/about"}
                      className="text-2xl  font-sans font-semibold text-gray-900   hover:text-blue-700 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
                    >
                      About us
                    </Link> */}

                    {/* facilities */}
                    <Link
                      to={"/facilities"}
                      className="text-2xl  myText font-semibold text-gray-900  hover:text-blue-700 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer "
                    >
                      Facilities
                    </Link>

                    {/* services */}
                    <Link
                      to={"/services"}
                      className="text-2xl  myText font-semibold text-gray-900  hover:text-blue-700 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
                    >
                      Services
                    </Link>

                    {/* products */}

                    <div className="relative inline-block text-left">
                      <button
                        type="button"
                        className="text-2xl  myText font-semibold text-gray-900  hover:text-blue-700 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
                        onClick={() => setShowProductsMenu(!showProductsMenu)}
                      >
                        Products
                      </button>
                      {showProductsMenu && (
                        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >
                            {products.map((product, index) => (
                              <Link
                                key={index}
                                to={`/product/${product
                                  .replace(/\s+/g, "-")
                                  .toLowerCase()}`}
                                className="block px-2 py-2 text-xl text-gray-900 font-semibold myText hover:text-gray-900 w-full -mt-2"
                                onClick={() => handleProductSelect(product)}
                              >
                                {product}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* careers */}
                    {/* <Link
                      to={"/careers"}
                      className="text-2xl  font-sans font-semibold text-gray-900  hover:text-blue-700 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer "
                    >
                      Careers
                    </Link> */}

                    {/* gallery */}

                    <Link
                      to={"/gallery"}
                      className="text-2xl  myText font-semibold text-gray-900  hover:text-blue-700 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer "
                    >
                      Gallery
                    </Link>

                    {/* contact */}
                    <Link
                      to={"/contact"}
                      className="text-2xl  myText font-semibold text-gray-900  hover:text-blue-700 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer "
                    >
                      Contact
                    </Link>

                    {/* faq */}
                    {/* <Link
                      to={"/faq"}
                      className="text-2xl  font-sans font-semibold text-gray-900  hover:text-blue-700 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer "
                    >
                      F.A.Q
                    </Link> */}
                  </div>
                  <button type="button">
                    <IoMenuOutline
                      className="  mr-4 w-10 h-10 text-gray-900  hover:text-blue-700 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer "
                      onClick={() => setOpen(true)}
                    />
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Sidebar */}
          {open && (
            <div className="fixed inset-y-0 left-0 w-96 p-1 bg-white text-gray-800  overflow-y-auto  ">
              {/* cross icon */}
              <div className="flex flex-1 justify-end mb-4">
                <IoCloseOutline
                  className="text-gray-900 cursor-pointer w-8 h-8 hover:text-red-400"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="-mt-2">
                <img
                  src={microbax_name}
                  alt="logo"
                  style={{ width: "210px", height: "80px" }}
                />
              </div>
              <hr />
              <div className="flex flex-col px-4 py-2 -mt-2">
                <ul className="text-gray-500 text-xl text-start mt-3 ">
                  <li className="mb-2 rounded myText hover:shadow hover:bg-gray-300 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer">
                    <Link to={"/"} className="hover:text-green-600">
                      <IoMdHome className="inline-block w-6 h-6 mr-2 -mt-2 " />
                      Home
                    </Link>
                  </li>
                  {/* <li className="mb-2 rounded hover:shadow hover:bg-gray-300 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer">
                    <Link to={"/about"} className="hover:text-green-600">
                      <RiInformation2Fill className="inline-block w-6 h-6 mr-2 -mt-2" />
                      About us
                    </Link>
                  </li> */}
                  <li className="mb-2 myText rounded hover:shadow hover:bg-gray-300 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer ">
                    <Link to={"/facilities"} className="hover:text-green-600">
                      <GiGears className="inline-block w-6 h-6 mr-2 -mt-2" />
                      Facilities
                    </Link>
                  </li>
                  <li className="mb-2 myText rounded hover:shadow hover:bg-gray-300 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer">
                    <Link to={"/services"} className="hover:text-green-600">
                      <FaServicestack className="inline-block w-6 h-6 mr-2 -mt-2" />
                      Services
                    </Link>
                  </li>
                  {/* <li className="mb-2 rounded hover:shadow hover:bg-gray-300 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer ">
                    <Link to={"/products"} className="hover:text-green-600">
                      <GrCatalog className="inline-block w-6 h-6 mr-2 -mt-2" />
                      Products
                    </Link>
                  </li> */}

                  <div className="relative inline-block text-left">
                    <button
                      type="button"
                      className="mb-2 myText rounded hover:shadow hover:bg-gray-300 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
                      onClick={() => setShowProductsMenu(!showProductsMenu)}
                    >
                      <GrCatalog className="inline-block w-6 h-6 mr-2 -mt-2" />
                      Products
                    </button>
                    {showProductsMenu && (
                      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div
                          className=" container w-140 h-50 ml-4 pl-1 pr-1 pt-1 pb-4"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          {products.map((product, index) => (
                            <Link
                              key={index}
                              to={`/product/${product
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`}
                              className="block px-10 py-2 text-sm myText  text-gray-900 font-normal text-start ml-12 font-sans  w-full hover:text-green-600 hover:font-bold  -mt-2"
                              onClick={() => handleProductSelect(product)}
                            >
                              {product}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* <li className="mb-2 rounded hover:shadow hover:bg-gray-300 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer ">
                    <Link to={"/careers"} className="hover:text-green-600">
                      <FaGraduationCap className="inline-block w-6 h-6 mr-2 -mt-2" />
                      Careers
                    </Link>
                  </li> */}

                  <li className="mb-2 myText rounded hover:shadow hover:bg-gray-300 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer ">
                    <Link to={"/gallery"} className="hover:text-green-600">
                      <AiTwotonePicture className="inline-block w-6 h-6 mr-2 -mt-2" />
                      Gallery
                    </Link>
                  </li>
                  <li className="mb-2 rounded myText hover:shadow hover:bg-gray-300  transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer">
                    <Link to={"/contact"} className="hover:text-green-600">
                      <MdOutlineContactPhone className="inline-block w-6 h-6 mr-2 -mt-2" />
                      Contact
                    </Link>
                  </li>
                  {/* <li className="mb-2 rounded hover:shadow hover:bg-gray-300  transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer">
                    <Link to={"/faq"} className="hover:text-green-600">
                      <TbHelpTriangleFilled className="inline-block w-6 h-6 mr-2 -mt-2" />
                      F.A.Q
                    </Link>
                  </li> */}
                </ul>
              </div>

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <hr />
              <div className="">
                <div className="flex items-center myText mt-2 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer">
                  <RiMapPinUserLine className="text-2xl text-bold text-gray-900 w-10 h-10" />
                  <h2 className="font-sans text-xl text-gray-900 font-bold ml-2">
                    Our Location
                  </h2>
                </div>

                <div className="mt-2">
                  <div className="flex items-center mt-4">
                    <HiOutlineBuildingOffice2 className="text-2xl text-bold text-gray-900 w-8 h-8" />
                    <h2 className="myText text-xl text-gray-900 font-normal ml-2">
                      Office Address
                    </h2>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-500 text-lg font-normal myText mt-2">
                      Microbax (India) Limited,
                      <br /> 3-6-108/1, Liberty Road <br />
                      Himayat Nagar, Hyderabad–500029, A.P., INDIA.
                    </p>
                    <div className="mt-3">
                      <div className="flex items-center cursor-pointer">
                        <FaPhone className="text-2xl text-bold text-gray-500 w-6 h-6  hover:text-blue-500" />
                        <h3 className="myText text-md text-gray-500 font-normal ml-2  hover:text-blue-500 hover:font-bold">
                          :+91-40-66360055,66360056,
                        </h3>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="flex items-center cursor-pointer">
                        <FaFax className="text-2xl text-bold text-gray-500 w-6 h-6  hover:text-blue-500" />
                        <h3 className="myText text-md text-gray-500 font-normal ml-2 hover:text-blue-500 hover:font-bold">
                          :+91-40-66360057.
                        </h3>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="flex items-center  cursor-pointer">
                        <FaEnvelope className="text-2xl text-bold text-gray-500 w-6 h-6  hover:text-blue-500" />
                        <h3 className="myText text-md text-gray-500 font-normal ml-2 hover:text-blue-500 hover:font-bold">
                          :sales@microbax.com
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="mt-6">
                  <div className="flex items-center mt-2">
                    <MdOutlineFactory className="text-2xl text-bold text-gray-900 w-8 h-8" />
                    <h2 className="font-sans text-xl text-gray-900 font-normal ml-2">
                      Factory Address
                    </h2>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-500 text-lg font-normal font-sans mt-2">
                      Microbax (India) Limited <br /> Sy.No.59, Nandigama
                      Village,
                      <br />
                      Patancheru Mandal, Medak District, A.P., INDIA.
                    </p>
                  </div>
                </div> */}
              </div>
              <hr className="mt-4 " />
              <div className="flex justify-center items-center space-x-4 mt-4 mb-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="text-gray-500  hover:text-blue-500 w-7 h-7 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-gray-500   hover:text-blue-500 w-7 h-7 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-gray-500  hover:text-blue-500 w-7 h-7  transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="text-gray-500   hover:text-blue-500 w-7 h-7  transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer" />
                </a>
              </div>
            </div>
          )}
        </header>
      </div>
    </div>
  );
}

export default Navbar;
