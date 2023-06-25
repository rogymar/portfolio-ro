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
      className={`text-gris text-center flex flex-col items-center justify-between px-3 gap-3 pb-8 w-full bg-light bg-opacity-40 p-2 rounded-2xl md:pb-10 md:px-5 lg:gap-2 hover:opacity-60 trasition duration-300 shadow-xl shadow-gris ${className}`}>
      <Link href='/projects'>
        <h2 className='text-oscuro text-2xl pb-2 md:text-3xl lg:text-4xl'>{title}</h2>
        <Image src={image} alt={name} className='w-full h-96 object-scale-down pt-3 lg:pb-4' />
      </Link>
      <p className='text-oscuro font-semibold text-xs md:text-base'>{lenguages}</p>
    </motion.article>
  )
}

const ProjectsView = () => {
  return (
    <div className='flex flex-col lg:gap-12 justify-between w-full'>
      <div className='grid justify-between items-center md:grid-cols-2 lg:pt-10 lg:grid-cols-3 lg:gap-6'>
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
        className='bg-light rounded-md text-center font-titles text-gris font-semibold text-base md:text-xl lg:text-3xl lg:p-3 uppercase bg-opacity-95 border-2 border-gris hover:text-light hover:bg-gris hover:translate-y-2 transition duration-300'
        href='/projects' >More about projects</Link>
    </div>
  )
}

export default ProjectsView