import React, { useState } from "react";
 import { useNavigate } from "react-router-dom";
import Layout from "../../../components/layout/Layout";

function Enquire() {
   const navigate = useNavigate();

  // const handleGoBack = () => {
  //   // navigate("/product/all-products");
  // };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation to check if all required fields are filled
    if (
      formData.name &&
      formData.email &&
      formData.phoneNumber &&
      formData.message
    ) {
      console.log(formData); // You can perform further actions here, like sending the data to a backend server

      // Navigate to the products page
       navigate("/product/all-products");

      // Reset the form data
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } else {
      // If any required field is missing, you can display an error message or handle it as per your requirements
      alert("Please fill all the required fields");
    }
  };

  // const handleGoBack = () => {
  //   // Implement the functionality to go back
  //   alert('Go back functionality goes here');
  // };

  return (
    <div>
      <Layout>
        <div
          className="container mx-auto px-4 py-8"
          style={{ maxWidth: "100%", padding: "0 20px" }}
        >
          <h2 className="text-2xl font-semibold text-center mb-4 mt-6 bg-gray-100">
            Enquiry Form
          </h2>
          <form className="max-w-lg mx-auto mb-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-green-600 font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-green-400 focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-green-600 font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-green-400 focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-green-600 font-semibold"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-green-400 focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-green-600 font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 rounded border border-green-400 focus:outline-none focus:border-green-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                // onClick={handleGoBack}
                className="px-6 py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
              >
                Submit
              </button>
              {/* <button
                type="button"
                onClick={handleGoBack}
                className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600"
              >
                Go Back
              </button> */}
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
}

export default Enquire;
