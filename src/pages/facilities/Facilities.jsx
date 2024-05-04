import React from "react";
import Layout from "../../components/layout/Layout";
import f2 from "../../assets/images/f2.png"

function Facilities() {
  return (
    <Layout>
      <div className=" mb-6 mt-8">
        <div className="grid grid-cols-2 grid-rows-1 gap-4">
          <div className=" p-4 flex flex-col items-center  justify-center mr-10">
            <div className="text-left ml-10">
              <h2 className="text-3xl font-sans text-green-700 font-semibold">
                Facilities
              </h2>
              <p className=" mt-4 text-xl font-sans">
                Microbax has a State-of-the-Art facility with
                computer-controlled Fermenters and well-equipped Labs.{" "}
              </p>{" "}
              <br />
              <p className=" mt-2 text-lg font-sans">
                {" "}
                The In-house R&amp;D Facility is recognized by DSIR – Dept of{" "}
                <br />
                Scientific &amp; Industrial research, Govt. of India. Research
                and <br />
                development activity is carried out mainly in the field of{" "}
                <br />
                probiotics and prebiotics.
              </p>
            </div>
          </div>
          {/* image1 */}
          <div className=" p-4 flex flex-col items-center justify-center ">
            <img
              src={f2}
              alt="probi"
              className="max-w-full max-h-full mt-4"
              style={{ width: 400, height: 300 }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Facilities;
