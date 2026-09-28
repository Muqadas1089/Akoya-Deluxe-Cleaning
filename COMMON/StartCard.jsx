import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaXmark } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

import ramadanImage from "../src/Pics/startbanner.webp";

const WelcomePopup = () => {
  const { t } = useTranslation();

  const [showPopup, setShowPopup] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalTime = 10000;
    const intervalTime = 100;

    let elapsedTime = 0;

    const interval = setInterval(() => {
      elapsedTime += intervalTime;

      const percentage = (elapsedTime / totalTime) * 100;

      setProgress(percentage);

      if (elapsedTime >= totalTime) {
        clearInterval(interval);
        setShowPopup(false);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-[6px] px-4 py-4 overflow-hidden">

      {/* ================= POPUP CARD ================= */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.85,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.9,
        }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
        className="relative w-[550px] max-w-full min-h-[700px] bg-[#fffdf5] border-[2px] border-[#d4af37] rounded-[18px] shadow-2xl overflow-hidden max-md:min-h-[620px] max-sm:min-h-[560px] max-sm:rounded-[15px] max-sm:w-full max-sm:max-h-[calc(100vh-32px)]"
      >

        {/* ================= DECORATIVE DOTS ================= */}

        <div className="absolute top-[17px] left-[18px] w-[13px] h-[13px] rounded-full bg-[#f1dfad]"></div>

        <div className="absolute top-[235px] right-[10px] w-[9px] h-[9px] rounded-full bg-[#f1dfad] max-sm:top-[200px]"></div>

        <div className="absolute bottom-[18px] right-[18px] w-[18px] h-[18px] rounded-full bg-[#f1dfad]"></div>

        <div className="absolute bottom-[340px] left-[10px] w-[9px] h-[9px] rounded-full bg-[#f1dfad] max-sm:bottom-[280px]"></div>


        {/* ================= CLOSE BUTTON ================= */}

        <motion.button
          onClick={closePopup}
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.94,
          }}
          transition={{
            duration: 0.2,
          }}
          className="absolute top-[28px] right-[28px] z-20 w-[45px] h-[45px] rounded-full bg-[#f5f5f5] shadow-md flex items-center justify-center text-[#4b5563] hover:bg-white hover:text-black transition-colors duration-300 max-sm:top-[18px] max-sm:right-[18px] max-sm:w-[40px] max-sm:h-[40px]"
        >
          <FaXmark className="text-[20px]" />
        </motion.button>


        {/* ================= TOP LINE ================= */}

        <div className="w-[70%] h-[1px] bg-[#eee6d1] mx-auto mt-[45px] max-sm:mt-[35px]"></div>


        {/* ================= IMAGE ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="flex justify-center items-center mt-[25px] px-[40px] max-sm:px-[20px] max-sm:mt-[20px]"
        >
          <img
            src={ramadanImage}
            alt="Ramadan Mubarak"
            className="w-[330px] h-[300px] object-contain max-md:w-[300px] max-md:h-[270px] max-sm:w-[240px] max-sm:h-[210px]"
          />
        </motion.div>


        {/* ================= NAMES ================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          className="text-center text-[#d4a72c] text-[20px] font-medium mt-[5px] max-sm:text-[17px] max-[400px]:text-[15px]"
        >
          ✨ Grandma Dana ✨ &nbsp; ✨ Jassim ✨
        </motion.p>


        {/* ================= TITLE ================= */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          className="text-center text-[#d4af37] text-[34px] font-bold mt-[35px] max-sm:text-[27px] max-sm:mt-[20px] max-[400px]:text-[24px]"
        >
          {t("welcomeDearGuests")}
        </motion.h2>


        {/* ================= DESCRIPTION ================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="text-center text-[#374151] text-[17px] leading-[1.7] px-[45px] mt-[15px] max-sm:text-[15px] max-sm:px-[25px] max-[400px]:text-[14px] max-[400px]:px-[20px]"
        >
          {t("welcomeMessage1")}
          <br />
          {t("welcomeMessage2")}
          <br className="max-sm:hidden" />
          {t("welcomeMessage3")}
        </motion.p>


        {/* ================= PROGRESS BAR ================= */}

        <div className="px-[45px] mt-[32px] max-sm:px-[25px] max-sm:mt-[25px]">

          <div className="w-full h-[9px] bg-[#e5e7eb] rounded-full overflow-hidden">

            <motion.div
              className="h-full bg-[#d4af37] rounded-full"
              style={{
                width: `${progress}%`,
              }}
            ></motion.div>

          </div>

        </div>


        {/* ================= TIMER TEXT ================= */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.6,
          }}
          className="text-center text-[#64748b] text-[16px] mt-[17px] px-[20px] max-sm:text-[14px]"
        >
          {t("popupAutoClose")}
        </motion.p>

      </motion.div>

    </div>
  );
};

export default WelcomePopup;
