import React from "react";
import Layout from "../../../components/layout/Layout";
import bacillus from "../../../assets/images/bacillus.png"
// import bacillusspha from "../../../assets/images/bacillusspha.png"

function Vector() {
  return (
    <Layout>
      <div className="container mx-auto p-6 mt-20 rounded-lg mb-10">
        <h2 className="text-2xl font-bold myText text-green-700 mb-4">
          Microorganisms for Vector Control
        </h2>
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left side: List of microorganisms */}
          <div className="flex-1 md:mr-4 mb-4 md:mb-0 space-y-4 font-sans md:w-1/2">
            <h3 className="text-lg font-semibold mb-2 font-sans text-green-700">
              Microorganisms to control larvae of Vectors like mosquitoes &
              white flies
            </h3>
            <ul className="list-disc pl-4 myText text-gray-600 text-lg">
              <li>Bacillus thuringiensis</li>
              <li>Bacillus sphaericus</li>
            </ul>
          </div>

          {/* Right side: Images (if available) */}
          <div className="flex-1 md:ml-4 space-y-4 md:w-1/2">
            {/* You can add images here */}
            {/* Example: */}
          <img src={bacillus} alt="bacillus" className=" rounded-lg" />
          {/* <img src={bacillusspha} alt="bacillisspha" className="w-full rounded-lg" /> */}
         
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Vector;
