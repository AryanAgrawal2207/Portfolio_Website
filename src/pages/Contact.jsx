import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn } from "../utils/motion";
import emailIcon from "../assets/email-icon.jpg"; 
import instaIcon from "../assets/instagram-icon.jpg"; 
import phoneIcon from "../assets/phone-icon.jpg"; 
import homeIcon from "../assets/home.jpg"; 

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[1] bg-black-100 p-8 rounded-2xl'>
        <p className='mt-2 sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <motion.div variants={fadeIn("", "", 1, 1)} className='mt-12 flex flex-col gap-8'>
          <div className='flex items-center gap-4'>
            <img src={homeIcon} alt="Home" className='w-10 h-10' />
            <span className='text-white font-medium'>Thane, Maharashtra</span>
          </div>
          <div className='flex items-center gap-4'>
            <img src={emailIcon} alt="Email" className='w-10 h-10' />
            <span className='text-white font-medium'>aryanagrawal2207@gmail.com</span>
          </div>
          <div className='flex items-center gap-4'>
            <img src={instaIcon} alt="Instagram" className='w-10 h-10' />
            <span className='text-white font-medium'>@__.aryan22</span>
          </div>
          <div className='flex items-center gap-4'>
            <img src={phoneIcon} alt="Phone" className='w-10 h-10' />
            <span className='text-white font-medium'>+91-9619775758</span>
          </div>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-black-200 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mt-8 block mx-auto text-center'>
            See Resume
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
