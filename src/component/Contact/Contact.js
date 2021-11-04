import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar";
import Fade from "react-reveal/Fade";

export default function Contact() {
  const [todo, setTodo] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTeaxtarea] = useState("");
  const [count, setCount] = useState(0);
  const { t, i18n } = useTranslation();

  const handelSubmit = (e) => {
    e.preventDefault();

    if (
      name !== "" &&
      name !== " " &&
      email !== "" &&
      email !== " " &&
      textarea !== "" &&
      textarea !== " "
    ) {
      const newTodo = {
        name: name,
        email: email,
        textarea: textarea,
        id: count,
      };
      setCount(count + 1);
      setTodo([...todo].concat(newTodo));
    }
    setName("");
    setEmail("");
    setTeaxtarea("");

    // window.open("mailto:hoseein.mohamady16@gmail.com");
  };

  console.log(todo);

  return (
    <div
      className="bg-gray-900 h-auto pb-10 pt-3"
      dir={i18n.language === "fa" ? "rtl" : "ltr"}
    >
      <Fade bottom>
        <div>
          <Navbar />
          <div>
            <div className=" pt-10 text-center">
              <h1 className="text-white font-bold text-4xl ">{t("contact")}</h1>
              <div className="flex justify-center">
                <span className="text-3xl mx-2 text-yellow-500"> ___ </span>
                <p className="text-white font-bold mt-5 break-words">
                  {t("works")}
                </p>
                <span className="text-3xl mx-2 text-yellow-500">___</span>
              </div>
            </div>
            <div className="grid lg:grid-cols-2">
              <div dir={i18n.language === "fa" ? "ltr" : "rtl"}>
                <div className="grid md:grid-cols-2 lg:grid-cols-1">
                  <div className="flex justify-end">
                    <div className="md:mx-16 mx-5 mt-10">
                      <div className="flex justify-end">
                        <span className="text-white font-bold">
                          {" "}
                          {t("phone")}
                        </span>
                      </div>
                      <div className="flex mt-4">
                        <h1 className="text-yellow-500 font-bold mx-2">
                          {t("Phone1")} :
                        </h1>
                        <img
                          className="w-7"
                          src="./image/phone-48.png"
                          alt="phone"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="md:mx-16 mx-5 mt-10">
                      <div className="flex justify-end">
                        <span className="text-white  font-bold">
                          {" "}
                          {t("Email")}
                        </span>
                      </div>
                      <div className="flex mt-4">
                        <h1 className="text-yellow-500 font-bold mx-2">
                          {t("Email1")} :
                        </h1>
                        <img
                          className="w-7"
                          src="./image/email-30.png"
                          alt="email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="md:mx-16 mx-5 mt-10">
                      <div className="flex justify-end">
                        <span className="text-white font-bold">
                          {t("linkedin")}
                        </span>
                      </div>
                      <div className="flex mt-4">
                        <h1 className="text-yellow-500 font-bold mx-2">
                          {t("name linkedin")} :
                        </h1>
                        <img
                          className="w-7"
                          src="./image/icons8-linkedin-48.png"
                          alt="linkedin"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="md:mx-16 mx-5 mt-10">
                      <div className="flex justify-end">
                        <span className="text-white font-bold">
                          {t("whatsApp")}
                        </span>
                      </div>
                      <div className="flex mt-4">
                        <h1 className="text-yellow-500 font-bold mx-2">
                          {t("Phone1")} :
                        </h1>
                        <img
                          className="w-7"
                          src="./image/whatsapp-48.png"
                          alt="whatsapp"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="md:mx-16  mx-5 mt-10">
                      <div className="flex justify-end">
                        <span className="text-white font-bold">
                          {t("telegram")}
                        </span>
                      </div>
                      <div className="flex mt-4">
                        <h1 className="text-yellow-500 font-bold mx-2">
                          {t("telegram1")} :
                        </h1>
                        <img
                          className="w-7"
                          src="./image/telegram-app-48.png"
                          alt="telegram"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="md:mx-16 mx-5 mt-10">
                      <div className="flex justify-end">
                        <span className="text-white font-bold">
                          {t("instagram")}
                        </span>
                      </div>
                      <div className="flex mt-4">
                        <h1 className="text-yellow-500 font-bold mx-2">
                          {t("18--hosein")} :
                        </h1>
                        <img
                          className="w-7"
                          src="./image/instagram-48.png"
                          alt="telegram"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center md:justify-end mt-8 md:mx-16 text-right">
                  <div>
                    <h1 className="text-white font-bold my-2">
                      {t("Networks")}
                    </h1>
                    <div className="flex">
                      <a href="https://www.linkedin.com/in/hosein-mohammadi-076237214">
                        <img
                          src="./image/icons8-linkedin-48.png"
                          alt="icons8-linkedin"
                        />
                      </a>
                      <a href="https://t.me/hosein_mohamadi_1400">
                        <img
                          src="./image/telegram-app-48.png"
                          alt="telegram-app"
                        />
                      </a>
                      <a href="https://www.instagram.com/18__hosein">
                        <img src="./image/instagram-48.png" alt="insta" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20">
                <div className="text-center ml-1 md:ml-0 ">
                  <h2 className="text-white font-bold text-md my-5">
                    {t("text")}
                  </h2>
                  <div className="flex justify-center ">
                    <form
                      onSubmit={handelSubmit}
                      className="border-gray-400 border mx-5 px-4 rounded-md "
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        <input
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          type="text"
                          placeholder={t("names")}
                          className="bg-gray-300 px-1 py-2 focus:text-white text-white rounded-md mt-5 w-60 md:w-44 md:mx-2"
                        />
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          value={email}
                          placeholder={t("Email")}
                          className="bg-gray-300 px-1 focus:text-white text-white py-2 rounded-md mt-5 w-60 md:w-44 md:mx-2"
                        />
                      </div>
                      <textarea
                        placeholder={t("Description")}
                        value={textarea}
                        onChange={(e) => setTeaxtarea(e.target.value)}
                        className="w-60 h-28 bg-gray-300 px-1 focus:text-blue-900 text-blue-900 font-bold rounded-md my-5 md:w-11/12"
                      />
                      <div className="flex justify-center">
                        <button className="w-20 text-sm py-1 bg-gray-400 border-2 mb-5 border-gray-200 rounded-md hover:bg-blue-500 text-white font-bold">
                          {t("add")}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="">
                  {todo.map((i) => (
                    <div className="my-5 flex justify-center" key={i.id}>
                      <div className="bg-white w-80 h-auto py-2 rounded-md">
                        <h1 className="text-gray-600 text-lg font-bold mx-3">
                          {i.name}
                        </h1>
                        <p className="text-gray-500 break-words text-sm my-3 font-normal mx-3">
                          {i.textarea}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
