import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import image1 from "../src/assets/Abouthero.jpg";
import fabric1 from "../src/assets/fabric.jpg";
import premium1 from "../src/assets/Premiunm.jpg";

import abayaSpecial from "../src/Pics/abaya_special.jpg";
import kameez from "../src/Pics/kameez.webp";
import kurtaPajama from "../src/Pics/kurtaPajama.webp";
import kurta from "../src/Pics/kurta.webp";
import dishdasha from "../src/Pics/dishdasha.webp";
import abaya from "../src/Pics/abaya.jpeg";
import bathrob from "../src/Pics/bathrob.jpg";
import bisht from "../src/Pics/bisht.jpeg";
import blouse from "../src/Pics/blouse.jpg";
import care from "../src/Pics/care.jpg";
import childDishdasha from "../src/Pics/child_dishdasha.jpg";
import dryCleaning from "../src/Pics/dryCleaning.jpg";
import executivePressing from "../src/Pics/exectivePressing.jpg";
import fragrance from "../src/Pics/fragrance.jpg";
import gentSuit from "../src/Pics/gent_suit.jpg";
import ghutra from "../src/Pics/ghutra.jpg";
import hijab from "../src/Pics/hijab.png";
import overcoat from "../src/Pics/overcoat.jpg";
import Scheduale from "../src/Pics/sehedule.jpg";
import jalabiya from "../src/Pics/jalabiya.webp";
import military_suite from "../src/Pics/military_suite.webp";
import dress from "../src/Pics/dress.webp";
import dressLong from "../src/Pics/dressLong.webp";

import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "motion/react";

const Service = () => {
  const [Selected, setSelected] = useState(0);

  const services = [
    {
      category: "Dry Cleaning",
      products: [
        {
          name: "Dry Cleaning",
          price: " 6 QAR",
          image: dryCleaning,
          emoji: "👕",
          description:
            "Expert care for suits and delicate fabrics using eco-friendly solvents",
        },
        {
          name: "Gent Suit (3pcs)",
          price: "12 QAR",
          image: gentSuit,
          emoji: "👔",
          description: "Complete care for 3-piece suits",
        },
        {
          name: "Dress (Short)",
          price: "10 QAR",
          image: dress,
          emoji: "👗",
          description:
            "Care for cocktail and summer dresses",
        },
        {
          name: "Dress (Long)",
          price: "15 QAR",
          image: dressLong,
          emoji: "👗",
          description:
            "Specialized care for evening gowns",
        },
        {
          name: "Overcoat",
          price: "11 QAR",
          image: overcoat,
          emoji: "👗",
          description:
            "Winter coat cleaning and preservation",
        },
      ],
    },

    {
      category: "Pressing",
      products: [
        {
          name: "Executive Pressing",
          price: "3 QAR",
          image: executivePressing,
          emoji: "👔",
          description:
            "Crisp finishes for business attire with precision steam technology",
        },
      ],
    },

    {
      category: "Specialty",
      products: [
        {
          name: "Couture Care",
          price: "7 QAR",
          image: care,
          emoji: "👗",
          description:
            "Hand-cleaning for designer garments and delicate fabrics",
        },
        {
          name: "Military Uniform",
          price: "9 QAR",
          image: military_suite,
          emoji: "🧥",
          description:
            "Regimental standard cleaning and pressing",
        },
        {
          name: "Blouse (Special)",
          price: "4 QAR",
          image: blouse,
          emoji: "🧥",
          description:
            "Delicate care for embellished tops",
        },
        {
          name: "Bath Robe",
          price: "4 QAR",
          image: bathrob,
          emoji: "🧥",
          description:
            "Deep cleaning for plush bathrobes",
        },
      ],
    },

    {
      category: "Traditional",
      products: [
        {
          name: "Dishdasha",
          price: "4 QAR",
          image: dishdasha,
          emoji: "👕",
          description:
            "Professional care for men's traditional Qatari garment",
        },
        {
          name: "Child Dishdasha",
          price: "3 QAR",
          image: childDishdasha,
          emoji: "👔",
          description:
            "Specialized care for children's traditional garments",
        },
        {
          name: "Bisht",
          price: "25 QAR",
          image: bisht,
          emoji: "🥻",
          description:
            "Premium care for ceremonial cloak with gold detailing",
        },
        {
          name: "Ghutra",
          price: " 3 QAR",
          image: ghutra,
          emoji: "👗",
          description:
            "Gentle cleaning for traditional headwear",
        },
        {
          name: "Kurta",
          price: "4 QAR",
          image: kurta,
          emoji: "🧥",
          description:
            "Care for traditional South Asian tunic",
        },
        {
          name: "Kurta Pyjama (Set)",
          price: "6 QAR",
          image: kurtaPajama,
          emoji: "👕",
          description:
            "Complete set cleaning for traditional attire",
        },
        {
          name: "Kameez",
          price: "4 QAR",
          image: kameez,
          emoji: "👔",
          description:
            "Professional care for traditional long shirts",
        },
        {
          name: "Jalabiya",
          price: "6 QAR",
          image: jalabiya,
          emoji: "👗",
          description:
            "Specialized care for flowing traditional gowns",
        },
        {
          name: "Abaya",
          price: "10 QAR",
          image: abaya,
          emoji: "🥼",
          description:
            "Professional cleaning for everyday abayas",
        },
        {
          name: "Abaya Special",
          price: "12 QAR",
          image: abayaSpecial,
          emoji: "👕",
          description:
            "Premium care for embellished abayas",
        },
        {
          name: "Hijab",
          price: "3 QAR",
          image: hijab,
          emoji: "👔",
          description:
            "Delicate cleaning for headscarves",
        },
      ],
    },

    {
      category: "Express",
      products: [
        {
          name: "Express Service",
          price: "+30% Premium",
          image: Scheduale,
          emoji: "⚡",
          description:
            "3-hour turnaround for urgent garment needs",
        },
      ],
    },

    {
      category: "Add-On",
      products: [
        {
          name: "Fragrance Infusion",
          price: "5 QAR",
          image: fragrance,
          emoji: "✨",
          description:
            "Luxury scent options for your garments",
        },
      ],
    },
  ];

  const categories = [
    "All",
    "Dry Cleaning",
    "Pressing",
    "Specialty",
    "Traditional",
    "Express",
    "Add-On",
  ];

  const selectedCategory = categories[Selected];

  const filteredProducts =
    Selected === 0
      ? services.flatMap((service) => service.products)
      : services
          .filter((service) => service.category === selectedCategory)
          .flatMap((service) => service.products);

  return (
    <div>

      {/* ================= HERO SWIPER ================= */}

      <div>
        <Swiper
          pagination={true}
          autoplay={{
            delay: 3000,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper w-full [&_.swiper-pagination]:!bottom-[25px] [&_.swiper-pagination-bullet]:!w-[13px] [&_.swiper-pagination-bullet]:!h-[13px] [&_.swiper-pagination-bullet]:!rounded-full [&_.swiper-pagination-bullet]:!bg-white [&_.swiper-pagination-bullet]:!opacity-70 [&_.swiper-pagination-bullet-active]:!w-[28px] [&_.swiper-pagination-bullet-active]:!h-[13px] [&_.swiper-pagination-bullet-active]:!rounded-full [&_.swiper-pagination-bullet-active]:!bg-[#d4af37] [&_.swiper-pagination-bullet-active]:!opacity-100"
        >

          {/* ================= SLIDE 1 ================= */}

          <SwiperSlide>
            <div className="relative">

              <img
                className="relative w-[94%] ml-[50px] h-[600px] max-md:w-full max-md:ml-0 max-md:h-[500px] max-sm:h-[400px] object-cover"
                src={image1}
                alt=""
              />

              <div className="absolute top-0 left-[50px] bg-black/45 h-[600px] w-[94%] max-md:left-0 max-md:w-full max-md:h-[500px] max-sm:h-[400px]"></div>

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="absolute top-[30%] left-1/2 -translate-x-1/2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap max-sm:text-2xl"
              >
                Premium Garment Care
              </motion.p>

              <div className="absolute top-[40%] left-1/2 -translate-x-1/2 text-white text-sm sm:text-lg md:text-xl flex justify-center items-center whitespace-nowrap">

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="h-[2px] mr-[10px] mt-[30px] sm:mr-[15px] w-[40px] sm:w-[70px] bg-yellow-400"
                ></motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="text-yellow-400 mt-[30px]"
                >
                  Experience the Akoya difference
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="h-[2px] mt-[30px] ml-[10px] sm:ml-[15px] w-[40px] sm:w-[70px] bg-yellow-400"
                ></motion.p>

              </div>

              <motion.button
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="absolute top-[55%] left-1/2 -translate-x-1/2 h-[50px] w-[200px] sm:w-[230px] font-bold bg-yellow-400 rounded-4xl hover:bg-yellow-500 hover:scale-[1.03] transition-transform ease-out duration-400 text-sm sm:text-base"
              >
                Book a Collection
              </motion.button>

            </div>
          </SwiperSlide>

          {/* ================= SLIDE 2 ================= */}

          <SwiperSlide>
            <div className="relative">

              <img
                className="relative w-[94%] ml-[50px] h-[600px] max-md:w-full max-md:ml-0 max-md:h-[500px] max-sm:h-[400px] object-cover"
                src={fabric1}
                alt=""
              />

              <div className="absolute top-0 left-[50px] bg-black/45 h-[600px] w-[94%] max-md:left-0 max-md:w-full max-md:h-[500px] max-sm:h-[400px]"></div>

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="absolute top-[30%] left-1/2 -translate-x-1/2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap max-sm:text-2xl"
              >
                Precision Fabric Care
              </motion.p>

              <div className="absolute top-[40%] left-1/2 -translate-x-1/2 text-white text-sm sm:text-lg md:text-xl flex justify-center items-center whitespace-nowrap">

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="h-[2px] mr-[10px] mt-[30px] sm:mr-[15px] w-[40px] sm:w-[70px] bg-yellow-400"
                ></motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="text-yellow-400 mt-[30px]"
                >
                  Tailored to your garment's needs
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="h-[2px] mt-[30px] ml-[10px] sm:ml-[15px] w-[40px] sm:w-[70px] bg-yellow-400"
                ></motion.p>

              </div>

              <motion.button
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="absolute top-[55%] left-1/2 -translate-x-1/2 h-[50px] w-[200px] sm:w-[230px] font-bold bg-yellow-400 rounded-4xl hover:bg-yellow-500 hover:scale-[1.03] transition-transform ease-out duration-400 text-sm sm:text-base"
              >
                Book a Collection
              </motion.button>

            </div>
          </SwiperSlide>

          {/* ================= SLIDE 3 ================= */}

          <SwiperSlide>
            <div className="relative">

              <img
                className="relative w-[94%] ml-[50px] h-[600px] max-md:w-full max-md:ml-0 max-md:h-[500px] max-sm:h-[400px] object-cover"
                src={premium1}
                alt=""
              />

              <div className="absolute top-0 left-[50px] bg-black/45 h-[600px] w-[94%] max-md:left-0 max-md:w-full max-md:h-[500px] max-sm:h-[400px]"></div>

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="absolute top-[30%] left-1/2 -translate-x-1/2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap max-sm:text-2xl"
              >
                Luxury Laundry Services
              </motion.p>

              <div className="absolute top-[40%] left-1/2 -translate-x-1/2 text-white text-sm sm:text-lg md:text-xl flex justify-center items-center whitespace-nowrap">

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="h-[2px] mr-[10px] mt-[30px] sm:mr-[15px] w-[40px] sm:w-[70px] bg-yellow-400"
                ></motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="text-yellow-400 mt-[30px]"
                >
                  For the most discerning clients
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="h-[2px] mt-[30px] ml-[10px] sm:ml-[15px] w-[40px] sm:w-[70px] bg-yellow-400"
                ></motion.p>

              </div>

              <motion.button
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="absolute top-[55%] left-1/2 -translate-x-1/2 h-[50px] w-[200px] sm:w-[230px] font-bold bg-yellow-400 rounded-4xl hover:bg-yellow-500 hover:scale-[1.03] transition-transform ease-out duration-400 text-sm sm:text-base"
              >
                Book a Collection
              </motion.button>

            </div>
          </SwiperSlide>

        </Swiper>
      </div>

      {/* ================= OUR SERVICES ================= */}

      <section className="bg-[#F8F5F2] w-[94%] ml-[50px] max-md:w-full max-md:ml-0 min-h-[700px] pb-[80px]">

        {/* ================= HEADING ================= */}

        <p className="pt-[100px] text-3xl text-center pb-[20px]">
          Our Services
        </p>

        <div className="flex justify-center gap-4 max-sm:gap-2">

          <p className="bg-yellow-500 h-[2px] w-[70px] mt-[13px] max-sm:w-[35px]"></p>

          <p className="font-bold text-yellow-500">
            LUXURY GARMENT CARE
          </p>

          <p className="bg-yellow-500 h-[2px] w-[70px] mt-[13px] max-sm:w-[35px]"></p>

        </div>

        {/* ================= CATEGORY BUTTONS ================= */}

        <div className="flex justify-center flex-wrap mt-[50px] gap-4 px-[20px]">

          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelected(index)}
              className={`h-[40px] px-[22px] text-center rounded-2xl font-bold bg-white p-[5px] hover:bg-black hover:text-yellow-400 hover:scale-[1.04] transition-all ease-out duration-300 ${
                Selected === index
                  ? "!bg-black !text-yellow-400"
                  : ""
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* ================= SERVICES CARDS ================= */}

        <div className="w-full mt-[50px] px-[25px] mr-[30px]">

          {/* CARD SIZE UPDATED HERE */}

          <div className="max-w-[1340px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px]">

            {filteredProducts.map((product, index) => (

              <motion.div
                key={`${product.name}-${index}`}
                initial={{
                  opacity: 0,
                  y: 80,
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
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                className="bg-white rounded-[15px] overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >

                {/* ================= IMAGE ================= */}

                <div className="relative w-full h-[380px] overflow-hidden group">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* IMAGE OVERLAY */}

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500"></div>

                  {/* EMOJI CIRCLE */}

                  <div className="absolute top-[18px] right-[20px] w-[52px] h-[52px] rounded-full bg-[#d9b52f] flex items-center justify-center text-[25px] shadow-md">
                    {product.emoji}
                  </div>

                </div>

                {/* ================= CARD CONTENT ================= */}

                <div className="px-[25px] pt-[25px] pb-[25px]">

                  <div className="flex justify-between items-center gap-3">

                    <h3 className="text-[22px] font-medium text-black">
                      {product.name}
                    </h3>

                    <p className="text-[#d4af37] text-[17px] font-medium whitespace-nowrap">
                      From {product.price}
                    </p>

                  </div>

                  <p className="text-[16px] text-gray-700 leading-[1.6] mt-[15px] min-h-[55px]">
                    {product.description}
                  </p>

                  {/* ================= YELLOW ANIMATED LINE ================= */}

                  <div className="w-full h-[2px] bg-[#eadfb8] mt-[18px] overflow-hidden">

                    <motion.div
                      initial={{
                        width: "0%",
                      }}
                      whileInView={{
                        width: "100%",
                      }}
                      viewport={{
                        once: false,
                      }}
                      transition={{
                        duration: 0.9,
                        ease: "easeInOut",
                      }}
                      className="h-full bg-[#d4af37]"
                    ></motion.div>

                  </div>

                  {/* ================= ORDER BUTTON ================= */}

                  <button className="w-full h-[48px] mt-[18px] bg-[#d4af37] text-black rounded-[9px] text-[16px] font-medium hover:bg-black hover:text-yellow-400 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-[8px]">
                    Order
                    <span className="text-[22px]">
                      ＋
                    </span>
                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </div>


      </section>

      <div>
        {/* ================= PERSONALIZED SERVICE SECTION ================= */}

<section className="w-[94%] ml-[50px] border-b-2 border-b-white max-md:w-full max-md:ml-0 bg-[#1c1c1c] min-h-[350px] flex items-center justify-center overflow-hidden">

  <div className="w-full text-center px-[30px] py-[80px]">

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="text-[#d4af37] text-3xl md:text-4xl font-light"
    >
      Need Personalized Service?
    </motion.h2>

    {/* Paragraph */}
    <motion.p
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        delay: 0.15,
        ease: "easeOut",
      }}
      className="text-white/90 text-base md:text-lg mt-[25px] max-w-[1050px] mx-auto leading-[1.8]"
    >
      Our VIP concierge team is available 24/7 to handle special requests,
      delicate items, or bulk orders for businesses and residences.
    </motion.p>

    {/* Button */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        delay: 0.3,
        ease: "easeOut",
      }}
      className="mt-[30px]"
    >
      <button
        className="
          h-[52px]
          w-[240px]
          bg-[#d4af37]
          text-black
          rounded-full
          text-[16px]
          font-medium
          transition-all
          duration-300
          ease-out
          hover:scale-[1.04]
          hover:bg-[#e2bf45]
        "
      >
        Contact Concierge
        <span className="ml-[8px] text-[18px]">💬</span>
      </button>
    </motion.div>

  </div>

</section>
      </div>
    </div>
  );
};

export default Service;