import React from "react";
import Image from "next/image";
import Link from "next/link";

//Images
import landing from '../../public/landing.jpeg';
import dataMovies from '../../public/datamovies.jpeg';

const DViewCard = ({ title, className, image, name, description, lenguages }) => {
  return (
    <article className={`text-gris flex flex-col px-3 gap-3 pb-8 w-full md:pb-10 md:px-5 lg:gap-2 ${className}`}>
      <Link href='/projects'>
        <h2 className='text-oscuro text-2xl pb-2 md:text-3xl lg:text-4xl'>{title}</h2>
        <p className='text-lg pb-2 md:text-xl '>{description}</p>
        <Image src={image} alt={name} className='w-full h-auto pt-3 lg:pb-4' />
      </Link>
      
      <p className='text-oscuro font-semibold text-xs md:text-base'>{lenguages}</p>
    </article>
  )
}

const ProjectsView = () => {
  return (
    <div className='flex flex-col lg:gap-12 justify-between w-full'>
      <div className='grid justify-between items-center md:grid-cols-2 lg:pt-10 lg:grid-cols-3 lg:gap-6'>
        <DViewCard
          title='DataMovie'
          description='Aplicación que permite buscar películas para conocer sus detalles...'
          lenguages='React | Styled-components' image={dataMovies} name='data-movies-fetch' />
        <DViewCard title='Landing Page'
          description='Landing Page sencilla que muestra datos de una API para youtube...'
          lenguages='HTML | JavaScript | Tailwind' image={landing} name='landing-page' />
        <DViewCard title='Todo-App'
          description='Aplicación sencilla pero funcional para crear, buscar y eliminar TO-DO...'
          lenguages='React | Tailwind | NextJS ' image={''} name='to-do-app' />
        <DViewCard title='Tik Tak Toe Game'
          description='Clásico juego de tik, tak, toe, como parte de la enseñanza inicial de React...'
          lenguages='React | Css-In-JS' image='' name='tik-tak-toe-game' />
        <DViewCard title='Tetris Game'
          description='Juego de Tetris funcional elaborado con Typescript en medio de un curso educativo...'
          lenguages='TypeScript | Styled-Components' image='' name='tetris-game' />
        <DViewCard title='MercadoLibre Prueba'
          description='Recreación de las vistas principales de mercadolibre: Búsqueda, Lista de Resultados y Detalles del producto...'
          lenguages='NextJS | Tailwind | React' image='' name='mercadolibre-prueba' />
      </div>
      <Link
        className='bg-light rounded-md text-center font-titles text-gris font-semibold text-base md:text-xl lg:text-3xl lg:p-3 uppercase bg-opacity-95 border-2 border-gris hover:text-light hover:bg-gris'
        href='/projects' >More about projects</Link>
    </div>
  )
}

export default ProjectsView