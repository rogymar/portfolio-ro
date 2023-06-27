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
import { GitHubIconLink, LinkedinIconLink } from './components/Icons';

export default function Home() {
  return (
    <main className='w-full'>
      <NavBar />
      <Layout>
        <section className='w-full grid grid-cols-1 gap-10 items-center justify-center text-center md:grid-cols-6 lg:grid-cols-8 md:text-right py-8 px-10 md:py-12 md:px-14 lg:py-16 lg:px-20'>
          <div className='md:col-span-3 lg:col-span-4'>
            <p className='pb-3.5 md:pb-4 lg:pb-5'>🙌🏼 Hi, I buildt things like</p>
            <AnimatedText text='Frontend' className='text-violeta text-[40px] md:text-[50px] md:text-right lg:text-8xl dark:text-green-400' />
            <AnimatedText text='Developer' className='text-violeta text-[40px] md:text-[50px] lg:text-8xl md:text-right dark:text-green-400' />
            <p className='text-sm pt-3.5 md:pt-3 lg:text-right lg:text-xl lg:pt-4'>
              Actualmente, emergiendo en el mundo del desarrollo en busca de retos que me permitan crecer, expandir mis conocimientos y contribuir con la búsqueda de soluciones orientadas al futuo.
            </p>
          </div>
          <div className='md:col-span-2 lg:col-span-3 relative rounded-full'>
            <motion.a
              initial={{ opacity: 0.6 }}
              whileInView={{ opacity: 1 }}

              href='/about'>
              <Image src={profile}  alt='Rogy-profile-pick' className='md:w-full md:h-auto rounded-full shadow-xl shadow-gris hover:opacity-80 dark:shadow-green-400' priority/></motion.a>
          </div>
          <div className='md:col-span-1 md:flex-col flex justify-around gap-3'>
            <GitHubIconLink />
            <LinkedinIconLink />
          </div>
        </section>
        <section className='bg-azulito w-full py-8 px-10 md:py-12 md:px-14 lg:py-16 lg:px-20 dark:bg-dark'>
          <h2 className='text-4xl pb-6 md:text-5xl lg:text-9xl lg:pb-0'>Development Projects</h2>
          <ProjectsView />
        </section>
        <div className='w-full py-8 px-10 text-right flex flex-row-reverse items-center justify-between gap-2 md:py-12 md:px-14 lg:py-16 lg:px-20 lg:gap-5'>
          <h2 className='w-1/2 text-4xl md:text-5xl lg:text-9xl dark:text-green-400'>Conozca más...</h2>
          <p className='w-1/2 text-sm md:text-xl lg:text-3xl'>Visita la página de skills, encontrarás un poco del proceso de estudio. También, visita la página de proyectos, allí encontrarás enlaces para ver los proyectos en código y en demo.</p>
        </div>
        <section className='bg-violeta w-full py-8 px-10 md:py-12 md:px-14 lg:py-16 lg:px-20 dark:bg-dark'>
          <h2 className='text-4xl pb-6 md:text-5xl lg:text-9xl lg:pb-0'>Skills</h2>
          <SkillsView />
        </section>
        <div className='w-full py-8 px-10 text-right flex flex-row-reverse items-center justify-between gap-2 md:py-12 md:px-14 lg:py-16 lg:px-20 lg:gap-5'>
          <h2 className='w-1/2 text-4xl md:text-5xl lg:text-9xl dark:text-green-400'>Thanks for watching</h2>
          <p className='w-1/2 text-sm md:text-xl lg:text-[28px]'>Todo en la vida es un proceso de aprendizaje constante. Así que nunca pares de aprender, siempre hay cosas nuevas aguardándote. (❁´◡`❁)</p>
        </div>
      </Layout>
      <RotatingText />
      <Footer />
    </main>
  )
}
