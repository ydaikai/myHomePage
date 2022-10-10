import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {};

export default function Hero({ }: Props) {
	const [text, count] = useTypewriter({
		words: [
			'ydaikai',
			'UTokyo student',
			'CoffeeLover',
		],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
			<BackgroundCircles />
			<img
				className='relative rounded-full h-32 w-32 mx-auto object-cover'
				src='https://pbs.twimg.com/profile_images/1573475681492963328/UWcGiNqm_400x400.jpg' alt=""
			/>
			<div className='z-20'>
				<h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software engineer</h2>
				<h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
					<span>{text}</span>
					<Cursor cursorColor='#F7AB0A' />
				</h1>
				<div className='pt-3.5'>
					<Link href='#about'>
						<button className='heroButton'>About</button>
					</Link>
					<Link href='#experience'>
						<button className='heroButton'>Experience</button>
					</Link>
					<Link href='#skills'>
						<button className='heroButton'>Skills</button>
					</Link>
					<Link href='#projects'>
						<button className='heroButton'>Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
}