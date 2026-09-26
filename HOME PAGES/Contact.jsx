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
    <div>
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
        {/* ================= SLIDE 1 ================= */}

        <SwiperSlide>
          <div className="relative h-[520px] w-[94%] ml-[50px] max-md:w-full max-md:ml-0 max-md:h-[420px] max-sm:h-[360px]">
            <img className="w-full h-full object-cover" src={image1} alt="" />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center text-white w-[90%]">
              <motion.h1 
              initial={{opacity:0, y:100}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration: 0.8}}

              className="text-5xl font-bold mb-4 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
                Contact Akoya Laundry
              </motion.h1>

              <motion.p 
              initial={{opacity:0, y:100}}
              whileInView={{opacity:1, y:0}}
              viewport={{once: true}}
              transition={{duration:0.8}}
              className="text-xl mb-6 max-md:text-base max-sm:text-sm">
                Luxury laundry services tailored to your needs in Doha, Qatar
              </motion.p>

              <motion.p
 initial={{opacity:0, y:100}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:0.8}}
              className="bg-[#d4af37]  h-[2px] w-[100px] "></motion.p>
            </div>
          </div>
        </SwiperSlide>

        {/* ================= SLIDE 2 ================= */}

        <SwiperSlide>
          <div className="relative h-[520px] w-[94%] ml-[50px] max-md:w-full max-md:ml-0 max-md:h-[420px] max-sm:h-[360px]">
            <img className="w-full h-full object-cover" src={image2} alt="" />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center text-white w-[90%]">
              <motion.h1 
              initial={{opacity:0, y:100}}
              viewport={{once:true}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.8}}
              className="text-5xl font-bold mb-4 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
                Professional Care
              </motion.h1>

              <motion.p
              initial={{opacity:0, y:100}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transitio={{duration:0.8}}
            className="text-xl mb-6 max-md:text-base max-sm:text-sm">
                Expert fabric handling with eco-friendly detergents
              </motion.p>

              <motion.p
              initial={{opacity:0, y:100}}
              whileInView={{opacity:1, y:0}}
              viewport={{once: true}}
              transition={{duration:0.8}}
              className="bg-[#d4af37]  h-[2px] w-[100px] "></motion.p>
            </div>
          </div>
        </SwiperSlide>

        {/* ================= SLIDE 3 ================= */}

        <SwiperSlide>
          <div className="relative h-[520px] w-[94%] ml-[50px] max-md:w-full max-md:ml-0 max-md:h-[420px] max-sm:h-[360px]">
            <img className="w-full h-full object-cover" src={image3} alt="" />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center text-white w-[90%]">
              <motion.h1
                   initial={{opacity:0, y:100}}
              whileInView={{opacity:1, y:0}}
              viewport={{once: true}}
              transition={{duration:0.8}}
               className="text-5xl font-bold mb-4 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
                Express Service
              </motion.h1>

              <motion.p
                   initial={{opacity:0, y:100}}
              whileInView={{opacity:1, y:0}}
              viewport={{once: true}}
              transition={{duration:0.8}}
               className="text-xl mb-6 max-md:text-base max-sm:text-sm">
                Quick turnaround without compromising quality
              </motion.p>

              <motion.p 
                                 initial={{opacity:0, y:100}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:0.8}}
              className="bg-[#d4af37]  h-[2px] w-[100px] "></motion.p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div>
        <section className="bg-[#F8F5F2] h-[900px] w-[94%] ml-[50px]">
          <motion.p
          initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:1.5}}
          className="text-4xl font-light pt-[70px] pl-[43%] pb-[10px]">
            Contact Us
          </motion.p>

          <motion.div
                    initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.8}}
           className="flex justify-center mt-[20px] gap-3 ml-[-38px]">
            <div className="h-[2px] w-[70px] bg-yellow-500"> </div>
            <div className="text-yellow-500 font-medium text-xl mt-[-15px]">
              GET IN TOUCH
            </div>
            <div className="h-[2px] w-[70px] bg-yellow-500"> </div>
          </motion.div>

          <motion.div 
          initial={{opacity:0, x:-70}}
          whileInView={{opacity:1, x:0}}
          viewport={{once: true}}
          transition={{duration:0.8,
            ease:"easeOut"
          }}
          className="mt-[70px]">
            <p className="text-xl font-medium ml-[10%] mb-[20px]">
              How to reach us
            </p>
            <p className="ml-[10%] w-[600px] mb-[30px]">
              Our concierge team is available to assist you with any inquiries
              about our luxury laundry services. Reach out via your preferred
              method and we'll respond promptly.
            </p>

            <div className="space-y-8 ml-[10%]">
              <motion.div
              initial={{opacity:0, y:50}}
              whileInView={{opacity:1, y:0}}
              viewport={{once: true}}
              transition={{duration:0.8,
                ease: "easeOut"
              }}
              className="flex items-center gap-5">
                <div className="w-16 h-16 bg-[#f5efdf] rounded-xl flex items-center justify-center">
                  <FaLocationDot className="text-[#d9a900] text-2xl" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Location</h3>
                  <p className="text-lg">West Bay, Doha, Qatar</p>
                </div>
              </motion.div>

              <motion.div
              initial={{opacity:0, y:50}}
              whileInView={{opacity:1, y:0}}
              viewport={{once: true}}
              transition={{duration:0.8,
                ease:"easeOut"
              }}
              className="flex items-center gap-5">
                <div className="w-16 h-16 bg-[#f5efdf] rounded-xl flex items-center justify-center">
                  <FaPhone className="text-[#d9a900] text-2xl" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-lg">+974 1234 5678</p>
                </div>
              </motion.div>

              <motion.div 
              initial={{opacity:0, y:50}}
              whileInView={{opacity:1, y:0}}
              viewport={{once: true}}
              transition={{duration:0.8,
                ease:"easeOut"
              }}
              className="flex items-center gap-5">
                <div className="w-16 h-16 bg-[#f5efdf] rounded-xl flex items-center justify-center">
                  <FaEnvelope className="text-[#d9a900] text-2xl" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-lg">info@akoyalaundry.com</p>
                </div>
              </motion.div>
            </div>

            {/* Follow Us */}
            <div className="mt-12 ml-[10%]">
              <h3 className="text-2xl font-semibold mb-5">Follow Us</h3>

              <div className="flex gap-5">
                <div className=" hover:bg-yellow-400 hover:transition-transform hover:ease-out duration-300 w-13 h-13 bg-[#1f1f1f] rounded-full flex items-center justify-center cursor-pointer">
                  <FaInstagram className="text-white text-2xl" />
                </div>

                <div className=" hover:bg-yellow-400 hover:tranistion-transfrom hover:ease-out duration-300 w-13 h-13 bg-[#1f1f1f] rounded-full flex items-center justify-center cursor-pointer">
                  <FaTwitter className="text-white text-2xl" />
                </div>

                <div className="hover:bg-yellow-400 hover:transition-transform hover-ease-out duration-300 w-13 h-13 bg-[#1f1f1f] rounded-full flex items-center justify-center cursor-pointer">
                  <FaWhatsapp className="text-white text-2xl" />
                </div>
              </div>
            </div>
          </motion.div>

           <motion.div
           initial={{opacity:0, x:50}}
           whileInView={{opacity:1, x:0}}
           viewport={{once: true}}
           transition={{duration:0.8,
            ease:"easeOut"
           }}
           className="flex flex-col h-[600px] w-[550px] rounded-xl shadow-xl bg-white mt-[-37%] ml-[56%]" >
            <form action="Submit">
                          <p className="text-xl font-bold mt-[50px] ml-[40px] mb-[30px]" >Send us a message</p>
            <label className="ml-[40px] mt-[20px]" htmlFor="">Full Name</label>
            <input className="ml-[40px] focus:border-yellow-400 mt-[10px] h-[50px] p-[10px] mb-[10px] bg-[#FAFAFA] w-[450px] border-3 border-gray-300 rounded-xl" required type="text" placeholder="Enter your name"/>


            <label className="ml-[40px] mt-[20px]" htmlFor="">Email Address</label>
            <input className="ml-[40px] mt-[10px] focus:border-yellow-400 h-[50px] mb-[10px] p-[10px]  bg-[#FAFAFA] w-[450px] border-3 border-gray-300 rounded-xl" required type="text" placeholder="Enter your Email" />


            <label className="ml-[40px] mt-[20px]" htmlFor="">Your Message</label>
            
            <textarea  className="ml-[40px] focus:border-yellow-400 border-2 mt-[10px] h-[150px] bg-[#FAFAFA] p-[10px] w-[450px] border-gray-300 rounded-xl" id="" placeholder="How can i help you?"></textarea>
             <button className="bg-black w-[450px] h-[50px] text-center text-white mt-[20px] ml-[40px] rounded-xl hover:scale-[1.03]
             transition-transform esae-out duration-300  ">Send Message</button>
            </form>

          </motion.div>


        
        </section>
      </div>

      <div>

      </div>
    </div>
  );
};

export default Contact;
