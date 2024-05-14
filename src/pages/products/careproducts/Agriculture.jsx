import React from "react";
import Layout from "../../../components/layout/Layout";
import p21 from "../../../assets/images/products/p21.jpeg";
import p22 from "../../../assets/images/products/p22.jpeg";
import p23 from "../../../assets/images/products/p23.jpeg";
import p26 from "../../../assets/images/products/p26.jpeg";
import p18 from "../../../assets/images/products/p18.jpeg";
import p25 from "../../../assets/images/products/p25.jpeg";
// import p24 from "../../../assets/images/products/p24.jpeg";
import p5 from "../../../assets/images/products/p5.png";
import p8 from "../../../assets/images/products/p8.png";
import p6 from "../../../assets/images/products/p6.png";
import p7 from "../../../assets/images/products/p7.png";
import p10 from "../../../assets/images/products/p10.png";
import p1 from "../../../assets/images/products/p1.png";
import p2 from "../../../assets/images/products/p2.png";
import p14 from "../../../assets/images/products/p14.jpeg";
import p15 from "../../../assets/images/products/p15.jpeg";
import p3 from "../../../assets/images/products/p3.png";
import p12 from "../../../assets/images/products/p12.png";
import p11 from "../../../assets/images/products/p11.png";
import p20 from "../../../assets/images/products/p20.jpeg";
import p13 from "../../../assets/images/products/p13.jpeg";
import p16 from "../../../assets/images/products/p16.jpeg"
import p17 from "../../../assets/images/products/p17.jpeg";

function Agriculture() {
  return (
    <Layout>
      <div className="container mx-auto p-6 mt-10">
        {/* plant growth enhancers */}
        <div className=" mb-4 md:mb-12 lg:mb-16">
          {/* Title */}
          <h2 className="text-3xl font-bold myText text-green-700 ">
            Our Products for agriculture
          </h2>
          <p className="text-2xl font-semibold myText  text-blue-600 mt-1  ">
            Plant Growth Enhancers
          </p>
          {/* plant growth 1 */}
          <div className="mt-1  ">
            <div className="flex items-center justify-center myText -mt-4 sm:mt-2 md:mt-4 flex-wrap">
              {/* Left side */}
              <div className="flex flex-col items-start justify-center  w-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <h1 className="text-3xl  text-indigo-900 myText ">
                  Microphos PSB ®
                </h1>
                <h2 className="text-xl font-bold text-black myText ">
                  Phosphate Solubilizing Bacteria
                </h2>
                <p className="text-lg myText text-gray-600 leading-snug">
                  Microphos PSB contains phosphate solubilizing bacteria in a
                  spore form at a very high concentration of 2x109 CFU form
                  which ensures longer shelf life and better sustainability
                  after application in soil.
                </p>
              </div>
              {/* Right side */}
              <div className="w-1/2 pl-4 ">
                <img
                  src={p7}
                  alt="microphosPSB"
                  className="w-full sm:w-80 h-150 "
                />
              </div>
            </div>
          </div>
          {/* plant growth  2*/}
          <div className=" -mt-14">
            <div className="flex items-center justify-center sm:mt-8  myText flex-wrap">
              {/* Left side */}
              <div className="flex flex-col items-start justify-center w-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <h1 className="text-3xl  text-indigo-900 myText ">Uptek®</h1>
                <h2 className="text-xl font-bold text-black myText">
                  Potash Mobilizing Bacteria
                </h2>
                <p className="text-lg myText text-gray-600 leading-snug">
                  Uptek contains Potash mobilizing bacteria at a very high
                  concentration of 2x109 CFU.
                </p>
              </div>
              {/* Right side */}
              <div className="w-1/2 pl-4">
                <img src={p23} alt="uptek" className="w-full sm:w-80 h-150" />
              </div>
            </div>
          </div>

          {/* plant growth 3*/}
          <div className="-mt-12 ">
            <div className="flex items-center justify-center   sm:mt-4   myText flex-wrap">
              {/* Left side */}
              <div className="flex flex-col items-start justify-center w-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <h1 className="text-3xl  text-indigo-900 myText mt-1 ">
                  Vitagro®
                </h1>
                <h2 className="text-xl font-bold text-black myText mt-1">
                  Effective Soil Conditioner Bacteria
                </h2>
                <p className="text-lg myText text-gray-600 leading-snug">
                  Vitagro promotes the growth of desirable soil microbes and
                  creates a conducive microenvironment in the root zone it
                  improves the soil structure by decomposing soil organic and
                  increasing humus level in the soil in turn helping in better
                  moisture retention and buffering properties of the soil.
                </p>
              </div>
              {/* Right side */}
              <div className="w-1/2 pl-4">
                <img src={p21} alt="vitagro" className="w-full sm:w-80 h-150" />
              </div>
            </div>
          </div>

          {/* plant growth 4*/}
          <div className="-mt-6 ">
            <div className="flex items-center justify-center  sm:mt-8 myText flex-wrap">
              {/* Left side */}
              <div className="flex flex-col items-start justify-center w-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <h1 className="text-3xl  text-indigo-900 myText">Zinbax®</h1>
                <h2 className="text-xl font-bold text-black myText ">
                  Zinc Solubilizing Bacteria; Sulphur Oxidizing Bacteria
                </h2>
                <p className="text-lg myText text-gray-600 leading-snug">
                  Zinbax is a unique combination of zinc solubilizing bacteria
                  and sulphur oxidising bacteria which also helps for increased
                  ferrous availability, Zinc is highly useful for rice crop it
                  increases the number of tillers and also grain weight.
                </p>
              </div>
              {/* Right side */}
              <div className="w-1/2 pl-4">
                <img src={p18} alt="Zinbax" className="w-full sm:w-80 h-150" />
              </div>
            </div>
          </div>
          {/* plant growth 5*/}

          <div className="-mt-6">
            <div className="flex items-center justify-center sm:mt-4 myText flex-wrap">
              {/* Left side */}
              <div className="flex flex-col items-start justify-center w-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <h1 className="text-3xl  text-indigo-900 myText ">Growbax®</h1>

                <p className="text-lg myText text-gray-600 leading-snug">
                  Growbax is a consortium of leaf dwelling beneficial bacillus
                  spp bacteria.It is useful in lowering harmful chemical
                  pesticides (Insecticides & Fungicide) residue management and
                  in disease control.
                </p>
              </div>
              {/* Right side */}
              <div className="w-1/2 pl-4">
                <img src={p6} alt="Growbax" className="w-full sm:w-80 h-150" />
              </div>
            </div>
          </div>
          {/* plant growth 6*/}
          <div className="-mt-4 ">
            <div className="flex items-center justify-center sm:-mt-2 myText flex-wrap">
              {/* Left side */}
              <div className="flex flex-col items-start justify-center w-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <h1 className="text-3xl  text-indigo-900 myText ">Vitabax®</h1>

                <p className="text-lg myText text-gray-600 leading-snug">
                  Vitabax is a powerful bacterial extract, which contains many
                  stimulants and hormones which are useful for the growth of
                  crop roots. The use of Vitabax is most effective when plants
                  are under stress, during unfavourable seasons,when there is an
                  infestation of nematodes and other pests. Regular use of
                  Vitabax shows positive changes in leaf growth and
                  photosynthesis .
                </p>
              </div>
              {/* Right side */}
              <div className="w-1/2 pl-4">
                <img src={p22} alt="vitabax" className="w-full sm:w-80 h-150" />
              </div>
            </div>
          </div>

          {/* plant growth 7 */}
          <div className="mt-4">
            <div className="flex items-center justify-center -mt-4 sm:mt-4 myText flex-wrap">
              {/* Left side */}
              <div className="flex flex-col items-start justify-center w-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <h1 className="text-3xl  text-indigo-900 myText ">Vitabax®</h1>

                <p className="text-lg myText text-gray-600 leading-snug">
                  Vitabax is a powerful bacterial extract, which contains many
                  stimulants and hormones which are useful for the growth of
                  crop roots. The use of Vitabax is most effective when plants
                  are under stress, during unfavourable seasons,when there is an
                  infestation of nematodes and other pests. Regular use of
                  Vitabax shows positive changes in leaf growth and
                  photosynthesis .
                </p>
              </div>
              {/* Right side */}
              <div className="w-1/2 pl-4">
                <img
                  src={p22}
                  alt="microphosPSB"
                  className="w-full sm:w-80 h-150"
                />
              </div>
            </div>
          </div>

          {/* plant growth 8 */}
          <div className="mt-2">
            <div className="flex items-center justify-center  myText flex-wrap">
              {/* Left side */}
              <div className="flex flex-col items-start justify-center w-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <h1 className="text-3xl  text-indigo-900 myText ">
                  Ace Bio Fertilizer
                </h1>

                <p className="text-lg myText text-gray-600 leading-snug">
                  Ace contains Acetobacter spp., a symbiotic bacteria that fixes
                  atmospheric nitrogen in crops like Sugarcane, Fruits, Sweet
                  potato, Coffee, Ragi, Tea, and Banana. Acetobactor spp
                  naturally enhances soil nitrogen content, contributing to
                  improved crop yield and quality, while reducing the need for
                  synthetic nitrogen fertilizers
                </p>
              </div>
              {/* Right side */}
              <div className="w-1/2 pl-4">
                <img
                  src={p1}
                  alt="AceBioferyilizer"
                  className="w-full sm:w-80 h-150"
                />
              </div>
            </div>
          </div>

          {/* plant growth 9 */}
          <div className="mt-2">
            <div className="flex items-center justify-center myText flex-wrap">
              {/* Left side */}
              <div className="flex flex-col items-start justify-center w-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <h1 className="text-3xl  text-indigo-900 myText ">
                  Azolum-Nitrogen Fixing Bacteria
                </h1>

                <p className="text-lg myText text-gray-600 leading-snug">
                  Azolum, enriched with Azospirillum spp., enhances nitrogen
                  fixation in paddy, wheat, and all cereal crops. Beyond that,
                  it bestows plants with systemic acquired resistance (SAR), a
                  shield against pests and diseases. Whether used during
                  seedling treatment or soil application, Azolum delivers
                  remarkable results in Paddy, Wheat, and Maize with increased
                  tiller count, towering plant growth, and a substantial boost
                  in grain yield.
                </p>
              </div>
              {/* Right side */}
              <div className="w-1/2 pl-4">
                <img src={p2} alt="Azolum" className="w-full sm:w-80 h-150" />
              </div>
            </div>
          </div>

          {/* plant growth 10 */}
          <div className="mt-2">
            <div className="flex items-center justify-center  myText flex-wrap">
              {/* Left side */}
              <div className="flex flex-col items-start justify-center w-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <h1 className="text-3xl  text-indigo-900 myText ">
                  Azon-Azotobacter
                </h1>

                <p className="text-lg myText text-gray-600 leading-snug">
                  Azon, housing Azotobacter sp., the asymbiotic nitrogen-fixing
                  bacteria, is the ideal remedy for nitrogen-starved
                  monocotyledons. At a concentrated 2X10^9 CFU per ml, Azon has
                  the capacity to fix approximately 20kg of nitrogen per acre
                  each year. This significant nitrogen infusion not only
                  elevates nutrient accessibility for monocotyledons but also
                  leads to an overarching enhancement in soil quality..
                </p>
              </div>
              {/* Right side */}
              <div className="w-1/2 pl-4">
                <img src={p3} alt="Azon" className="w-full sm:w-80 h-150" />
              </div>
            </div>
          </div>

          {/* plant growth 11*/}
          <div className="mt-2">
            <div className="flex items-center justify-center  myText flex-wrap">
              {/* Left side */}
              <div className="flex flex-col items-start justify-center w-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <h1 className="text-3xl  text-indigo-900 myText ">
                  Vitagro Dip Probiotic
                </h1>

                <p className="text-lg myText text-gray-600 leading-snug">
                  Vitagro excels in fostering the proliferation of beneficial
                  soil microbes, creating an ideal microenvironment within the
                  root zone. This microenvironment supports the efficient
                  absorption of nutrients, nurturing robust plant growth.
                  Furthermore, Vitagro plays a crucial role in enhancing soil
                  structure by breaking down organic matter and elevating humus
                  levels, which, in turn, improves moisture retention and
                  bolsters the soil's buffering capabilities leading to overall
                  plant growth and resilience.
                </p>
              </div>
              {/* Right side */}
              <div className="w-1/2 pl-4">
                <img
                  src={p20}
                  alt="vitagroDiprobiiotic"
                  className="w-full sm:w-80 h-150"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />

        {/* Bio control Products */}
        <div className=" mt-2 mb-2 md:mb-8 lg:mb-10">
          {/* Title */}
          <h2 className="text-2xl font-semibold myText text-blue-600  ">
            Bio-Control Products
          </h2>
          {/* bio control 1 */}
          <div className="-mt-2 sm:mt-2 md:mt-2">
            <div className="flex items-center justify-center myText flex-wrap ">
              {/* Left side */}
              <div className="flex flex-col items-start justify-center  w-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <h1 className="text-3xl  text-indigo-900 myText ">Trikowin®</h1>

                <p className="text-lg myText text-gray-600 leading-snug mt-1">
                  Trichoderma is a potent biocontrol agent and used extensively
                  for pre harvest and post post harvest disease control.It has
                  been used successfully against various pathogenic fungi
                  belonging to various genera,it also acts as a plant growth
                  promoter and also as a bio-remediation agent.
                </p>
              </div>
              {/* Right side */}
              <div className="w-1/2 pl-4">
                <img
                  src={p12}
                  alt="trikowin"
                  className="w-full sm:w-80 h-150 "
                />
              </div>
            </div>
          </div>

          {/* bio control 2 */}
          <div className="-mt-6 sm:mt-2 md:mt-2">
            <div className="flex items-center justify-center myText flex-wrap">
              {/* Left side */}
              <div className="flex flex-col items-start justify-center  w-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <h1 className="text-3xl  text-indigo-900 myText ">Sutlex®</h1>

                <p className="text-lg myText text-gray-600 leading-snug">
                  Sutlex is a multisite acting bio-control agent which makes it
                  suitable to be used where the risk of fungicide resistance is
                  high.Sutlex,is used for control of soil borne disease and also
                  for leaf and fruit diseases on variety of crops.
                </p>
              </div>
              {/* Right side */}
              <div className="w-1/2 pl-4">
                <img src={p25} alt="sultex" className="w-full sm:w-80 h-150 " />
              </div>
            </div>
          </div>
          {/* bio control 3 */}
          <div className="-mt-6 sm:mt-2 md:mt-2">
            <div className="flex items-center justify-center myText flex-wrap">
              {/* Left side */}
              <div className="flex flex-col items-start justify-center w-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <h1 className="text-3xl  text-indigo-900 myText ">Sumonax®</h1>

                <p className="text-lg myText text-gray-600 leading-snug mt-1">
                  Sumonax is useful for control of Pythium,
                  Rizoctonia,botrytis,Phytopthora,fusarium,anthracnose,and
                  verticillum wilt, which are casual organisms of various plant
                  disease like downy mildew damping of built fungal wilt blithe
                  anthracnose etc
                </p>
              </div>
              {/* Right side */}
              <div className="w-1/2 pl-4">
                <img src={p26} alt="sumonax" className="w-full sm:w-80 h-150" />
              </div>
            </div>
          </div>
          {/* bio control 4 */}
          <div className="-mt-6 sm:mt-2 md:mt-2">
            <div className="flex items-center justify-center myText flex-wrap">
              {/* Left side */}
              <div className="flex flex-col items-start justify-center w-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <h1 className="text-3xl  text-indigo-900 myText ">Vibimax®</h1>

                <p className="text-lg myText text-gray-600 leading-snug mt-1">
                  Vibimax s a combination off entomopathogenic useful mycoagents
                  which secrete various myco-toxins that help in control of
                  various insects. It is useful for bio-control of insects
                  belonging to Arthopods, Diptera and Lepidoptera which includes
                  white grub, mealybug, thrips, aphids,jassids, plant hopper,
                  beetles, caterpillars, stem borer, mites etc
                </p>
              </div>
              {/* Right side */}
              <div className="w-1/2 pl-4">
                <img src={p25} alt="vibimax" className="w-full sm:w-80 h-150" />
              </div>
            </div>
          </div>
          {/* bio  control 5 */}
          <div className="-mt-8 sm:mt-2 md:mt-2">
            <div className="flex items-center justify-center myText flex-wrap ">
              {/* Left side */}
              <div className="flex flex-col items-start justify-center w-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <h1 className="text-3xl  text-indigo-900 myText ">
                  Nematobax®
                </h1>

                <p className="text-lg myText text-gray-600 leading-snug mt-1">
                  It is an effective combination of microorganisms which act as
                  a powerful biocontrol agent against plant nematodes. Nematobax
                  acts as a disease-causing organisms for nematodes, which
                  causes disease in nematodes and thus kills them.
                </p>
              </div>
              {/* Right side */}
              <div className="w-1/2 pl-4">
                <img
                  src={p8}
                  alt="microphosPSB"
                  className="w-full sm:w-80 h-150"
                />
              </div>
            </div>
          </div>
          {/* bio cintrol 6 */}
          <div className="-mt-6 sm:mt-2 md:mt-2">
            <div className="flex items-center justify-center myText flex-wrap ">
              {/* Left side */}
              <div className="flex flex-col items-start justify-center w-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <h1 className="text-3xl  text-indigo-900 myText ">
                  Decom – 5B®
                </h1>

                <p className="text-lg myText text-gray-600 leading-snug mt-1">
                  <span className="text-lg myText text-black font-bold">
                    Powerful Decomposing Bacteria
                  </span>{" "}
                  <br /> Decom - 5B contains 5 types of anaerobic bacteria which
                  decompose various organic matter at a very fast rate. Decom -
                  5B useful to decompose banana waste, animal waste,farm waste
                  and various other biomasses.
                </p>
              </div>
              {/* Right side */}
              <div className="w-1/2 pl-4">
                <img
                  src={p5}
                  alt="microphosPSB"
                  className="w-full sm:w-80 h-150"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />

        {/* Kits */}
        <div className=" mt-6 mb-8 md:mb-12 lg:mb-16">
          {/* Title */}
          <h2 className="text-3xl  myText text-blue-600 ">Kits</h2>

          {/* Kit 1 */}
          <div className="mt-2 sm:mt-2 md:mt-4">
            <div className="flex items-center justify-center myText flex-wrap ">
              {/* Left side */}
              <div className="flex flex-col items-start justify-center w-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <h1 className="text-3xl  text-indigo-900 myText ">
                  Bhuvikas Kits (A&B) ®
                </h1>

                <p className="text-lg myText text-gray-600 leading-snug mt-1">
                  Bhuvikas kit A and B is useful for sugar cane and banana
                  crops. The kit helps stop the fixation of chemical fertilizers
                  given to the crop in the soil so that the nutrients are fully
                  available to the crop.In sugar cane crops the benefits can be
                  seen in increase in the distance between two nodes along with
                  increase in the weight of sugarcane and yield.The benefits in
                  Banana crops are increased leaf growth and fruit length.
                </p>
              </div>
              {/* Right side */}
              <div className="w-1/2 pl-4">
                <img
                  src={p25}
                  alt="bhuvikas kit "
                  className="w-full sm:w-80 h-150"
                />
              </div>
            </div>
          </div>

          {/* Kit 2*/}
          <div className="mt-2 sm:mt-2 md:mt-4">
            <div className="flex items-center justify-center -mt-2 myText flex-wrap">
              {/* Left side */}
              <div className="flex flex-col items-start justify-center w-1/2 pr-4  w-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <h1 className="text-3xl  text-indigo-900 myText ">
                  Ginger & Turmeric Kit ®
                </h1>

                <p className="text-lg myText text-gray-600 leading-snug">
                  Tailored to the need of ginger and turmeric crops,the kit
                  enables increase in the number of tillers and tubers from the
                  plants. The kit increases the availability of fixed plant
                  nutrients which not only improves the soil properties thereby
                  promoting the growth (weight & size) in turmeric and ginger
                  crops.
                </p>
              </div>
              {/* Right side */}
              <div className="w-1/2 pl-4">
                <img
                  src={p13}
                  alt="ginger turmeric kit"
                  className="w-full sm:w-80 h-150"
                />
              </div>
            </div>
          </div>

          {/* Kit 3 */}
          <div className="mt-2 sm:mt-2 md:mt-4">
            <div className="flex items-center justify-center -mt-2 myText flex-wrap">
              {/* Left side */}
              <div className="flex flex-col items-start justify-center  w-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <h1 className="text-3xl  text-indigo-900 myText mt-1 ">
                  Vegetable Kit ®
                </h1>

                <p className="text-lg myText text-gray-600 leading-snug">
                  Recognising the need of various vegetable crops, Microbax has
                  developed a vegetable kit which is compiled using various
                  Microbax’s products.The kit is extremely beneficial in
                  increasing the number of fruits as well as increasing the
                  number of flowers in large quantities there by increasing the
                  yield multifolds. The kit is capable of resolving problems
                  regarding fruit quality related to flowering of the vegetable
                  crop by stopping the fixation of chemical fertilizers in the
                  soil the crop get maximum nutrients from it and also saves on
                  chemical fertilizers costs.
                </p>
              </div>
              {/* Right side */}
              <div className="w-1/2 pl-4">
                <img
                  src={p17}
                  alt="vegetable kit"
                  className="w-full sm:w-80 h-150"
                />
              </div>
            </div>
          </div>
          {/* Kit 4 */}
          <div className="mt-2 sm:mt-2 md:mt-4 ">
            <div className="flex items-center justify-center mt-2 myText flex-wrap">
              {/* Left side */}
              <div className="flex flex-col items-start justify-centerw-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <h1 className="text-3xl  text-indigo-900 myText mt-1 ">
                  Onion Kit ®
                </h1>

                <p className="text-lg myText text-gray-600 leading-snug">
                  The kit improves the fast root development in onion crop which
                  is necessary for faster establishment of saplings after
                  transplanting. It supplies plants with natural and amonical
                  form of nitrogen which helps in reducing insects and disease
                  infestation. It also supplies the plant with phosphorus
                  required for more photosynthesis, proper coloration and
                  balanced C:N ratio,thereby increasing the yield. The kit helps
                  in controlling soil borne pathogens as well leading to
                  sustainable growth of the crop.
                </p>
              </div>
              {/* Right side */}
              <div className="w-1/2 pl-4">
                <img
                  src={p11}
                  alt="onion kit"
                  className="w-full sm:w-80 h-150"
                />
              </div>
            </div>
          </div>

          {/* Kit 5 */}
          <div className="mt-2 sm:mt-2 md:mt-4 ">
            <div className="flex items-center justify-center mt-2 myText flex-wrap">
              {/* Left side */}
              <div className="flex flex-col items-start justify-centerw-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <h1 className="text-3xl  text-indigo-900 myText mt-1 ">
                  Fruit Kit (4 Products Inside)
                </h1>

                <p className="text-lg myText text-gray-600 leading-snug">
                  Microbax's Fruit Kit is meticulously designed to cater to the
                  unique requirements of fruit crops. This tailored solution
                  brings multiple benefits to fruit cultivation, enhancing
                  flower and fruit production, improving fruit setting, and
                  elevating fruit quality. It also promotes larger, sweeter
                  fruits, bolsters plant health, and fortifies disease
                  resistance. Consistently delivering high-quality yields, the
                  Fruit Kit is the go-to choice for fruit-bearing plant
                  cultivation enabling growers to achieve higher profits.
                  Additionally, the kit reduces the dependence on chemical
                  fertilizers, making it a sustainable choice for fruit
                  cultivation.
                </p>
              </div>
              {/* Right side */}
              <div className="w-1/2 pl-4">
                <img
                  src={p10}
                  alt="Fruit kit"
                  className="w-full sm:w-80 h-150"
                />
              </div>
            </div>
          </div>

          {/* Kit 6 */}
          <div className="mt-2 sm:mt-2 md:mt-4 ">
            <div className="flex items-center justify-center mt-2 myText flex-wrap">
              {/* Left side */}
              <div className="flex flex-col items-start justify-centerw-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <h1 className="text-3xl  text-indigo-900 myText mt-1 ">
                  Paddy Kit
                </h1>

                <p className="text-lg myText text-gray-600 leading-snug">
                  Microbax presents the Paddy Kit, a specially tailored solution
                  designed to meet the precise needs of paddy crops. This
                  comprehensive kit delivers a multitude of advantages,
                  including the promotion of robust root development, efficient
                  nutrient uptake, and accelerated plant growth. The Paddy Kit
                  excels at increasing tiller and grain numbers, resulting in
                  elevated yields. Its components also play a vital role in
                  maintaining a well-balanced nutrient supply to paddy crops,
                  effectively preventing irregular grain shapes caused by
                  nutrient deficiencies or imbalances. This ensures a more
                  uniform and plumper shape for the harvested paddy grains. With
                  increased paddy yield and improved quality, the paddy kit
                  enables growers to achieve higher profits. Additionally, the
                  kit reduces the dependence on chemical fertilizers, making it
                  a sustainable choice for paddy cultivation.
                </p>
              </div>
              {/* Right side */}
              <div className="w-1/2 pl-4">
                <img
                  src={p14}
                  alt="Paddy kit"
                  className="w-full sm:w-80 h-150"
                />
              </div>
            </div>
          </div>

          {/* Kit 7 */}
          <div className="mt-2 sm:mt-2 md:mt-4 ">
            <div className="flex items-center justify-center mt-2 myText flex-wrap">
              {/* Left side */}
              <div className="flex flex-col items-start justify-centerw-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <h1 className="text-3xl  text-indigo-900 myText mt-1 ">
                  Cotton Kit
                </h1>

                <p className="text-lg myText text-gray-600 leading-snug">
                  Microbax presents the Cotton Kit, precision-engineered to
                  cater to the unique requirements of cotton crops. This
                  specialized solution brings a host of benefits to cotton
                  cultivation, including the promotion of robust root
                  development, heightened nutrient absorption, and an overall
                  boost in plant growth. The all-encompassing kit plays a
                  pivotal role in bolstering the quantity of cotton bolls while
                  simultaneously enhancing the quality of cotton fibers. By
                  optimizing nutrient utilization from the soil, the Cotton Kit
                  not only elevates cotton yield but also diminishes the
                  dependence on chemical fertilizers, underscoring its
                  environmentally responsible approach to cotton farming. With
                  increased cotton yield and improved quality, the cotton kit
                  enables growers to achieve higher profits leading to a more
                  sustainable long-term business.
                </p>
              </div>
              {/* Right side */}
              <div className="w-1/2 pl-4">
                <img
                  src={p15}
                  alt="cotton kit"
                  className="w-full sm:w-80 h-150"
                />
              </div>
            </div>
          </div>

          {/* Kit 8 */}
          <div className="mt-2 sm:mt-2 md:mt-4 ">
            <div className="flex items-center justify-center mt-2 myText flex-wrap">
              {/* Left side */}
              <div className="flex flex-col items-start justify-centerw-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <h1 className="text-3xl  text-indigo-900 myText mt-1 ">
                  Chili Kit
                </h1>

                <p className="text-lg myText text-gray-600 leading-snug">
                  Microbax introduces its tailor-made Chilli Kit, meticulously
                  crafted to meet the distinct requirements of the Chilli crop.
                  This all-inclusive solution presents a plethora of advantages,
                  notably elevating flower and fruit production to remarkable
                  levels, resulting in a substantial enhancement of yields.
                  However, the benefits extend far beyond increased yield. Our
                  comprehensive kit serves as a catalyst for robust root
                  development, effectively optimizing nutrient availability from
                  the soil. This holistic approach leads to an overarching
                  enhancement in plant health, consequently elevating
                  productivity and elevating the overall quality of various
                  vegetable crops. Moreover, the kit champions sustainable
                  agriculture by reducing reliance on chemical fertilizers,
                  positioning it as the environmentally conscious choice for
                  Chilli cultivation. With increased Chilli yield and improved
                  quality, Chilli Kit enables growers to achieve higher profits
                  leading to a more sustainable long-term business.
                </p>
              </div>
              {/* Right side */}
              <div className="w-1/2 pl-4">
                <img
                  src={p16}
                  alt="chilli kit"
                  className="w-full sm:w-80 h-150"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* crops  */}
      <div className="mb-6 mt-2">
        <div className="flex justify-center items top-10 space-x-4 ">
          {/* Green Div */}
          <div className="bg-green-300 p-4 rounded-md">
            <ul className="list-disc ml-6 text-lg text-black myText">
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
            <ul className="list-disc ml-6 text-lg text-black myText">
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
          <div className="bg-orange-300 p-4 rounded-md ">
            <ul className="list-disc ml-6 text-lg text-black myText">
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
            <ul className="list-disc ml-6 text-lg text-black myText">
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
    </Layout>
  );
}

export default Agriculture;
