import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerate';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';

const Hero = () => {
  return (
    <div className='pt-26 pb-20'>
      <div>
        <Spotlight
          className='-left-10 -top-40 h-screen md:-left-32 md:-top-20'
          fill='white'
        />
        <Spotlight
          className='-top-40 left-full h-[80vh] w-[50vh]'
          fill='purple'
        />
        <Spotlight className='left-80 top-28 h-[80vh] w-[50vh]' fill='blue' />
      </div>

      <div className='absolute left-0 top-0 flex h-screen w-full 
      items-center justify-center bg-white bg-grid-black/[0.2]
       dark:bg-black-100 dark:bg-grid-white/[0.03]'>
        <div className='pointer-events-none absolute inset-0 flex 
        items-center justify-center bg-white 
        [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]
         dark:bg-black-100' />
      </div>
      <div className='relative z-10 my-20 flex justify-center'>
        <div className='flex max-w-[89vw] flex-col items-center 
        justify-center md:max-w-2xl lg:max-w-[60vw]'>
          <h2 className='max-w-[80vw] text-center text-xs uppercase 
          tracking-widest text-blue-100'>
            Dynamic WebMagic with nextjs
          </h2>
          <TextGenerateEffect
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            words='Transfotming Concepts into Seamless User Experiences'
          />
          <p className='md:tracking-widermb-4 text-center text-sm md:text-lg lg:text-2xl'>
            Hi, I&apos; am David, a Nextjs Developer based in Germany
          </p>
          <a className='' href='about'>
            <MagicButton
              title='Show my work'
              icon={<FaLocationArrow />}
              position='right'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
