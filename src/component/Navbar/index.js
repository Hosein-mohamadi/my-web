import React, { useState } from "react";

import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  const handelShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className=" fixed ">
        <span className=" cursor-pointer" onClick={handelShow}>
          <img
            className="w-10 p-3 bg-white mx-2 rounded-md"
            src={show === true ? "./image/x.png" : "./image/menu.png"}
            alt="nav"
          />
        </span>
        <Fade right>
          <div
            className={
              show === true
                ? "bg-white mx-2 rounded-md w-60 mt-1 py-5 px-2 "
                : "hidden"
            }
            style={{ height: "590px" }}
          >
            <Fade top opposite cascade>
              <NavLink
                to="/"
                activeStyle={{
                  fontWeight: "bold",
                  backgroundImage: "linear-gradient(to right ,red , blue)",
                  color: "white",
                  padding: "10px 3px",
                }}
                exact
                className="mt-3 flex "
              >
                <img className="w-6 ml-1" src="./image/house.png" alt="home" />
                <span> {t("Home")}</span>
              </NavLink>
              <hr />
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  backgroundImage: "linear-gradient(to right ,red , blue)",
                  color: "white",
                  padding: "10px 3px",
                }}
                to="/abute"
                className=" flex mt-9"
              >
                <img
                  className="w-7 ml-1"
                  src="./image/profile.png"
                  alt="home"
                />
                <span>{t("About")}</span>
              </NavLink>
              <hr />

              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  backgroundImage: "linear-gradient(to right ,red , blue)",
                  color: "white",
                  padding: "10px 3px",
                }}
                to="/cv"
                className=" flex mt-8 mb-1"
              >
                <img className="w-7 ml-1" src="./image/cv.png" alt="home" />
                <span>{t("CV")}</span>
              </NavLink>
              <hr />

              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  backgroundImage: "linear-gradient(to right ,red , blue)",
                  color: "white",
                  padding: "10px 3px",
                }}
                to="/contact"
                className=" flex mt-9 "
              >
                <img
                  className="w-7 ml-1"
                  src="./image/contact-30.png"
                  alt="home"
                />
                <span>{t("Contact")} </span>
              </NavLink>
              <hr />
            </Fade>
          </div>
        </Fade>
      </div>
    </div>
  );
}
