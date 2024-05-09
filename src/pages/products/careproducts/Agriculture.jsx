import React from "react";
import Layout from "../../../components/layout/Layout";
import p21 from "../../../assets/images/products/p21.jpeg";
import p22 from "../../../assets/images/products/p22.jpeg";
import p23 from "../../../assets/images/products/p23.jpeg";
import p26 from "../../../assets/images/products/p26.jpeg";
import p18 from "../../../assets/images/products/p18.jpeg";
import p25 from "../../../assets/images/products/p25.jpeg";
import p24 from "../../../assets/images/products/p24.jpeg";
import p5 from "../../../assets/images/products/p5.png";
import p8 from "../../../assets/images/products/p8.png";
import p6 from "../../../assets/images/products/p6.png";
import p7 from "../../../assets/images/products/p7.png";
import p12 from "../../../assets/images/products/p12.png";
import p11 from "../../../assets/images/products/p11.png";
import p13 from "../../../assets/images/products/p13.jpeg";
import p17 from "../../../assets/images/products/p17.jpeg";

function Agriculture() {
  return (
    <Layout>
      <div className="container mx-auto p-6 mt-10">
        {/* plant growth enhancers */}
        <div className="mb-2">
          {/* Title */}
          <h2 className="text-3xl font-bold myText text-green-700 ">
            Our Products for agriculture
          </h2>
          <p className="text-2xl font-semibold myText  text-blue-600 mt-1  ">
            Plant Growth Enhancers
          </p>

          {/* plant growth */}
          <div className="flex items-center justify-center myText -mt-4">
            {/* Left side */}
            <div className="flex flex-col items-start justify-center w-1/2 pr-4">
              <h1 className="text-3xl  text-indigo-900 myText ">
                Microphos PSB ®
              </h1>
              <h2 className="text-xl font-bold text-black myText mt-1">
                Phosphate Solubilizing Bacteria
              </h2>
              <p className="text-lg myText text-gray-600 leading-snug mt-1">
                Microphos PSB contains phosphate solubilizing bacteria in a
                spore form at a very high concentration of 2x109 CFU form which
                ensures longer shelf life and better sustainability after
                application in soil.
              </p>
            </div>
            {/* Right side */}
            <div className="w-1/2 pl-4 ">
              <img src={p7} alt="microphosPSB" className="w-80 h-150 " />
            </div>
          </div>

          {/* plant growth */}
          <div className="flex items-center justify-center -mt-12  myText">
            {/* Left side */}
            <div className="flex flex-col items-start justify-center w-1/2 pr-4">
              <h1 className="text-3xl  text-indigo-900 myText -mt-2">Uptek®</h1>
              <h2 className="text-xl font-bold text-black myText mt-1">
                Potash Mobilizing Bacteria
              </h2>
              <p className="text-lg myText text-gray-600">
                Uptek contains Potash mobilizing bacteria at a very high
                concentration of 2x109 CFU.
              </p>
            </div>
            {/* Right side */}
            <div className="w-1/2 pl-4">
              <img src={p23} alt="microphosPSB" className="w-80 h-150" />
            </div>
          </div>

          {/* plant growth */}
          <div className="flex items-center justify-center -mt-10 myText">
            {/* Left side */}
            <div className="flex flex-col items-start justify-center w-1/2 pr-4">
              <h1 className="text-3xl  text-indigo-900 myText mt-1 ">
                Vitagro®
              </h1>
              <h2 className="text-xl font-bold text-black myText mt-1">
                Effective Soil Conditioner Bacteria
              </h2>
              <p className="text-lg myText text-gray-600">
                Vitagro promotes the growth of desirable soil microbes and
                creates a conducive microenvironment in the root zone it
                improves the soil structure by decomposing soil organic and
                increasing humus level in the soil in turn helping in better
                moisture retention and buffering properties of the soil.
              </p>
            </div>
            {/* Right side */}
            <div className="w-1/2 pl-4">
              <img src={p21} alt="microphosPSB" className="w-80 h-150" />
            </div>
          </div>
          {/* plant growth */}
          <div className="flex items-center justify-center -mt-2 myText">
            {/* Left side */}
            <div className="flex flex-col items-start justify-center w-1/2 pr-4 mt-1">
              <h1 className="text-3xl  text-indigo-900 myText mt-1 ">
                Zinbax®
              </h1>
              <h2 className="text-xl font-bold text-black myText mt-1">
                Zinc Solubilizing Bacteria; Sulphur Oxidizing Bacteria
              </h2>
              <p className="text-lg myText text-gray-600">
                Zinbax is a unique combination of zinc solubilizing bacteria and
                sulphur oxidising bacteria which also helps for increased
                ferrous availability, Zinc is highly useful for rice crop it
                increases the number of tillers and also grain weight.
              </p>
            </div>
            {/* Right side */}
            <div className="w-1/2 pl-4">
              <img src={p18} alt="microphosPSB" className="w-80 h-150" />
            </div>
          </div>
          {/* plant growth */}
          <div className="flex items-center justify-center -mt-8 myText">
            {/* Left side */}
            <div className="flex flex-col items-start justify-center w-1/2 pr-4">
              <h1 className="text-3xl  text-indigo-900 myText mt-1 ">
                Growbax®
              </h1>

              <p className="text-lg myText text-gray-600">
                Growbax is a consortium of leaf dwelling beneficial bacillus spp
                bacteria.It is useful in lowering harmful chemical pesticides
                (Insecticides & Fungicide) residue management and in disease
                control.
              </p>
            </div>
            {/* Right side */}
            <div className="w-1/2 pl-4">
              <img src={p6} alt="microphosPSB" className="w-80 h-150" />
            </div>
          </div>
          {/* plant growth */}
          <div className="flex items-center justify-center -mt-8 myText">
            {/* Left side */}
            <div className="flex flex-col items-start justify-center w-1/2 pr-4">
              <h1 className="text-3xl  text-indigo-900 myText mt-1 ">
                Vitabax®
              </h1>

              <p className="text-lg myText text-gray-600">
                Vitabax is a powerful bacterial extract, which contains many
                stimulants and hormones which are useful for the growth of crop
                roots. The use of Vitabax is most effective when plants are
                under stress, during unfavourable seasons,when there is an
                infestation of nematodes and other pests. Regular use of Vitabax
                shows positive changes in leaf growth and photosynthesis .
              </p>
            </div>
            {/* Right side */}
            <div className="w-1/2 pl-4">
              <img src={p22} alt="microphosPSB" className="w-80 h-150" />
            </div>
          </div>
          <div className="my-4">
            <h1 className="text-green-700 myText text-xl">
              Plant Growth Enhancers
            </h1>
            <ul className="list-disc list-inside myText text-lg">
              <li>Ace</li>
              <li>Azolum</li>
              <li>Azon</li>
              <li>Rizon</li>
              <li>Microphos PSB</li>
              <li>Uptek®</li>
              <li>Vitagro®</li>
              <li>Zinbax®</li>
              <li>Growbax®</li>
              <li>Vitabax®</li>
              <li>Zinbax</li>
              <li>Vitagro</li>
              <li>Vitagro Dip</li>
              <li>Vitagro Probiotic</li>
              <li>Vitabax Liquid</li>
              <li>UPTEK</li>
            </ul>
          </div>
        </div>
        <hr />

        {/* Bio control Products */}
        <div className=" mt-6 mb-2">
          {/* Title */}
          <h2 className="text-2xl font-semibold myText text-blue-600  ">
            Bio-Control Products
          </h2>
          {/* Bio control 1 */}
          <div className="flex items-center justify-center myText ">
            {/* Left side */}
            <div className="flex flex-col items-start justify-center w-1/2 pr-4">
              <h1 className="text-3xl  text-indigo-900 myText ">Trikowin®</h1>
              <p className="text-lg myText text-gray-600 leading-snug ">
                Trichoderma is a potent biocontrol agent and used extensively
                for pre harvest and post post harvest disease control.It has
                been used successfully against various pathogenic fungi
                belonging to various genera,it also acts as a plant growth
                promoter and also as a bio-remediation agent.
              </p>
            </div>
            {/* Right side */}
            <div className="w-1/2 pl-4">
              <img src={p12} alt="microphosPSB" className="w-80 h-150" />
            </div>
          </div>
          {/* bio control 2 */}
          <div className="flex items-center justify-center  myText -mt-8">
            {/* Left side */}
            <div className="flex flex-col items-start justify-center w-1/2 pr-4">
              <h1 className="text-3xl  text-indigo-900 myText -mt-2  ">
                Sutlex®
              </h1>
              <p className="text-lg myText text-gray-600">
                Sutlex is a multisite acting bio-control agent which makes it
                suitable to be used where the risk of fungicide resistance is
                high.Sutlex,is used for control of soil borne disease and also
                for leaf and fruit diseases on variety of crops.
              </p>
            </div>
            {/* Right side */}
            <div className="w-1/2 pl-4">
              <img src={p23} alt="microphosPSB" className="w-80 h-150" />
            </div>
          </div>
          {/* bio control 3 */}
          <div className="flex items-center justify-center  myText -mt-9">
            {/* Left side */}
            <div className="flex flex-col items-start justify-center w-1/2 pr-4">
              <h1 className="text-3xl  text-indigo-900 myText -mt-2  ">
                Sumonax®
              </h1>

              <p className="text-lg myText text-gray-600">
                Sumonax is useful for control of Pythium,
                Rizoctonia,botrytis,Phytopthora,fusarium,anthracnose,and
                verticillum wilt, which are casual organisms of various plant
                disease like downy mildew damping of built fungal wilt blithe
                anthracnose etc
              </p>
            </div>
            {/* Right side */}
            <div className="w-1/2 pl-4">
              <img src={p26} alt="microphosPSB" className="w-80 h-150" />
            </div>
          </div>
          {/* bio  control 4 */}
          <div className="flex items-center justify-center  myText -mt-8">
            {/* Left side */}
            <div className="flex flex-col items-start justify-center w-1/2 pr-4 mt-1">
              <h1 className="text-3xl  text-indigo-900 myText -mt-2  ">
                Vibimax®
              </h1>

              <p className="text-lg myText text-gray-600">
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
              <img src={p18} alt="microphosPSB" className="w-80 h-150" />
            </div>
          </div>
          {/* bio  control 5 */}
          <div className="flex items-center justify-center  myText -mt-8">
            {/* Left side */}
            <div className="flex flex-col items-start justify-center w-1/2 pr-4">
              <h1 className="text-3xl  text-indigo-900 myText -mt-2 ">
                Nematobax®
              </h1>

              <p className="text-lg myText text-gray-600">
                It is an effective combination of microorganisms which act as a
                powerful biocontrol agent against plant nematodes. Nematobax
                acts as a disease-causing organisms for nematodes, which causes
                disease in nematodes and thus kills them. .
              </p>
            </div>
            {/* Right side */}
            <div className="w-1/2 pl-4">
              <img src={p8} alt="microphosPSB" className="w-80 h-150" />
            </div>
          </div>
          {/* bio  control 6 */}
          <div className="flex items-center justify-center  myText  -mt-2">
            {/* Left side */}
            <div className="flex flex-col items-start justify-center w-1/2 pr-4">
              <h1 className="text-3xl  text-indigo-900 myText -mt-2 ">
                Decom – 5B®
              </h1>
              <h2 className="text-xl font-bold text-black myText mt-1">
                Powerful Decomposing Bacteria
              </h2>
              <p className="text-lg myText text-gray-600">
                Vitabax is a powerful bacterial extract, which contains many
                stimulants and hormones which are useful for the growth of crop
                roots. The use of Vitabax is most effective when plants are
                under stress, during unfavourable seasons,when there is an
                infestation of nematodes and other pests. Regular use of Vitabax
                shows positive changes in leaf growth and photosynthesis .
              </p>
            </div>
            {/* Right side */}
            <div className="w-1/2 pl-4">
              <img src={p5} alt="microphosPSB" className="w-80 h-150" />
            </div>
          </div>
          <div className="my-4">
            <h1 className="text-green-700 myText text-xl">
              Bio-control Products
            </h1>
            <ul className="list-disc list-inside myText text-lg">
              <li>BaxoVAM</li>
              <li>Trikowin®</li>
              <li> Sutlex®</li>
              <li> Sumonax®</li>
              <li> Vibimax®</li>
              <li> Nematobax®</li>
              <li>Decom – 5B®</li>
            </ul>
          </div>
        </div>
        <hr />

        {/* Kits */}
        <div className=" mt-6">
          {/* Title */}
          <h2 className="text-3xl  myText text-blue-600 ">Kits</h2>

          {/* Kit 1 */}
          <div className="flex items-center justify-center myText ">
            {/* Left side */}
            <div className="flex flex-col items-start justify-center w-1/2 pr-4">
              <h1 className="text-3xl  text-indigo-900 myText ">
                Bhuvikas Kits (A&B) ®
              </h1>

              <p className="text-lg myText text-gray-600 leading-snug mt-1">
                Bhuvikas kit A and B is useful for sugar cane and banana crops.
                The kit helps stop the fixation of chemical fertilizers given to
                the crop in the soil so that the nutrients are fully available
                to the crop.In sugar cane crops the benefits can be seen in
                increase in the distance between two nodes along with increase
                in the weight of sugarcane and yield.The benefits in Banana
                crops are increased leaf growth and fruit length.
              </p>
            </div>
            {/* Right side */}
            <div className="w-1/2 pl-4">
              <img src={p25} alt="microphosPSB" className="w-40 h-100" />
              <img src={p24} alt="microphosPSB" className="w-40 h-100" />
            </div>
          </div>

          {/* Kit 2*/}
          <div className="flex items-center justify-center -mt-2 myText ">
            {/* Left side */}
            <div className="flex flex-col items-start justify-center w-1/2 pr-4">
              <h1 className="text-3xl  text-indigo-900 myText ">
                Ginger & Turmeric Kit ®
              </h1>

              <p className="text-lg myText text-gray-600">
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
              <img src={p13} alt="microphosPSB" className="w-80 h-150" />
            </div>
          </div>

          {/* Kit 3 */}
          <div className="flex items-center justify-center -mt-2 myText">
            {/* Left side */}
            <div className="flex flex-col items-start justify-center w-1/2 pr-4">
              <h1 className="text-3xl  text-indigo-900 myText mt-1 ">
                Vegetable Kit ®
              </h1>

              <p className="text-lg myText text-gray-600">
                Recognising the need of various vegetable crops, Microbax has
                developed a vegetable kit which is compiled using various
                Microbax’s products.The kit is extremely beneficial in
                increasing the number of fruits as well as increasing the number
                of flowers in large quantities there by increasing the yield
                multifolds. The kit is capable of resolving problems regarding
                fruit quality related to flowering of the vegetable crop by
                stopping the fixation of chemical fertilizers in the soil the
                crop get maximum nutrients from it and also saves on chemical
                fertilizers costs.
              </p>
            </div>
            {/* Right side */}
            <div className="w-1/2 pl-4">
              <img src={p17} alt="microphosPSB" className="w-80 h-150" />
            </div>
          </div>
          {/* Kit 4 */}
          <div className="flex items-center justify-center mt-2 myText">
            {/* Left side */}
            <div className="flex flex-col items-start justify-center w-1/2 pr-4 mt-1">
              <h1 className="text-3xl  text-indigo-900 myText mt-1 ">
                Onion Kit ®
              </h1>

              <p className="text-lg myText text-gray-600">
                The kit improves the fast root development in onion crop which
                is necessary for faster establishment of saplings after
                transplanting. It supplies plants with natural and amonical form
                of nitrogen which helps in reducing insects and disease
                infestation. It also supplies the plant with phosphorus required
                for more photosynthesis, proper coloration and balanced C:N
                ratio,thereby increasing the yield. The kit helps in controlling
                soil borne pathogens as well leading to sustainable growth of
                the crop.
              </p>
            </div>
            {/* Right side */}
            <div className="w-1/2 pl-4">
              <img src={p11} alt="microphosPSB" className="w-80 h-150" />
            </div>
          </div>

          <div className="my-4">
            <h1 className="text-green-700 myText text-xl">Kits</h1>
            <ul className="list-disc list-inside myText text-lg">
              <li>Fruit Kit</li>
              <li>Onion Kit</li>
              <li>Ginger & Turmeric Kit</li>
              <li>Paddy Kit</li>
              <li>Cotton Kit</li>
              <li>Chili Kit</li>
              <li>Vegetable Kit</li>
              <li>Bhuvikas A</li>
              <li>Bhuvikas B</li>
            </ul>
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
