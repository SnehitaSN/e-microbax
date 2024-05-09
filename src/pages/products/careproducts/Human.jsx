import React from "react";
import Layout from "../../../components/layout/Layout";
import pro1 from "../../../assets/images/pro1.png";
import pro2 from "../../../assets/images/pro2.png";
import pro3 from "../../../assets/images/pro3.png";

function Human() {
  return (
    <Layout>
      <div className="container mx-auto p-6 mt-20">
        <div className="flex flex-wrap">
          {/* Left side - List of probiotics */}
          <div className="w-full md:w-1/2 pr-4">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Probiotics for Human Health Care:
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              "Live microorganisms which when administered in adequate amounts
              confer a health benefit on the host"
            </p>
            <ul className="list-disc ml-6 text-gray-600">
              <li className="text-lg ">
                Lactobacillus acidophilus
              </li>
              <li className="text-lg ">Lactobacillus casei</li>
              <li className="text-lg ">Lactobacillus fermentum</li>
              <li className="text-lg ">Lactobacillus lactis</li>
              <li className="text-lg ">Lactobacillus plantarum</li>
              <li className="text-lg ">
                Lactobacillus salivarius
              </li>
              <li className="text-lg">
                Lactobacillus sporogenes / Lactic acid bacillus / Bacillus
                coagulans
              </li>
              <li className="text-lg ">Lactobacillus rhamnosus</li>
              <li className="text-lg ">Bifidobacterium bifidum</li>
              <li className="text-lg ">Bifidobacterium longum</li>
              <li className="text-lg ">Bacillus clausii</li>
              <li className="text-lg ">Saccharomyces boulardii</li>
            </ul>
          </div>

          {/* Right side - Images of probiotics */}
          <div className="w-full md:w-1/2">
            <div className="w-3/4"> <br /> <br /> <br />  <br /> 
              <div className="mx-auto flex flex-wrap justify-center">
                <img
                  src={pro1}
                  alt="Probiotic 1"
                  className="w-1/3 mx-auto my-4"
                />
                <img
                  src={pro2}
                  alt="Probiotic 2"
                  className="w-1/3 mx-auto my-4"
                />
                <img
                  src={pro3}
                  alt="Probiotic 3"
                  className="w-1/3 mx-auto my-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Human;
