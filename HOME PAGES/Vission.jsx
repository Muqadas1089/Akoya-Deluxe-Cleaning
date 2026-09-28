import React from "react";
import image from "../src/assets/Vission.jpeg";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Vission = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const isArabic = i18n.language.startsWith("ar");

  const Core = [
    {
      icon: "",
      title: t("visionPage.core.0.title", "Excellence"),
      des: t(
        "visionPage.core.0.des",
        "Every item, every wash, every fragrance meets the highest standards."
      ),
    },
    {
      icon: "",
      title: t("visionPage.core.1.title", "Innovation"),
      des: t(
        "visionPage.core.1.des",
        "We use advanced systems and smart logistics to deliver faster and cleaner results."
      ),
    },
    {
      icon: "",
      title: t("visionPage.core.2.title", "Sustainability"),
      des: t(
        "visionPage.core.2.des",
        "We commit to eco-friendly methods and responsible operations."
      ),
    },
    {
      icon: "",
      title: t("visionPage.core.3.title", "Customer Focus"),
      des: t(
        "visionPage.core.3.des",
        "Your satisfaction drives everything we do."
      ),
    },
  ];

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full max-w-full overflow-x-hidden"
    >
      <section className="relative box-border w-full mx-0 bg-[#F7F8F9] pb-[30px] pt-[87px] max-sm:pt-[70px]">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-[10px] text-center max-md:text-4xl max-sm:text-3xl"
        >
          {t("visionPage.title", "Vision & Mission")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-yellow-500 text-xl font-medium mb-[10px] text-center max-sm:text-lg"
        >
          {t("visionPage.excellenceTitle", "Akoya Premium Laundry")}
        </motion.p>

        <motion.i
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="block text-center px-5"
        >
          {t(
            "visionPage.subtitle",
            "Redefining Fabric Care and Personal Luxury in Qatar"
          )}
        </motion.i>

        <p className="mt-[10px] bg-yellow-500 h-[5px] w-[100px] mb-[30px] mx-auto"></p>

        <div className="relative">

          <motion.div
            initial={{ opacity: 0, x: isArabic ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`sticky top-[30px] relative ${
              isArabic ? "mr-[80px]" : "ml-[80px]"
            } max-lg:mx-auto max-lg:w-[400px] max-sm:w-[calc(100%-40px)]`}
          >
            <img
              className="relative h-[800px] w-[400px] mt-[50px] object-cover rounded-xl max-lg:w-full max-md:h-[650px] max-sm:h-[550px]"
              src={image}
              alt=""
            />

            <div
              className={`absolute top-[0px] ${
                isArabic ? "right-0" : "left-0"
              } w-[400px] h-[800px] rounded-xl bg-black/45 max-lg:w-full max-md:h-[650px] max-sm:h-[550px]`}
            ></div>

            <div
              className={`absolute top-[75%] ${
                isArabic ? "right-6" : "left-6"
              } text-white max-sm:top-[70%] max-sm:right-5 max-sm:left-5`}
            >
              <p className="text-2xl font-bold max-sm:text-xl">
                {t(
                  "visionPage.experienceTitle",
                  "Excellence in Every Detail"
                )}
              </p>

              <p className="mt-[5px]">
                {t(
                  "visionPage.excellenceSubtitle",
                  "Technology, Artistry, and Care"
                )}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 bg-yellow-500 mt-[25px] rounded-xl w-[400px] mb-[30px] max-lg:w-full"
            >
              <p
                className={`text-white ${
                  isArabic ? "mr-[30px]" : "ml-[30px]"
                } pt-[10px] font-bold max-sm:mx-[20px]`}
              >
                {t(
                  "visionPage.bookNow",
                  "Experience Excellence Today"
                )}
              </p>

              <button
                onClick={() => navigate("/BookNow")}
                className={`bg-white font-bold hover:scale-[1.03] transition-transform duration-300 ease-out text-xl w-[330px] mb-[20px] mt-[20px] h-[45px] ${
                  isArabic ? "mr-[30px]" : "ml-[30px]"
                } rounded-xl text-yellow-500 max-sm:w-[calc(100%-40px)] max-sm:mx-[20px] max-sm:text-lg`}
              >
                {t("visionPage.bookButton", "Book Now")}
              </button>
            </motion.div>
          </motion.div>


          <section className={isArabic ? "mr-[23%]" : "ml-[23%]"}>

            <div className="flex justify-center items-center mt-[80px] max-lg:mt-[40px] max-lg:flex-col">

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`mt-[-156%] shadow-2xl bg-yellow-500 h-[230px] ${
                  isArabic ? "rounded-r-xl" : "rounded-l-xl"
                } w-[340px] text-center text-5xl text-white pt-[85px] font-bold max-lg:mt-[30px] max-sm:w-[calc(100%-40px)] max-sm:text-4xl max-sm:pt-[85px]`}
              >
                {t("visionPage.ourVision", "Our Vision")}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                className={`mt-[-156%] h-[230px] ${
                  isArabic ? "rounded-l-xl" : "rounded-r-xl"
                } w-[400px] shadow-lg text-center pt-[60px] pl-[30px] pr-[30px] max-lg:mt-0 max-lg:w-[340px] max-sm:w-[calc(100%-40px)] max-sm:h-auto max-sm:min-h-[230px]`}
              >
                {t(
                  "visionPage.visionText",
                  "To redefine fabric care and personal luxury in Qatar through innovation, fragrance, and flawless service — making Akoya Premium Laundry the symbol of elegance and trust in every home"
                )}
              </motion.div>

            </div>


            <div className="flex justify-center items-center relative z-10 max-lg:flex-col">

              <motion.div
                initial={{ opacity: 0, x: isArabic ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`mt-[-105%] h-[300px] ${
                  isArabic ? "rounded-r-xl" : "rounded-l-xl"
                } w-[420px] shadow-lg text-md pt-[60px] pl-[30px] pr-[30px] max-lg:mt-[30px] max-lg:w-[400px] max-sm:w-[calc(100%-40px)] max-sm:h-auto max-sm:min-h-[300px]`}
              >
                {t(
                  "visionPage.missionText",
                  "At Akoya Premium Laundry, we strive to offer premium laundry, delivery, and custom perfume solutions that combine technology, artistry, and care. Our mission is to transform daily routines into refined experiences through exceptional service, attention to detail, and sustainable practices."
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`mt-[-105%] shadow-2xl bg-black h-[300px] ${
                  isArabic ? "rounded-l-xl" : "rounded-r-xl"
                } w-[330px] text-center text-5xl text-white pt-[105px] font-bold max-lg:mt-0 max-sm:w-[calc(100%-40px)] max-sm:text-4xl`}
              >
                {isArabic ? (
                  t("visionPage.ourMission", "Our Mission")
                ) : (
                  <>
                    {t("visionPage.ourMission", "Our Mission").split(" ")[0]}
                    <br />
                    {t("visionPage.ourMission", "Our Mission").split(" ")[1]}
                  </>
                )}
              </motion.div>

            </div>

          </section>


          <section
            className={`h-[610px] mb-[30px] w-[60%] bg-white rounded-2xl shadow-lg mt-[-27%] ${
              isArabic ? "mr-[36%]" : "ml-[36%]"
            } relative z-20 max-lg:h-auto max-lg:w-[90%] max-lg:mx-auto max-lg:mt-[50px] max-sm:w-[calc(100%-30px)]`}
          >

            <div className="pt-[60px] text-3xl text-center pb-[30px] font-bold max-sm:text-2xl max-sm:pt-[40px]">
              {t("visionPage.coreValues", "Our Core Values")}
            </div>

            <div className="flex justify-center flex-wrap gap-[30px] mt-[20px] pb-[40px] px-[20px]">

              {Core.map((item, index) => (
                <div
                  key={index}
                  className={`h-[180px] bg-[#FBFCFD] hover:shadow-lg ${
                    isArabic ? "border-r-6" : "border-l-6"
                  } border-yellow-500 rounded-xl w-[360px] max-sm:w-full`}
                >

                  <div
                    className={`flex items-center ${
                      isArabic ? "mr-[20px]" : "ml-[20px]"
                    } mt-[40px] gap-[10px]`}
                  >

                    <div className="h-[45px] w-[45px] bg-yellow-500 rounded-lg flex justify-center items-center shrink-0">
                      <div className="h-[10px] w-[10px] rounded-full bg-white"></div>
                    </div>

                    <p className="text-xl font-bold max-sm:text-lg">
                      {item.title}
                    </p>

                  </div>

                  <p
                    className={`pt-[10px] ${
                      isArabic ? "pr-[50px]" : "pl-[50px]"
                    } max-sm:pr-[20px] max-sm:pl-[20px]`}
                  >
                    {item.des}
                  </p>

                </div>
              ))}

            </div>

          </section>

        </div>

      </section>
    </div>
  );
};

export default Vission;

