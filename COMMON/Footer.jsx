
import React from 'react';
import logo from "../src/assets/logo.png";
import { motion } from "motion/react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import {
    FaXTwitter,
    FaChevronRight,
    FaLocationDot,
    FaPhone,
    FaEnvelope
} from "react-icons/fa6";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div>
            <section className='mt-0 min-h-[530px] w-full bg-black pb-6'>

                <div className='flex justify-center gap-[80px] max-[1100px]:flex-wrap max-[1100px]:gap-[50px] max-[700px]:flex-col max-[700px]:items-start max-[700px]:px-8'>

                    {/* LOGO / ABOUT */}
                    <motion.div className='pt-[130px] w-[250px] text-xs max-[700px]:pt-[60px]'
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <img className='h-[50px]' src={logo} alt="logo here" />

                        <p className='text-gray-100 pt-[20px] mb-[10px] leading-loose'>
                            {t("footerDescription")}
                        </p>

                        <div className="flex gap-2 text-white">

                            <FaInstagram
                                className="text-xl hover:text-yellow-500 hover:-translate-y-0.5 transition-transform duration-300 ease-out"
                            />

                            <FaFacebookF
                                className="text-xl hover:text-yellow-500 hover:-translate-y-0.5 transition-transform duration-300 ease-out"
                            />

                            <FaXTwitter
                                className="text-xl hover:text-yellow-500 hover:-translate-y-0.5 transition-transform duration-300 ease-out"
                            />

                        </div>
                    </motion.div>


                    {/* OUR SERVICES */}
                    <motion.div className='text-white pt-[120px] w-[220px] leading-loose max-[700px]:pt-[20px]'
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}>

                        <h1 className='text-yellow-500 font-medium mb-[20px]'>
                            {t("ourServices")}
                        </h1>

                        <p className='mb-[10px] items-center text-xs font-medium flex gap-2 hover:text-yellow-500 hover:translate-x-1 transition-transform duration-300 ease-out'>
                            <span className='text-xs text-yellow-500'>
                                <FaChevronRight />
                            </span>
                            {t("premiumLaundry")}
                        </p>

                        <p className='mt-[16px] text-xs font-medium items-center flex gap-2 hover:text-yellow-500 hover:translate-x-1 transition-transform duration-300 ease-out'>
                            <span className='text-xs text-yellow-500'>
                                <FaChevronRight />
                            </span>
                            {t("dryCleaning")}
                        </p>

                        <p className='mt-[18px] text-xs font-medium items-center flex gap-2 hover:text-yellow-500 hover:translate-x-1 transition-transform duration-300 ease-out'>
                            <span className='text-xs text-yellow-500'>
                                <FaChevronRight />
                            </span>
                            {t("steamPressing")}
                        </p>

                        <p className='mt-[17px] text-xs font-medium items-center flex gap-2 hover:text-yellow-500 hover:translate-x-1 transition-transform duration-300 ease-out'>
                            <span className='text-xs text-yellow-500'>
                                <FaChevronRight />
                            </span>
                            {t("fragranceInfusion")}
                        </p>

                        <p className='mt-[17px] text-xs font-medium items-center flex gap-2 hover:text-yellow-500 hover:translate-x-1 transition-transform duration-300 ease-out'>
                            <span className='text-xs text-yellow-500'>
                                <FaChevronRight />
                            </span>
                            {t("coutureCare")}
                        </p>

                        <p className='mt-[17px] text-xs font-medium items-center flex gap-2 hover:text-yellow-500 hover:translate-x-1 transition-transform duration-300 ease-out'>
                            <span className='text-xs text-yellow-500'>
                                <FaChevronRight />
                            </span>
                            {t("vipClub")}
                        </p>

                    </motion.div>


                    {/* CONTACT US */}
                    <motion.div className='text-white pt-[120px] w-[250px] max-[700px]:pt-[20px]'
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}>

                        <h1 className='text-yellow-500 font-medium mb-[20px]'>
                            {t("contactUs")}
                        </h1>

                        <div className='text-xs leading-loose'>

                            {/* LOCATION */}
                            <div className='flex items-start gap-2 mb-[15px]'>

                                <FaLocationDot className='text-yellow-500 mt-[6px]' />

                                <div className='flex flex-col gap-1 w-full'>

                                    <div className='flex gap-[80px] max-[700px]:gap-[50px]'>
                                        <span>{t("area")}</span>
                                        <span>Al Wakrah</span>
                                    </div>

                                    <div className='flex gap-[80px] max-[700px]:gap-[50px]'>
                                        <span>{t("zone")}</span>
                                        <span>90</span>
                                    </div>

                                    <div className='flex gap-[80px] max-[700px]:gap-[50px]'>
                                        <span>{t("streetNo")}</span>
                                        <span>693</span>
                                    </div>

                                    <div className='flex gap-[80px] max-[700px]:gap-[50px]'>
                                        <span>{t("buildingNo")}</span>
                                        <span>35</span>
                                    </div>

                                </div>

                            </div>


                            {/* PHONE */}
                            <p className='flex items-start gap-2 mb-[15px]'>

                                <FaPhone className='text-yellow-500 mt-[6px]' />

                                <span className='hover:text-yellow-500'>
                                    +97433689955
                                    <br />
                                    +97433689996
                                </span>

                            </p>


                            {/* EMAIL */}
                            <p className='flex items-center gap-2 break-all'>

                                <FaEnvelope className='text-yellow-500 shrink-0' />

                                info@akoyaluxurylaundry.com

                            </p>

                        </div>

                    </motion.div>


                    {/* NEWSLETTER */}
                    <motion.div className='text-white pt-[120px] w-[220px] ml-[-80px] max-[1100px]:ml-0 max-[700px]:pt-[20px]'
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}>

                        <h1 className='text-yellow-500 font-medium mb-[20px]'>
                            {t("newsletter")}
                        </h1>

                        <p className='mt-[30px] text-gray-300'>
                            {t("newsletterDescription")}
                        </p>

                        <input className='h-[50px] border-1 border-yellow-500 w-[260px] mt-[20px] bg-gray-800 max-[700px]:w-full' type="email" placeholder={t("emailAddress")} />

                        <button className='h-[50px] border-2 border-yellow-500 w-[260px] mt-[20px] bg-yellow-500 
                    text-black hover:bg-yellow-400 hover:scale-[1.02] transition-transform duration-300 ease-ou1 max-[700px]:w-full'>
                            {t("subscribe")}
                        </button>
                    </motion.div>
                </div>

                <hr
                    className='text-yellow-300 mt-[50px] max-[700px]:mt-[40px]' />

                <p
                    className='text-gray-500 ml-[100px] mt-[20px] text-xs max-[700px]:ml-8 '> © 2025 AKOYA Luxury Laundry. {t("allRightsReserved")}</p>

                <div
                    className='flex justify-center items-center text-gray-500 gap-4 text-xs ml-[950px] max-[1100px]:ml-0 max-[700px]:flex-wrap max-[700px]:justify-start max-[700px]:ml-8 max-[700px]:mr-8 max-[700px]:gap-x-4 max-[700px]:gap-y-2' >
                    <span className='hover:text-yellow-500'>{t("privacyPolicy")}</span>
                    <span className='hover:text-yellow-500'>{t("termsOfServices")}</span>
                    <span className='hover:text-yellow-500'>{t("sitemap")}</span>
                </div>

                <p
                    className='text-gray-500 ml-[40%] text-xs max-[1100px]:ml-0 max-[1100px]:text-center max-[700px]:mt-4 max-[700px]:px-8 '>{t("poweredBy")} <span className='text-yellow-500'> Nerou Technology Services</span> </p>

            </section>

            <motion.div
                initial={{opacity:0, y:100}}
                animate={{opacity:1, y:0}}
                transition={{duration:1}}
            ></motion.div>

        </div>
    )
}

export default Footer;

