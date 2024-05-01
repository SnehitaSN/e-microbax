import React from 'react'
import Layout from '../../../components/layout/Layout'
import agri1 from "../../../assets/images/agri1.jpg"
// import agri2 from "../../../assets/images/agri2.jpg"
// import agri3 from "../../../assets/images/agri3.jpg"

function Animal() {
  return (
    <Layout>
       <div className="container mx-auto p-6 mt-30">
        {/* Title */}
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Animal Health Care:
        </h2>
        <p className="text-lg text-blue-900 mb-8">
          Probiotic: "The natural alternative for animal health care" A live
          Microbial feed supplement which beneficially affects the host animal
          by improving its intestinal balance. This emphasizes the importance of
          live cells as an essential component of an effective probiotic. The
          inclusion of probiotics in the animal feed regulates and enhances the
          microbial environment, allows the establishment of healthy
          gastro-intestinal microflora, reduces digestive upsets, improves feed
          conversion ratio and thus increases animal performance, in final
          analysis lactobacillus sporogenes has a high degree of aflatoxin
          degradation potential. Hence, supplementation of feed with
          L.Sporogenes improves weight gain and feed efficiency by reducing NH3
          concentration and aflatoxins content and by preventing diseases
          caused by pathogenic microbial flora. Increased weight increments in
          aquaculture are realized as lactobacillus enhances cleavage of high
          molecular weight proteins and improves biological availability of
          feeds In addition to this, it possesses antibiotic activity against
          Staphylococci and coliform bacteria. It is therefore ideally used as
          a growth Promoter. Aspergillus oryzae Bacillus coagulans Bacillus
          subtilis Lactobacillus sporogenes Bacillus mesentricus Bacillus
          polymyxa Bacillus licheniformis Limits the activity of harmful
          pathogenic bacteria (E.coli, Salmonella, Campylobacter etc.)
          Maintains a healthy, balanced gut microflora improves performance
          Reduces digestive upsets Improves FCR (feed conversion ratio)
          Improves resistance to stress and disease lowers mortality - improves
          profitability
        </p>

        {/* Probiotics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Probiotics */}
          <div>
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Probiotics:
            </h2>
            <ul className="list-disc ml-6 mb-8">
              <li className="text-lg text-blue-900">Aspergillus oryzae</li>
              <li className="text-lg text-blue-900">Bacillus coagulans</li>
              <li className="text-lg text-blue-900">Bacillus subtilis</li>
              <li className="text-lg text-blue-900">Lactobacillus sporogenes</li>
              <li className="text-lg text-blue-900">Bacillus mesentricus</li>
              <li className="text-lg text-blue-900">Bacillus polymyxa</li>
              <li className="text-lg text-blue-900">Bacillus licheniformis</li>
            </ul>

            {/* LACTOMORE Probiotic */}
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              LACTOMORE Probiotic animal feed supplement
            </h2>
            <p className="text-lg text-blue-900 mb-8">
              Specially formulated for dairy animals Improves milk yield, fat
              content and density Improves feed conversion Reduces digestive
              upsets Limits the activity of harmful pathogens Maintains a
              healthy, balanced gut microflora Improves resistance to stress
              and disease
            </p>
          </div>

          {/* Right side - Images */}
          <div className="flex justify-center items-center ">
            <img src={agri1} alt="Probiotic 1" className="w-1/3 mx-auto my-4" />
            {/* <img src={agri2} alt="Probiotic 2" className="w-1/3 mx-auto my-4" /> */}
            {/* <img src={agri3} alt="Probiotic 3" className="w-1/3 mx-auto my-4" /> */}
          </div>
        </div>

        {/* LACTOMORE Image */}
        <div className="mt-8 text-center">
          {/* <img src={lactomoreImg} alt="LACTOMORE" className="w-1/2 mx-auto" /> */}
        </div>
      </div>
    </Layout>
  )
}

export default Animal
