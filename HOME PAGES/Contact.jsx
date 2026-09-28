
import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "motion/react";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

import image1 from "../src/assets/img1.jpg";
import image2 from "../src/assets/img2.jpg";
import image3 from "../src/assets/img3.jpg";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full overflow-x-hidden">
      <Swiper
        cssMode={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 2000,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="
          mySwiper
          w-full

          [&_.swiper-pagination]:!bottom-[20px]

          [&_.swiper-pagination-bullet]:!w-[13px]
          [&_.swiper-pagination-bullet]:!h-[13px]
          [&_.swiper-pagination-bullet]:!rounded-full
          [&_.swiper-pagination-bullet]:!bg-white
          [&_.swiper-pagination-bullet]:!opacity-70

          [&_.swiper-pagination-bullet-active]:!w-[28px]
          [&_.swiper-pagination-bullet-active]:!h-[13px]
          [&_.swiper-pagination-bullet-active]:!rounded-full
          [&_.swiper-pagination-bullet-active]:!bg-[#d4af37]
          [&_.swiper-pagination-bullet-active]:!opacity-100
        "
      >
        <SwiperSlide>
          <div className="relative h-[520px] w-full max-md:w-full max-md:ml-0 max-md:h-[420px] max-sm:h-[360px]">
            <img className="w-full h-full object-cover" src={image1} alt="" />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center text-white w-[90%]">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold mb-4 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl"
              >
                {t("contactPage.hero.title")}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-xl mb-6 max-md:text-base max-sm:text-sm"
              >
                {t("contactPage.hero.description")}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-[#d4af37] h-[2px] w-[100px]"
              ></motion.p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-[520px] w-full max-md:w-full max-md:ml-0 max-md:h-[420px] max-sm:h-[360px]">
            <img className="w-full h-full object-cover" src={image2} alt="" />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center text-white w-[90%]">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold mb-4 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl"
              >
                {t("contactPage.hero.professionalCare")}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 100 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-xl mb-6 max-md:text-base max-sm:text-sm"
              >
                {t("contactPage.hero.professionalDescription")}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 100 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-[#d4af37] h-[2px] w-[100px]"
              ></motion.p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-[520px] w-full max-md:w-full max-md:ml-0 max-md:h-[420px] max-sm:h-[360px]">
            <img className="w-full h-full object-cover" src={image3} alt="" />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center text-white w-[90%]">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold mb-4 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl"
              >
                {t("contactPage.hero.expressService")}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-xl mb-6 max-md:text-base max-sm:text-sm"
              >
                {t("contactPage.hero.expressDescription")}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-[#d4af37] h-[2px] w-[100px]"
              ></motion.p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div>
        <section className="bg-[#F8F5F2] h-[900px] w-full max-md:w-full max-md:ml-0 max-lg:h-auto max-lg:pb-[60px]">

          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="text-4xl font-light pt-[70px] pl-[43%] pb-[10px] max-lg:pl-0 max-lg:text-center max-md:text-3xl"
          >
            {t("contactPage.contactUs")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mt-[20px] gap-3 ml-[-38px] max-lg:ml-0 max-sm:gap-2"
          >
            <div className="h-[2px] w-[70px] bg-yellow-500 max-sm:w-[45px]"></div>

            <div className="text-yellow-500 font-medium text-xl mt-[-15px] max-sm:text-lg">
              {t("contactPage.getInTouch")}
            </div>

            <div className="h-[2px] w-[70px] bg-yellow-500 max-sm:w-[45px]"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="mt-[70px] max-lg:mt-[50px] max-lg:px-[30px] max-sm:px-[20px]"
          >
            <p className="text-xl font-medium ml-[10%] mb-[20px] max-lg:ml-0">
              {t("contactPage.howToReachUs")}
            </p>

            <p className="ml-[10%] w-[600px] mb-[30px] max-lg:ml-0 max-lg:w-full max-w-[600px]">
              {t("contactPage.conciergeDescription")}
            </p>

            <div className="space-y-8 ml-[10%] max-lg:ml-0">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="flex items-center gap-5 max-sm:gap-3"
              >
                <div className="w-16 h-16 bg-[#f5efdf] rounded-xl flex items-center justify-center shrink-0 max-sm:w-14 max-sm:h-14">
                  <FaLocationDot className="text-[#d9a900] text-2xl" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold max-sm:text-lg">
                    {t("contactPage.location")}
                  </h3>

                  <p className="text-lg max-sm:text-base">
                    {t("contactPage.address")}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="flex items-center gap-5 max-sm:gap-3"
              >
                <div className="w-16 h-16 bg-[#f5efdf] rounded-xl flex items-center justify-center shrink-0 max-sm:w-14 max-sm:h-14">
                  <FaPhone className="text-[#d9a900] text-2xl" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold max-sm:text-lg">
                    {t("contactPage.phone")}
                  </h3>

                  <p className="text-lg max-sm:text-base">
                    +974 1234 5678
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="flex items-center gap-5 max-sm:gap-3"
              >
                <div className="w-16 h-16 bg-[#f5efdf] rounded-xl flex items-center justify-center shrink-0 max-sm:w-14 max-sm:h-14">
                  <FaEnvelope className="text-[#d9a900] text-2xl" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold max-sm:text-lg">
                    {t("contactPage.email")}
                  </h3>

                  <p className="text-lg max-sm:text-base">
                    info@akoyalaundry.com
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 ml-[10%] max-lg:ml-0">
              <h3 className="text-2xl font-semibold mb-5 max-sm:text-xl">
                {t("contactPage.followUs")}
              </h3>

              <div className="flex gap-5 max-sm:gap-3">
                <div className="hover:bg-yellow-400 hover:transition-transform hover:ease-out duration-300 w-13 h-13 bg-[#1f1f1f] rounded-full flex items-center justify-center cursor-pointer max-sm:w-11 max-sm:h-11">
                  <FaInstagram className="text-white text-2xl max-sm:text-xl" />
                </div>

                <div className="hover:bg-yellow-400 hover:tranistion-transfrom hover:ease-out duration-300 w-13 h-13 bg-[#1f1f1f] rounded-full flex items-center justify-center cursor-pointer max-sm:w-11 max-sm:h-11">
                  <FaTwitter className="text-white text-2xl max-sm:text-xl" />
                </div>

                <div className="hover:bg-yellow-400 hover:transition-transform hover-ease-out duration-300 w-13 h-13 bg-[#1f1f1f] rounded-full flex items-center justify-center cursor-pointer max-sm:w-11 max-sm:h-11">
                  <FaWhatsapp className="text-white text-2xl max-sm:text-xl" />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col h-[600px] w-[550px] rounded-xl shadow-xl bg-white mt-[-37%] ml-[56%] max-lg:mt-[60px] max-lg:ml-auto max-lg:mr-auto max-lg:w-[90%] max-md:h-auto max-md:min-h-[600px] max-sm:w-[calc(100%-40px)]">

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <form action="Submit">
                <p className="text-xl font-bold mt-[50px] ml-[40px] mb-[30px] max-sm:ml-[20px] max-sm:mr-[20px]">
                  {t("contactPage.sendMessage")}
                </p>

                <label className="ml-[40px] mt-[20px] max-sm:ml-[20px]" htmlFor="">
                  {t("contactPage.fullName")}
                </label>

                <input
                  className="ml-[40px] focus:border-yellow-400 mt-[10px] h-[50px] p-[10px] mb-[10px] bg-[#FAFAFA] w-[450px] border-3 border-gray-300 rounded-xl max-lg:w-[calc(100%-80px)] max-sm:ml-[20px] max-sm:w-[calc(100%-40px)]"
                  required
                  type="text"
                  placeholder={t("contactPage.namePlaceholder")}
                />

                <label className="ml-[40px] mt-[20px] max-sm:ml-[20px]" htmlFor="">
                  {t("contactPage.emailAddress")}
                </label>

                <input
                  className="ml-[40px] mt-[10px] focus:border-yellow-400 h-[50px] mb-[10px] p-[10px] bg-[#FAFAFA] w-[450px] border-3 border-gray-300 rounded-xl max-lg:w-[calc(100%-80px)] max-sm:ml-[20px] max-sm:w-[calc(100%-40px)]"
                  required
                  type="text"
                  placeholder={t("contactPage.emailPlaceholder")}
                />

                <label className="ml-[40px] mt-[20px] max-sm:ml-[20px]" htmlFor="">
                  {t("contactPage.yourMessage")}
                </label>

                <textarea
                  className="ml-[40px] focus:border-yellow-400 border-2 mt-[10px] h-[150px] bg-[#FAFAFA] p-[10px] w-[450px] border-gray-300 rounded-xl max-lg:w-[calc(100%-80px)] max-sm:ml-[20px] max-sm:w-[calc(100%-40px)]"
                  placeholder={t("contactPage.messagePlaceholder")}
                ></textarea>

                <button
                  className="bg-black w-[450px] h-[50px] text-center text-white mt-[20px] ml-[40px] rounded-xl hover:scale-[1.03] transition-transform ease-out duration-300 max-lg:w-[calc(100%-80px)] max-sm:ml-[20px] max-sm:w-[calc(100%-40px)]"
                >
                  {t("contactPage.sendMessageButton")}
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </div>

      <div></div>
    </div>
  );
};

export default Contact;
