import { motion, MotionConfig } from 'framer-motion';
import React from 'react';

type Props = {};

export default function About({ }: Props) {
	return (
		<div className='flex flex-col relative h-screen text-center md:text-left
			md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
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
			/>
		</div>
	);
}