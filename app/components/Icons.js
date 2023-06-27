import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Image
import github from '../../public/icons/github-circle.svg';
import gitHub from '../../public/icons/githublines.svg';
import linkedin from '../../public/icons/link-circle.svg';
import linkLines from '../../public/icons/link-lines.svg';

export const HomeIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke='#343a40' className="w-[26px] h-[26px] md:h-10 md:w-10 lg:mr-1 dark:bg-green-400 dark:rounded-full dark:p-1 dark:h-8 dark:w-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
    )
}

export const AboutIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#343a40" className="w-[26px] h-[26px] md:h-10 md:w-10 lg:mx-1 dark:bg-green-400 dark:rounded-full dark:p-1 dark:h-8 dark:w-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
    )
}

export const SkillsIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#343a40" className="w-[26px] h-[26px] md:h-10 md:w-10 lg:mx-1 dark:bg-green-400 dark:rounded-full dark:p-1 dark:h-8 dark:w-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
        </svg>
    )
}

export const ProjectsIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#343a40" className="w-[26px] h-[26px] md:h-10 md:w-10 lg:mx-1 dark:bg-green-400 dark:rounded-full dark:p-1 dark:h-8 dark:w-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
    )
}

export const ExternalLink = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
    )
}

export const LightIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#343a40"
            className="p-1 w-10 h-10 md:w-12 md:h-12 bg-green-400 rounded-full md:p-2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
        </svg>
    )
}

export const DarkIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#46494c"
            className="p-1 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-bl from-violeta to-azulito rounded-full md:p-2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
        </svg>
    )
}

export const GitHubIconLink = () => {
    return (
        <motion.a href='https://github.com/rogymar' target='_blank'
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className='hidden md:block'
        >
            <Image src={github} alt="icon-github" className='w-10 h-10 md:w-14 md:h-14 md:py-1' />
        </motion.a>
    )
}

export const GithubIcon = () => {
    return (
        <Link href='https://github.com/rogymar?tab=repositories' target='_blank'>
            <Image src={gitHub} alt='github-lines-icon' className='w-10 h-10' />
        </Link>
    )
}

export const LinkedinIconLink = () => {
    return (
        <motion.a href='https://www.linkedin.com/in/rogymarchirinosfront/' target='_blank'
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className='hidden md:block'
        >
            <Image src={linkedin} alt="icon-linkedin" className='w-10 h-10 md:w-14 md:h-14 md:py-1' />
        </motion.a>
    )
}

export const LinkedinIcon = () => {
    return (
        <Link href='https://www.linkedin.com/in/rogymarchirinosfront/' target='_blank'>
        <Image src={linkLines} alt='liknedin-lines-icon' className='w-10 h-10' />
    </Link>
    )
}

