'use client'

import Head from "next/head";
import Image from "next/image";

// Animation
import { motion } from "framer-motion";

// Components
import Layout from "../components/Inicio";
import AnimatedText from "../components/AnimatedText";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

//Icons
import iconGithub from '../../public/icons/githublines.svg';
import reactLogo from '../../public/icons/react-color.svg';
import jsLogo from '../../public/icons/js-color.svg';
import htmlLogo from '../../public/icons/html-color.svg';
import cssLogo from '../../public/icons/css-color.svg';
import tailLogo from '../../public/icons/tailwind-color.svg';
import tsLogo from '../../public/icons/ts-color.svg';
import nextLogo from '../../public/icons/next-light.svg';

const SkillsBox = ({ tool, fact, date, icon, name }) => {
    return (
        <motion.li
        initial={{y:200}}
        whileInView={{y:0, transition:{duration:0.5, ease:'easeInOut'} }}
        viewport={{once: true}}
        className='w-full p-10 flex items-center justify-center flex-col shadow-xl shadow-gris rounded-3xl mb-6 lg:flex-row lg:mb-8 lg:gap-8 dark:shadow-green-400 dark:bg-white dark:bg-opacity-20'>
            <Image src={icon} alt={name} className='w-full h-24 md:h-32 lg:h-40 lg:w-40 dark:bg-darkLight dark:rounded-full dark:p-4' />
            <div className='w-full text-center lg:text-left'>
                <h2 className='pt-3 text-3xl md:pt-4 md:text-4xl lg:text-5xl lg:pt-2'>{tool}</h2>
                <span className='text-azulito font-bold text-lg md:text-xl lg:text-lg dark:text-light'>{date}</span>
                <p className='py-3 text-sm md:text-lg lg:text-base lg:py-4'>{fact}</p>
            </div>
        </motion.li>
    )
}

const skills = () => {

    return (
        <>
            <Head>
                <title>RogyChirinos | Skills Page</title>
                <meta name='description' content='skills description of RogyChririnos' />
            </Head>
            <NavBar />
            <main className='w-full'>
                <Layout>
                    <article className='w-full px-10 pt-8 lg:pt-5 md:px-14 lg:px-20'>
                        <section className='flex flex-col items-center justify-center pb-5 md:gap-2 md:pb-10'>
                            <AnimatedText className='text-[28px] pb-2 md:text-[40px] lg:pb-3 lg:text-[80px]' text='Skills&nbsp; And&nbsp; Tools&nbsp;' />
                            <h2 className='md:text-[35px] lg:text-6xl text-violeta text-xl dark:text-green-400'>Tools make it all easier!</h2>
                        </section>
                        <section className='w-full lg:pt-6 pb-8'>
                            <ul>
                                <SkillsBox
                                    tool='HTML' date='2018' fact='Fué uno de los primeros lenguajes que conocí, mientras me encontraba digitalizando ebooks y tenía que arreglar ciertas cosas de los libros en Sigil, por lo que obligatoriamente tenía que aprender a entender lo que estaba viendo, aunque al principio parecían caracteres de otro planeta. 🙃' icon={htmlLogo} name='html-logo'
                                />

                                <SkillsBox
                                    tool='CSS' date='2018' fact='Por el mismo trabajo de digitalización de ebooks, tuve que entender un poco de CSS. Asimismo, aprendí a utilizar algunas bondades que ofrece Adobe como InDesing y Photoshop. Empecé a conocer un poco más a fondo las propiedades del CSS para maquetar y estilar. Hasta el momento conozco: CSS, Styled-Components, Css-in-Js, y Tailwind que es el que actualmente más uso.' icon={cssLogo} name='css-logo'
                                />

                                <SkillsBox
                                    tool='JavaScript' date='2023' fact='Tomé mi tiempo e invertí en estudiar otras cosas. Primero repasé matemáticas, fuí a las funciones, pasé por C++, la consola y Linux. Luego vino JavaScript con sus funciones, trabajos asíncronos, traer información a través de consultas a las API y algunas de las principales bondades que puede ofrecer. 🤓' icon={jsLogo} name='javascript-logo'
                                />

                                <SkillsBox
                                    tool='GitHub'
                                    date='2023' fact='Al principio cuando vi por primera vez GitHub, ya conocía la consola, pero igual me parecía súper engorroso, sin embargo, empecé a entenderlo y dejar de verlo como todo un lío, sino como lo que es, una excelente opción para ordenar las versiones de tu código e incluso dejar mensajes que te ayuden a guiarte mejor por el mismo.' icon={iconGithub} name='gitHub-logo'
                                />

                                <SkillsBox
                                    tool='React' date='2023' fact='Ocurrió justo después de entender un poco cómo se manejaba Javascript, como casi todos inician: desarrollando el juego del Tik Tak Toe que aprece en la documentación introductoria oficial de React. De allí partieron las demás aplicaciones.' icon={reactLogo} name='react-logo'
                                />

                                <SkillsBox
                                    tool='NextJs' date='2023' fact='Es una herramienta que empezó a sonarme muchísimo por lo que, evidentemente, debía conocerla. Su uso era muy distinto al que conocía para trabajar con React, sobretodo en los enrutamientos 🤦🏻‍♀️ pero una vez que entendí, ya todo fué mucho más sencillo, además el Deploy en Vercel es bastante efectivo, cómodo y amigable.' icon={nextLogo} name='nextJs-logo'
                                />

                                <SkillsBox
                                    tool='TypeScript' date='2023' fact='Una vez construida varias pruebas y desafíos con React, pasé a querer conocer TypeScript ya que es una herramienta que permite describir de forma específica el recurso que se está buscando u ofreciendo, por ello es tan importante. Aún estoy familiarizándome. 😄' icon={tsLogo} name='typeScript-logo'
                                />


                                <SkillsBox
                                    tool='TailwindCss' date='2023' fact='Casi de la mano con TypeScript y NextJs, ya que me encontraba conociendolos a través de la construcción de una aplicación mientras me encontraba haciendo un curso online. 😄' icon={tailLogo} name='tailwind-logo'
                                />
                            </ul>
                        </section>
                    </article>
                </Layout>
            </main>
            <Footer />
        </>
    )
}

export default skills