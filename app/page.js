'use client'

import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

// Animation
import { motion } from 'framer-motion';

// Components
import Layout from './components/Inicio'
import AnimatedText from './components/AnimatedText';
import RotatingText from './components/RotatingText';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Images
import profile from '../public/rogy.png';
import iconGithub from '../public/github.svg';
import iconLinkedin from '../public/linkedin.svg';
import landing from '../public/landing.jpeg';
import dataMovies from '../public/datamovies.jpeg';
import SkillsViewsCard from './components/SkillsView';
import DevViewCard from './components/DevelopmentVie';

export default function Home() {
  return (
    <main className='bg-light w-full'>
      <NavBar />
      <Layout>
        <section className='w-full grid grid-cols-1 gap-10 items-center justify-center text-center text-gris md:grid-cols-6 lg:grid-cols-8 md:text-right py-8 px-10 md:py-12 md:px-14 lg:py-16 lg:px-20'>
          <div className='md:col-span-3 lg:col-span-4'>
            <p className='pb-3.5 md:pb-4 lg:pb-5'>🙌🏼 Hi, I buildt things like</p>
            <AnimatedText text='Frontend' className='!text-violeta text-[40px] md:text-[50px] md:text-right lg:text-8xl' />
            <AnimatedText text='Developer' className='!text-violeta text-[40px] md:text-[50px] lg:text-8xl md:text-right' />
            <p className='text-sm pt-3.5 md:pt-3 lg:text-right lg:text-xl lg:pt-4'>
              Actualmente, emergiendo en el mundo del desarrollo en busca de retos que me permitan crecer, expandir mis conocimientos y contribuir con la búsqueda de soluciones orientadas al futuo.
            </p>
          </div>
          <div className='md:col-span-2 lg:col-span-3 relative rounded-full bg-light'>
            <motion.a
              initial={{ opacity: 0.6 }}
              whileInView={{ opacity: 1 }}

              href='/about'>
              <Image src={profile} alt='Rogy-profile-pick' className='md:w-full md:h-auto rounded-full shadow-xl shadow-gris' /></motion.a>
          </div>
          <div className='md:col-span-1 md:flex-col flex justify-around'>
            <motion.a href='https://github.com/rogymar'
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image src={iconGithub} alt="icon-github" className='w-10 h-10 md:w-12 md:h-12 md:py-1' />
            </motion.a>
            <motion.a href='https://www.linkedin.com/in/rogymarchirinosfront/'
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image src={iconLinkedin} alt="icon-linkedin" className='w-9 h-9 ml-1 md:w-10 md:h-10 md:py-1' />
            </motion.a>
          </div>
        </section>
        <div className='bg-azulito w-full py-8 px-10 md:py-12 md:px-14 lg:py-16 lg:px-20'>
          <div>
            <h2 className='text-light text-3xl md:text-5xl lg:text-9xl '>Skills</h2>
          </div>
          <div>
            <SkillsViewsCard 
              className={'w-full h-30'}
              src={''}
              alt=''
              name={''}  
            />
          </div>
        </div>
        <article className='bg-menta w-full py-8 px-10 md:py-12 md:px-14 lg:py-16 lg:px-20'>
          <h2 className='text-light text-3xl md:text-5xl lg:text-9xl '>Development Projects</h2>
          <div className='flex justify-around items-center pt-10'>
            <DevViewCard />
          </div>
        </article>
      </Layout>
      <RotatingText />
      <Footer />
    </main>
  )
}
