'use client'

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';

// Animation
import { motion } from "framer-motion";

// Hooks
import useThemeSwitcher from "./hooks/useThemeSwitcher";

// Components
import { HomeIcon, AboutIcon, SkillsIcon, ProjectsIcon, LightIcon, DarkIcon, GithubIcon, LinkedinIcon } from "./Icons";

export const CustomLink = ({href, text, children, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group flex items-center gap-1 dark:hover:text-gris hover:text-gray-400 md:gap-3`}>
            {children}
            <p className='font-semibold lg:text-base'>{text}</p>
            <span className={`h-[3px] inline-block bg-gradient-to-l from-violeta to-azulito absolute left-0 bottom-[-10px] group-hover:w-full transition-[width] duration-300 dark:bg-gradient-to-l dark:from-darkLight dark:to-light
            ${router.asPath === href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </Link>
    )
}

const CustomMobileRedirect = ({href, text, children, className = "", toggle}) => {
    const router = useRouter();

    const handleOtherClick = () => {
        toggle();
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group flex items-center gap-1 dark:hover:text-gris hover:text-gray-400 md:gap-3`} onClick={handleOtherClick}>
            {children}
            <p className='font-semibold lg:text-base'>{text}</p>
            <span className={`h-[3px] inline-block bg-gradient-to-l from-violeta to-azulito absolute left-0 bottom-[-10px] group-hover:w-full transition-[width] duration-300 dark:bg-gradient-to-l dark:from-darkLight dark:to-light
            ${router.asPath === href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </button>
    )
}

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher();

    const [isOpen, setIsOpen] = useState(false);

    const handleClik = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className='w-full h-10 flex items-center justify-between my-8 px-10 md:px-14 lg:px-20 lg:h-20 relative'>

            {/* This is a hamburger menu, the three bars transform into X's when you touch them. */}
            <button className='m-2 mt-5 flex flex-col justify-center items-center lg:hidden' onClick={handleClik}>
                <span className={`block transition-all duration-300 ease-out h-1 w-7 bg-gris dark:bg-green-400 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>

                <span className={`block transition-all duration-300 ease-out h-1 w-7 my-0.5 bg-gris dark:bg-green-400 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>

                <span className={`block transition-all duration-300 ease-out h-1 w-7 bg-gris dark:bg-green-400 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            {/* Mobile menu */}
            {
                isOpen ?
                <motion.div 
                initial={{scale:0, opacity:0, x:10, y:8}}
                animate={{scale:1, opacity:1}}
                className='min-w-[70vw] lg:hidden items-center fixed top-[80px] left-[40px] rounded-2xl dark:bg-dark p-8 bg-gray-200 backdrop-blur-lg'>
                <nav className='flex items-start justify-center gap-5 flex-col dark:text-light text-xl md:text-3xl md:gap-8'>
                    <CustomMobileRedirect href='/' text='Home' toggle={handleClik}>
                        <HomeIcon />
                    </CustomMobileRedirect>

                    <CustomMobileRedirect href='/about' text='Acerca de...' toggle={handleClik}>
                        <AboutIcon />
                    </CustomMobileRedirect>

                    <CustomMobileRedirect href='/skills' text='Habilidades' toggle={handleClik}>
                        <SkillsIcon />
                    </CustomMobileRedirect>

                    <CustomMobileRedirect href='/projects' text='Proyectos' toggle={handleClik}>
                        <ProjectsIcon />
                    </CustomMobileRedirect>

                    <div className='bg-gradient-to-l from-violeta to-azulito dark:bg-gradient-to-l dark:from-gris dark:to-green-400 h-0.5 w-3/4 my-5' />

                    <div className='flex gap-5'>
                        <LinkedinIcon />
                        <GithubIcon />
                    </div>
                </nav>
            </motion.div>
            : null
            }

            {/* Desktop menu */}
            <div className='w-full hidden lg:flex justify-between items-center mt-5'>
                <nav className='flex items-center justify-between lg:gap-3'>
                    <CustomLink href='/' text='Home' className='lg:mr-4'>
                        <HomeIcon />
                    </CustomLink>
                    <span> | </span>
                    <CustomLink href='/about' className='lg:mx-4' text='Sobre mí'>
                        <AboutIcon />
                    </CustomLink>
                    <span> | </span>
                    <CustomLink href='/skills' className='lg:mx-4' text='Habilidades'>
                        <SkillsIcon />
                    </CustomLink>
                    <span> | </span>
                    <CustomLink href='/projects' className='lg:mx-4' text='Proyectos'>
                        <ProjectsIcon />
                    </CustomLink>
                </nav>
            </div>
            <button
                onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            >
                {
                    mode === 'dark' ? <LightIcon className={'fill-dark'} /> : <DarkIcon className={'fill-dark'} />
                }

            </button>
        </header>
    )
}

export default NavBar