'use client'

import Head from "next/head";
import React, { useEffect, useRef } from "react";

// Components
import Layout from "../components/Inicio";
import AnimatedText from "../components/AnimatedText";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// Animation
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

// images
import profile from '../../public/rogy.png'
import Image from "next/image";

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

const about = () => {
    return (
        <>
            <Head>
                <title>RogyChirinos | About Page</title>
                <meta name='description' content='description about RogyChririnos' />
            </Head>
            <NavBar />
            <main className='w-full text-gris'>
                <Layout className='pt-7 lg:pt-14'>
                    <AnimatedText className='text-[40px] pb-3 lg:text-[65px] lg:pb-4' text='We never stop learning!' />
                    <div className='grid w-full lg:grid-cols-8 grid-cols-1 lg:gap-9 gap-5 mb-10 items-center justify-center'>
                        <motion.div initial={{ opacity: 0.6 }}
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 1 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            whileInView={{ opacity: 1 }}
                            className='lg:col-span-3 relative rounded-3xl border-4 border-solid border-gris bg-light'>
                            <Image src={profile} alt='Rogy-profile-pick' className='w-full rounded-2xl shadow-xl shadow-gris' />
                        </motion.div>
                    </div>
                    <div className='lg:col-span-4 lg:items-start lg:justify-start'>
                        <h2 className='my-2 lg:my-4 text-lg lg:text-3xl text-violeta font-titles'>Biography</h2>
                        <p className='my-3 lg:my-4 text-sm lg:text-lg text-start'>Hi, I'm Rogymar Chirinos, frontend web developer, passionate about knowledge and creation of diverse functional digital products. I am always learning or understanding something new and innovative in order to contribute in projects.</p>
                        <p className='my-3 lg:my-4 text-sm lg:text-lg text-start'>I firmly believe that technology contributes positively to evolution of humanity, and web development is more than just making pretty things, it is always about finding the best solutions to a problem.</p>
                        <p className='my-3 lg:my-4 text-sm lg:text-lg text-start'>I started my studies in a self-taught way, and I have received knowledge from more experienced developers. I have studied hard to acquire the necessary knowledge that will allow me to emerge in the world of development.  Also, in my free time I dedicate myself to develop my artistic skills (drawing, sculpture and weaving), as I firmly believe that art helps to find thousands of ways to face different challenges.</p>
                    </div>
                    <div className='lg:col-span-1 lg:flex lg:items-end lg:justify-between'>
                        <div className='lg:flex lg:flex-col lg:items-end lg:justify-center'>
                            <span className='lg:inline-block text-3xl lg:text-7xl font-bold text-claroBlue font-titles'>
                                <LetterAnim value={10} />
                                +</span>
                            <h2 className='text-sm lg:text-xl font-semibold text-gris lg:text-end lg:mb-14 mb-5 pt-1'>Projects Individuals</h2>
                            <span className='lg:inline-block text-3xl lg:text-7xl font-bold text-claroBlue font-titles'>
                                <LetterAnim value={10} />
                                +</span>
                            <h2 className='text-sm lg:text-xl font-semibold text-gris lg:text-end lg:mb-14 mb-5 pt-1 '>Languages | Frameworks | Libraries</h2>
                            <span className='inline-block text-3xl lg:text-7xl font-bold text-claroBlue font-titles'>March</span>
                            <h2 className='text-sm lg:text-xl font-semibold text-gris lg:text-end pt-1'>Start of studies | 2023</h2>
                        </div>
                    </div>
                </Layout>
            </main >
            <Footer />
        </>
    )
}

export default about;