import React from "react";
import { useTranslation } from "react-i18next";

export default function Btnvav() {
  const { i18n } = useTranslation();

  const handelChenge = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      <div className="flex justify-end ">
        <div className="text-white md:mx-9 mx-4  grid left-3 top-3 w-9 ">
          <div className="fixed ">
            <button 
              className="text-2xl text-gray-400"
              onClick={() => handelChenge("fa")}
            >
              FA
            </button>
            <p className=" w-9 h-1 my-2  bg-gray-500"></p>
            <button
              className="text-2xl text-gray-400"
              onClick={() => handelChenge("en")}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
