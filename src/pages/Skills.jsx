import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { IconCard } from "../components";

const Skills = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>What I can do</p>
				<h2 className={styles.sectionHeadText}>Skills</h2>
			</motion.div>

			<div className='mt-100 flex flex-wrap gap-20 lg:justify-start justify-center'>
				{technologies.map((technology, index) => (
					<IconCard
						key={technology.name}
						index={index}
						fill={technology.fill}
						name = {technology.name}
						{...technology}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Skills, "skills");
