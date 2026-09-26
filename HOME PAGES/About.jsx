
import React from 'react'
import { useTranslation } from "react-i18next";
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
    

    const Choose = [
        {
            icon: <FaShieldAlt />,
            title: "Premium Quality",
            des: "We use only the finest eco-friendly detergents and state-of-the-art equipment",
        },
        {
            icon: <FaUserCheck />,
            title: "Personalized Service",
            des: "Tailored solutions for each garment with our expert fabric specialists"
        },
        {
            icon: <FaClock />,
            title: "Convenience",
            des: "24/7 booking with flexible pickup and delivery options",
        },
    ];


    const Journey = [
        {
            icon: <FaShirt />,
            title: "1. Select Wash Type",
            des: "Standard or Express wash options to suit your needs",
        },
        {
            icon: <FaBoxOpen />,
            title: "2. Choose Garments",
            des: "From daily wear to delicate couture - we handle all",
        },
        {
            icon: <FaSprayCan />,
            title: "3. Steam Finishing",
            des: "Professional pressing for impeccable results",
        },
        {
            icon: <FaPumpSoap />,
            title: "4. Fragrance Infusion",
            des: "Luxury scents for men and women",
        },
        {
            icon: <FaBox />,
            title: "5. Packaging",
            des: "Choose from our premium wrapping options",
        },
        {
            icon: <FaGift />,
            title: "6. Personalization",
            des: "Add a custom card for gifts",
        },
        {
            icon: <FaWhatsapp />,
            title: "7. WhatsApp Checkout",
            des: "Easy confirmation via WhatsApp",
        },
        {
            icon: <FaRobot />,
            title: "8. AI Assistance",
            des: "3D avatars guide you in Arabic & English",
        },
    ];


    const Special = [
        {
            image: tester1,
            name: "Ahmed Al-Mansoori",
            post: "Head of Couture Care",
            des: "20+ years in luxury garment care",
        },
        {
            image: tester2,
            name: "Layla Hassan",
            post: "Fabric Technology Expert",
            des: "Fabric scientist and preservation expert",
        },
        {
            image: tester3,
            name: "Yousef Ibrahim",
            post: "Operations Director",
            des: "Ensuring seamless service delivery",
        },
    ];


    return (
        <div>

            <section>

                <div className="relative">

                    <img
                        className="
                        relative
                        w-[94%]
                        ml-[3%]
                        h-[600px]
                        sm:h-[600px]  object-cover mb-[40px]
                        "
                        src={hero}
                        alt=""
                    />

                    <div
                        className="
                        absolute
                        top-0
                        left-[3%]
                        bg-black/45
                        h-[600px]
                        w-[94%]
                        "
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
                        Luxury Laundry. Reimagined.
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
                        className="h-[2px] mr-[10px] mt-[30px] sm:mr-[15px] w-[40px] sm:w-[70px] bg-yellow-400"></motion.p>

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
                        className="h-[2px] mt-[30px] ml-[10px] sm:ml-[15px] w-[40px] sm:w-[70px] bg-yellow-400"></motion.p>

                    </div>


                    <motion.button
                    initial={{opacity:0, y:70}}
                    whileInView={{opacity:1, y:0}}
                      viewport={{ once: true }}

                    transition={{duration:0.8,
                        ease:"easeOut"
                    }}
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
                        Schedule Your Pickup
                    </motion.button>

                </div>

            </section>


            {/* WHY CHOOSE AKOYA */}
            <section className="min-h-[440px] h-auto py-[30px]">

                <p
                    className="
                    text-3xl
                    sm:text-4xl
                    font-light
                    text-center
                    "
                >
                    Why Choose <span className="text-yellow-400">Akoya</span>
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


            {/* SERVICE JOURNEY */}
            <section
                className="
                bg-[#f8f5f2]
                min-h-[670px]
                h-auto
                w-[94%]
                ml-[3%]
                py-[70px]
                "
            >

                <div
                    className="
                    text-3xl
                    sm:text-4xl
                    font-light
                    text-center
                    "
                >
                    Our Service Journey
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

                            <p className="text-[#d4af37] text-[35px] mt-[20px] ml-[20px]">
                                {item.icon}
                            </p>

                            <p className="font-bold ml-[55px] mt-[10px]">
                                {item.title}
                            </p>

                            <p className="ml-[14px] font-light p-[3px] text-center mt-[10px] pr-[20px]">
                                {item.des}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </section>


            {/* SPECIALISTS */}
            <section className="min-h-[600px] h-auto py-[70px]">

                <p
                    className="
                    text-3xl
                    sm:text-4xl
                    font-light
                    text-center
                    "
                >
                    Meet Our Fabric Specialists
                </p>


                <p className="h-[1px] bg-yellow-500 w-[100px] mx-auto mt-[20px]"></p>


                <p className="text-center mt-[30px] px-5">
                    Our team of garment care experts brings decades of combined experience in handling luxury
                    <br className="hidden sm:block" />
                    fabrics
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

export default About
