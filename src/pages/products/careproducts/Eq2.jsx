import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Layout from "../../../components/layout/Layout";

function Eq2() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rj17muu", "template_e77anec", form.current, {
        publicKey: "IGJxOp9tmw_wDidRr",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <Layout>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg"
        >
          <label className="block text-green-600 font-semibold">Name</label>
          <input
            type="text"
            name="from_name"
            className="w-full px-4 py-2 mt-1 rounded border border-green-400 focus:outline-none focus:border-green-500"
          />

          <label className="block text-green-600 font-semibold mt-4">
            Email
          </label>
          <input
            type="email"
            name="from_email"
            className="w-full px-4 py-2 mt-1 rounded border border-green-400 focus:outline-none focus:border-green-500"
          />

          <label className="block text-green-600 font-semibold mt-4">
            Message
          </label>
          <textarea
            name="message"
            className="w-full px-4 py-2 mt-1 rounded border border-green-400 focus:outline-none focus:border-green-500"
          ></textarea>

          <input
            type="submit"
            value="Send"
            className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 cursor-pointer"
          />
        </form>
      </Layout>
    </div>
  );
}

export default Eq2;
