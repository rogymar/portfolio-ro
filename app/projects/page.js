'use client'

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Componentes
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Layout from "../components/Inicio";
import AnimatedText from "../components/AnimatedText";
import { ExternalLink } from "../components/Icons";

// Images and Icons
import githubLines from '../../public/icons/githublines.svg';
import landing from '../../public/landing.jpeg';
import datamovies from '../../public/datamovies.jpeg';
import noImage from '../../public/image.png';
import tetris from '../../public/tetris.jpeg';
import taskManager from '../../public/task-manager.jpeg'

const FramerImage = motion(Image);

const ProjectsCard = ({ link, title, description, lenguajes, img, name, demo, className }) => {
    return (
        <article className={`w-full flex flex-col  items-center justify-center text-center p-8 mb-3 rounded-2xl bg-white shadow-lg shadow-gris md:p-12 lg:flex-wrap lg:p-10 lg:gap-6 lg:h-[450px] lg:text-right dark:bg-transparent dark:shadow-green-400 dark:shadow-xl dark:text-light dark:bg-white dark:bg-opacity-20 ${className}`}>
            <div className='w-full flex flex-col items-center py-3 gap-3 justify-between lg:items-end lg:object-contain lg:w-1/2'>
                <h2 className='text-3xl lg:text-5xl'>{title}</h2>
                <p className='text-sm md:text-sm lg:text-[15px]'>{description}</p>
                <p className='font-semibold pb-4 text-xs lg:pb-3 lg:text-[13px]'>{lenguajes}</p>
                <div className='w-full flex items-center justify-center gap-3 lg:gap-5'>
                    <Link href={link} target='_blank' className='hover:translate-y-2 hover:opacity-50 transition duration-300'>
                        <Image src={githubLines} alt='github-icon' className='w-9 h-9 lg:w-[45px] lg:[45px] dark:bg-green-400 dark:p-2 dark:rounded-xl' />
                    </Link>
                    <Link href={demo} target='_blank' className='flex gap-2 items-center justify-between bg-violeta font-semibold p-2 rounded-xl hover:bg-azulito hover:text-white hover:translate-y-2  hover:opacity-80 transition duration-300 dark:bg-darkLight dark:hover:bg-green-400 dark:text-gris'>
                        <ExternalLink />
                        <p className='text-sm lg:text-base'>View Demo</p>
                    </Link>
                </div>
            </div>
            <Link href={demo} target='_blank' className='cursor-pointer p-5 w-full lg:p-3 rounded-2xl lg:w-1/2'>
                <FramerImage
                    whileHover={{ scale: 1.10 }}
                    transition={{ duration: 0.2 }}
                    src={img} alt={name} className='w-full h-auto lg:h-96 lg:object-scale-down' />
            </Link>
        </article >
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>RogyChirinos | Projects Page</title>
                <meta name='description' content='projects description of RogyChririnos' />
            </Head>
            <NavBar />
            <main className='w-full'>
                <Layout>
                    <section className='w-full px-10 py-8 lg:pt-5 md:px-14 lg:px-20'>
                        <article className='flex flex-col items-center justify-center pb-5 md:gap-2 md:pb-10'>
                            <AnimatedText className='text-[23px] pb-2 md:text-[40px] lg:pb-3 lg:text-[80px]' text='Proyectos&nbsp; De&nbsp; Desarollo' />
                            <h2 className='text-2xl md:text-[35px] lg:text-6xl text-violeta dark:text-green-400'>Algo de mi trabajo!</h2>
                        </article>
                        <section className='w-full flex flex-col items-center gap-3 pb-6 lg:grid lg:grid-cols-2 lg:gap-8 lg:pb-10'>
                            <ProjectsCard
                                link='https://github.com/rogymar/todo-app' demo='https://todo-app-rogymar.vercel.app/' title='Task Manager' description='Aplicación sencilla, pero funcinal, que permite ordenar, marcar como completas y eliminar tareas o pendientes. Almacena los datos en tu LocalStorage. Visítala e interactúa en el Demo. Lo que ves en la imagen es la versión responsive para pantallas pequeñas.' lenguajes='NextJs | ReactJs | Tailwind' img={taskManager} name='taskManager-project-img'
                            />

                            <ProjectsCard
                                link='https://github.com/rogymar/datamovies' demo='https://datamovies-by-rog.netlify.app/' title='Datamovies' description='Aplicación que funciona como un buscador de pelís de las que se podrán obtener: titulo, extracto, coste de producción, elenco y productores.  Consume los datos de la API de The Movie Data Base. Si tienes cuenta en esa plataforma, puedes hacer login en mi aplicación para valorar las pelis, el login se eliminará una vez refresque la página.' lenguajes='ReactJs | Styled-components' img={datamovies} name='datamovies-project-img'
                            />

                            <ProjectsCard
                                link='https://github.com/rogymar/tetris' demo='https://tetris-ro-by-weibenfalk.netlify.app/' title='Tetris Game' description='Juego de Tetris funcional elaborado con Typescript con ayuda de un tutorial de Weibenfalk. En la aplicación se puede mover y girar las piezas, así como acelerar su bajada manualmente con las flechas. La bajada de las piezas aumentará de velocidad una vez se incremente de nivel agregando puntos al eliminar las filas.' lenguajes='TypeScript | Styled-Components' img={tetris} name='tetris-game-img'
                            />


                        </section>
                        <section className='w-full flex items-center gap-3 pb-6 lg:gap-8 lg:pb-10'>
                            <ProjectsCard
                                link='https://github.com/rogymar/project_landing_api' demo='https://rogymar.github.io/project_landing_api/' title='Landing Page' description='Landing Page sencilla que hace fetching de las últimas cargas de vídeos de youtube de, es este caso, un artista llamado Oliver Tree y un pequeño extracto acerca del mismo. Fué realizada con HTML, JavaScript y estilada con Tailwind, tiene diseño responsive y fue alojada en las Pages de GitHub.' lenguajes='HTML | JavaScript | Tailwind' img={landing} name='landing-project-img'
                            />
                        </section>
                        <section className='w-full flex flex-col items-center gap-3 pb-6 lg:grid lg:grid-cols-2 lg:gap-8 lg:pb-10'>
                            <ProjectsCard
                                className='hidden'
                                link='' demo='' title='Tik Tak Toe Game' description='Clásico juego de tik, tak, toe, como parte de la enseñanza inicial de React. Funciona para colocar X u O en las diversas casillas y que indique cuando alguno de los dos haya ganado o empatado, dentro de una interfaz agradable.' lenguajes='React | Css-In-JS' img={noImage} name='tik-tak-toe-game-img'
                            />

                            <ProjectsCard
                                className='hidden'
                                link='https://github.com/rogymar/nextjs-todo-app' demo='' title='ToDo App' description='Aplicación sencilla pero funcional para crear, buscar y eliminar TO-DO. Fué creada con Next, React y estilada con Tailwind. Asimismo, se encuentra alojada en Vercel.' lenguajes='React | Tailwind | NextJS' img={noImage} name='to-do-app-img'
                            />
                        </section>
                        <section className='w-full flex items-center gap-3 pb-6 lg:gap-8 lg:pb-10'>
                            <ProjectsCard
                                className='hidden'
                                link='' demo='' title='MercadoLibre Prueba' description='Recreación de las vistas principales de mercadolibre: Búsqueda, Lista de Resultados y Detalles del producto.' lenguajes='NextJS | Tailwind | React' img={noImage} name='mercadolibre-prueba-img'
                            />
                        </section>
                        <section className='w-full lg:mt-5 lg:mb-10 lg:text-2xl flex flex-col items-center justify-between gap-1'>
                            <p>También es parte de mis proyectos, este portfolio que estás visualizando ahora 😊 Puedes visualizar el código en: </p>

                            <Link href='https://github.com/rogymar/portfolio-ro' target='_blank' className='w-auto justify-center items-center bg-violeta p-2 my-2 rounded-2xl hover:bg-gris dark:hover:bg-darkLight dark:bg-green-400 dark:p-2 dark:rounded-xl'>
                                <Image src={githubLines} alt='github-icon' className='w-8 h-8 lg:w-[45px] lg:[45px]' />
                            </Link>
                        </section>
                    </section>
                </Layout>
            </main>
            <Footer />
        </>
    )
}

export default projects;