import React, { useState  } from "react";
import Layout from "../../components/layout/Layout";
import g1 from "../../assets/images/g1.png";
import g5 from "../../assets/images/g5.png";
import g6 from "../../assets/images/g6.png";
import g7 from "../../assets/images/g7.png";
import pro2 from "../../assets/images/pro2.png";
import pro1 from "../../assets/images/pro1.png";
import pg5 from "../../assets/images/pg5.jpg";
import rd from "../../assets/images/rd.png";
import pg1 from "../../assets/images/pg1.jpg";
import grass from "../../assets/images/grass.jpg"
import pg3 from "../../assets/images/pg3.jpg";
import probi from "../../assets/images/probi.png";
import pg2 from  "../../assets/images/pg2.jpg";
import hc1 from "../../assets/images/hc1.jpg";
import hc2 from "../../assets/images/hc2.jpg"
import LazyLoad from "react-lazyload"; // Import LazyLoad
import { FaTimes } from "react-icons/fa";

function Gallery() {
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };
  return (
    <Layout>
      <div className="mt-8 mb-6">
        {/* row1 */}
        <div className="flex items-center justify-center h-full mb-2">
          {/* Left Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={g1}
              alt="microbax"
              className="w-64 h-auto mr-4 rounded-lg border-2 hover:scale-110 transition-transform duration-300"
              onClick={() => handleImageClick({ src: g1, alt: "microbax" })}
            />
          </LazyLoad>

          {/* Center Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={pro2}
              alt="g3"
              className="w-64 h-auto mx-4 rounded-lg border-2 hover:scale-110 transition-transform duration-300"
              onClick={() => handleImageClick({ src: pro2, alt: "pro2" })}
            />
          </LazyLoad>

          {/* Right Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={pg5}
              alt="g4"
              className="w-64 h-auto ml-4 rounded-lg border-2 hover:scale-110 transition-transform duration-300"
              onClick={() => handleImageClick({ src: pg5, alt: "g4" })}
            />
          </LazyLoad>
        </div>

        {/* row2 */}
        <div className="flex items-center justify-center h-full mt-2">
          {/* Left Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={g5}
              alt="g5"
              className="w-64 h-auto mr-4 rounded-lg border-2 hover:scale-110 transition-transform duration-300"
              onClick={() => handleImageClick({ src: g5, alt: "g5" })}
            />
          </LazyLoad>

          {/* Center Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={g6}
              alt="g6"
              className="w-64 h-auto mx-4 rounded-lg border-2 hover:scale-110 transition-transform duration-300"
              onClick={() => handleImageClick({ src: g6, alt: "g6" })}
            />
          </LazyLoad>

          {/* Right Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={g7}
              alt="g7"
              className="w-64 h-auto ml-4 rounded-lg border-2 hover:scale-110 transition-transform duration-300"
              onClick={() => handleImageClick({ src: g7, alt: "g7" })}
            />
          </LazyLoad>
        </div>

        {/* row3 */}
        <div className="flex items-center justify-center h-full mt-2 ">
          {/* Left Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={pro1}
              alt="pro1"
              className="w-64 h-auto mr-4 rounded-lg border-2 hover:scale-110 transition-transform duration-300"
              onClick={() => handleImageClick({ src: pro1, alt: "g9" })}
            />
          </LazyLoad>

          {/* Center Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={rd}
              alt="rd"
              className="w-64 h-auto mx-4 rounded-lg border-2 hover:scale-110 transition-transform duration-300"
              onClick={() => handleImageClick({ src: rd, alt: "g10" })}
            />
          </LazyLoad>

          {/* Right Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={pg1}
              alt="pg1"
              className="w-64 h-auto ml-4 rounded-lg border-2  hover:scale-110 transition-transform duration-300"
              onClick={() => handleImageClick({ src: pg1, alt: "g11" })}
            />
          </LazyLoad>
        </div>

        {/* row4 */}
        <div className="flex items-center justify-center h-full mt-2">
          {/* Left Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={grass}
              alt="rd1"
              className="w-64 h-auto mr-4 rounded-lg border-2  hover:scale-110 transition-transform duration-300"
              onClick={() => handleImageClick({ src: grass, alt: "g9" })}
            />
          </LazyLoad>

          {/* Center Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={pg3}
              alt="pg3"
              className="w-64 h-auto mx-4 rounded-lg border-2  hover:scale-110 transition-transform duration-300"
              onClick={() => handleImageClick({ src: pg3, alt: "g10" })}
            />
          </LazyLoad>

          {/* Right Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={probi}
              alt="probi"
              className="w-64 h-auto ml-4 rounded-lg border-2  hover:scale-110 transition-transform duration-300"
              onClick={() => handleImageClick({ src: probi, alt: "g11" })}
            />
          </LazyLoad>
        </div>

        {/* row5 */}
        <div className="flex items-center justify-center h-full mt-2">
          {/* Left Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={pg2}
              alt="pg2"
              className="w-64 h-auto mr-4 rounded-lg border-2  hover:scale-110 transition-transform duration-300"
              onClick={() => handleImageClick({ src: pg2, alt: "g9" })}
            />
          </LazyLoad>

          {/* Center Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={hc1}
              alt="hc1"
              className="w-64 h-auto mx-4 rounded-lg border-2  hover:scale-110 transition-transform duration-300"
              onClick={() => handleImageClick({ src: hc1, alt: "g10" })}
            />
          </LazyLoad>

          {/* Right Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={hc2}
              alt="hc2"
              className="w-64 h-auto ml-4 rounded-lg border-2  hover:scale-110 transition-transform duration-300"
              onClick={() => handleImageClick({ src:hc2, alt: "g11" })}
            />
          </LazyLoad>
        </div>
      </div>

      {modalImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="max-w-xl bg-white p-4 rounded-lg relative">
            <img
              src={modalImage.src}
              alt={modalImage.alt}
              className="w-full h-auto"
            />
            <button
              className="absolute top-0 right-0 m-2 p-2 text-white bg-black rounded-full"
              onClick={closeModal}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Gallery;
