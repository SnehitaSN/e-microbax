import React from "react";
import Layout from "../../../components/layout/Layout";

function Bioremede() {
  return (
    <Layout>
      <div className="container mx-auto p-6 mt-20 rounded-lg">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Formulation of Microorganisms for Effluent Treatment
        </h2>
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left side: Description */}
          <div className="flex-1 md:mr-4 mb-4 md:mb-0 space-y-4 font-sans md:w-1/2">
            <h3 className="text-lg font-semibold mb-2 myText text-green-700">
              Ecobact-7
            </h3>
            <p className="text-gray-600 myText text-lg">
              Effective combination containing high strength of enzyme producing
              bacteria for degrading organic materials. High concentration waste
              digestor. Contains billions of potent bacteria (aerobic and
              anaerobic). Produces waste degrading enzymes. Reduces BOD,
              suspended solids, sludge and odour. Aids in settling, decreases
              turbidity. 100% natural, Bio degradable, non-toxic and
              non-corrosive.
            </p>
          </div>

          {/* Right side: Placeholder for images (if available) */}
          <div className="flex-1 md:ml-4 space-y-4 md:w-1/2">
            {/* You can add images here */}
            {/* Example:
          <img src="effluent_treatment_image1.jpg" alt="Effluent Treatment Image 1" className="w-full rounded-lg" />
          <img src="effluent_treatment_image2.jpg" alt="Effluent Treatment Image 2" className="w-full rounded-lg" />
          */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Bioremede;
