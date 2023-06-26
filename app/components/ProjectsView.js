import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

//Images
import landing from '../../public/landing.jpeg';
import datamovies1 from '../../public/datamovies1.jpeg';
import noImage from '../../public/image.png';
import tetris1 from '../../public/tetris1.jpeg';

const DViewCard = ({ title, className, image, name, lenguages }) => {
  return (
    <motion.article
      initial={{ x: -200 }}
      whileInView={{ x: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
      className={`text-center flex flex-col items-center justify-between p-4 mb-8 w-full bg-white bg-opacity-40 rounded-2xl md:mb-4 md:pb-8 md:p-5 md:mt-3 lg:gap-2 lg:mb-3 lg:pt-4 hover:opacity-60 trasition duration-300 shadow-xl shadow-gris dark:shadow-green-400 dark:text-light dark:bg-opacity-20 ${className}`}>
      <Link href='/projects'>
        <h2 className='text-oscuro text-2xl md:text-3xl lg:text-4xl'>{title}</h2>
        <Image src={image} alt={name} className='w-full h-96 object-scale-down' priority />
      </Link>
      <p className='text-oscuro font-semibold text-xs md:text-base'>{lenguages}</p>
    </motion.article>
  )
}

const ProjectsView = () => {
  return (
    <div className='flex flex-col lg:gap-12 justify-between w-full'>
      <div className='grid justify-between items-center md:grid-cols-2 md:gap-4 lg:pt-10 lg:grid-cols-3 lg:gap-6'>
        <DViewCard title='Landing Page'
          lenguages='HTML | JavaScript | Tailwind' image={landing} name='landing-page' />

        <DViewCard
          title='DataMovie'
          lenguages='React | Styled-components' image={datamovies1} name='data-movies-fetch' />

        <DViewCard title='Tetris Game'
          lenguages='TypeScript | Styled-Components' image={tetris1} name='tetris-game' />

        <DViewCard title='Todo-App'
          lenguages='React | Tailwind | NextJS' image={noImage} name='to-do-app' />

        <DViewCard title='Tik Tak Toe Game'
          lenguages='React | Css-In-JS' image={noImage} name='tik-tak-toe-game' />

        <DViewCard title='MercadoLibre Prueba'
          lenguages='NextJS | Tailwind | React' image={noImage} name='mercadolibre-prueba' />
      </div>
      <Link
        className='bg-light rounded-md text-center font-titles font-semibold text-base md:text-xl md:mt-8 lg:text-3xl lg:p-3 uppercase bg-opacity-95 border-2 border-gris hover:text-light hover:bg-gris hover:translate-y-2 transition duration-300 dark:bg-transparent dark:shadow-lg dark:shadow-green-400 dark:hover:bg-light dark:hover:shadow-none dark:hover:text-green-400'
        href='/projects' >More about projects</Link>
    </div>
  )
}

export default ProjectsView