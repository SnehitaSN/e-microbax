import React, { useState  } from "react";
import Layout from "../../components/layout/Layout";
import g1 from "../../assets/images/g1.png";
import g3 from "../../assets/images/g3.png";
import g4 from "../../assets/images/g4.png";
import g5 from "../../assets/images/g5.png";
import g6 from "../../assets/images/g6.png";
import g7 from "../../assets/images/g7.png";
import g9 from "../../assets/images/g9.png";
import g10 from "../../assets/images/g10.png";
import g11 from "../../assets/images/g11.png";
// import g12 from "../../assets/images/g12.png";
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
              src={g3}
              alt="g3"
              className="w-64 h-auto mx-4 rounded-lg border-2"
              onClick={() => handleImageClick({ src: g3, alt: "g3" })}
            />
          </LazyLoad>

          {/* Right Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={g4}
              alt="g4"
              className="w-64 h-auto ml-4 rounded-lg border-2"
              onClick={() => handleImageClick({ src: g4, alt: "g4" })}
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
              className="w-64 h-auto mr-4 rounded-lg border-2"
              onClick={() => handleImageClick({ src: g5, alt: "g5" })}
            />
          </LazyLoad>

          {/* Center Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={g6}
              alt="g6"
              className="w-64 h-auto mx-4 rounded-lg border-2"
              onClick={() => handleImageClick({ src: g6, alt: "g6" })}
            />
          </LazyLoad>

          {/* Right Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={g7}
              alt="g7"
              className="w-64 h-auto ml-4 rounded-lg border-2"
              onClick={() => handleImageClick({ src: g7, alt: "g7" })}
            />
          </LazyLoad>
        </div>

        {/* row3 */}
        <div className="flex items-center justify-center h-full mt-2">
          {/* Left Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={g9}
              alt="g9"
              className="w-64 h-auto mr-4 rounded-lg border-2"
              onClick={() => handleImageClick({ src: g9, alt: "g9" })}
            />
          </LazyLoad>

          {/* Center Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={g10}
              alt="g10"
              className="w-64 h-auto mx-4 rounded-lg border-2"
              onClick={() => handleImageClick({ src: g10, alt: "g10" })}
            />
          </LazyLoad>

          {/* Right Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={g11}
              alt="g11"
              className="w-64 h-auto ml-4 rounded-lg border-2"
              onClick={() => handleImageClick({ src: g11, alt: "g11" })}
            />
          </LazyLoad>
        </div>

        {/* row4 */}
        <div className="flex items-center justify-center h-full mt-2">
          {/* Left Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={g9}
              alt="g9"
              className="w-64 h-auto mr-4 rounded-lg border-2"
              onClick={() => handleImageClick({ src: g9, alt: "g9" })}
            />
          </LazyLoad>

          {/* Center Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={g10}
              alt="g10"
              className="w-64 h-auto mx-4 rounded-lg border-2"
              onClick={() => handleImageClick({ src: g10, alt: "g10" })}
            />
          </LazyLoad>

          {/* Right Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={g11}
              alt="g11"
              className="w-64 h-auto ml-4 rounded-lg border-2"
              onClick={() => handleImageClick({ src: g11, alt: "g11" })}
            />
          </LazyLoad>
        </div>

        {/* row5 */}
        <div className="flex items-center justify-center h-full mt-2">
          {/* Left Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={g9}
              alt="g9"
              className="w-64 h-auto mr-4 rounded-lg border-2"
              onClick={() => handleImageClick({ src: g9, alt: "g9" })}
            />
          </LazyLoad>

          {/* Center Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={g10}
              alt="g10"
              className="w-64 h-auto mx-4 rounded-lg border-2"
              onClick={() => handleImageClick({ src: g10, alt: "g10" })}
            />
          </LazyLoad>

          {/* Right Image */}
          <LazyLoad height={200} offset={100}>
            <img
              src={g11}
              alt="g11"
              className="w-64 h-auto ml-4 rounded-lg border-2"
              onClick={() => handleImageClick({ src: g11, alt: "g11" })}
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
