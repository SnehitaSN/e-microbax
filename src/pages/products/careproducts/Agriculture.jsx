import React from "react";
import Layout from "../../../components/layout/Layout";
import p21 from "../../../assets/images/products/p21.jpeg";
import p22 from "../../../assets/images/products/p22.jpeg";
import p23 from "../../../assets/images/products/p23.jpeg";
import p5 from "../../../assets/images/products/p5.png";
import p6 from "../../../assets/images/products/p6.png";
import p9 from "../../../assets/images/products/p9.png";
import p2 from "../../../assets/images/products/p2.png";
import p12 from "../../../assets/images/products/p12.png";

function Agriculture() {
  return (
    <Layout>
      <div className="container mx-auto p-6 mt-10">
        {/* Title */}
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Microorganisms for Agriculture:
        </h2>
        <p className="text-lg text-blue-900 mb-8">
          Microorganisms as biofertilizers, biopesticides, and decomposing
          agents.
        </p>

        {/* Probiotics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Probiotics */}
          <div>
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Probiotic Microorganisms:
            </h2>
            <ul className="list-disc ml-6 mb-8">
              <li className="text-lg text-blue-900">Acetobactor spp</li>
              <li className="text-lg text-blue-900">Bacillus firmus</li>
              <li className="text-lg text-blue-900">Bacillus megaterium</li>
              <li className="text-lg text-blue-900">Bacillus subtilis</li>
              <li className="text-lg text-blue-900">Nitrobacter spp</li>
              <li className="text-lg text-blue-900">Paecelomyces spp</li>
              <li className="text-lg text-blue-900">Pseudomonas spp</li>
              <li className="text-lg text-blue-900">Pseudomonas striata</li>
              <li className="text-lg text-blue-900">Trichoderma viride</li>
              <li className="text-lg text-blue-900">Azotobacter spp</li>
              <li className="text-lg text-blue-900">Bacillus licheniformis</li>
              <li className="text-lg text-blue-900">Bacillus polymyxa</li>
              <li className="text-lg text-blue-900">Bacillus thuringensis</li>
              <li className="text-lg text-blue-900">Metarrhizium spp</li>
              <li className="text-lg text-blue-900">Nitrosomonas spp</li>
              <li className="text-lg text-blue-900">Rhizobuim spp</li>
              <li className="text-lg text-blue-900">Verticilium spp</li>
              <li className="text-lg text-blue-900">Bacillus laterosporus</li>
            </ul>

            {/* Vitagro */}
            <h2 className="text-2xl font-bold text-green-700 mb-4">Vitagro</h2>
            <p className="text-lg text-blue-900 mb-8">
              <span className="text-green-700 mb-2">
                {" "}
                An effective combination of naturally occurring beneficial
                microorganisms.
              </span>{" "}
              <ul className="list-disc ml-6 mb-0">
                <li className="text-lg text-blue-900">
                  Increases availability of nutrients for healthy growth &
                  higher yields.
                </li>
                <li className="text-lg text-blue-900">
                  Controls soil and root invading pathogens and pests.
                </li>
                <li className="text-lg text-blue-900">
                  Restores friendly soil microflora.
                </li>
                <li className="text-lg text-blue-900">
                  Suitable for all crops.
                </li>
              </ul>
            </p>
          </div>
        </div>

        {/* Vitagro Details */}
        <div className="">
        <div className="text-lg text-blue-900 mb-8">
          <p className="text-lg text-blue-900 mb-8">
            Nature has endowed soil with its own system of fighting diseases.{" "}
            <br />
            The beneficial microbes that overpower the disease causing microbes,{" "}
            <br />
            helping plants grow healthy and disease-free to give higher yields{" "}
            <br />
            of superior quality. However, the indiscriminate use of chemicals{" "}
            <br />
            and fertilizers and manipulation of other soil conditions cause{" "}
            <br />
            unbalanced microbial populations. As a result soil loses its ability{" "}
            <br />
            to fight disease-causing pathogens and yields fall.
          </p>
          <br />

          <p>
            The solution is to supplement soil with a large number of naturally{" "}
            <br />
            occurring beneficial soil microbes, which help the crops grow <br />
            vogorously and fight diseases.
          </p>

          {/* <p>
            The advantage: 15,00,000 Million Colony Forming Units (CFU) and a
            long shelf life.
          </p> */}
        </div>

        <div className="container mx-auto p-6 mt-20">
          {/* Title */}
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Vitagro Details:
          </h2>

          {/* Content */}
          <ul className="list-disc ml-6 text-lg text-blue-900">
            <li className="mb-4">
              <span className="font-semibold text-green-700">
                Vitagro : Blended for results
              </span>
              <br />
              Vitagro is a concentrate of carefully selected soil microorganisms
              with proven ability. It contains a blend of the most well-known
              beneficial naturally occurring microorganisms to give strength and
              stability to crops.
            </li>
            <li className="mb-4">
              <span className="font-semibold text-green-700">
                Vitagro : 100% Natural
              </span>
              <br />
              The microbes in Vitagro are isolated from the soil, their natural
              habitat. They are presented in their naturally occurring form and
              are not genetically engineered. The product contains the claimed
              strength of organisms because of strict quality assurance.
            </li>
            <li className="mb-4">
              <span className="font-semibold text-green-700">
                The advantage
              </span>
              : 15,00,000 Million Colony Forming Units (CFU) and a long shelf
              life.
            </li>
            <li className="mb-4">
              <span className="font-semibold text-green-700">
                Vitagro: Fights soil-borne diseases
              </span>
              <br />
              Vitagro contains active microorganisms, which multiply very
              rapidly. They form new colonies of good soil microbes, which
              compete and preemptively consume the same resources (nutrients,
              Oxygen etc.) and also aid in restoring other beneficial local
              microflora. This process of competitive exclusion lowers and
              controls the population of harmful pathogens like Fusarium,
              Phytophthora, Rhizoctinia, Pythium, red rot, die back,
              pseudomonas, Xanthomonas and other root-borne diseases and even
              nematodes.
            </li>
            <li className="mb-4">
              <span className="font-semibold text-green-700">
                Vitagro : Helps Phosphate Availability
              </span>
              <br />
              Phosphorus is a major nutrient for inducing vigorous growth and
              also contributing to their disease resistance. Only 10-15% of
              phosphate applied is utilized by the plants. The balance 85-90%
              remains in insoluble form in the soil - PSB (Phosphate
              Solubilising Bacteria) grow and secrete organic acids, which
              dissolve this unavailable phosphate into soluble form and make it
              available to the plants. Thus, the residual phosphatic fertilizers
              in the soil can be well utilized and external application can be
              optimized.
            </li>
            <li className="mb-4">
              <span className="font-semibold text-green-700">
                Vitagro : Decomposes trash and organic matter
              </span>
              <br />
              Green manures and sugarcane trash are popularly applied to soil as
              organic manures. Unless suitable soil microbes are present, the
              plant material is not easily decomposed. Vitagro consists of
              rapidly growing microbes that produce various enzymes to decompose
              cellulose and other plant material into easily degradable or
              gradable organic matter.
            </li>
            <li className="mb-4">
              <span className="font-semibold text-green-700">
                Vitagro: Stimulates plant growth & increases availability of
                nutrients
              </span>
              <br />
              Vitagro promotes the growth of desirable soil microbes and creates
              a conducive "microenvironment" in root-zone. This in turn helps in
              the conversion of soil elements including phosphorus into
              plant-available form, stimulating root growth and efficient
              nutrient uptake resulting in vigorous plant growth.
            </li>
            <li className="mb-4">
              <span className="font-semibold text-green-700">
                Vitagro : Improves Soil Structure
              </span>
              <br />
              Vitagro improves the soil structure by decomposing soil organics
              and increasing humus level in the soil, in turn helping in better
              moisture retention and improve buffering properties of the soil.
            </li>
            <li className="mb-4">
              <span className="font-semibold text-green-700">
                Vitagro: for organic farming
              </span>
              <br />
              Vitagro is an ideal input for organic farming of fruits,
              vegetables & spices.
            </li>
            <li className="mb-4">
              <span className="font-semibold text-green-700">
                Vitagro : Easy to apply
              </span>
              <br />
              Vitagro is presented in 1kg container. Vitagro is water-soluble
              and can be directly applied to soil through drip irrigation or
              drenching.
            </li>
          </ul>

          {/* Images Grid */}
          <div className="grid grid-cols-2 grid-rows-4 gap-6 mt-4 ">
            <div className="col-span-1 row-span-1">
              <img src={p21} alt="vitagro" className="w-2/3" />
              <h1>
                An effective combination of naturally occurring beneficial{" "}
                <br />
                microorganisms
              </h1>
            </div>
            <div className="col-span-1 row-span-1">
              <img src={p22} alt="vitabax " className="w-2/3" />
              <h1>
                High Concentration of effective Phosphate Solubilising Bactetia{" "}
                <br />
                in water soluble carrier.
              </h1>
            </div>
            <div className="col-span-1 row-span-1">
              <img src={p23} alt="uptek" className="w-2/3" />
              <h1> Enhances Potash Uptake</h1>
            </div>
            <div className="col-span-1 row-span-1">
              <img src={p5} alt="decom5b" className="w-2/3" />
              <h1>Effective Decomposing Bacteria</h1>
            </div>
            <div className="col-span-1 row-span-1">
              <img src={p6} alt="growbax" className="w-2/3" />
              <h1> For healthier growth & higher yields</h1>
            </div>
            <div className="col-span-1 row-span-1">
              <img src={p12} alt="trikowin" className="w-2/3" />
              <h1>Trichoderma viride</h1>
            </div>
            <div className="col-span-1 row-span-1">
              <img src={p9} alt="rizon" className="w-2/3" />
              <h1>Effective Nitogen Fixing Bacteria</h1>
            </div>
            <div className="col-span-1 row-span-1">
              <img src={p2} alt="azolum" className="w-2/3" />
              <h1>Effective nitrogen fixing bacteria for sugar cane</h1>
            </div>
          </div>
        </div>
        </div>

        {/* crops  */}
        <div className="">
        <div className="flex justify-center items top-10 space-x-4 ">
          {/* Green Div */}
          <div className="bg-green-300 p-4 rounded-md">
            <ul className="list-disc ml-6 text-lg text-black font-sans">
              <li>Grapes</li>
              <li>Vegetable</li>
              <li>Sugarcane</li>
              <li>Date Palms</li>
              <li>Rubber</li>
              <li>Corn / Baby corn</li>
              <li>Chilies</li>
            </ul>
          </div>

          {/* Blue Div */}
          <div className="bg-blue-300 p-4 rounded-md">
            <ul className="list-disc ml-6 text-lg text-black font-sans">
              <li>Lawns / Nurseries</li>
              <li>Cloves</li>
              <li>Citrus</li>
              <li>Cardamom Fig</li>
              <li>Mango</li>
              <li>Pomegranate</li>
              <li>Vanilla</li>
            </ul>
          </div>

          {/* Orange Div */}
          <div className="bg-orange-300 p-4 rounded-md">
            <ul className="list-disc ml-6 text-lg text-black font-sans">
              <li>Ginger</li>
              <li>Pepper</li>
              <li>Tea / Coffee</li>
              <li>Strawberry</li>
              <li>Turmeric</li>
              <li>Cotton</li>
              <li>Banana</li>
            </ul>
          </div>

          {/* Purple Div */}
          <div className="bg-purple-300 p-4 rounded-md ">
            <ul className="list-disc ml-6 text-lg text-black font-sans">
              <li>Tobacco</li>
              <li>Apple</li>
              <li>Onion</li>
              <li>Roses</li>
              <li>Gerbera</li>
              <li>Orchids</li>
              <li>Jasmine etc.</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </Layout>
  );
}

export default Agriculture;
