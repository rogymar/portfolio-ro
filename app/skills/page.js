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



const skills = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
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
            <main className='bg-light w-full'>
                <Layout>
                    <article className='w-full px-10 pt-8 lg:pt-5 md:px-14 lg:px-20 text-gris'>
                        <section className='flex flex-col items-center justify-center pb-5 md:gap-2 md:pb-10'>
                            <AnimatedText className='text-[28px] pb-2 md:text-[40px] lg:pb-3 lg:text-[80px]' text='Skills&nbsp; And&nbsp; Tools&nbsp;' />
                            <h2 className='md:text-[35px] lg:text-6xl text-violeta text-xl'>Tools make it all easier!</h2>
                        </section>
                        <section className='w-full flex flex-col items-center gap-3 pb-6 lg:gap-8 lg:pb-10'>
                        </section>
                    </article>
                </Layout>
            </main>
            <Footer />
        </>
    )
}

export default skills;