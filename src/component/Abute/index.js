import React from "react";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import Navbar from "../Navbar/index";

export default function Abute() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="bg-gray-900 h-screen pb-12 py-5 "
      dir={i18n.language === "fa" ? "rtl" : "ltr"}
    >
      <Fade left>
        <div>
          <Navbar />
          <div className="pb-3">
            <div className="text-center pt-8">
              <h1 className="text-5xl font-bold text-yellow-500">
                {" "}
                {t("About")}{" "}
              </h1>
              <div className="flex justify-center mt-5">
                <span className="text-3xl text-yellow-500 ml-3"> ___ </span>
                <p className="text-white font-bold mt-5 break-words">
                  {" "}
                  {t("Abute-my")}{" "}
                </p>
                <span className="text-3xl mr-3 text-yellow-500">___</span>
              </div>
            </div>
            <div className="felx justify-center ">
              <div className="lg:flex justify-between">
                <div className=" mt-28 md:mx-28 flex justify-center">
                  <img
                    className=" w-60 rounded-lg"
                    src="image/01.jpeg"
                    alt="him"
                  />
                </div>
                <div className="flex justify-center mx-auto">
                  <ul className="grid md:grid-cols-2 md:mx-12">
                    <li className="font-bold text-white mt-16 mx-5 md:text-lg text-sm">
                      {t("Name")} : {t("Name1")}
                    </li>
                    <li className="font-bold text-white mt-16 mx-5 md:text-lg text-sm">
                      {t("Address")} : {t("Address1")}
                    </li>
                    <li className="font-bold text-white mt-16 mx-5 md:text-lg text-sm">
                      {t("last name")} : {t("last-name")}
                    </li>
                    <li className="font-bold text-white mt-16 mx-5 md:text-lg text-sm">
                      {t("Nationality")} : {t("Nationality1")}
                    </li>
                    <li className="font-bold text-white mt-16 mx-5 md:text-lg text-sm">
                      {t("Email")} : {t("Email1")}
                    </li>
                    <li className="font-bold text-white mt-16 mx-5 md:text-lg text-sm">
                      {t("Github")} : {t("Github1")}
                    </li>
                    <li className="font-bold text-white mt-16 mx-5 md:text-lg text-sm">
                      {t("Date of birth")} : {t("Date-of-birth")}
                    </li>
                    <li className="font-bold text-white mt-16 mx-5 md:text-lg text-sm">
                      {t("Phone")} : {t("Phone1")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
