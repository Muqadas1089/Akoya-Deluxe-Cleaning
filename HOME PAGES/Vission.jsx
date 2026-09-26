import React from "react";
import image from "../src/assets/Vission.jpeg";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const Vission = () => {
  
  const Core = [
    {
      icon: "",
      title: "Excellence",
      des: "Every item, every wash, every fragrance meets the highest standards.",
    },
    {
      icon: "",
      title: "Innovation",
      des: "We use advanced systems and smart logistics to deliver faster and cleaner results.",
    },
    {
      icon: "",
      title: "Sustainability",
      des: "We commit to eco-friendly methods and responsible operations.",
    },
    {
      icon: "",
      title: "Customer Focus",
      des: "Your satisfaction drives everything we do.",
    },
  ];

  return (
    <div>
      <section  className="bg-[#F7F8F9] w-[94%] pb-[30px] ml-[50px] pt-[10%]">

        <motion.p
        initial={{opacity:0, y: 10}}
        whileInView={{opacity:1 , y:0}}
        viewport={{once:true}}
        transition={{duration:0.8}}
        className="text-5xl font-bold mb-[10px] ml-[36%]">
          Vision & Mission
        </motion.p>

        <motion.p 
          initial={{opacity:0, y: 10}}
        whileInView={{opacity:1 , y:0}}
        viewport={{once:true}}
        transition={{duration:0.8}}
        className="text-yellow-500 text-xl font-medium ml-[42%] mb-[10px]">
          Akoya Premium Laundry
        </motion.p>

        <motion.i
          initial={{opacity:0, y: 10}}
        whileInView={{opacity:1 , y:0}}
        viewport={{once:true}}
        transition={{duration:0.8}}
         className="ml-[37%]">
          Redefining Fabric Care and Personal Luxury in Qatar
        </motion.i>

        <p

         className="mt-[10px] bg-yellow-500 h-[5px] w-[100px] mb-[30px] ml-[46%]"></p>

        <div className="relative">

          <motion.div
                    initial={{opacity:0, x: 30}}
        whileInView={{opacity:1 , x:0}}
        viewport={{once: true}}
        transition={{duration:0.8}}
         className="sticky top-[30px] ml-[80px] relative">

            <img
              className="relative h-[800px] w-[400px] mt-[50px] object-cover rounded-xl"
              src={image}
              alt=""
            />

            <div className="absolute top-[0px] left-0 w-[400px] h-[800px] rounded-xl bg-black/45"></div>

            <div className="absolute top-[75%] left-6 text-white">
              <p className="text-2xl font-bold">
                Excellence in Every Detail
              </p>

              <p className="mt-[5px]">
                Technology, Artistry, and Care
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{once: true}}
  transition={{ duration: 0.8 }}
   className="relative z-10 bg-yellow-500 mt-[25px] rounded-xl w-[400px] mb-[30px]">

              <p className="text-white ml-[30px] pt-[10px] font-bold">
                Experience Excellence Today
              </p>

              <button className="bg-white font-bold 
              hover:scale-[1.03] transition-transform duration-300 ease-out text-xl w-[330px] mb-[20px] mt-[20px] h-[45px] ml-[30px] rounded-xl text-yellow-500">
                Book Now
              </button>

            </motion.div>
          </motion.div>

          <section
   className="ml-[23%]">

            <motion.div
                        initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{once: true}}
  transition={{ duration: 0.8 }}
            
  className="flex justify-center items-center">

              <div className="mt-[-156%] shadow-2xl bg-yellow-500 h-[230px] rounded-l-xl w-[340px] text-center text-5xl text-white pt-[85px] font-bold">
                Our Vision
              </div>

              <div className="mt-[-156%] h-[230px] rounded-r-xl w-[400px] shadow-lg text-center pt-[60px] pl-[30px] pr-[30px]">
                To redefine fabric care and personal luxury in Qatar through
                innovation, fragrance, and flawless service — making Akoya
                Premium Laundry the symbol of elegance and trust in every home
              </div>

            </motion.div>

            <motion.div 
            initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{once: true}}
  transition={{ duration: 0.8 }}
        className="flex justify-center items-center relative z-10">

              <div 
                          
        className="mt-[-105%] h-[300px] rounded-l-xl w-[420px] shadow-lg text-md pt-[60px] pl-[30px] pr-[30px]">
                At Akoya Premium Laundry, we strive to offer premium laundry,
                delivery, and custom perfume solutions that combine technology,
                artistry, and care. Our mission is to transform daily routines
                into refined experiences through exceptional service, attention
                to detail, and sustainable practices.
              </div>

              <div className="mt-[-105%] shadow-2xl bg-black h-[300px] rounded-r-xl w-[330px] text-center text-5xl text-white pt-[105px] font-bold">
                Our <br /> Mission
              </div>

            </motion.div>

          </section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{once: true}}
  transition={{ duration: 0.8 }}
   className="h-[610px] mb-[30px] w-[60%] bg-white rounded-2xl shadow-lg mt-[-27%] ml-[36%] relative z-20">

            <div className="pt-[60px] text-3xl pl-[35%] pb-[30px] font-bold">
              Our Core Values
            </div>

            <div className="flex justify-center flex-wrap gap-[30px] mt-[20px]">

              {Core.map((item, index) => (
                <div
                  key={index}
                  className="h-[180px] bg-[#FBFCFD] hover:shadow-lg border-l-6 border-yellow-500 rounded-xl w-[360px]"
                >

                  <div className="flex items-center ml-[20px] mt-[40px] gap-[10px]">

                    <div className="h-[45px] w-[45px] bg-yellow-500 rounded-lg flex justify-center items-center">

                      <div className="h-[10px] w-[10px] rounded-full bg-white"></div>

                    </div>

                    <p className="text-xl font-bold">
                      {item.title}
                    </p>

                  </div>

                  <p className="pt-[10px] pl-[50px]">
                    {item.des}
                  </p>

                </div>
              ))}

            </div>

          </motion.section>

        </div>

      </section>
    </div>
  );
};

export default Vission;