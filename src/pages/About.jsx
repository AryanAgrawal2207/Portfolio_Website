import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn } from "../utils/motion";
import myPhoto from "../assets/my-photo.jpg"; // Adjust the path to your photo

const About = () => {
  return (
    <div className='xl:mt-20  flex xl:flex-row flex-col gap-10 overflow-hidden'>
      <motion.div
		variants={slideIn("left", "tween", 0.2, 1)}
		className='flex-shrink-0 w-80 h-80 rounded-full overflow-hidden'
		style={{ marginTop: '200px' }}> {/* Adjust this value to move the image down */}
		<img src={myPhoto} alt='Aryan Agrawal' className='w-full h-full object-cover' />
	  </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className={`bg-black-100 p-8 rounded-2xl mt-12 max-w-lg ml-auto ${styles.paddingX} overflow-hidden`}>
        <p className={styles.sectionSubText}>Who am I?</p>
        <h2 className={styles.sectionHeadText}>Introduction</h2>
        <motion.p
          variants={fadeIn("", "", 1, 1)}
          className='mt-4 text-white-100 text-[17px] max-w-3xl leading-[30px]'>
          I’m Aryan Agrawal, an IT student at Vidyalankar Institute of Technology, skilled in Python, Java, SQL, machine learning and NLP. I have worked on an internship at Cere Labs Pvt. Ltd. where I worked on anonymizing text documents using LLMs, enhancing my AI and backend development expertise. Academically, I’ve excelled in board exams and am continuing to do so along my higher studies. Outside the classroom, I’m a state-level badminton player. Passionate about exploring new tech and continuously growing. Let’s connect!
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
