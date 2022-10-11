import React from 'react';
import { motion, MotionConfig } from 'framer-motion';


type Props = {};

export default function About({ }: Props) {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				opacity: 1.5,
			}}
			className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

			<h3 className='absolute top-24 tracking-[20px] text-gray-500 text-2xl uppercase'>
				About
			</h3>

			<motion.img
				initial={{
					y: -200,
					opacity: 0,
				}}
				whileInView={{
					y: 0,
					opacity: 1,
				}}
				transition={{
					duration: 1.2,
				}}
				viewport={{
					once: true,
				}}
				src='https://pbs.twimg.com/profile_images/1573475681492963328/UWcGiNqm_400x400.jpg'
				className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-50 md:h-60 xl:w-[500px] xl:h-[600px]'/>

			<div className='space-y-10 px-0 md:px-10'>
				<h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background.</h4>
				<p className='text-base'>Lorem ipsum</p>
			</div>
		</motion.div>
	);
}