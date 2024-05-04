import React from "react";
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
import g12 from "../../assets/images/g12.png";

function Gallery() {
  return (
    <Layout>
      <div className="mt-20 mb-20">
        <div className="flex justify-center items-center ">
          <div className="flex justify-center items-center">
            <div className="  mr-4 group">
              {" "}
              <img
                src={g1}
                alt="vitabax "
                className="w-2/3 ml-40 border-4 border-green-800 shadow-xl rounded-3xl transition duration-300 ease-in-out transform hover:border-blue-500 hover:scale-110 hover:cursor-pointer"
              />
            </div>
            <div className=" ">
              <img
                src={g3}
                alt="vitabax "
                className="w-2/3 md:w-1/2 lg:w-2/3  ml-20 border-4 border-green-800 shadow-xl rounded-3xl transition duration-300 ease-in-out transform hover:border-blue-500 hover:scale-110 hover:cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-8 ">
          <div className="flex justify-center items-center">
            <div className="  mr-4 group">
              {" "}
              <img
                src={g4}
                alt="vitabax "
                className="w-2/3 ml-40 border-4 border-green-800 shadow-xl rounded-3xl transition duration-300 ease-in-out transform hover:border-blue-500 hover:scale-110 hover:cursor-pointer"
              />
            </div>
            <div className=" ">
              <img
                src={g5}
                alt="vitabax "
                className="w-2/3 md:w-1/2 lg:w-2/3  ml-20 border-4 border-green-800 shadow-xl rounded-3xl transition duration-300 ease-in-out transform hover:border-blue-500 hover:scale-110 hover:cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-8 ">
          <div className="flex justify-center items-center">
            <div className="  mr-4 group">
              {" "}
              <img
                src={g6}
                alt="vitabax "
                className="w-2/3 ml-40 border-4 border-green-800 shadow-xl rounded-3xl transition duration-300 ease-in-out transform hover:border-blue-500 hover:scale-110 hover:cursor-pointer"
              />
            </div>
            <div className=" ">
              <img
                src={g7}
                alt="vitabax "
                className="w-2/3 md:w-1/2 lg:w-2/3  ml-20 border-4 border-green-800 shadow-xl rounded-3xl transition duration-300 ease-in-out transform hover:border-blue-500 hover:scale-110 hover:cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-8 ">
          <div className="flex justify-center items-center">
            <div className="  mr-4 group">
              {" "}
              <img
                src={g9}
                alt="vitabax "
                className="w-2/3 ml-40 border-4 border-green-800 shadow-xl rounded-3xl transition duration-300 ease-in-out transform hover:border-blue-500 hover:scale-110 hover:cursor-pointer"
              />
            </div>
            <div className=" ">
              <img
                src={g10}
                alt="vitabax "
                className="w-2/3 ml-20 border-4 border-green-800 shadow-xl rounded-3xl transition duration-300 ease-in-out transform hover:border-blue-500 hover:scale-110 hover:cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-8 ">
          <div className="flex justify-center items-center">
            <div className="  mr-4 group">
              {" "}
              <img
                src={g11}
                alt="vitabax "
                className="w-2/3 ml-40 border-4 border-green-800 shadow-xl rounded-3xl transition duration-300 ease-in-out transform hover:border-blue-500 hover:scale-110 hover:cursor-pointer"
              />
            </div>
            <div className=" ">
              <img
                src={g12}
                alt="vitabax "
                className="w-2/3 ml-20 border-4 border-green-800 shadow-xl rounded-3xl transition duration-300 ease-in-out transform hover:border-blue-500 hover:scale-110 hover:cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Gallery;
