import React from "react";
import Layout from "../../components/layout/Layout";
import probi from "../../assets/images/probi.png";
import rd1 from "../../assets/images/rd1.png";

function Facilities() {
  return (
    <Layout>
      <div className=" mb-10 mt-20">
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          {/*Row 1  */}

          {/* section 1 */}
          <div className=" p-4 flex flex-col items-center  justify-center mr-10">
            <div className="text-left  ">
              <h2 className="text-3xl text-green-700 mb-2  font-sans font-semibold">
                Contract Research & Manufacturing
              </h2>
              <p className="mt-4 text-xl font-sans mr-10 ">
                Microbax also takes up projects for contract research and <br />
                contract manufacture. A wide range of probiotics, prebiotics,
                <br />
                metabolites and other microorganisms can be developed and <br />
                manufactured on a contract basis.Our modern facility and <br />
                experienced and qualified staff make it possible to develop and{" "}
                <br />
                produce the required microorganisms in bulk,as well as their{" "}
                <br />
                formulations
              </p>
            </div>
          </div>
          {/* image1 */}
          <div className=" p-4 flex flex-col items-center justify-center ">
            <img
              src={probi}
              alt="probi"
              className="max-w-full max-h-full mt-4"
              style={{ width: 600, height: 400 }}
            />
          </div>

          {/* Row 2 */}
          {/* image 2 */}
          <div className=" p-4 flex flex-col items-center justify-center  mt-6">
            <img
              src={rd1}
              alt="rd"
              className="max-w-full max-h-full mt-4"
              style={{ width: 600, height: 400 }}
            />
          </div>
          {/* sectionn2 */}
          <div className=" p-4 flex flex-col items-center justify-center mt-6">
            <div>
              <h2 className="text-3xl font-sans text-green-700 font-semibold">
                R&D
              </h2>
              <p className=" mt-4 text-xl font-sans">
                The In-house R&D Facility is recognised by DSIR - Dept of <br />
                Scientific & Industrial research, Govt. of India. Research and{" "}
                <br />
                development activity is carried out mainly in the field of{" "}
                <br />
                probiotics and prebiotics. Microbax has successfully developed{" "}
                <br />
                and commercialized selected probiotics and prebiotics for use in{" "}
                <br />
                human healthcare, animal healthcare including aquaculture and{" "}
                <br />
                organisms for agriculture, effluent treatment and vector <br />
                control.
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="p-4 flex flex-col items-center justify-center mt-6 col-span-2 mb-6">
            <div className="">
              <h2 className="text-3xl font-sans text-green-900 font-semibold mt-4">
                Quality
              </h2>
              <p className="text-xl font-sans mt-4">
                Microbax has set up a sophisticated, State-of-the-Art QAD to{" "}
                <br />
                ensure products are manufactured in strict conformity with laid{" "}
                <br />
                down procedures & processes..The laboratory with proper ambience{" "}
                <br />
                is custom designed and built to avoid material and process{" "}
                <br />
                cotamination, Besides ensuring that the product meets all the in{" "}
                <br />
                built quality attributes claimed and intended of it. All systems{" "}
                <br />
                and facilities are maintained as per most stringent <br />
                International standards.
              </p>{" "}
              <br />
              <p className="text-xl font-sans mt-2">
                The product consistency and performance assurance is achieved{" "}
                <br />
                through system complaince checks by constant internal audit of{" "}
                <br />
                production and allied activities. QAD also takes on itself the{" "}
                <br />
                responsibility to minimize contamination level by constantly{" "}
                <br />
                updating the implementation of the CGMP with constant watch on{" "}
                <br />
                product purity profile by adhering to Good Laboratory Practices.{" "}
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Facilities;
