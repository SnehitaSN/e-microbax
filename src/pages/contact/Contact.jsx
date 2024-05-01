import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs"; // Assuming you've imported BsWhatsapp
import Layout from "../../components/layout/Layout";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);

    // Reset form state
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      message: "",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto p-6 mt-20 rounded-lg">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-between">
          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 mr-4 font-sans space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-green-700 mb-1"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border text-md border-blue-400 rounded-md focus:outline-none focus:border-green-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-lg font-semibold text-green-700 mb-1"
              >
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border text-md border-blue-400 rounded-md focus:outline-none focus:border-green-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-green-700 mb-1"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border text-md border-blue-400 rounded-md focus:outline-none focus:border-green-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-lg font-semibold text-green-700 mb-1"
              >
                Address:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border text-md border-blue-400 rounded-md focus:outline-none focus:border-green-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-green-700 mb-1"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border text-md border-blue-400 rounded-md focus:outline-none focus:border-green-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-lg text-center text-white py-2 px-6 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
            >
              Submit
            </button>
          </form>

          {/* Addresses */}
          <div className="   flex-1 md:ml-4 mt-4 md:mt-0 space-y-4 font-sans md:space-y-0 md:w-1/2">
            <div>
              <h3 className="text-lg font-semibold  mb-2 text-green-700">
                Office Address
              </h3>
              <p className="text-gray-600 text-md font-sans">
                Microbax (India) Limited, 3-6-108/1, Liberty Road, Himayat
                Nagar, Hyderabad–500 029, 
                 A.P., INDIA. <br />
                Phone: 91 40 663 600 55, 663 600 56,
                <br />
                Fax: +91 40 663 600 57. <br />
                Email: sales@microbax.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-green-700">
                Factory Address
              </h3>
              <p className="text-gray-600 text-md font-sans">
                Microbax (India) Limited, Sy.No.59, Nandigama Village,
                Patancheru Mandal, Medak District, A.P., INDIA.
              </p>
            </div>
          </div>
        </div>

        {/* WhatsApp icon */}
        <div className="flex justify-end mt-8">
          <a
            href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8"
          >
            <BsWhatsapp className="text-green-500 text-5xl" />
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
