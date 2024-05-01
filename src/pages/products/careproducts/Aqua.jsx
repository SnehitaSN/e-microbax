import React from 'react'
import Layout from '../../../components/layout/Layout'

function Aqua() {
  return (
    <Layout>
      <div className="container mx-auto p-6 mt-20">
        {/* Title */}
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Probiotic Microorganisms for AquaCulture:
        </h2>
        <p className="text-lg text-blue-900 mb-8">
          Microorganisms as gut probiotics for fish and shrimps and as probiotic agents to maintain a healthy environment in the pond by decomposing wastes and reducing the impact of toxic compounds like ammonia, phosphates, hydrogen sulphide etc.
        </p>

        {/* Probiotics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Probiotics */}
          <div>
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Probiotic Microorganisms:
            </h2>
            <ul className="list-disc ml-6 mb-8">
              <li className="text-lg text-blue-900">Aspergillus oryzae</li>
              <li className="text-lg text-blue-900">Bacillus coagulans</li>
              <li className="text-lg text-blue-900">Bacillus megaterium</li>
              <li className="text-lg text-blue-900">Bacillus pumilus</li>
              <li className="text-lg text-blue-900">Lactobacillus sporogenes</li>
              <li className="text-lg text-blue-900">Nitrosomonas spp</li>
              <li className="text-lg text-blue-900">Rhodobacter spp</li>
              <li className="text-lg text-blue-900">Thiobacillus spp</li>
              <li className="text-lg text-blue-900">Aspergillus niger</li>
              <li className="text-lg text-blue-900">Bacillus licheniformis</li>
              <li className="text-lg text-blue-900">Bacillus polymyxa</li>
              <li className="text-lg text-blue-900">Bacillus subtilis</li>
              <li className="text-lg text-blue-900">Nitrobacter spp</li>
              <li className="text-lg text-blue-900">Pseudomonas spp</li>
              <li className="text-lg text-blue-900">Rhodococcus spp</li>
              <li className="text-lg text-blue-900">Trichoderma spp</li>
            </ul>

            {/* Probiotic Soil & Water Conditioner */}
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Probiotic Soil & Water Conditioner
            </h2>
            <ol className="list-decimal ml-6 mb-8">
              <li className="text-lg text-blue-900">Keeps the pond bottom and water clear by digesting sediments.</li>
              <li className="text-lg text-blue-900">Keeps the pond free from toxic materials and malodorous gases.</li>
              <li className="text-lg text-blue-900">Optimizes the dissolved oxygen level by bringing down BOD and COD levels.</li>
              <li className="text-lg text-blue-900">Keeps the pond free from pathogenic microorganisms.</li>
              <li className="text-lg text-blue-900">Maintains stable plankton bloom.</li>
              <li className="text-lg text-blue-900">Effective over a wide range of pH and salinity.</li>
              <li className="text-lg text-blue-900">Improves survival and productivity.</li>
            </ol>
          </div>

          {/* Right side - Images */}
          <div className="flex justify-center items-center">
            {/* <img src={pro1} alt="Probiotic 1" className="w-1/3 mx-auto my-4" />
            <img src={pro2} alt="Probiotic 2" className="w-1/3 mx-auto my-4" />
            <img src={pro3} alt="Probiotic 3" className="w-1/3 mx-auto my-4" /> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Aqua
