import React from "react";
import Layout from "../../components/layout/Layout";

function About() {
  return (
    <Layout>
      <div className="bg-green-50 mb-10">
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          {/* Row 1 */}
          <div className="bg-gray-200 p-4 flex flex-col items-center  justify-center">
            <div className="text-left">
              <h2 className="text-lg text-green-900 font-semibold">
                Contract Research & Manufacturing
              </h2>
              <p className="mt-2 text-md mr-10 ">
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
          <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
            <div>
              <h2 className="text-lg font-semibold">Section 2</h2>
            </div>
            <img
              src="image2.jpg"
              alt="Image 2"
              className="max-w-full max-h-full mt-4"
            />
          </div>
          {/* Row 2 */}
          <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
            <div>
              <h2 className="text-lg font-semibold">Section 3</h2>
            </div>
            <img
              src="image3.jpg"
              alt="Image 3"
              className="max-w-full max-h-full mt-4"
            />
          </div>
          <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
            <div>
              <h2 className="text-lg text-green-900 font-semibold">R&D</h2>
              <p className="text-md ">
                The In-house R&D Facility is recognised by DSIR - Dept of <br />
                Scientific & Industrial research, Govt. of India. Research and <br />
                development activity is carried out mainly in the field of <br />
                probiotics and prebiotics. Microbax has successfully developed <br />
                and commercialized selected probiotics and prebiotics for use in <br />
                human healthcare, animal healthcare including aquaculture and <br />
                organisms for agriculture, effluent treatment and vector <br />
                control.
              </p>
            </div>
          </div>
          {/* Row 3 */}
          <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
            <div>
              <h2 className="text-lg font-semibold">Section 5</h2>
              <p>This is section 5 content.</p>
            </div>
          </div>
          <div className="bg-gray-200 p-4 flex flex-col items-center justify-center">
            <div>
              <h2 className="text-lg text-green-900 font-semibold">Quality</h2>
            </div>
            <img
              src="image6.jpg"
              alt="Image 6"
              className="max-w-full max-h-full mt-4"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
