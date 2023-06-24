'use client'

import Head from "next/head";

// Animation
import { motion, useScroll } from "framer-motion";

// Components
import Layout from "../components/Inicio";
import AnimatedText from "../components/AnimatedText";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useRef } from "react";

const Details = ({ lenguage, time, description }) => {
    return (
        <li>
            <div>
                <h3 className='capitalize font-bold text-lg lg:text-2xl font-texts'>{lenguage}</h3>
                <span className='font-medium text-gris font-titles'>{time}</span>
                <p className='font-texts w-full'>{description}</p>
            </div>
        </li>
    )
}

const skills = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ['start end', 'center, start']
        }
    )
    return (
        <>
            <Head>
                <title>RogyChirinos | Skills Page</title>
                <meta name='description' content='skills description of RogyChririnos' />
            </Head>
            <NavBar />
            <main className='w-full'>
                <Layout className='pt-7 lg:pt-14'>
                <AnimatedText className='text-[41px] pb-3 !text-gris lg:text-[70px] lg:pb-4' text='Skills&nbsp; and&nbsp; tools' />
                <h2>Tools make it all easier!</h2>
                    <div ref={ref} className='w-h h-auto mx-auto relative grid grid-cols-2'>

                        <motion.div
                        style={{scaleY: scrollYProgress}}
                        className='absolute left-10 top-0 w-[4px] h-full bg-violeta origin-top' />

                        <ul className='w-full flex flex-col items-start justify-between ml-16'>
                            <Details 
                                lenguage='Html (HyperText Markup Language)'
                                time='2018-2019'
                                description='This was the first lenguage I knew, as I was working with book digitizations and needed to know what was displayed in the editor. This was very unfamiliar to me.' />
                            <Details 
                                lenguage='CSS (cascading style sheets)'
                                time='2018-2019'
                                description='This was the first language I learned, after HTML, since some styles were also needed to complement the digitization of books.' />
                            <Details 
                                lenguage='Adobe: InDesign |  Photoshop |  Ilustraitor'
                                time='2018-2019'
                                description='I also got to know some of the use of these tools both for personal enjoyment and to help me with the digitization of the books.' />
                            <Details 
                                lenguage='JavaScript'
                                time='2023'
                                description='Like the three Marias. This was the third language I got to know, first I went through math on paper, functions on paper and then I started on Javascript.' />
                            <Details 
                                lenguage='ReactJs'
                                time='2023'
                                description='After Javascript, I entered the world of React being the first library I met and with which I built my first application. Always use the NPM packages driver.' />
                            <Details 
                                lenguage='TypeScript'
                                time='2023'
                                description='I learned some TypeScript because I wanted to expand my knowledge and with the help of tutorials and documentation I built two very simple applications.' />
                            <Details 
                                lenguage='NextsJs'
                                time='2023'
                                description='I started using the Nextjs Framework by recommendation for its goodness in the code, just with your support Im building this portfolio.' />
                            <Details 
                                lenguage='Git | GitHub'
                                time='2023'
                                description='An important version controller in the code that at first I was lost to make commits with, but it has gradually become more familiar, and there is still more to learn.' />
                            <Details 
                                lenguage='TailwindCss'
                                time='2023'
                                description='It is the first Framework for css that I met after using the library for css-in-js: Styled Components. Although at the beginning it was quite complicated to understand, Im still learning.' />
                        </ul>
                    </div>
                </Layout>
            </main>
        <Footer />
        </>
    )
}

export default skills;