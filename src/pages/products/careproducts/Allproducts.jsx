import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../components/layout/Layout";
import Picture1 from "../../../assets/images/Picture1.png"

function Allproducts() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Ace Bio Fertilizer",
      price: 462,
      description:
        "Ace contains Acetobacter spp., a symbiotic bacteria that fixes atmospheric nitrogen in crops like Sugarcane, Fruits, Sweet potato, Coffee, Ragi, Tea, and Banana. Acetobactor spp naturally enhances soil nitrogen content, contributing to improved crop yield and quality, while reducing the need for synthetic nitrogen fertilizers. ",
      unit: "(500mililiters)",
      image: require("../../../assets/images/products/p1.png"),
    },
    {
      id: 2,
      name: "Azolum-Nitrogen Fixing Bacteria",
      price: 440.4,
      description:
        "Azolum, enriched with Azospirillum spp., enhances nitrogen fixation in paddy, wheat, and all cereal crops. Beyond that, it bestows plants with systemic acquired resistance (SAR), a shield against pests and diseases. Whether used during seedling treatment or soil application, Azolum delivers remarkable results in Paddy, Wheat, and Maize with increased tiller count, towering plant growth, and a substantial boost in grain yield.",
      quantity: 10,
      unit: "500milliliters",
      image: require("../../../assets/images/products/p2.png"),
    },
    {
      id: 3,
      name: "Azon - Azotobacter",
      price: 360,
      description:
        "Azon, housing Azotobacter sp., the asymbiotic nitrogen-fixing bacteria, is the ideal remedy for nitrogen-starved monocotyledons. At a concentrated 2X10^9 CFU per ml, Azon has the capacity to fix approximately 20kg of nitrogen per acre each year. This significant nitrogen infusion not only elevates nutrient accessibility for monocotyledons but also leads to an overarching enhancement in soil quality..",
      quantity: 10,
      unit: "500 milliliters ",
      image: require("../../../assets/images/products/p3.png"),
    },
    {
      id: 4,
      name: "BaxoVAM ",
      price: "1,314",
      description:
        "BaxoVAM, crafted by Microbax, contains Mycorrhiza which forms a protective shield around the roots of various crops, amplifying water and nutrient absorption. With the addition of natural micronutrients and myco-stimulants, BaxoVAM nurtures plant growth, improves root health, and protects against harmful microorganisms.",
      quantity: 10,
      unit: "200 grams",
      image: require("../../../assets/images/products/p4.png"),
    },
    {
      id: 5,
      name: "Decom 5B - Effective Bacteria",
      price: 672,
      description:
        "Decom-5B is a potent product developed by Microbax, featuring five types of aerobic bacteria. It's meticulously engineered to decompose a variety of organic materials rapidly. Operating at lightning-fast speeds, Decom-5B rejuvenates the natural decomposition process, ensuring the preservation of essential nutrients, making the resulting decomposed material highly beneficial for crops. 1 kilogram of Decom-5B, can efficiently decompose 900 kilograms of biomass.",
      quantity: 10,
      unit: "1kg",
      image: require("../../../assets/images/products/p5.png"),
    },
    {
      id: 6,
      name: "Probiotic Growbax",
      price: "984",
      description:
        "Growbax, a consortium of leaf-dwelling beneficial bacillus spp., serves as a natural shield for plants against a spectrum of diseases. Its unique strength lies in reducing chemical pesticide residues. By ingeniously utilizing nitrogen and phosphorus from pesticide residues as an energy source, it artfully transforms harmful pesticide structures, ensuring the safety of farm produce for all. In trials, Growbax has demonstrated the remarkable ability to reduce harmful residues by 60 to 80%, along with a decrease in the number of detected molecules. In essence, Growbax champions plant protection against diseases and minimizes chemical pesticide residues in farm produce.",
      quantity: 10,
      unit: "500grams",
      image: require("../../../assets/images/products/p6.png"),
    },
    {
      id: 7,
      name: "Microphos PSB",
      price: 630,
      description:
        " Microphos PSB, housing phosphate-solubilizing bacteria in a resilient spore form, presents an impressive concentration of 2x10^9 CFU. This distinctive feature ensures an extended shelf life and enhanced sustainability post-application in the soil. Through its exceptional ability to solubilize phosphorus in the soil, Microphos PSB becomes a catalyst for plant growth and increased yield potential..",
      quantity: 10,
      unit: "1kg",
      image: require("../../../assets/images/products/p7.png"),
    },
    {
      id: 8,
      name: "Nematobax",
      price: 918,
      description:
        "Nematobax, developed by Microbax, employs a unique blend of microorganisms to combat nematode infestation. Flourishing in the soil, it occupies a significant portion of the rhizosphere. Notably, Nematobax exerts its influence on nematodes by curbing their egg-laying capacity, thus serving as a deterrent against their infestation.",
      quantity: 10,
      unit: "500grams",
      image: require("../../../assets/images/products/p8.png"),
    },
    {
      id: 9,
      name: "Rizon - Nitrogen Fixing Bacteria",
      price: 462,
      description:
        "Rizon, enriched with nitrogen-fixing Rhizobium spp., forges vital partnerships with leguminous plants, giving rise to nutrient-rich root nodules. Rizon's highly mobile Rhizobium bacteria adhere to plant roots, enriching nitrogen fixation and elevating crop vitality. This versatile solution extends its benefits to seed treatment, offering a holistic approach to robust plant growth. Ideal for nitrogen-starved Dicotyledons, including peas, beans, gram, cowpea, Bengal gram, clover, and soybean. Elevate your leguminous crops with Rizon.",
      quantity: 10,
      unit: "500mililiters",
      image: require("../../../assets/images/products/p9.png"),
    },
    {
      id: 10,
      name: "Fruit Kit (4 Products Inside)",
      price: "2,130",
      description:
        "Microbax's Fruit Kit is meticulously designed to cater to the unique requirements of fruit crops. This tailored solution brings multiple benefits to fruit cultivation, enhancing flower and fruit production, improving fruit setting, and elevating fruit quality. It also promotes larger, sweeter fruits, bolsters plant health, and fortifies disease resistance. Consistently delivering high-quality yields, the Fruit Kit is the go-to choice for fruit-bearing plant cultivation enabling growers to achieve higher profits. Additionally, the kit reduces the dependence on chemical fertilizers, making it a sustainable choice for fruit cultivation.",
      quantity: 10,
      unit: "1Kit",
      image: require("../../../assets/images/products/p10.png"),
    },
    {
      id: 11,
      name: "Onion Kit (4 Products Inside)",
      price: "1,506",
      description:
        "Microbax presents the Onion Kit, meticulously designed to cater to the specific requirements of the onion crop. This specialized solution accelerates robust root development, which is crucial for the rapid establishment of saplings post-transplanting. The Onion Kit supplies natural ammonical nitrogen, effectively deterring insect and disease infestations. It also increases the size, color, firmness, shape, and uniformity of the Onion crop. Additionally, it provides the plant with essential phosphorus, promoting enhanced photosynthesis, proper coloration, and a balanced C:N ratio for increased yields. Consistently delivering high-quality yields, the Onion Kit is the go-to choice for onion cultivation enabling growers to achieve higher profits. Additionally, the kit reduces the dependence on chemical fertilizers, making it a sustainable choice for onion cultivation.",
      quantity: 10,
      unit: "1Kit",
      image: require("../../../assets/images/products/p11.png"),
    },
    {
      id: 12,
      name: "Trikowin-P - Bacillus Spp",
      price: 367,
      description:
        "Trikowin, developed by Microbax contains a consortium of Bacillus spp., serves as a robust defense against plant diseases, stimulates resilient root growth and development, and elevates crop productivity while shielding against environmental challenges. Moreover, Trikowin excels in optimizing nutrient uptake. This exceptional solution offers a multitude of advantages, including protection against pathogenic fungi, fostering vigorous plant growth with an abundance of deep roots, and enhancing drought resilience. It also plays a pivotal role in remediating soil tainted by pesticides and herbicides, ensuring the health and vitality of crops.",
      quantity: 10,
      unit: "200grams",
      image: require("../../../assets/images/products/p12.png"),
    },
    {
      id: 13,
      name: "Ginger & Turmeric Kit",
      price: "2,010",
      description:
        "Tailored to meet the specific needs of ginger and turmeric crops, Microbax has launched a Ginger and Turmeric kit that fuels an upsurge in the tiller and tuber production. It achieves this by augmenting the availability of crucial plant nutrients, improving soil properties, and ultimately enhancing the growth, size, and weight of both turmeric and ginger crops. With increased yield and improved quality, the Ginger and Turmeric kit enables growers to achieve higher profits. Additionally, the kit reduces the dependence on chemical fertilizers, making it a sustainable choice for cultivation.",
      quantity: 10,
      unit: "1Kit",
      image: require("../../../assets/images/products/p13.jpeg"),
    },
    {
      id: 14,
      name: "Paddy Kit",
      price: "1,272",
      description:
        "Microbax presents the Paddy Kit, a specially tailored solution designed to meet the precise needs of paddy crops. This comprehensive kit delivers a multitude of advantages, including the promotion of robust root development, efficient nutrient uptake, and accelerated plant growth. The Paddy Kit excels at increasing tiller and grain numbers, resulting in elevated yields. Its components also play a vital role in maintaining a well-balanced nutrient supply to paddy crops, effectively preventing irregular grain shapes caused by nutrient deficiencies or imbalances. This ensures a more uniform and plumper shape for the harvested paddy grains. With increased paddy yield and improved quality,  the paddy kit enables growers to achieve higher profits. Additionally, the kit reduces the dependence on chemical fertilizers, making it a sustainable choice for paddy cultivation..",
      quantity: 10,
      unit: "1Kit",
      image: require("../../../assets/images/products/p14.jpeg"),
    },
    {
      id: 15,
      name: "Cotton Kit",
      price: "1,332",
      description:
        "Microbax presents the Cotton Kit, precision-engineered to cater to the unique requirements of cotton crops. This specialized solution brings a host of benefits to cotton cultivation, including the promotion of robust root development, heightened nutrient absorption, and an overall boost in plant growth. The all-encompassing kit plays a pivotal role in bolstering the quantity of cotton bolls while simultaneously enhancing the quality of cotton fibers.  By optimizing nutrient utilization from the soil, the Cotton Kit not only elevates cotton yield but also diminishes the dependence on chemical fertilizers, underscoring its environmentally responsible approach to cotton farming. With increased cotton yield and improved quality, the cotton kit enables growers to achieve higher profits leading to a more sustainable long-term business.",
      quantity: 10,
      unit: "1Kit",
      image: require("../../../assets/images/products/p15.jpeg"),
    },
    {
      id: 16,
      name: "Chili Kit",
      price: "2,400",
      description:
        "Microbax introduces its tailor-made Chilli Kit, meticulously crafted to meet the distinct requirements of the Chilli crop. This all-inclusive solution presents a plethora of advantages, notably elevating flower and fruit production to remarkable levels, resulting in a substantial enhancement of yields. However, the benefits extend far beyond increased yield. Our comprehensive kit serves as a catalyst for robust root development, effectively optimizing nutrient availability from the soil. This holistic approach leads to an overarching enhancement in plant health, consequently elevating productivity and elevating the overall quality of various vegetable crops. Moreover, the kit champions sustainable agriculture by reducing reliance on chemical fertilizers, positioning it as the environmentally conscious choice for Chilli cultivation. With increased Chilli yield and improved quality, Chilli  Kit enables growers to achieve higher profits leading to a more sustainable long-term business.",
      quantity: 10,
      unit: "1Kit",
      image: require("../../../assets/images/products/p16.jpeg"),
    },
    {
      id: 17,
      name: "Vegetable Kit",
      price: "1,578",
      description:
        "Microbax introduces its tailor-made Vegetable Kit, meticulously crafted to meet the distinct requirements of Chilli crop. This all-inclusive solution presents a plethora of advantages, notably elevating flower and fruit production to remarkable levels, resulting in a substantial enhancement of yields. However, the benefits extend far beyond increased yield. Our comprehensive kit serves as a catalyst for robust root development, effectively optimizing nutrient availability from the soil. This holistic approach leads to an overarching enhancement in plant health, consequently elevating productivity and elevating the overall quality of various vegetable crops. Moreover, the kit champions sustainable agriculture by reducing reliance on chemical fertilizers, positioning it as the environmentally conscious choice for vegetable cultivation. With increased vegetable yield and improved quality, the Vegetable Kit enables growers to achieve higher profits leading to a more sustainable long-term business.",
      quantity: 10,
      unit: "1Kit",
      image: require("../../../assets/images/products/p17.jpeg"),
    },
    {
      id: 18,
      name: "Zinbax - Zn++",
      price: 480,
      description:
        "Zinbax represents an innovative fusion of zinc-solubilizing and sulphur-oxidizing bacteria, revolutionizing soil health. This dynamic combination significantly enhances the availability of vital nutrients, such as zinc, ferrous, and sulphur, within the soil. Consequently elevating the overall nutrient content and plant vigor, resulting in superior growth and quality. One of Zinbax's standout roles is in promoting starch synthesis, a critical process for plant energy storage and growth. This translates to stronger, more resilient plants. Moreover, Zinbax plays a pivotal part in elevating sugar content and enhancing fruit coloration, particularly benefiting crops like Paddy, Maize, Ginger, Turmeric, Tomato, Chillies, and fruit crops such as Banana and Grapes. For rice cultivation, Zinbax proves its worth by increasing tiller numbers and grain yield, making it an invaluable asset to the agriculture landscape. Zinbax - nurturing healthier crops and vibrant yields.",
      quantity: 10,
      unit: "200grams",
      image: require("../../../assets/images/products/p18.jpeg"),
    },
    {
      id: 19,
      name: "Vitagro-FS Probiotic ",
      price: 954,
      description:
        "The content of the packer is sufficient enough for seed treatment on to the given area to be broadcasted or given seeding for root dipping depending on the specified crops as denoted on the packet. Mix the inoculants with seeds gently with the minimum amount of water, taking care to avoid damage to the seed coat. Dry the inoculated seed under the shade over a clean surface gunny bag and sow them immediately. Use only for crops mentioned. Use before the expiry date and do not expose to direct sunlight or heat. Biofertilizer is not a chemical fertilizer hence do not (For Agriculture use only) mix inoculated seeds or inoculants with agro-chemicals.",
      quantity: 10,
      unit: "500grams ",
      image: require("../../../assets/images/products/p19.jpeg"),
    },
    {
      id: 20,
      name: "Vitagro Dip Probiotic",
      price: "1,938",
      description:
        "Vitagro excels in fostering the proliferation of beneficial soil microbes, creating an ideal microenvironment within the root zone. This microenvironment supports the efficient absorption of nutrients, nurturing robust plant growth. Furthermore, Vitagro plays a crucial role in enhancing soil structure by breaking down organic matter and elevating humus levels, which, in turn, improves moisture retention and bolsters the soil's buffering capabilities leading to overall plant growth and resilience.",
      quantity: 10,
      unit: "100grams",
      image: require("../../../assets/images/products/p20.jpeg"),
    },
    {
      id: 21,
      name: "Vitagro Probiotic",
      price: "1,680",
      description:
        "Vitagro excels in fostering the proliferation of beneficial soil microbes, creating an ideal microenvironment within the root zone. This microenvironment supports the efficient absorption of nutrients, nurturing robust plant growth. Furthermore, Vitagro plays a crucial role in enhancing soil structure by breaking down organic matter and elevating humus levels, which, in turn, improves moisture retention and bolsters the soil's buffering capabilities leading to overall plant growth and resilience.",
      quantity: 10,
      unit: "1Kg",
      image: require("../../../assets/images/products/p21.jpeg"),
    },
    {
      id: 22,
      name: "Vitabax Liquid",
      price: "5,874",
      description:
        " Vitabax, a potent bacterial extract, is a treasure trove of stimulants and hormones essential for nurturing the growth of crop roots. This remarkable solution triggers robust and enduring root development, particularly flourishing under favorable conditions. The resulting vigorous root growth enhances nutrient absorption by crops. Vitabax shines brightest when plants face adversity, such as during cold seasons or nematode infestations during fruit growth. Enriched with natural amino acids, along with other growth-promoting stimulants and hormones, it's versatile enough for application through spraying. The transformative effects of Vitabax manifest in improved leaf growth and enhanced photosynthesis, offering a comprehensive boost to crop vitality.",
      quantity: 10,
      unit: "20Liters",
      image: require("../../../assets/images/products/p22.jpeg"),
    },
    {
      id: 23,
      name: "UPTEK - Enhances Potash Uptake",
      price: 630,
      description:
        " Uptek, featuring potent potash-mobilizing bacteria in a resilient spore form at a concentration of 2x10^9 CFU, is a vital resource for plant health. Uptek supplies the essential potassium necessary for robust root development and the ripening of flowers and fruits. By elevating potassium levels, Uptek supports an abundant flowering and fruiting phase, resulting in a bountiful, vibrant, and firm harvest. Additionally, heightened potassium levels in certain crops bolsters resistance against foliar diseases, including powdery mildew.",
      quantity: 10,
      unit: "1Kg",
      image: require("../../../assets/images/products/p23.jpeg"),
    },
    {
      id: 24,
      name: "Bhu-Vikas Kit A ",
      price: 19.99,
      description:
        "Bhuvikas Kit A, developed by Microbax, are custom-tailored solutions for Sugarcane and Banana crops. This kit plays a pivotal role in optimizing soil health and nutrient availability ensuring full nutrient accessibility for the crops. In the case of sugar cane, the outcomes are evident in the increased spacing between nodes(increased length of the cane), accompanied by a significant weight gain in sugarcane, ultimately resulting in higher yields. Meanwhile, in the banana crops, Bhuvikas Kit A fosters robust leaf growth and elongated fruit, enriching overall crop quality. Consistently delivering high-quality yields, the Bhuvikas kit is the go-to choice for cultivation enabling growers to achieve higher profits. Additionally, the kit reduces the dependence on chemical fertilizers, making it a sustainable choice for Sugarcane and Banana cultivation.",
      quantity: 10,
      unit: "1Kit",
      image: require("../../../assets/images/products/p24.jpeg"),
    },

    {
      id: 25,
      name: "Bhu-Vikas Kit B ",
      price: 19.99,
      description:
        "Bhuvikas Kit B, developed by Microbax, are custom-tailored solutions for Sugarcane and Banana crops. This kit plays a pivotal role in optimizing soil health and nutrient availability ensuring full nutrient accessibility for the crops. In the case of sugar cane, the outcomes are evident in the increased spacing between nodes(increased length of the cane), accompanied by a significant weight gain in sugarcane, ultimately resulting in higher yields. Meanwhile, in the banana crops, Bhuvikas Kit B fosters robust leaf growth and elongated fruit, enriching overall crop quality. Consistently delivering high-quality yields, the Bhuvikas kit is the go-to choice for cultivation enabling growers to achieve higher profits. Additionally, the kit reduces the dependence on chemical fertilizers, making it a sustainable choice for Sugarcane and Banana cultivation.",
      quantity: 10,
      unit: "1Kit",
      image: require("../../../assets/images/products/p25.jpeg"),
    },
    {
      id: 26,
      name: "Sumonax-P - Bacillus Spp",
      price: 19.99,
      description:
        " Sumonax contains a high concentration of beneficial Bacillus spp., serving as a robust shield against plant diseases. What sets Sumonax apart is its remarkable ability to bestow disease resistance in plants through the secretion of exopolysaccharides. This exceptional solution is highly recommended for safeguarding against a wide range of plant diseases caused by organisms such as Pythium, Rhizoctonia, Botrytis, Phytophthora, Fusarium, anthracnose, and Verticillium wilt. These organisms are often responsible for various plant diseases like downy mildew, damping-off, fungal wilt, blight, anthracnose, and more.",
      quantity: 10,
      unit: "500 grams",
      image: require("../../../assets/images/products/p26.jpeg"),
    },

    // Add details for the remaining products
  ];
  const handleClick = () => {
    navigate("/eq2");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 md:w-3/4 xl:w-5/6 mb-6">
        <h1 className="text-3xl font-bold myText text-green-700 mb-12 mt-10">
          All Products
        </h1>
        <div className="mb-6 text-center mt-4">
          <img src={Picture1} alt="allproducts" className="mx-auto w-2/3 md:w-1/2 lg:w-1/3"  />
        
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4" >
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 bg-white shadow-xl border-2 border-green-500 rounded-lg mt-6"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mb-4 rounded-lg mt-4"
              />
              <h3 className="text-xl font-semibold mb-2 mt-2 text-center">
                {product.name}
              </h3>
              <p className="text-gray-700  mb-4 leading-normal mt-4">
                {product.description}
              </p>
              {/* <p className="text-green-500 font-semibold text-2xl mb-2">
                &#8377;{product.price}{" "}
                <span className="text-gray-600 text-sm "> {product.unit}</span>
              </p> */}
              {/* <p className="text-gray-600">Quantity: {product.quantity}</p> */}
              <button
                onClick={handleClick}
                className="text-white px-2 py-2 font-sans rounded-lg bg-green-700 mt-4 hover:bg-blue-600 hover:text-lg"
              >
                Enquire for the best Price
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Allproducts;
