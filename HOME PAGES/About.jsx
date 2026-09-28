import React from 'react'
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import hero from "../src/assets/Abouthero.jpg";

import { FaShieldAlt } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

import tester1 from "../src/assets/abouts1.jpg";
import tester2 from "../src/assets/abouts2.jpg";
import tester3 from "../src/assets/abouts3.jpg";
import { motion } from "motion/react";

import {
  FaShirt,
  FaBoxOpen,
  FaSprayCan,
  FaPumpSoap,
  FaBox,
  FaGift,
  FaWhatsapp,
  FaRobot
} from "react-icons/fa6";


const About = () => {

    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const isArabic = i18n.language === "ar";


    const Choose = [
        {
            icon: <FaShieldAlt />,
            title: t("aboutPage.choose.premiumQuality.title"),
            des: t("aboutPage.choose.premiumQuality.des"),
        },
        {
            icon: <FaUserCheck />,
            title: t("aboutPage.choose.personalizedService.title"),
            des: t("aboutPage.choose.personalizedService.des")
        },
        {
            icon: <FaClock />,
            title: t("aboutPage.choose.convenience.title"),
            des: t("aboutPage.choose.convenience.des"),
        },
    ];


    const Journey = [
        {
            icon: <FaShirt />,
            title: t("aboutPage.journey.selectWashType.title"),
            des: t("aboutPage.journey.selectWashType.des"),
        },
        {
            icon: <FaBoxOpen />,
            title: t("aboutPage.journey.chooseGarments.title"),
            des: t("aboutPage.journey.chooseGarments.des"),
        },
        {
            icon: <FaSprayCan />,
            title: t("aboutPage.journey.steamFinishing.title"),
            des: t("aboutPage.journey.steamFinishing.des"),
        },
        {
            icon: <FaPumpSoap />,
            title: t("aboutPage.journey.fragranceInfusion.title"),
            des: t("aboutPage.journey.fragranceInfusion.des"),
        },
        {
            icon: <FaBox />,
            title: t("aboutPage.journey.packaging.title"),
            des: t("aboutPage.journey.packaging.des"),
        },
        {
            icon: <FaGift />,
            title: t("aboutPage.journey.personalization.title"),
            des: t("aboutPage.journey.personalization.des"),
        },
        {
            icon: <FaWhatsapp />,
            title: t("aboutPage.journey.whatsappCheckout.title"),
            des: t("aboutPage.journey.whatsappCheckout.des"),
        },
        {
            icon: <FaRobot />,
            title: t("aboutPage.journey.aiAssistance.title"),
            des: t("aboutPage.journey.aiAssistance.des"),
        },
    ];


    const Special = [
        {
            image: tester1,
            name: t("aboutPage.specialists.ahmed.name"),
            post: t("aboutPage.specialists.ahmed.post"),
            des: t("aboutPage.specialists.ahmed.des"),
        },
        {
            image: tester2,
            name: t("aboutPage.specialists.layla.name"),
            post: t("aboutPage.specialists.layla.post"),
            des: t("aboutPage.specialists.layla.des"),
        },
        {
            image: tester3,
            name: t("aboutPage.specialists.yousef.name"),
            post: t("aboutPage.specialists.yousef.post"),
            des: t("aboutPage.specialists.yousef.des"),
        },
    ];


    return (
        <div dir={isArabic ? "rtl" : "ltr"}>

            <section>

                <div className="relative">

                    <img
                        className={`
                        relative
                        w-full
                        h-[600px]
                        sm:h-[600px]  object-cover mb-[40px]
                        `}
                        src={hero}
                        alt=""
                    />

                    <div
                        className={`
                        absolute
                        top-0
                        bg-black/45
                        h-[600px]
                        w-full
                        `}
                    ></div>


                    <motion.p
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{ once: true }}
                    transition={{duration:0.8,
                        ease:"easeOut"
                    }}
                        className="
                        absolute
                        top-[30%]
                        left-1/2
                        -translate-x-1/2
                        text-white
                        text-3xl
                        sm:text-4xl
                        md:text-5xl
                        lg:text-6xl
                        whitespace-nowrap
                        "
                    >
                        {t("aboutPage.hero.title")}
                    </motion.p>


                    <div
                        className="
                        absolute
                        top-[40%]
                        left-1/2
                        -translate-x-1/2
                        text-white
                        text-sm
                        sm:text-lg
                        md:text-xl
                        flex
                        justify-center
                        items-center
                        whitespace-nowrap
                        "
                    >

                        <motion.p
                          initial={{opacity:0, y:30}}
                          whileInView={{opacity:1, y:0}}
                          viewport={{ once: true }}
                          transition={{duration:0.8,
                            ease:"easeOut"}}
                        className={`h-[2px] ${isArabic ? "ml-[10px] sm:ml-[15px]" : "mr-[10px] sm:mr-[15px]"} mt-[30px] w-[40px] sm:w-[70px] bg-yellow-400`}
                        ></motion.p>

                        <motion.p
                        initial={{opacity:0, y:50}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{ once: true }}
                        transition={{duration:0.8,
                            ease:"easeOut"
                        }}
                        className="text-yellow-400 mt-[30px] ">
                            AKOYA COLLECTION
                        </motion.p>

                        <motion.p
                        initial={{opacity:0, y:30}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{ once: true }}
                        transition={{duration:0.8,
                            ease:"easeOut"
                        }}
                        className={`h-[2px] mt-[30px] ${isArabic ? "mr-[10px] sm:mr-[15px]" : "ml-[10px] sm:ml-[15px]"} w-[40px] sm:w-[70px] bg-yellow-400`}
                        ></motion.p>

                    </div>


                    <motion.button
                    initial={{opacity:0, y:70}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{ once: true }}
                    transition={{duration:0.8,
                        ease:"easeOut"
                    }}
                    onClick={() => navigate("/BookNow")}
                        className="
                        absolute
                        top-[55%]
                        left-1/2
                        -translate-x-1/2
                        h-[50px]
                        w-[200px]
                        sm:w-[230px]
                        font-bold
                        bg-yellow-400
                        rounded-4xl
                        hover:bg-yellow-500
                        hover:scale-[1.03]
                        transition-transform
                        ease-out
                        duration-400
                        text-sm
                        sm:text-base
                        "
                    >
                        {t("aboutPage.hero.button")}
                    </motion.button>

                </div>

            </section>


            <section className="min-h-[440px] h-auto py-[30px]">

                <p
                    className="
                    text-3xl
                    sm:text-4xl
                    font-light
                    text-center
                    "
                >
                    {t("aboutPage.choose.title")} <span className="text-yellow-400">Akoya</span>
                </p>


                <div
                    className="
                    flex
                    flex-wrap
                    gap-6
                    justify-center
                    items-center
                    mt-[60px]
                    px-4
                    "
                >

                    {Choose.map((item, index) => (

                        <motion.div
                        initial={{opacity:0, y:70}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{ once: true }}
                        transition={{duration:0.8,
                            delay: index * 0.1,
                            ease:"easeOUt"
                        }}
                            key={index}
                            className="
                            bg-[#f8f5f2]
                            h-[220px]
                            w-full
                            sm:w-[400px]
                            rounded-xl
                            "
                        >

                            <p className="text-[#d4af37] text-[40px] flex justify-center pt-[30px]">
                                {item.icon}
                            </p>

                            <p className="font-medium text-xl text-center pt-[20px] pb-[10px]">
                                {item.title}
                            </p>

                            <p className="px-[30px] text-center">
                                {item.des}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </section>


            <section
                className={`
                bg-[#f8f5f2]
                min-h-[670px]
                h-auto
                w-full
                py-[70px]
                `}
            >

                <div
                    className="
                    text-3xl
                    sm:text-4xl
                    font-light
                    text-center
                    "
                >
                    {t("aboutPage.journey.title")}
                </div>


                <div
                    className="
                    flex
                    flex-wrap
                    justify-center
                    gap-5
                    mt-[60px]
                    px-4
                    "
                >

                    {Journey.map((item, index) => (

                        <motion.div
                        initial={{opacity:0, y:50}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{ once: true }}
                        transition={{duration:0.8,
                            ease:"easeOUt",
                            delay: index * 0.1
                        }}
                            key={index}
                            className="
                            h-[170px]
                            w-full
                            sm:w-[300px]
                            bg-white
                            rounded-2xl
                            mb-[10px]
                            hover:shadow-lg
                            "
                        >

                            <p className={`text-[#d4af37] text-[35px] mt-[20px] ${isArabic ? "mr-[20px]" : "ml-[20px]"}`}>
                                {item.icon}
                            </p>

                            <p className={`font-bold mt-[10px] ${isArabic ? "mr-[55px]" : "ml-[55px]"}`}>
                                {item.title}
                            </p>

                            <p className={`font-light p-[3px] text-center mt-[10px] ${isArabic ? "mr-[14px] pl-[20px]" : "ml-[14px] pr-[20px]"}`}>
                                {item.des}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </section>


            <section className={`min-h-[600px] h-auto py-[70px] ${isArabic ? "mr-[-3px]" : "ml-[-3px]"}`}>

                <p
                    className="
                    text-3xl
                    sm:text-4xl
                    font-light
                    text-center
                    "
                >
                    {t("aboutPage.specialists.title")}
                </p>


                <p className="h-[1px] bg-yellow-500 w-[100px] mx-auto mt-[20px]"></p>


                <p className="text-center mt-[30px] px-5">
                    {t("aboutPage.specialists.description")}
                    <br className="hidden sm:block" />
                    {t("aboutPage.specialists.descriptionSecond")}
                </p>


                <div
                    className="
                    flex
                    flex-wrap
                    gap-6
                    justify-center
                    items-center
                    mt-[60px]
                    px-5
                    "
                >

                    {Special.map((item, index) => (

                        <motion.div
                        initial={{opacity:0, y:50}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{ once: true }}
                        transition={{duration:0.8,
                            ease:"easeOut",
                            delay: index * 0.1
                        }}
                            key={index}
                            className="
                            h-[300px]
                            bg-[#f8f5f2]
                            w-full
                            sm:w-[390px]
                            rounded-2xl
                            "
                        >

                            <img
                                className="
                                border-4
                                mt-[30px]
                                mx-auto
                                border-yellow-400
                                rounded-full
                                h-[130px]
                                w-[130px]
                                object-cover
                                "
                                src={item.image}
                                alt=""
                            />


                            <p className="font-medium text-xl text-center mt-[20px]">
                                {item.name}
                            </p>

                            <p className="text-yellow-500 text-center">
                                {item.post}
                            </p>

                            <p className="text-center mt-[20px] px-3">
                                {item.des}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </section>

        </div>
    )
}

export default About;