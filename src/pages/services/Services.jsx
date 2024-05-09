import React from "react";
import Layout from "../../components/layout/Layout";

import probi from "../../assets/images/probi.png";
import rd1 from "../../assets/images/rd1.png";
import q1 from "../../assets/images/q1.jpg";
import pl1 from "../../assets/images/pl1.jpg";

function Services() {
  return (
    <Layout>
      <div className=" mb-10 mt-10">
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          {/*Row 1  */}

          {/* section 1 */}
          <div className=" p-4 flex flex-col items-center  justify-center mr-10 ">
            <div className="text-left -mt-40 ">
              <h2 className="text-3xl text-green-700 mb-2  myText font-semibold">
                Contract Research & Manufacturing
              </h2>
              <p className="mt-4 text-xl myText text-gray-800  leading-snug mr-10 ">
                Microbax also takes up projects for contract research and
                contract manufacture. A wide range of probiotics, prebiotics,
                metabolites and other microorganisms can be developed and
                manufactured on a contract basis.Our modern facility and
                experienced and qualified staff make it possible to develop and{" "}
                produce the required microorganisms in bulk,as well as their{" "}
                formulations
              </p>
            </div>
          </div>
          {/* image1 */}
          <div className=" p-4 flex flex-col items-center justify-center ">
            <img
              src={probi}
              alt="probi"
              className="max-w-full max-h-full mt-2"
              style={{ width: 500, height: 400 }}
            />
          </div>

          {/* Row 2 */}
          {/* image 2 */}
          <div className=" p-4 flex flex-col items-center justify-center  mt-2">
            <img
              src={rd1}
              alt="rd"
              className="max-w-full max-h-full mt-2"
              style={{ width: 500, height: 400 }}
            />
          </div>
          {/* sectionn2 */}
          <div className=" p-4 flex flex-col items-center justify-center mt-6">
            <div>
              <h2 className="text-3xl myText text-green-700 font-semibold -mt-40">
                R&D
              </h2>
              <p className=" mt-4 text-xl text-gray-800  myText leading-snug">
                The In-house R&D Facility is recognised by DSIR - Dept of <br />
                Scientific & Industrial research, Govt. of India. Research and{" "}
                development activity is carried out mainly in the field of{" "}
                probiotics and prebiotics. Microbax has successfully developed{" "}
                and commercialized selected probiotics and prebiotics for use in{" "}
                human healthcare, animal healthcare including aquaculture and{" "}
                organisms for agriculture, effluent treatment and vector <br />
                control.
              </p>
            </div>
          </div>

          {/* row 3 */}
          {/* section 1 */}
          <div className=" p-4 flex flex-col items-center  justify-center mr-10 ">
            <div className="">
              <h2 className="text-3xl myText text-green-700 font-semibold mt-4">
                Quality
              </h2>
              <p className="text-xl myText text-gray-800  leading-snug mt-4">
                Microbax has set up a sophisticated, State-of-the-Art QAD to{" "}
                ensure products are manufactured in strict conformity with laid{" "}
                down procedures & processes..The laboratory with proper ambience{" "}
                is custom designed and built to avoid material and process{" "}
                cotamination, Besides ensuring that the product meets all the in{" "}
                built quality attributes claimed and intended of it. All systems{" "}
                and facilities are maintained as per most stringent <br />
                International standards.
              </p>{" "}
              <p className="text-xl mt-4 myText text-gray-800  leading-snug ">
                The product consistency and performance assurance is achieved{" "}
                through system complaince checks by constant internal audit of{" "}
                production and allied activities. QAD also takes on itself the{" "}
                responsibility to minimize contamination level by constantly{" "}
                updating the implementation of the CGMP with constant watch on{" "}
                product purity profile by adhering to Good Laboratory Practices.{" "}
              </p>
            </div>
          </div>
          {/* image1 */}
          <div className=" p-4 flex flex-col items-center justify-center ">
            <img
              src={q1}
              alt="quality"
              className="max-w-full max-h-full mt-2"
              style={{ width: 300, height: 400 }}
            />
          </div>

          {/* Row 4 */}
          {/* image 2 */}
          <div className=" p-4 flex flex-col items-center justify-center  mt-2">
            <img
              src={pl1}
              alt="privatelabelling"
              className="max-w-full max-h-full mt-2"
              style={{ width: 300, height: 400 }}
            />
          </div>
          {/* sectionn2 */}
          <div className=" p-4 flex flex-col items-center justify-center mt-6">
            <div className="text-left -mt-6 ">
              <h2 className="text-3xl text-green-700 mb-2  -mt-10 myText font-semibold">
                Private Labelling
              </h2>
              <p className="mt-4 text-xl myText text-gray-800  leading-snug mr-10 ">
                We at Microbax provide Private Labelling Services as well to a
                large client base around the world. We engage in developing and
                manufacturing a wide assortment of probiotics and formulations
                that many private companies sell under their label and are
                extremely satisfied with the superiority of our products.
              </p>
              <p className="mt-4 text-xl myText text-gray-800  leading-snug mr-10 ">
                Our partnership shall promise you top-notch quality and
                production which we only seek to continue over the years.
              </p>{" "}
              <br />
              <span className="mt-4 text-xl myText  leading-snug mr-10 font-semibold text-green-900 hover:text-bold hover:text-green-900 hover:text-2xl">
                All the Probiotics can be supplied as individual strains or in
                the form of Custom Blends / Premixes and private Labels
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Services;
