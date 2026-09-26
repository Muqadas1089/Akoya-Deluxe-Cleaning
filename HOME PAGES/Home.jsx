import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCalendarDays } from "react-icons/fa6";
import { motion } from "motion/react";
import { FaCartPlus } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import WelcomePopup from "../COMMON/StartCard.jsx";
import { Link } from "react-router-dom";

import image from "../src/assets/4thpic.jpg";
import last from "../src/assets/lastpic.jpg";
import pressing from "../src/assets/pressing.jpg";

import image1 from "../src/assets/img1.jpg";
import image2 from "../src/assets/img2.jpg";
import image3 from "../src/assets/img3.jpg";
import image4 from "../src/assets/img4.jpg";
import image5 from "../src/assets/img5.jpg";

import perfume1 from "../src/assets/perfum1.webp";
import perfume2 from "../src/assets/perfum2.webp";
import perfume3 from "../src/assets/perfum3.webp";
import perfume4 from "../src/assets/perfum4.webp";
import perfume5 from "../src/assets/perfum5.webp";

import img1 from "../src/assets/p1.jpg";
import img2 from "../src/assets/p2.jpg";
import img3 from "../src/assets/p3.jpg";

import video from "../src/assets/1st video.mp4";
import vid from "../src/assets/2nd video.mp4";
import vide from "../src/assets/3rd video.mp4";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

export default function Home() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(null);

  const perfums = [
    {
      image: perfume1,
      name: "Maknoun",
      description:
        "A luxurious fragrance that embodies the charm of a confident man. A refined blend of fresh fruits, elegant florals, and a warm base of musk and amber, leaving an unforgettable signature.",
      price: "4-8 QAR",
    },
    {
      image: perfume2,
      name: "Mad",
      description:
        "A powerful masculine fragrance that radiates prestige and luxury. Its unique composition blends saffron, jasmine, and incense, with a leathery amber base for a timeless presence.",
      price: "4-8 QAR",
    },
    {
      image: perfume3,
      name: "Lulwa",
      description:
        "The fragrance of radiant femininity, combining modern freshness with timeless elegance. A stunning blend of bergamot, ginger, and patchouli with a soft musky touch, leaving a memorable sparkle.",
      price: "4-8 QAR",
    },
    {
      image: perfume4,
      name: "Sadf",
      description:
        "A refreshing fragrance for both men and women, featuring bright citrus notes, warm ginger, and ambergris for an elegant and long-lasting touch.",
      price: "4-8 QAR",
    },
    {
      image: perfume5,
      name: "Marjan",
      description:
        "A fragrance born from the depths of the sea, opening with the freshness of Calabrian bergamot and a touch of black pepper and Sichuan pepper warmth. At its heart, the softness of lavender blends with the elegance of geranium for timeless balance and sophistication. The base features deep patchouli, warm cedarwood, vetiver, and ambroxan, with a gentle vanilla touch for lasting warmth.",
      price: "4-8 QAR",
    },
  ];

  const packages = [
    {
      name: "Plastic Wrap",
      description:
        "Crystal-clear protective wrapping with our embossed gold seal for discreet luxury.",
      image: img1,
      buttons: "Included",
      points: [
        { icon: "✓", text: "Medical-grade transparency" },
        { icon: "✓", text: "Anti-static interior" },
        { icon: "✓", text: "Recyclable material" },
        { icon: "✓", text: "Tamper-evident closure" },
      ],
    },
    {
      name: "Luxury Fabric Wrap",
      description:
        "Cashmere-lined protective casing with magnetic closure and monogram option.",
      image: img2,
      buttons: "+10 QAR",
      points: [
        { icon: "✓", text: "Italian wool exterior" },
        { icon: "✓", text: "Silk-lined interior" },
        { icon: "✓", text: "Magnetic seal" },
        { icon: "✓", text: "Reusable design" },
      ],
    },
    {
      name: "Premium Wapping Box",
      description:
        "Handcrafted wooden presentation case with velvet interior and scent capsule.",
      image: img3,
      buttons: "+4 QAR",
      points: [
        { icon: "✓", text: "Sandalwood construction" },
        { icon: "✓", text: "French velvet lining" },
        { icon: "✓", text: "Integrated scent capsule" },
        { icon: "✓", text: "Heirloom quality" },
      ],
    },
  ];

  const HowWorks = [
    {
      media: video,
      type: "video",
      number: "1",
      icon: <FaCalendarDays />,
      heading: "Schedule Your Pickup",
      description:
        "Book through our app, WhatsApp, or website. We offer flexible 2-hour pickup windows.",
      points: [
        { icon: "✓", text: "24/7 booking availability" },
        { icon: "✓", text: "Recurring pickup scheduling available" },
      ],
    },
    {
      media: vid,
      type: "video",
      number: "2",
      icon: "♧",
      heading: "Professional Collection",
      description:
        "Our trained team collects your garments carefully from your doorstep.",
      points: [
        { icon: "✓", text: "Convenient pickup available" },
        { icon: "✓", text: "Professional drivers" },
      ],
    },
    {
      media: vide,
      type: "video",
      number: "3",
      icon: "ϟ",
      heading: "Expert Processing",
      description:
        "Your garments are carefully processed using our professional cleaning methods.",
      points: [
        { icon: "✓", text: "Advanced garment cleaning" },
        { icon: "✓", text: "Quality control at every stage" },
      ],
    },
    {
      media: image,
      type: "image",
      number: "4",
      icon: "✓",
      heading: "Luxury Delivery",
      description:
        "Impeccably packaged garments are delivered right to your door.",
      points: [
        { icon: "✓", text: "Same-day delivery available" },
        { icon: "✓", text: "Long-lasting freshness assured" },
      ],
    },
  ];

  return (
    <div className="w-full overflow-x-hidden m-0 p-0">

      <WelcomePopup />

      {/* ================= HERO SLIDER ================= */}

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 2000,
        }}
        modules={[
          Navigation,
          Pagination,
          Mousewheel,
          Keyboard,
          Autoplay,
        ]}
className="
  mySwiper
  w-full

  [&_.swiper-button-prev]:!w-[48px]
  [&_.swiper-button-next]:!w-[48px]
  [&_.swiper-button-prev]:!h-[48px]
  [&_.swiper-button-next]:!h-[48px]

  [&_.swiper-button-prev]:!left-[20px]
  [&_.swiper-button-next]:!right-[20px]

  [&_.swiper-button-prev]:!top-1/2
  [&_.swiper-button-next]:!top-1/2
  [&_.swiper-button-prev]:!-translate-y-1/2
  [&_.swiper-button-next]:!-translate-y-1/2

  [&_.swiper-button-prev]:!mt-0
  [&_.swiper-button-next]:!mt-0
  [&_.swiper-button-prev]:!z-[100]
  [&_.swiper-button-next]:!z-[100]

  [&_.swiper-button-prev]:!bg-[#222222]
  [&_.swiper-button-next]:!bg-[#222222]

  [&_.swiper-button-prev]:!rounded-full
  [&_.swiper-button-next]:!rounded-full

  [&_.swiper-button-prev]:!text-[#d4af37]
  [&_.swiper-button-next]:!text-[#d4af37]

  /* Arrow size aur weight adjust karne ke liye */
  [&_.swiper-button-prev::after]:!text-[12px]
  [&_.swiper-button-next::after]:!text-[12px]
  [&_.swiper-button-prev::after]:!font-normal
  [&_.swiper-button-next::after]:!font-normal

  [&_.swiper-button-prev]:!transition-all
  [&_.swiper-button-next]:!transition-all

  [&_.swiper-button-prev:hover]:!bg-[#1a1a1a]
  [&_.swiper-button-next:hover]:!bg-[#1a1a1a]

  max-sm:[&_.swiper-button-prev]:!w-[38px]
  max-sm:[&_.swiper-button-next]:!w-[38px]
  max-sm:[&_.swiper-button-prev]:!h-[38px]
  max-sm:[&_.swiper-button-next]:!h-[38px]
  max-sm:[&_.swiper-button-prev::after]:!text-[10px]
  max-sm:[&_.swiper-button-next::after]:!text-[10px]

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

        {/* ================= SLIDE 1 ================= */}

        <SwiperSlide>

          <div className="relative h-[600px] w-[94%] ml-[50px] max-md:w-full max-md:ml-0 max-md:h-[420px] max-sm:h-[360px]">

            <img
              className="w-full h-full object-cover"
              src={image1}
              alt=""
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
              }}
              className="absolute left-[7%] top-1/2 -translate-y-1/2 flex flex-col items-start text-white max-md:left-[7%] max-md:right-[7%]"
            >

              <h1 className="text-5xl font-bold mb-4 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
                Premium Garment Care
              </h1>

              <p className="text-xl mb-6 max-md:text-base max-sm:text-sm">
                Expert cleaning for your most delicate fabrics
              </p>

<Link
  to="/BookNow"
  className="bg-[#d4af37] text-black px-8 py-3 rounded-full font-semibold hover:scale-[1.04] transition-transform duration-300 ease-out max-sm:px-6 max-sm:py-2"
>
  Schedule Pickup
</Link>

            </motion.div>

          </div>

        </SwiperSlide>


        {/* ================= SLIDE 2 ================= */}

        <SwiperSlide>

          <div className="relative h-[600px] w-[94%] ml-[50px] max-md:w-full max-md:ml-0 max-md:h-[420px] max-sm:h-[360px]">

            <img
              className="w-full h-full object-cover"
              src={image2}
              alt=""
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
              }}
              className="absolute left-[7%] top-1/2 -translate-y-1/2 flex flex-col items-start text-white max-md:left-[7%] max-md:right-[7%]"
            >

              <h1 className="text-5xl font-bold mb-4 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
                Eco-Conscious Cleaning
              </h1>

              <p className="text-xl mb-6 max-md:text-base max-sm:text-sm">
                Sustainable methods without compromising quality
              </p>
<Link
  to="/BookNow"
  className="bg-[#d4af37] text-black px-8 py-3 rounded-full font-semibold hover:scale-[1.04] transition-transform duration-300 ease-out max-sm:px-6 max-sm:py-2"
>
  Schedule Pickup
</Link>

            </motion.div>

          </div>

        </SwiperSlide>


        {/* ================= SLIDE 3 ================= */}

        <SwiperSlide>

          <div className="relative h-[600px] w-[94%] ml-[50px] max-md:w-full max-md:ml-0 max-md:h-[420px] max-sm:h-[360px]">

            <img
              className="w-full h-full object-cover"
              src={image3}
              alt=""
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
              }}
              className="absolute left-[7%] top-1/2 -translate-y-1/2 flex flex-col items-start text-white max-md:left-[7%] max-md:right-[7%]"
            >

              <h1 className="text-5xl font-bold mb-4 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
                Premium Garment Care
              </h1>

              <p className="text-xl mb-6 max-md:text-base max-sm:text-sm">
                Expert cleaning for your most delicate fabrics
              </p>

<Link
  to="/BookNow"
  className="bg-[#d4af37] text-black px-8 py-3 rounded-full font-semibold hover:scale-[1.04] transition-transform duration-300 ease-out max-sm:px-6 max-sm:py-2"
>
  Schedule Pickup
</Link>
            </motion.div>

          </div>

        </SwiperSlide>

      </Swiper>


      {/* ================= SIGNATURE LINES ================= */}

      <motion.section
        initial={{
          opacity: 0,
          y: 18,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.08,
        }}
        transition={{
          duration: 0.55,
          ease: "easeOut",
        }}
        className="w-[94%] ml-[50px] bg-[#FAF9F7] py-12 max-md:w-full max-md:ml-0 max-md:px-5"
      >

        <p className="text-4xl font-light text-center max-md:text-3xl max-sm:text-2xl">
          Signature Lines
        </p>

        <div className="flex justify-center items-center flex-wrap mt-3">

          <hr className="w-[100px] border-yellow-400 border-2 mr-[7px] max-sm:w-[40px]" />

          <p className="text-2xl text-yellow-400 font-medium max-sm:text-sm text-center">
            THE AKOYA COLLECTION
          </p>

          <hr className="w-[100px] ml-[7px] border-yellow-400 border-2 max-sm:w-[40px]" />

        </div>


        <div className="flex mt-[70px] justify-center items-center gap-10 flex-wrap max-lg:gap-6 max-md:mt-12">

          <div className="group relative hover:-translate-y-2 transition duration-700 w-[330px] max-sm:w-full max-sm:max-w-[330px]">

            <img
              src={image1}
              alt=""
              className="h-[250px] w-full rounded-xl object-cover"
            />

            <div className="absolute inset-0 bg-black/30 rounded-xl group-hover:bg-black/10 transition"></div>

            <div className="absolute bottom-0 left-0 pb-[10px]">

              <p className="bg-yellow-300 h-[40px] mb-[10px] w-[40px] rounded-full hover:scale-110 transition duration-300 p-[6px] text-xl ml-[20px]">
                ✨
              </p>

              <p className="font-bold text-white pl-[20px]">
                The Platinum Care
              </p>

              <p className="text-xs mt-[10px] text-white pl-[20px] pr-3">
                Our highest tier service for your most precious garments.
                Hand-washed, steamed, and wrapped in protective tissue.
              </p>

<Link
  to="/Service"
  className="h-[30px] w-[100px] bg-yellow-500 hover:bg-black hover:text-yellow-500 text-sm rounded-xl mt-[10px] ml-[20px] flex items-center justify-center transition duration-300"
>
  Discover ~
</Link>
            </div>

          </div>


          <div className="group relative hover:-translate-y-2 transition duration-700 w-[330px] max-sm:w-full max-sm:max-w-[330px]">

            <img
              src={image5}
              alt=""
              className="h-[250px] w-full rounded-xl object-cover"
            />

            <div className="absolute inset-0 bg-black/30 rounded-xl group-hover:bg-black/10 transition"></div>

            <div className="absolute bottom-0 left-0 pb-[10px]">

              <p className="bg-yellow-300 h-[40px] mb-[10px] w-[40px] rounded-full hover:scale-110 transition duration-300 p-[6px] text-xl ml-[20px]">
                👔
              </p>

              <p className="font-bold text-white pl-[20px]">
                The Platinum Care
              </p>

              <p className="text-xs mt-[10px] text-white pl-[20px] pr-3">
                Our highest tier service for your most precious garments.
                Hand-washed, steamed, and wrapped in protective tissue.
              </p>

              <button className="h-[30px] w-[100px] bg-yellow-500 hover:bg-black hover:text-yellow-500 text-sm rounded-xl mt-[10px] ml-[20px]">
                Discover ~
              </button>

            </div>

          </div>


          <div className="group relative hover:-translate-y-2 transition duration-700 w-[330px] max-sm:w-full max-sm:max-w-[330px]">

            <img
              src={image4}
              alt=""
              className="h-[250px] w-full rounded-xl object-cover"
            />

            <div className="absolute inset-0 bg-black/30 rounded-xl group-hover:bg-black/10 transition"></div>

            <div className="absolute bottom-0 left-0 pb-[10px]">

              <p className="bg-yellow-300 h-[40px] mb-[10px] w-[40px] rounded-full hover:scale-110 transition duration-300 p-[6px] text-xl ml-[20px]">
                🧵
              </p>

              <p className="font-bold text-white pl-[20px]">
                The Platinum Care
              </p>

              <p className="text-xs mt-[10px] text-white pl-[20px] pr-3">
                Our highest tier service for your most precious garments.
                Hand-washed, steamed, and wrapped in protective tissue.
              </p>

              <button className="h-[30px] w-[100px] bg-yellow-500 hover:bg-black hover:text-yellow-500 text-sm rounded-xl mt-[10px] ml-[20px]">
                Discover ~
              </button>

            </div>

          </div>

        </div>


        <div className="flex justify-center mt-12">

<Link
  to="/Service"
  className="h-[45px] w-[200px] border-2 rounded-3xl hover:bg-black hover:text-white transition duration-300 flex items-center justify-center"
>
  View All Collection →
</Link>

        </div>

      </motion.section>


      {/* ================= WASH EXPERIENCE ================= */}

      <motion.section
        initial={{
          opacity: 0,
          y: 18,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.08,
        }}
        transition={{
          duration: 0.55,
          ease: "easeOut",
        }}
        className="w-[94%] ml-[50px] py-16 max-md:w-full max-md:ml-0 max-md:px-5"
      >

        <p className="text-5xl font-bold text-center max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
          How Would You Like It Washed?
        </p>

        <p className="mt-[20px] text-xl font-medium text-yellow-500 text-center max-sm:text-base">
          CHOOSE YOUR EXPERIENCE
        </p>


        <div className="flex justify-center gap-10 mt-[70px] max-lg:flex-col max-lg:items-center max-md:mt-10">

          <div className="h-[250px] w-[600px] max-w-full bg-[#f5e1da] rounded-2xl p-[30px] hover:shadow-2xl transition duration-300">

            <p className="text-4xl mb-[10px] mt-[10px]">
              🧼
            </p>

            <p className="font-bold text-xl mb-[10px]">
              Standard Wash
            </p>

            <p className="text-sm mb-[10px]">
              Our signature 48-hour service with gentle cleaning,
              eco-friendly detergents, and basic folding.
            </p>

            <span className="text-yellow-500 font-bold">
              From 50 QAR
            </span>

          </div>


          <div className="h-[250px] w-[600px] max-w-full bg-[#f5e1da] rounded-2xl p-[30px] hover:shadow-2xl transition duration-300">

            <p className="text-4xl mb-[10px] mt-[10px]">
              ⚡
            </p>

            <p className="font-bold text-xl mb-[10px]">
              Express Wash
            </p>

            <p className="text-sm mb-[10px]">
              Need it fast? Get 24-hour turnaround, priority processing,
              and premium care.
            </p>

            <span className="text-yellow-500 font-bold">
              From 80 QAR
            </span>

          </div>

        </div>


        <div className="flex justify-center mt-[70px]">
<Link
  to="/Service"
  className="h-[50px] w-[260px] rounded-3xl bg-yellow-500 hover:scale-105 transition duration-300 flex items-center justify-center max-sm:w-full max-sm:max-w-[260px]"
>
  Continue to Garment Selection
</Link>
        </div>

      </motion.section>


      {/* ================= PERFUMES ================= */}

      <motion.section
        initial={{
          opacity: 0,
          y: 18,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.08,
        }}
        transition={{
          duration: 0.55,
          ease: "easeOut",
        }}
        className="w-[94%] ml-[50px] bg-[#F3f4f8] py-14 px-10 max-md:w-full max-md:ml-0 max-md:px-5"
      >

        <p className="text-4xl font-bold text-center max-lg:text-3xl max-md:text-2xl">
          Akoya Signature Fragrances
        </p>

        <p className="text-center mt-3">
          Premium scents crafted to elevate your laundry experience
        </p>


        <div className="flex justify-start items-stretch gap-8 flex-wrap mt-[40px] max-w-[1250px] mx-auto">

          {perfums.map((perfume, index) => (

            <motion.div
              key={perfume.name}
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              className="
                w-[280px]
                min-h-[380px]
                bg-white
                border-white
                rounded-2xl
                overflow-hidden
                hover:scale-[1.04]
                transition-transform
                duration-[800ms]
                ease-out
                max-sm:w-full
                max-sm:max-w-[280px]
                max-sm:mx-auto
              "
            >

              <img
                className="h-[200px] w-full rounded-t-xl object-cover"
                src={perfume.image}
                alt={perfume.name}
              />

              <p className="p-[10px] font-medium">
                {perfume.name}
              </p>

              <p className="pl-[10px] text-xs pr-[10px] pb-[10px]">
                {perfume.description}
              </p>

              <span className="pl-[10px] font-bold text-yellow-500">
                {perfume.price}
              </span>

              <div className="flex justify-end pr-3 pb-4 mt-2">

                <button className="border-2 h-[30px] w-[70px] rounded-2xl text-white bg-yellow-500 hover:bg-black transition duration-300">
                  Add
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </motion.section>


      {/* ================= PACKAGING ================= */}

      <motion.section
        initial={{
          opacity: 0,
          y: 18,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.08,
        }}
        transition={{
          duration: 0.55,
          ease: "easeOut",
        }}
        className="w-[94%] ml-[50px] bg-[#FAF9F7] py-14 px-8 max-md:w-full max-md:ml-0 max-md:px-5"
      >

        <p className="text-3xl mb-[30px] text-center max-md:text-2xl">
          The Final Touch
        </p>

        <div className="flex justify-center items-center">

          <div className="w-[100px] h-[2px] bg-yellow-500 max-sm:w-[40px]"></div>

          <p className="m-[10px] text-xl font-bold text-yellow-500 text-center max-sm:text-sm">
            PACKAGING OPTIONS
          </p>

          <div className="w-[100px] h-[2px] bg-yellow-500 max-sm:w-[40px]"></div>

        </div>


        <div className="flex gap-10 justify-center mt-[50px] flex-wrap">

          {packages.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: index * 0.06,
              }}
              onClick={() => setSelected(index)}
              className={`
                relative
                w-[350px]
                max-w-full
                rounded-xl
                bg-white
                p-5
                hover:scale-[1.03]
                transform
                transition
                duration-500
                ease-out
                shadow-lg
                cursor-pointer
                ${
                  selected === index
                    ? "border-2 border-yellow-500"
                    : ""
                }
              `}
            >

              {selected === index && (

                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="
                    absolute
                    top-[20px]
                    right-[-45px]
                    z-30
                    rotate-[-45deg]
                    bg-yellow-500
                    text-white
                    text-xs
                    font-medium
                    px-[45px]
                    py-[10px]
                    shadow-md
                  "
                >
                  SELECTED
                </motion.div>

              )}


              <div className="relative h-[350px] overflow-hidden rounded-t-lg max-sm:h-[280px]">

                <img
                  className="h-full w-full object-contain transition-transform duration-500 ease-out"
                  src={item.image}
                  alt=""
                />

                <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

                <button className="absolute bottom-5 left-[20px] z-10 bg-yellow-500 px-6 py-2 rounded-full text-white">
                  {item.buttons}
                </button>

              </div>


              <div className="text-xl font-medium m-[10px]">
                {item.name}
              </div>

              <div className="m-[10px] text-xs">
                {item.description}
              </div>


              <div>

                {item.points.map((point, index) => (

                  <div
                    key={index}
                    className="flex gap-2 flex-row text-xs m-[10px]"
                  >

                    <span className="text-yellow-500">
                      {point.icon}
                    </span>

                    <p>{point.text}</p>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>


        <div className="flex justify-center mt-[30px]">

<Link
  to="/BookNow"
  className="rounded-4xl hover:scale-[1.03] transition-transform ease-out duration-700 bg-black text-white h-[50px] w-[200px] text-xs font-medium flex items-center justify-center gap-2"
>
  Book your Order
  <FaCartPlus className="text-base" />
</Link>

        </div>

      </motion.section>


      {/* ================= HOW IT WORKS ================= */}

      <section
        className="
          relative
          w-[94%]
          ml-[50px]
          bg-[#f8f5f2]
          pt-[15px]
          pb-[80px]
          max-md:w-full
          max-md:ml-0
          max-md:pb-[50px]
        "
      >

        <h1
          className="
            text-center
            text-3xl
            font-normal
            pt-[0px]
            max-md:text-3xl
          "
        >
          How It Works
        </h1>


        <div
          className="
            flex
            justify-center
            items-center
            gap-[15px]
            mt-[15px]
            max-md:gap-[10px]
          "
        >

          <div className="w-[70px] h-[2px] bg-yellow-500 max-md:w-[40px]"></div>

          <p className="text-yellow-500 font-bold text-sm max-md:text-xs text-center">
            SEAMLESS PICKUP PROCESS
          </p>

          <div className="w-[70px] h-[2px] bg-yellow-500 max-md:w-[40px]"></div>

        </div>


        <div
          className="
            absolute
            top-[210px]
            bottom-[100px]
            left-1/2
            -translate-x-1/2
            w-[3px]
            bg-[#d4af37]
            max-md:hidden
          "
        ></div>


        <div
          className="
            relative
            max-w-[1600px]
            mx-auto
            mt-[15px]
            px-[30px]
            max-md:px-[20px]
            max-md:mt-[60px]
          "
        >

          {HowWorks.map((item, index) => {

            const videoOnLeft = index % 2 === 0;

            return (

              <div
                key={item.number}
                className="
                  relative
                  grid
                  grid-cols-2
                  gap-[70px]
                  items-center
                  min-h-[500px]
                  mb-[65px]
                  last:mb-0
                  max-md:grid-cols-1
                  max-md:gap-[30px]
                  max-md:min-h-0
                  max-md:mb-[60px]
                "
              >

                <div className="order-1 max-md:order-1">

                  {videoOnLeft ? (

                    <div className="relative">

                      <div
                        className="
                          absolute
                          right-[-22px]
                          top-1/2
                          -translate-y-1/2
                          z-20
                          w-[62px]
                          h-[62px]
                          rounded-full
                          bg-[#d4af37]
                          flex
                          items-center
                          justify-center
                          text-white
                          text-xl
                          font-medium
                          shadow-md
                          max-md:hidden
                        "
                      >
                        {item.number}
                      </div>


                      <motion.div
                        initial={{
                          opacity: 0,
                          x: -50,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.5,
                        }}
                        className="
                          h-[410px]
                          w-full
                          overflow-hidden
                          rounded-xl
                          shadow-lg
                          bg-black
                          max-md:h-[280px]
                        "
                      >

                        {item.type === "video" ? (

                          <video
                            src={item.media}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                          />

                        ) : (

                          <img
                            src={item.media}
                            alt=""
                            className="w-full h-full object-cover"
                          />

                        )}

                      </motion.div>

                    </div>

                  ) : (

                    <div className="relative">

                      <div
                        className="
                          absolute
                          left-[-62px]
                          top-1/2
                          -translate-y-1/2
                          z-20
                          w-[62px]
                          h-[62px]
                          rounded-full
                          bg-[#d4af37]
                          flex
                          items-center
                          justify-center
                          text-white
                          text-xl
                          font-medium
                          shadow-md
                          max-md:hidden
                        "
                      >
                        {item.number}
                      </div>


                      <motion.div
                        initial={{
                          opacity: 0,
                          x: -50,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.5,
                        }}
                        className="
                          bg-white
                          rounded-xl
                          shadow-lg
                          p-[30px]
                          min-h-[320px]
                          max-md:min-h-0
                        "
                      >

                        <div className="flex items-center gap-[15px] mb-[20px]">

                          <div className="text-yellow-500 text-2xl">
                            {item.icon}
                          </div>

                          <h2 className="text-xl font-medium">
                            {item.heading}
                          </h2>

                        </div>


                        <p className="text-sm leading-7 mb-[25px]">
                          {item.description}
                        </p>

                        <hr className="border-gray-200 mb-[18px]" />


                        <div>

                          {item.points.map((point, pointIndex) => (

                            <div
                              key={pointIndex}
                              className="
                                flex
                                items-center
                                gap-[12px]
                                mb-[12px]
                                text-sm
                              "
                            >

                              <span className="text-yellow-500">
                                {point.icon}
                              </span>

                              <p>{point.text}</p>

                            </div>

                          ))}

                        </div>

                      </motion.div>

                    </div>

                  )}

                </div>


                <div className="order-2 max-md:order-2">

                  {videoOnLeft ? (

                    <div className="relative">

                      <motion.div
                        initial={{
                          opacity: 0,
                          x: 50,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.5,
                        }}
                        className="
                          bg-white
                          rounded-xl
                          shadow-lg
                          p-[30px]
                          min-h-[320px]
                          max-md:min-h-0
                        "
                      >

                        <div className="flex items-center gap-[15px] mb-[20px]">

                          <div className="text-yellow-500 text-2xl">
                            {item.icon}
                          </div>

                          <h2 className="text-xl font-medium">
                            {item.heading}
                          </h2>

                        </div>


                        <p className="text-sm leading-7 mb-[25px]">
                          {item.description}
                        </p>

                        <hr className="border-gray-200 mb-[18px]" />


                        <div>

                          {item.points.map((point, pointIndex) => (

                            <div
                              key={pointIndex}
                              className="
                                flex
                                items-center
                                gap-[12px]
                                mb-[12px]
                                text-sm
                              "
                            >

                              <span className="text-yellow-500">
                                {point.icon}
                              </span>

                              <p>{point.text}</p>

                            </div>

                          ))}

                        </div>

                      </motion.div>

                    </div>

                  ) : (

                    <div className="relative">

                      <motion.div
                        initial={{
                          opacity: 0,
                          x: 50,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.5,
                        }}
                        className="
                          h-[410px]
                          w-full
                          overflow-hidden
                          rounded-xl
                          shadow-lg
                          bg-black
                          max-md:h-[280px]
                        "
                      >

                        {item.type === "video" ? (

                          <video
                            src={item.media}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                          />

                        ) : (

                          <img
                            src={item.media}
                            alt=""
                            className="w-full h-full object-cover"
                          />

                        )}

                      </motion.div>

                    </div>

                  )}

                </div>

              </div>

            );

          })}

        </div>

      </section>


      {/* ================= AKOYA CLUB ================= */}

      <section className="relative overflow-hidden m-0 p-0 w-[94%] ml-[50px]">

        <img
          src={pressing}
          alt="Akoya Club Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75 "></div>


        <div
          className="
            relative
            z-10
            flex
            items-center
            justify-center
            w-full
            px-6
            py-16
            m-0
            max-md:px-5
            max-md:py-12
          "
        >

          <div
            className="
              relative
              flex
              items-center
              w-full
              max-w-6xl
              max-md:flex-col
              max-md:gap-10
            "
          >

            <div
              className="
                relative
                w-1/2
                overflow-visible
                max-md:w-full
              "
            >

              <div className="overflow-hidden rounded-2xl">

                <img
                  src={last}
                  alt="Luxury Clothing"
                  className="
                    w-full
                    h-[500px]
                    object-cover
                    max-lg:h-[430px]
                    max-md:h-[360px]
                    max-sm:h-[280px]
                  "
                />

              </div>


              <div
                className="
                  absolute
                  -right-4
                  -top-5
                  z-20
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#e4b82c]
                  px-7
                  py-3
                  font-semibold
                  text-black
                  shadow-lg
                  max-lg:-right-3
                  max-md:right-4
                  max-md:-top-4
                  max-sm:px-5
                  max-sm:py-2
                  max-sm:text-sm
                "
              >

                <FaWandMagicSparkles className="text-black text-base" />

                <span>
                  EXCLUSIVE
                </span>

              </div>

            </div>


            <div
              className="
                w-1/2
                px-10
                text-white
                max-lg:px-7
                max-md:w-full
                max-md:px-2
              "
            >

              <h2
                className="
                  mb-3
                  text-4xl
                  font-light
                  text-[#e4b82c]
                  max-lg:text-3xl
                  max-sm:text-2xl
                "
              >
                Akoya Club
              </h2>


              <h3
                className="
                  mb-6
                  text-xl
                  tracking-[4px]
                  max-lg:text-lg
                  max-sm:text-sm
                  max-sm:tracking-[2px]
                "
              >
                FOR THE FEW WHO KNOW
              </h3>


              <div className="mb-6 h-[2px] w-16 bg-[#e4b82c]"></div>


              <p
                className="
                  mb-6
                  leading-7
                  text-gray-300
                  max-sm:text-sm
                  max-sm:leading-6
                "
              >
                Our invitation-only membership program offers unparalleled
                benefits for those who demand the absolute best in garment
                care and convenience.
              </p>


              <div
                className="
                  space-y-4
                  text-gray-300
                  max-sm:space-y-3
                  max-sm:text-sm
                "
              >

                <p>
                  <span className="mr-3 text-[#e4b82c]">
                    ✓
                  </span>
                  Priority scheduling with 2-hour pickup windows
                </p>

                <p>
                  <span className="mr-3 text-[#e4b82c]">
                    ✓
                  </span>
                  Dedicated garment concierge
                </p>

                <p>
                  <span className="mr-3 text-[#e4b82c]">
                    ✓
                  </span>
                  Complimentary fragrance infusion
                </p>

                <p>
                  <span className="mr-3 text-[#e4b82c]">
                    ✓
                  </span>
                  Luxury packaging as standard
                </p>

                <p>
                  <span className="mr-3 text-[#e4b82c]">
                    ✓
                  </span>
                  Bi-annual complimentary couture care
                </p>

                <p>
                  <span className="mr-3 text-[#e4b82c]">
                    ✓
                  </span>
                  Exclusive seasonal offers
                </p>

              </div>


              <div
                className="
                  mt-8
                  flex
                  gap-4
                  max-sm:flex-col
                  max-sm:gap-3
                "
              >

                <button
                  className="
                    rounded-full
                    border-2
                    border-[#e4b82c]
                    px-7
                    py-3
                    text-[#e4b82c]
                    transition-all
                    duration-200
                    hover:bg-[#e4b82c]
                    hover:text-black
                    active:scale-95
                    max-sm:w-full
                  "
                >
                  Request Invitation ＋
                </button>


                <button
                  className="
                    rounded-full
                    bg-[#e4b82c]
                    px-8
                    py-3
                    font-semibold
                    text-black
                    transition-all
                    duration-200
                    hover:bg-[#cda323]
                    active:scale-95
                    max-sm:w-full
                  "
                >
                  Learn More ⓘ
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}