import { motion } from 'framer-motion';
import React from 'react';
import swift from 'programming-languages-logos/src/swift/swift.svg'

type Props = {};

export default function ExperienceCard({ }: Props) {
	return (
		<article
		className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'
		>
			<motion.img
				initial={{
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				viewport={{
					once: true,
				}}
				className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
				src="https://pbs.twimg.com/profile_images/1569665887917195270/Bg-tLupq_400x400.jpg"
			/>

			<div className='px-0 md:px-10'>
				<h4 className='text-4xl font-light'>CEO of MOFMOF
				</h4>
				<p className='font-bold text-2xl mt-1'>CEO</p>
				<div className='flex space-x-2 my-2'>
					<img
						className='h-10 w-10'
						src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png" alt="JavaScript" />
					<img
						className='h-10 w-10'
						src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png" alt="TypeScript" />
					<img
						className='h-10 w-10'
						src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png" alt="Python" />\<img
						className='h-10 w-10'
						src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/r/r.png" alt="R" />
				</div>
				<p className='uppercase py-5 text-gray-300'>
					Started ... ended...
				</p>

				<ul className='list-disc space-y-4 ml-5 text-lg'>
					<li>Summary point</li>
					<li>Summary point</li>
					<li>Summary point</li>
					<li>Summary point</li>
					<li>Summary point</li>
				</ul>
			</div>
		</article>
	);
}