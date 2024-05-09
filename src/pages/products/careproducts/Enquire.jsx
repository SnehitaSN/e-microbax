import React, { useState,useRef } from "react";
//  import { useNavigate } from "react-router-dom";
import Layout from "../../../components/layout/Layout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

function Enquire() {
  const form = useRef();
  //  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();



    emailjs
    .sendForm('service_rj17muu', 'template_jzz6tdv', form.current, {
      publicKey: 'IGJxOp9tmw_wDidRr',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );

    // Simple validation to check if all required fields are filled
    if (
      formData.name &&
      formData.email &&
      formData.phoneNumber &&
      formData.message
    ) {
      try {
        // Send form data to webhook
        // await sendFormDataToWebhook(formData);

        // Display success toast
        toast.success("Form sent successfully! Thank you, we will get back to you as soon as possible.");

        // Navigate to the products page
        // navigate("/product/all-products");

        // Reset the form data
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } catch (error) {
        console.error("Error sending form data:", error);
        toast.error("Error sending form data. Please try again later.");
      }
    } else {
      // If any required field is missing, display an error message
      toast.error("Please fill all the required fields");
    }
  };

  // Function to send form data to webhook
  // const sendFormDataToWebhook = async (formData) => {
  //   // Example webhook URL
  //   // const webhookURL = "http://localhost:3000/enquire";

  //   try {
  //     // Make a POST request to the webhook URL with form data
  //     const response = await fetch('http://localhost:3000/enquire', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     // Check if the request was successful
  //     if (!response.ok) {
  //       throw new Error('Failed to send form ');
  //     }
  //   } catch (error) {
  //     throw new Error('Failed to send form ');
  //   }
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
                name="user_name"
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
                name="from email"
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
                name="from phoneNumber"
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
                <ToastContainer/>
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
