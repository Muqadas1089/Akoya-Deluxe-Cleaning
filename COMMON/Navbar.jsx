import React, { useState, useEffect } from "react";
import logo from "../src/assets/logo.png";
import { useTranslation } from "react-i18next";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaCheck,
  FaPhone,
  FaEye,
  FaEyeSlash,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [page, setPage] = useState("navbar");
  const { i18n, t } = useTranslation();

  const isArabic = i18n.language === "ar";

  const changeLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";

    localStorage.setItem("language", newLanguage);

    i18n.changeLanguage(newLanguage);

    document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLanguage;
  };

  useEffect(() => {
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.documentElement.lang = isArabic ? "ar" : "en";
  }, [isArabic]);

  useEffect(() => {
    if (page !== "navbar") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [page]);

  const [menueOPen, setmenueOpen] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [LoginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  const [LoginEmailError, setLoginEmailError] = useState("");
  const [LoginPasswordError, setLoginPasswordError] = useState("");

  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Phone, setPhone] = useState("");

  const [FullNameError, setFullNameError] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [ConfirmPasswordError, setConfirmPasswordError] = useState("");
  const [PhoneError, setPhoneError] = useState("");

  const [ForgotEmail, setForgotEmail] = useState("");
  const [ForgotEmailError, setForgotEmailError] = useState("");

  return (
    <div dir={isArabic ? "rtl" : "ltr"}>

      {page === "navbar" && (
        <nav
          className="flex justify-around items-center backdrop-blur-md text-white
          h-[65px] w-full fixed top-0 left-0 right-0 z-50
          bg-black/20 backdrop-blur-md shadow-lg px-3 sm:px-4"
        >

          <Link to="/" onClick={() => setmenueOpen(false)}>
            <img
              src={logo}
              alt="companylogo"
              className="h-[38px] w-[90px] cursor-pointer"
            />
          </Link>

          <div className="hidden lg:flex gap-9 text-xs font-medium">

            <Link
              to="/"
              className="hover:scale-110 transition duration-300"
            >
              {t("home").toUpperCase()}
            </Link>

            <Link
              to="/Service"
              className="hover:scale-110 transition duration-300"
            >
              {t("services").toUpperCase()}
            </Link>

            <Link
              to="/About"
              className="hover:scale-110 transition duration-300"
            >
              {t("about").toUpperCase()}
            </Link>

            <Link
              to="/Vission"
              className="hover:scale-110 transition duration-300"
            >
              {t("visionMission").toUpperCase()}
            </Link>

            <Link
              to="/Contact"
              className="hover:scale-110 transition duration-300"
            >
              {t("contact").toUpperCase()}
            </Link>

          </div>

          <div className="hidden lg:flex gap-4">

            <button
              onClick={changeLanguage}
              className="h-[38px] w-[80px] border-2 border-[#d4af37]
              rounded-3xl text-white hover:scale-110 transition duration-300"
            >
              {i18n.language === "en" ? "العربية" : "English"}
            </button>

            <button
              className="h-[40px] w-[140px] border-2 border-[#d4af37]
              rounded-3xl hover:scale-110 transition duration-300
              text-white text-xs font-medium whitespace-nowrap"
              onClick={() => {
                setmenueOpen(false);
                setPage("login");
              }}
            >
              {t("clientLogin")}
            </button>

            <Link to={"/BookNow"}>
              <button
                className="h-[38px] w-[95px] border-2 border-[#d4af37]
                hover:scale-110 transition duration-300 rounded-3xl
                font-medium text-sm bg-[#d4af37]"
              >
                {t("bookNow")}
              </button>
            </Link>

          </div>

          <button
            className="lg:hidden text-3xl text-white"
            onClick={() => setmenueOpen(!menueOPen)}
          >
            <FaBars />
          </button>

          {menueOPen && (
            <div
              className={`absolute top-[65px] ${
                isArabic ? "right-0" : "left-0"
              } w-full bg-black/90 backdrop-blur-md
              flex flex-col items-center gap-5 py-6 lg:hidden`}
            >

              <Link
                to="/"
                onClick={() => setmenueOpen(false)}
                className="text-xs font-medium hover:scale-110 transition duration-300"
              >
                {t("home").toUpperCase()}
              </Link>

              <Link
                to="/Service"
                onClick={() => setmenueOpen(false)}
                className="text-xs font-medium hover:scale-110 transition duration-300"
              >
                {t("services").toUpperCase()}
              </Link>

              <Link
                to="/About"
                onClick={() => setmenueOpen(false)}
                className="text-xs font-medium hover:scale-110 transition duration-300"
              >
                {t("about").toUpperCase()}
              </Link>

              <Link
                to="/Vission"
                onClick={() => setmenueOpen(false)}
                className="text-xs font-medium hover:scale-110 transition duration-300"
              >
                {t("visionMission").toUpperCase()}
              </Link>

              <Link
                to="/Contact"
                onClick={() => setmenueOpen(false)}
                className="text-xs font-medium hover:scale-110 transition duration-300"
              >
                {t("contact").toUpperCase()}
              </Link>

              <button
                onClick={changeLanguage}
                className="h-[38px] w-[80px] border-2 border-[#d4af37]
                rounded-3xl text-white hover:scale-110 transition duration-300"
              >
                {i18n.language === "en" ? "العربية" : "English"}
              </button>

              <button
                className="h-[40px] w-[140px] border-2 border-[#d4af37]
                rounded-3xl hover:scale-110 transition duration-300
                text-white text-xs font-medium whitespace-nowrap"
                onClick={() => {
                  setmenueOpen(false);
                  setPage("login");
                }}
              >
                {t("clientLogin")}
              </button>

              <Link
                to={"/BookNow"}
                onClick={() => setmenueOpen(false)}
              >
                <button
                  className="h-[38px] w-[95px] border-2 border-[#d4af37]
                  hover:scale-110 transition duration-300 rounded-3xl
                  font-medium text-sm bg-[#d4af37]"
                >
                  {t("bookNow")}
                </button>
              </Link>

            </div>
          )}

        </nav>
      )}

      {page === "login" && (

        <div
          className="fixed inset-0 z-[100] min-h-screen w-full bg-[#f7f5f1]
          flex justify-center items-center px-4 py-5 overflow-y-auto"
        >

          <div
            className="h-[570px] w-[450px] max-w-full bg-white rounded-2xl
            shadow-lg overflow-hidden shrink-0"
          >

            <div className="bg-[#1d1d1d] text-white h-[120px]">

              <h1
                className="text-[#d4af37] text-xl text-center pt-[25px]"
              >
                AKOYA LUXURY LAUNDRY
              </h1>

              <div
                className="h-[1px] w-[90%] mx-auto mt-[8px]
                bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
              >
              </div>

              <h1 className="text-center text-sm pt-[10px]">
                {t("signInToAccount")}
              </h1>

            </div>

            <div className="px-[32px] pt-[20px]">

              <label
                className="text-[#26354d] font-semibold text-sm"
              >
                {t("emailAddress")}
              </label>

              <div className="relative mt-[5px]">

                <FaEnvelope
                  className={`absolute ${isArabic ? "right-[15px]" : "left-[15px]"} top-[16px]
                  text-gray-400`}
                />

                <input
                  type="email"
                  value={LoginEmail}
                  onChange={(e) => {
                    setLoginEmail(e.target.value);
                    setLoginEmailError("");
                  }}
                  placeholder="your@email.com"
                  className={`h-[52px] w-full border border-gray-300
                  rounded-lg ${isArabic ? "pr-[52px] pl-[15px]" : "pl-[52px] pr-[15px]"} outline-none
                  focus:border-[#d4af37] focus:border-2`}
                />

              </div>

              {LoginEmailError && (
                <p className="text-red-500 text-sm mt-1">
                  {LoginEmailError}
                </p>
              )}

              <label
                className="text-[#26354d] font-semibold text-sm
                block mt-[20px]"
              >
                {t("password")}
              </label>

              <div className="relative mt-[5px]">

                <FaLock
                  className={`absolute ${isArabic ? "right-[16px]" : "left-[16px]"} top-[16px]
                  text-gray-400`}
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={LoginPassword}
                  onChange={(e) => {
                    setLoginPassword(e.target.value);
                    setLoginPasswordError("");
                  }}
                  className={`h-[52px] w-full border border-gray-300
                  rounded-lg ${isArabic ? "pr-[52px] pl-[50px]" : "pl-[52px] pr-[50px]"} outline-none
                  focus:border-[#d4af37] focus:border-2`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute ${isArabic ? "left-[15px]" : "right-[15px]"} top-[16px]
                  text-gray-500`}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>

              {LoginPasswordError && (
                <p className="text-red-500 text-sm mt-1">
                  {LoginPasswordError}
                </p>
              )}

              <div
                className="flex justify-between items-center mt-[20px]"
              >

                <label
                  className="flex items-center gap-2
                  text-gray-500 text-sm"
                >

                  <input
                    type="checkbox"
                    className="h-[17px] w-[17px]"
                  />

                  {t("rememberMe")}

                </label>

                <button
                  onClick={() => {
                    setForgotEmail("");
                    setForgotEmailError("");
                    setPage("forgot");
                  }}
                  className="text-[#d4af37] font-medium text-sm
                  hover:underline"
                >
                  {t("forgotPassword")}
                </button>

              </div>

              <button
                onClick={() => {

                  setLoginEmailError("");
                  setLoginPasswordError("");

                  if (LoginEmail === "") {
                    setLoginEmailError(t("emailRequired"));
                  }
                  else if (LoginPassword === "") {
                    setLoginPasswordError(t("passwordRequired"));
                  }
                  else {
                    alert(t("loginSuccessfully"));
                  }

                }}
                className="h-[48px] w-full bg-[#d4af37]
                rounded-lg text-white mt-[22px]
                hover:scale-[1.01] transition duration-300"
              >
                {t("signIn")}
              </button>

              <div className="flex items-center gap-3 mt-[22px]">

                <hr className="flex-1 border-gray-300" />

                <p
                  className="text-gray-500 text-sm whitespace-nowrap"
                >
                  {t("newToAkoya")}
                </p>

                <hr className="flex-1 border-gray-300" />

              </div>

              <button
                onClick={() => setPage("signup")}
                className="block w-full text-center text-[#d4af37]
                mt-[17px] font-medium hover:underline"
              >
                {t("createYourAccount")}
              </button>

            </div>

          </div>

        </div>
      )}

      {page === "forgot" && (

        <div
          className="fixed inset-0 z-[100] min-h-screen w-full bg-[#f7f5f1]
          flex justify-center items-center py-[30px] px-4 overflow-y-auto"
        >

          <div
            className="w-[520px] max-w-full bg-white rounded-2xl
            shadow-lg overflow-hidden shrink-0"
          >

            <div className="bg-[#1d1d1d] text-white h-[175px]">

              <h1
                className="text-[#d4af37] text-[23px] text-center
                pt-[35px] tracking-wide"
              >
                AKOYA LUXURY LAUNDRY
              </h1>

              <div
                className="h-[1px] w-[88%] mx-auto mt-[14px]
                bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
              >
              </div>

              <p
                className="text-center text-[15px] pt-[14px]
                text-gray-200"
              >
                {t("resetYourPassword")}
              </p>

            </div>

            <div className="px-[38px] pt-[35px] pb-[35px]">

              <label
                className="text-[#26354d] font-semibold text-[15px]"
              >
                {t("emailAddress")}
              </label>

              <div className="relative mt-[7px]">

                <FaEnvelope
                  className={`absolute ${isArabic ? "right-[17px]" : "left-[17px]"} top-[18px]
                  text-gray-400`}
                />

                <input
                  type="email"
                  value={ForgotEmail}
                  onChange={(e) => {
                    setForgotEmail(e.target.value);
                    setForgotEmailError("");
                  }}
                  placeholder="your@email.com"
                  className={`h-[58px] w-full border border-gray-300
                  rounded-lg ${isArabic ? "pr-[52px] pl-[15px]" : "pl-[52px] pr-[15px]"} outline-none
                  focus:border-[#d4af37] focus:border-2 text-[15px]`}
                />

              </div>

              {ForgotEmailError && (
                <p className="text-red-500 text-[13px] mt-[4px]">
                  {ForgotEmailError}
                </p>
              )}

              <button
                onClick={() => {

                  setForgotEmailError("");

                  if (ForgotEmail === "") {
                    setForgotEmailError(t("emailRequired"));
                  }
                  else {
                    alert(t("checkYourInbox"));
                  }

                }}
                className="h-[54px] w-full bg-[#d4af37]
                rounded-lg text-white mt-[25px]
                hover:scale-[1.01] transition duration-300
                font-medium"
              >
                {t("sendCode")}
              </button>

              <p
                className="text-center text-gray-500 text-[14px]
                mt-[24px]"
              >

                {t("rememberYourPassword")}{" "}

                <button
                  onClick={() => setPage("login")}
                  className="text-[#d4af37] font-medium
                  hover:underline"
                >
                  {t("signIn")}
                </button>

              </p>

            </div>

          </div>

        </div>
      )}

      {page === "signup" && (

        <div
          className="fixed inset-0 z-[100] h-screen w-full bg-[#f7f5f1]
          flex justify-center items-center overflow-y-auto px-4 py-3"
        >

          <div
            className="w-[500px] max-w-full h-[95vh] bg-white rounded-2xl
            shadow-lg overflow-hidden"
          >

            <div className="bg-[#1d1d1d] text-white h-[120px]">

              <h1
                className="text-[#d4af37] text-[21px] text-center
                pt-[25px] tracking-wide"
              >
                AKOYA LUXURY LAUNDRY
              </h1>

              <div
                className="h-[1px] w-[88%] mx-auto mt-[10px]
                bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
              >
              </div>

              <p
                className="text-center text-[14px] pt-[10px]
                text-gray-200"
              >
                {t("createPremiumAccount")}
              </p>

            </div>

            <div className="px-[35px] pt-[18px] pb-[18px] overflow-y-auto h-[calc(95vh-120px)]">

              <label
                className="text-[#26354d] font-semibold text-[14px]"
              >
                {t("fullName")}
              </label>

              <div className="relative mt-[5px]">

                <FaUser
                  className={`absolute ${isArabic ? "right-[16px]" : "left-[16px]"} top-[15px]
                  text-gray-400`}
                />

                <input
                  type="text"
                  value={FullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    setFullNameError("");
                  }}
                  placeholder={t("enterYourFullName")}
                  className={`h-[48px] w-full border border-gray-300
                  rounded-lg ${isArabic ? "pr-[50px] pl-[15px]" : "pl-[50px] pr-[15px]"} outline-none
                  focus:border-[#d4af37] focus:border-2 text-[14px]`}
                />

              </div>

              {FullNameError && (
                <p className="text-red-500 text-[12px] mt-[2px]">
                  {FullNameError}
                </p>
              )}

              <label
                className="text-[#26354d] font-semibold text-[14px]
                block mt-[12px]"
              >
                {t("emailAddress")}
              </label>

              <div className="relative mt-[5px]">

                <FaEnvelope
                  className={`absolute ${isArabic ? "right-[16px]" : "left-[16px]"} top-[15px]
                  text-gray-400`}
                />

                <input
                  type="email"
                  value={Email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                  placeholder="your@email.com"
                  className={`h-[48px] w-full border border-gray-300
                  rounded-lg ${isArabic ? "pr-[50px] pl-[15px]" : "pl-[50px] pr-[15px]"} outline-none
                  focus:border-[#d4af37] focus:border-2 text-[14px]`}
                />

              </div>

              {EmailError && (
                <p className="text-red-500 text-[12px] mt-[2px]">
                  {EmailError}
                </p>
              )}

              <label
                className="text-[#26354d] font-semibold text-[14px]
                block mt-[12px]"
              >
                {t("password")}
              </label>

              <div className="relative mt-[5px]">

                <FaLock
                  className={`absolute ${isArabic ? "right-[16px]" : "left-[16px]"} top-[15px]
                  text-gray-400`}
                />

                <input
                  type={showSignupPassword ? "text" : "password"}
                  value={Password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError("");
                  }}
                  placeholder="••••••••"
                  className={`h-[48px] w-full border border-gray-300
                  rounded-lg ${isArabic ? "pr-[50px] pl-[50px]" : "pl-[50px] pr-[50px]"} outline-none
                  focus:border-[#d4af37] focus:border-2 text-[14px]`}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowSignupPassword(!showSignupPassword)
                  }
                  className={`absolute ${isArabic ? "left-[16px]" : "right-[16px]"} top-[15px]
                  text-gray-500`}
                >
                  {showSignupPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>

              {PasswordError && (
                <p className="text-red-500 text-[12px] mt-[2px]">
                  {PasswordError}
                </p>
              )}

              <label
                className="text-[#26354d] font-semibold text-[14px]
                block mt-[12px]"
              >
                {t("confirmPassword")}
              </label>

              <div className="relative mt-[5px]">

                <FaCheck
                  className={`absolute ${isArabic ? "right-[16px]" : "left-[16px]"} top-[15px]
                  text-gray-400`}
                />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={ConfirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setConfirmPasswordError("");
                  }}
                  placeholder="••••••••"
                  className={`h-[48px] w-full border border-gray-300
                  rounded-lg ${isArabic ? "pr-[50px] pl-[50px]" : "pl-[50px] pr-[50px]"} outline-none
                  focus:border-[#d4af37] focus:border-2 text-[14px]`}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className={`absolute ${isArabic ? "left-[16px]" : "right-[16px]"} top-[15px]
                  text-gray-500`}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>

              {ConfirmPasswordError && (
                <p className="text-red-500 text-[12px] mt-[2px]">
                  {ConfirmPasswordError}
                </p>
              )}

              <label
                className="text-[#26354d] font-semibold text-[14px]
                block mt-[12px]"
              >
                {t("whatsappPhoneNumber")}
              </label>

              <div className="relative mt-[5px]">

                <FaPhone
                  className={`absolute ${isArabic ? "right-[16px]" : "left-[16px]"} top-[15px]
                  text-gray-400`}
                />

                <input
                  type="text"
                  value={Phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setPhoneError("");
                  }}
                  placeholder="+1234567890"
                  className={`h-[48px] w-full border border-gray-300
                  rounded-lg ${isArabic ? "pr-[50px] pl-[15px]" : "pl-[50px] pr-[15px]"} outline-none
                  focus:border-[#d4af37] focus:border-2 text-[14px]`}
                />

              </div>

              {PhoneError && (
                <p className="text-red-500 text-[12px] mt-[2px]">
                  {PhoneError}
                </p>
              )}

              <p className="text-gray-500 text-[11px] mt-[3px]">
                {t("enterFullWhatsApp")}
              </p>

              <label
                className="flex items-center gap-2 mt-[12px]
                text-gray-600 text-[13px]"
              >

                <input
                  type="checkbox"
                  className="h-[16px] w-[16px]"
                />

                <span>
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-[#d4af37] hover:underline"
                  >
                    {t("termsAndConditions")}
                  </a>
                </span>

              </label>

              <button
                onClick={() => {

                  setFullNameError("");
                  setEmailError("");
                  setPasswordError("");
                  setConfirmPasswordError("");
                  setPhoneError("");

                  if (FullName === "") {
                    setFullNameError(t("fullNameRequired"));
                  }
                  else if (Email === "") {
                    setEmailError(t("emailRequired"));
                  }
                  else if (Password === "") {
                    setPasswordError(t("passwordRequired"));
                  }
                  else if (ConfirmPassword === "") {
                    setConfirmPasswordError(
                      t("confirmPasswordRequired")
                    );
                  }
                  else if (Password !== ConfirmPassword) {
                    setConfirmPasswordError(
                      t("passwordsDoNotMatch")
                    );
                  }
                  else if (Phone === "") {
                    setPhoneError(
                      t("whatsappRequired")
                    );
                  }
                  else {
                    alert(t("accountCreatedSuccessfully"));
                  }

                }}
                className="h-[48px] w-full bg-[#d4af37]
                rounded-lg text-white mt-[16px]
                hover:scale-[1.01] transition duration-300
                font-medium"
              >
                {t("createAccount")}
              </button>

              <p
                className="text-center text-gray-500 text-[13px]
                mt-[15px]"
              >
                {t("alreadyHaveAccount")}{" "}

                <button
                  onClick={() => setPage("login")}
                  className="text-[#d4af37] font-medium
                  hover:underline"
                >
                  {t("signIn")}
                </button>

              </p>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default Navbar;
