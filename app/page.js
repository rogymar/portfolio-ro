'use client'

import React from 'react';
import Image from 'next/image'

// Animation
import { motion } from 'framer-motion';

// Components
import Layout from './components/Inicio'
import AnimatedText from './components/AnimatedText';
import RotatingText from './components/RotatingText';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SkillsView from './components/SkillsView';
import ProjectsView from './components/ProjectsView';


// Images
import profile from '../public/rogy.png';
import iconGithub from '../public/icons/github.svg';
import iconLinkedin from '../public/icons/linkedin.svg';


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
              <Image src={profile} alt='Rogy-profile-pick' className='md:w-full md:h-auto rounded-full shadow-xl shadow-gris hover:opacity-80' /></motion.a>
          </div>
          <div className='md:col-span-1 md:flex-col flex justify-around'>
            <motion.a href='https://github.com/rogymar' target='_blank'
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image src={iconGithub} alt="icon-github" className='w-10 h-10 md:w-12 md:h-12 md:py-1' />
            </motion.a>
            <motion.a href='https://www.linkedin.com/in/rogymarchirinosfront/' target='_blank'
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image src={iconLinkedin} alt="icon-linkedin" className='w-9 h-9 ml-1 md:w-10 md:h-10 md:py-1' />
            </motion.a>
          </div>
        </section>
        <section className='bg-azulito w-full py-8 px-10 md:py-12 md:px-14 lg:py-16 lg:px-20'>
          <h2 className='text-light text-4xl pb-6 md:text-5xl lg:text-9xl lg:pb-0'>Development Projects</h2>
          <ProjectsView />
        </section>
        <div className='w-full py-8 px-10 text-right text-gris flex flex-row-reverse items-center justify-between gap-2 md:py-12 md:px-14 lg:py-16 lg:px-20 lg:gap-5'>
          <h2 className='w-1/2 text-4xl md:text-5xl lg:text-9xl'>Conozca más...</h2>
          <p className='w-1/2 text-sm md:text-xl lg:text-3xl'>Visita la página de skills, encontrarás un poco del proceso de estudio. También, visita la página de proyectos, allí encontrarás enlaces para ver los proyectos en código y en demo.</p>
        </div>
        <section className='bg-violeta w-full py-8 px-10 md:py-12 md:px-14 lg:py-16 lg:px-20'>
          <h2 className='text-light text-4xl pb-6 md:text-5xl lg:text-9xl lg:pb-0'>Skills</h2>
          <SkillsView />
        </section>
        <div className='w-full py-8 px-10 text-right text-gris flex flex-row-reverse items-center justify-between gap-2 md:py-12 md:px-14 lg:py-16 lg:px-20 lg:gap-5'>
          <h2 className='w-1/2 text-4xl md:text-5xl lg:text-9xl'>Thanks for watching</h2>
          <p className='w-1/2 text-sm md:text-xl lg:text-[28px]'>Todo en la vida es un proceso de aprendizaje constante. Así que nunca pares de aprender, siempre hay cosas nuevas aguardándote. (❁´◡`❁)</p>
        </div>
      </Layout>
      <RotatingText />
      <Footer />
    </main>
  )
}
