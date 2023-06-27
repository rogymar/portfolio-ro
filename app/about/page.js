'use client'

import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// Components
import Layout from "../components/Inicio";
import AnimatedText from "../components/AnimatedText";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// Animation
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

// images
import profile from '../../public/rogy.png';
import wattpad from '../../public/icons/wattpad.svg';

// Funcion que mostrará una animación de conteo en los numeros hasta llegar al valor esperado...
const LetterAnim = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3500 })
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}


// Función para no tener que estar estilando cada etiqueta por separado.
const CustomP = ({ text }) => {
    return (
        <div className='flex flex-col items-start py-1.5 text-sm md:text-lg'>
            <p>{text}</p>
        </div>
    )
}

const CustomResum = ({ value, premise }) => {
    return (
        <div className='text-center lg:pb-10'>
            <span className='text-violeta font-titles text-4xl md:text-5xl lg:text-8xl dark:text-green-400'>
                <LetterAnim value={value} /> ✔</span>
            <h3 className='font-texts font-semibold text-xs md:text-base lg:text-xl'>{premise}</h3>
        </div>
    )
}

const CustomHobbies = ({ hobbie, icon }) => {
    return (
        <div className='text-center'>
            <p className='text-2xl md:text-[40px] lg:text-[50px] md:py-3 lg:py-[18px]'>{icon}</p>
            <p className='text-xs md:text-base font-semibold'>{hobbie}</p>
        </div>
    )
}

const about = () => {
    return (
        <>
            <Head>
                <title>RogyChirinos | About Page</title>
                <meta name='description' content='description about RogyChririnos' />
            </Head>
            <NavBar />
            <main className='w-full'>
                <Layout>
                    <article className='w-full px-10 py-8 lg:pt-5 md:px-14 lg:px-20'>
                        <section className='flex flex-col items-center justify-center pb-5 md:gap-2 md:pb-10'>
                            <AnimatedText className='text-[28px] pb-2 md:text-[40px] lg:pb-3 lg:text-[80px]' text='About&nbsp; Rogymar&nbsp; as&nbsp; a&nbsp; developer' />
                            <h2 className='md:text-[35px] lg:text-6xl text-violeta text-xl dark:text-green-400'>We never stop learning!</h2>
                        </section>
                        <section className='w-full flex flex-col items-center gap-3 pb-6 lg:grid lg:grid-cols-8 lg:gap-8 lg:pb-10 '>
                            <div className='flex flex-col items-center justify-center py-2 lg:col-span-3 lg:gap-3 lg:pb-0'>
                                <motion.figure initial={{ opacity: 0.6 }}
                                    whileInView={{ opacity: 1 }}
                                    className=' border-4 border-gris rounded-full'>
                                    <Image src={profile} alt='Rogy-profile-pick' className='w-full h-auto rounded-full shadow-xl shadow-gris dark:shadow-green-400' priority/>
                                </motion.figure>
                                <figcaption className='!text-oscuro font-semibold text-xs py-3 md:py-5 md:text-sm lg:py-0'>Esta foto personal fué mejorada con IA 🤫</figcaption>
                            </div>
                            <div className='gap-2 md:pb-3 lg:col-span-3 lg:gap-0 lg:pb-0'>
                                <h2 className='text-azulito text-3xl md:text-4xl dark:text-light'>Biography</h2>
                                <CustomP text='🙋🏻‍♀️ Un saludo para ti, que estás leyendo. ' />
                                <CustomP text='Me llamo Rogymar Chirinos, soy Frontend web developer, cuyo principal talento es: aprender lo más rápido posible. Fan de la creación digital. Busco aprender constantemente tanto del mundo del desarrollo como del artístico ya que son complementos indispensables para contribuir en este futuro digital.' />
                                <CustomP text='Comencé a estudiar de forma autodidacta, viendo vídeos y haciendo cursos virtuales, con los cuales pude emprender el camino hacia el código. En estos laboriosos 4 - 5, meses he recibido apoyo de desarrolladores más experimentados, gracias a ellos pude nutrir mi información.' />
                                <CustomP text='Pienso que la tecnología contribuye positivamente en la evolución de la humanidad, por tal razón es tan diversa y compleja, así como el desarrollo web, que es más que meramente contruir cosas bonitas: se trata siempre de encontrar las mejores soluciones a uno o varios problemas.' />
                            </div>
                            <div className='grid grid-cols-3 gap-2 lg:col-span-2 lg:flex lg:flex-col items-center justify-center py-2 md:py-10 lg:py-0'>
                                <CustomResum value={10} premise='Personal Projects | Practices' />
                                <CustomResum value={10} premise='Languages | Frameworks | Libraries' />
                                <div className='text-center'>
                                    <p className='text-violeta  font-titles text-4xl md:text-5xl lg:text-8xl dark:text-green-400'>Feb</p>
                                    <h3 className='font-texts text-xs md:text-base font-semibold lg:text-xl'>Start of learning, formally | 2023</h3>
                                </div>
                            </div>
                        </section>
                        <section className='w-full flex px-10 pb-10 md:px-14 lg:px-20 lg:gap-8 items-center justify-center'>
                            <h2 className='text-azulito text-3xl md:text-4xl lg:text-5xl dark:text-light'>Hobbies</h2>
                            <div className='grid grid-cols-2 gap-4 pl-10 items-center justify-between text-center md:flex'>
                                <Link href='https://www.wattpad.com/user/ChiDsou' target='_blank'>
                                    <Image src={wattpad} alt='wattpad-icon' className='h-8 w-8 md:h-16 md:w-[70px] lg:w-20 lg:h-[70px] self-center' />
                                    <p className='text-xs md:text-base font-semibold'>Escritura</p>
                                </Link>
                                <CustomHobbies icon='🎨' hobbie='Dibujo' />
                                <CustomHobbies icon='🧸' hobbie='Escultura' />
                                <CustomHobbies icon='💻' hobbie='Development' />
                            </div>
                        </section>
                    </article>
                </Layout>
            </main >
            <Footer />
        </>
    )
}

export default about;