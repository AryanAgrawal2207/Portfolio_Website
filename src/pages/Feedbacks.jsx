import {
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ title, company_name, date, icon, points }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: "#212121",
				color: "#f3f3f3",
			}}
			contentArrowStyle={{ borderRight: "7px solid #232631" }}
			date=""
			iconStyle={{ background: "#282c34" }}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img
						src={icon}
						alt={`feedback_by-${company_name}`}
						className="w-[60%] h-[60%] rounded-full object-cover"
					/>
				</div>
			}>
			<div>
				<h3 className='white-100 text-[40px] font-bold'>
					{company_name}
				</h3>
				<div className="flex-1 flex flex-col mt-1">
						<p className="text-white font-bold text-[32px]">
							 {title}
						</p>
						<p className="mt-1 text-secondary text-[12px]">
							{date}
						</p>
						<ul className='mt-5 list-disc ml-5 space-y-2'>
					{points.map((point, index) => (
						<li
							key={`experience-point-${index}`}
							className='text-white-100 text-[14px] pl-1 tracking-wider'>
							{point}
						</li>
					))}
				</ul>
				</div>
			</div>

		</VerticalTimelineElement>
	);
};

const Feedbacks = () => {
	return (
		<>
			<div
				className={` min-h-[200px]`}>
				<motion.div variants={textVariant()}>
					<p className='mt-2 sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>What is my</p>
					<h2 className={styles.sectionHeadText}>Experience</h2>
				</motion.div>
			</div>
			<div className={` flex flex-col`}>
				<VerticalTimeline>
					{testimonials.map((testimonial, index) => (
						<FeedbackCard
							key={index}
							index={index}
							{...testimonial}
						/>
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Feedbacks, "experience");
