import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
// import emailjs from "@emailjs/browser";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
function Footer() {
  const products = [
    "Human Health Care",
    "Agriculture",
    "Animal Health care",
    "Bioremediation",
    "Aquaculture",
    "Vector Control",
  ];

  // const emailInput = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .send("service_rj17muu", "template_e77anec", {
  //       to_email: emailInput.current.value,
  //     }, "IGJxOp9tmw_wDidRr")
  //     .then(
  //       (response) => {
  //         console.log("Email sent successfully!", response);
  //         alert("Email sent successfully!");
  //         // Optionally, you can reset the email input after sending the email
  //         emailInput.current.value = "";
  //       },
  //       (error) => {
  //         console.error("Email sending failed:", error);
  //         alert("Email sending failed. Please try again later.");
  //       }
  //     );
  //   }

  return (
    <footer className="text-gray-600 body-font bg-green-300">
      <div className="bg-gradient-to-r from-green-200 to-blue-200 ">
        <div className="container px-5 py-10 mx-auto ">
          <div className="flex flex-wrap md:text-left text-center order-first">
            {/* company */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mt-4">
              <h2 className="title-font  text-gray-900 font-bold mb-3 font-sans -mt-8 text-xl">
                Company
              </h2>
              <nav className="list-none -mt-1">
                <div className="mb-2 font-sans">
                  {/* <li>
                    <Link
                      to={"/about"}
                      className="text-gray-900 text-lg font-semibold font- sans "
                    >
                      About us
                    </Link>
                  </li> */}
                </div>
                {/* <div className="mb-2">
                  <li>
                    <Link
                      to={"/products"}
                      className="text-gray-900  text-lg font-semibold font- sans "
                    >
                      Products
                    </Link>
                  </li>
                </div> */}

                <div className="mb-2">
                  <li>
                    <Link
                      to={"/gallery"}
                      className="text-gray-900  text-lg font-semibold font- sans "
                      onClick={scrollToTop}
                    >
                      Gallery
                    </Link>
                  </li>
                </div>

                <div className="mb-8">
                  <li>
                    <Link
                      to={"/contact"}
                      className="text-gray-900  text-lg font-semibold font- sans "
                      onClick={scrollToTop}
                    >
                      Contact
                    </Link>
                  </li>
                </div>
              </nav>
            </div>

            {/* Resources */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4  mt-4">
              <h2 className="title-font  text-gray-900 font-bold  mb-3 -mt-8 text-xl font-sans">
                Resources
              </h2>
              <nav className="list-none mb-10">
                <div className="mb-2.5">
                  <li>
                    <Link
                      to={"/facilities"}
                      className="text-gray-900  text-lg font-semibold font- sans "
                      onClick={scrollToTop}
                    >
                      Facilities
                    </Link>
                  </li>
                </div>
                <div className="mb-2.5">
                  <li>
                    <Link
                      to={"/services"}
                      className="text-gray-900  text-lg font-semibold font- sans "
                      onClick={scrollToTop}
                    >
                      Services
                    </Link>
                  </li>
                </div>
                <div className="mb-2.5">
                  {/* <li>
                    <Link
                      to={"/careers"}
                      className="text-gray-900  text-lg font-semibold font- sans "
                    >
                      Careers
                    </Link>
                  </li> */}
                </div>
              </nav>
            </div>

            {/* Products */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mt-4">
              <div className="ml-2">
                <h2 className="title-font  text-gray-900 font-bold   mb-3 -mt-8 text-xl  font-sans">
                  Products
                </h2>
              </div>

              <nav className="list-none mb-10">
                {products.map((product, index) => (
                  <div key={index} className="mb-0.5">
                    <Link
                      key={index}
                      to={`/product/${product
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                      className="block px-2 py-2 text-lg text-gray-900 font-semibold  font-sans hover:text-gray-900 w-full -mt-2"
                      onClick={scrollToTop}
                    >
                      {product}
                    </Link>
                  </div>
                ))}
              </nav>

              {/* <nav className="list-none mb-10">
                <div className="mb-2.5">
                  <li>
                    <Link
                      to={"/human"}
                      className="text-gray-900  text-lg font-semibold font- sans "
                    >
                      Human Health Care
                    </Link>
                  </li>
                </div>
                <div className="mb-2.5">
                  <li>
                    <Link
                      to={"/agriculture"}
                      className="text-gray-900  text-lg font-semibold font- sans "
                    >
                      Agriculture
                    </Link>
                  </li>
                </div>
                <div className="mb-2.5">
                  <li>
                    <Link
                      to={"/animal"}
                      className="text-gray-900  text-lg font-semibold font- sans "
                    >
                      Animal Health care
                    </Link>
                  </li>
                </div>
                <div className="mb-2.5">
                  <li>
                    <Link
                      to={"/biorem"}
                      className="text-gray-900  text-lg font-semibold font- sans "
                    >
                      Bioremediation
                    </Link>
                  </li>
                </div>
                <div className="mb-2.5">
                  <li>
                    <Link
                      to={"/aqua"}
                      className="text-gray-900  text-lg font-semibold font- sans "
                    >
                      Aquaculture
                    </Link>
                  </li>
                </div>

                <div className="mb-2.5">
                  <li>
                    <Link
                      to={"/vector"}
                      className="text-gray-900  text-lg font-semibold font- sans "
                    >
                      Vector Control
                    </Link>
                  </li>
                </div>
              </nav> */}
            </div>

            {/* microbax subscribe */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mt-4">
              <h2 className="title-font  font-medium text-gray-900  mb-3 -mt-8 text-4xl  font-sans">
                Microbax
              </h2>
              <p className="text-lg text-gray-900  mb-4  -mt-2 font-sans">
                Subscribe to our News Letter
              </p>
              <form>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="bg-gray-500 text-white px-1 py-2 rounded-lg"
                  required
                ></input>
                <button className="bg-white px-1 py-2 mr-2 mt-4 text-black rounded-lg  font-sans ">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="">
            <p className="text-center text-sm  font-sans text-gray-900  font-normal">
              {" "}
              &copy; Copyright Microbax 2008 ---www.microbax.com
            </p>{" "}
            <br />
            <hr className="text-gray-900 -mt-4 "></hr>
            <div className="flex flex-1 justify-center mt-4 ">
              <div className="flex justify-center -mt-2">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2"
                >
                  {" "}
                  <FaFacebook className="w-6 h-6  hover:text-green-900 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer" />
                </a>

                <a
                  href="https://twitter.com/?lang=en"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2"
                >
                  {" "}
                  <FaTwitter className="w-6 h-6 hover:text-green-900 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer " />
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2"
                >
                  <FaInstagram className="w-6 h-6 hover:text-green-900 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer" />
                </a>

                <a
                  href="https://www.linkedin.com/home?originalSubdomain=in"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2"
                >
                  <FaLinkedin className="w-6 h-6 hover:text-green-900 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 cursor-pointer" />
                </a>
              </div>
            </div>{" "}
            <br /> <br /> <br /> <br />
            <div className="fixed bottom-0 right-0 mb-4 mr-4">
              {" "}
              {/* <p className="text-right">Designed & Developed by -Sk Developers</p> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
