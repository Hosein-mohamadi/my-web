import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar";
import Fade from "react-reveal/Fade";

export default function Cv() {
  const { t, i18n } = useTranslation();
  return (
    <div
      className="bg-gray-900 md:h-screen h-auto overflow-hidden pb-12 py-5"
      dir={i18n.language === "fa" ? "rtl" : "ltr"}
    >
      <Fade  right>
        <div>
          <Navbar />
          <div>
            <div className="flex justify-center text-center">
              <div className="">
                <h1 className="md:text-4xl text-2xl font-bold text-white">
                  {t("cv1")}
                </h1>
                <div className="flex">
                  <span className="text-3xl mx-2 text-yellow-500"> ___ </span>
                  <p className="text-white font-bold mt-5 break-words">
                    {t("Abute-my")}
                  </p>
                  <span className="text-3xl mx-2 text-yellow-500">___</span>
                </div>
              </div>
            </div>
            <div
              className={
                i18n.language === "fa"
                  ? "grid xl:mr-32 lg:mr-10 md:grid-cols-2 mt-20 "
                  : "grid xl:ml-32 lg:ml-10 md:grid-cols-2 mt-20"
              }
            >
              <div class="shadow mt-2 mx-10">
                <h1 className="text-white font-bold text-md my-3">
                  {t("html")}
                </h1>
                <div className="w-auto lg:w-96 bg-gray-300 ">
                  <div class="bg-yellow-600 text-xs w-60  py-1 text-center text-white sm:w-80">
                    75%
                  </div>
                </div>
              </div>
              <div class="shadow mt-2 mx-10">
                <h1 className="text-white font-bold text-md my-3">
                  {t("css")}
                </h1>
                <div className="w-auto lg:w-96 bg-gray-300 ">
                  <div class="bg-yellow-600 text-xs  py-1 text-center text-white w-60 sm:w-80">
                    75%
                  </div>
                </div>
              </div>
              <div class="shadow mt-2 mx-10">
                <h1 className="text-white font-bold text-md my-3">
                  {t("bootstrap")}
                </h1>
                <div className="w-auto lg:w-96 bg-gray-300 ">
                  <div class="bg-yellow-600 text-xs  py-1 text-center text-white w-52 sm:w-72">
                    65%
                  </div>
                </div>
              </div>
              <div class="shadow mt-2 mx-10">
                <h1 className="text-white font-bold text-md my-3">
                  {t("tailwindcss")}
                </h1>
                <div className="w-auto lg:w-96 bg-gray-300">
                  <div class="bg-yellow-600 text-xs  py-1 text-center text-white w-60 sm:w-80">
                    75%
                  </div>
                </div>
              </div>
              <div class="shadow mt-2 mx-10">
                <h1 className="text-white font-bold text-md my-3">
                  {t("javascript")}
                </h1>
                <div className="w-auto lg:w-96 bg-gray-300">
                  <div class="bg-yellow-600 text-xs  py-1 text-center text-white w-60">
                    60%
                  </div>
                </div>
              </div>
              <div class="shadow mt-2 mx-10">
                <h1 className="text-white font-bold text-md my-3">
                  {t("react")}
                </h1>
                <div className="w-auto lg:w-96 bg-gray-300">
                  <div class="bg-yellow-600 text-xs  py-1 text-center text-white w-60">
                    60%
                  </div>
                </div>
              </div>
              <div class="shadow mt-2 mx-10">
                <h1 className="text-white font-bold text-md my-3">
                  {t("redux")}
                </h1>
                <div className="w-auto lg:w-96 bg-gray-300 ">
                  <div class="bg-yellow-600 text-xs  py-1 text-center text-white w-36">
                    30%
                  </div>
                </div>
              </div>
              <div class="shadow mt-2 mx-10">
                <h1 className="text-white font-bold text-md my-3">
                  {t("next")}
                </h1>
                <div className="w-auto lg:w-96 bg-gray-300 ">
                  <div class="bg-yellow-600 text-xs  py-1 text-center text-white w-44">
                    40%
                  </div>
                </div>
              </div>
              <div class="shadow mt-2 mx-10">
                <h1 className="text-white font-bold text-md my-3">
                  {t("git")}
                </h1>
                <div className="w-auto lg:w-96 bg-gray-300 ">
                  <div class="bg-yellow-600 text-xs  py-1 text-center text-white w-52">
                    50%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
