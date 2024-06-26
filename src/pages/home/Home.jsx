import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";

function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <Layout>
      <div className=" mt-12 mb-10 bg-image ">
        {/* microbax introduction */}
        <div className="flex justify-between ">
          <div className="ml-20 mb-6">
            <div className=" mt-6 mb-4 ">
              {" "}
              <h1
                className={`myText text-3xl font-semibold text-purple-800 text-left ${
                  loaded ? "slide-in" : ""
                }`}
              >
                "Working Towards a Healthier Tomorrow"
              </h1>
              <br />
              <br />
              <div className="myText text-black text-2xl  text-left mt-6 ">
                <p>
                  {" "}
                  <span className="text-green-900   animate-bounce ">
                    {" "}
                    <span className="text-5xl myText">Microbax </span> is a
                    leading producer of probiotics.
                  </span>{" "}
                  <br />
                  The people behind the project have expertise of over three{" "}
                  <br />
                  decades in handling Fermentation systems, especially for{" "}
                  <br />
                  producing Probiotics and enzymes.
                </p>
              </div>
              <br />
              <br />
              <br />
              <br />
              <div className="myText text-white text-2xl leading-tight text-left mt-4">
                <p className="">
                  {" "}
                  <span className="text-black myText md:text-white">
                    {" "}
                    The core philosophy driving Microbax is product excellence{" "}
                    <br />
                  </span>
                  through value addition.Our incessant drive to achieve product{" "}
                  <br />
                  improvement, consistency and performance is perceptible
                  <br />
                  through the activities, both manufacturing and quality <br />
                  assurance.
                </p>
              </div>
              <div className="myText text-white leading-tight text-2xl text-left mt-4">
                <p>
                  At Microbax, we believe in strict adherence to <br />
                  <span className="text-white   hover:text-3xl  ">
                    {" "}
                    "Current Good Manufacturing Practices" (CGMP)
                  </span>{" "}
                  <br />
                  and in building values for customers by providing both <br />
                  products and services of international standards. <br />
                  Our products thus conform to global standards ensuring <br />
                  consistent availability of world class products.
                </p>
              </div>
            </div>
          </div>

          {/* microbax certified logo */}
          <div className="ml-30 mt-10">
            <div className="mr-50 pr-10 mt-20">
              <img
                src="/assets/images/isologo.png"
                alt=""
                width={200}
                height={100}
              />
              <h2 className="text-black myText text-start   text-xl">
                An ISO 9001:2008 Company
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
