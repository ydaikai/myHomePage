import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {};

export default function Header({ }: Props) {
	return (
		<header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1,
				}}
				className='flex flex-row items-center'
			>
				{/* Social iconns */}
				<SocialIcon
					url='https://twitter.com/iammagnetts'
					fgColor='gray'
					bgColor='transparent'
				/>
				<SocialIcon
					url='https://github.com/ydaikai'
					fgColor='gray'
					bgColor='transparent'
				/>
				<SocialIcon
					url='https://github.com/ydaikai'
					fgColor='gray'
					bgColor='transparent'
				/>
			</motion.div>

			<motion.div
				initial={{
					x: 500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1
				}}
				className='flex flex-row items-center cursor-pointer text-gray-300'>
				<SocialIcon
					network='email'
					fgColor='gray'
					bgColor='transparent'
				/>
				<p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
			</motion.div>
		</header>
	);
}