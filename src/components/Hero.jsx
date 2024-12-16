import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { init } from 'ityped';
import React, { useEffect, useRef } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import { aarti } from "../assets";

const Hero = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: [
        ' SDE at BNY ',
        "Zonal Level TT Player ",
        " Mentor ",
        " Content Writer ",
        'Software Developer ',
        " Tech Enthusiast "
      ]
    })
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="flex">
        <div className={`absolute top-20 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-90 h-40 violet-gradient' />
          </div>

          <div className="space-y-4">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hii there, I'm <span className='font-kalam font-extrabold text-[#915EFF]'>Aarti Rathi</span>
            </h1>

            <h3 className="relative">
              <span
                ref={textRef}
                className={`${styles.heroSubText} mt-2 green-text-gradient animate-blink`}
              ></span>
            </h3>

            <div className="absolute flex items-center bg-black/30 w-max px-4 py-2 rounded-full space-x-4 z-10">
              <a href="https://github.com/shinchancode" target="_blank" className="p-2 bg-transparent rounded-full hover:bg-white/10">
                <AiOutlineGithub className="text-2xl text-white" />
              </a>
              <a href="https://www.linkedin.com/in/aarti-rathi-a6031814b/" target="_blank" className="p-2 bg-transparent rounded-full hover:bg-white/10">
                <ImLinkedin className="text-2xl text-white" />
              </a>
              <a href="https://www.instagram.com/aarti.rathiii" target="_blank" className="p-2 bg-transparent rounded-full hover:bg-white/10">
                <AiOutlineInstagram className="text-2xl text-white" />
              </a>
              <a href="https://linktr.ee/rathi17" target="_blank" className="p-2 bg-transparent rounded-full hover:bg-white/10">
                <BiLinkAlt className="text-2xl text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute right-16 top-24 w-72 h-72 rounded-[40%] flex items-center justify-center violet-gradient md:w-52 md:h-52 sm:hidden">
          <img
            src={aarti}
            alt="Profile"
            className="h-[90%] rounded-[45%] object-cover"
          />
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-2 bottom-6 w-10 flex justify-end items-center'>
        <a href='#education'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;