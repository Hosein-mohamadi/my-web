import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";
import Navbar from "../Navbar";
import Btnvav from "../Navbar/Btnvav";

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div
      dir={i18n.language === "fa" ? "rtl" : "ltr"}
      className="py-5 pb-12 bg-gray-900 h-auto"
    >
      <Fade top>
        <div>
          <Navbar />
          <Btnvav />
          <div className="md:grid  md:grid-cols-2">
            <div className="md:mx-20 flex justify-center grid-cols-12 mt-20">
              <img
                className="lg:w-96  w-60 rounded-lg"
                src="image/01.jpeg"
                alt="him"
              />
            </div>
            <div className="font-bold grid-cols-12 mx-5 md:mx-9 text-md text-justify text-white md:mt-44 mt-20">
              <Roll le>
                <h1 className="break-words">
                  {t("h1")}
                  <br />
                  <span className="md:text-4xl text-3xl transition duration-700 ease-in-out transform rotate-90 ">
                    <span className="animate-pulse ">{t("h3")}</span>
                  </span>
                  <br />
                  <br />
                  {t("h4")}

                  {t("h5")}
                </h1>
              </Roll>
              <div>
                <Link to="/abute" className="md:flex">
                  <button className="bg-yellow-500 px-8 py-4 hover:bg-yellow-300 mt-12 rounded-full text-lg mx-6">
                    <span className="flex ">
                      <img
                        className="w-7 mx-2"
                        src="./image/user-30.png"
                        alt="icon-button"
                      />
                      <h1 className="text-sm font-bold">{t("button")}</h1>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
