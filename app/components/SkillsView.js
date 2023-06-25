'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Images
import iconGithub from '../../public/icons/githublines.svg';
import reactLogo from '../../public/icons/react-color.svg';
import jsLogo from '../../public/icons/js-color.svg';
import htmlLogo from '../../public/icons/html-color.svg';
import cssLogo from '../../public/icons/css-color.svg';
import responsiveDesing from '../../public/icons/responsive-mincolor.svg';
import tailLogo from '../../public/icons/tailwind-color.svg';
import tsLogo from '../../public/icons/ts-color.svg';
import nextLogo from '../../public/icons/next-light.svg';

const SViewsCard = ({ name, className, icon, iconName, }) => {
    return (
        <motion.article
            initial={{ x: -200 }}
            whileInView={{ x: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
            viewport={{ once: true }}
            className={`w-ful flex flex-col items-center justify-center gap-2 w-full pb-5 md:pb-8 md:px-5 lg:gap-1 ${className}`}>
            <p className='text-gris font-bold text-sm lg:text-lg'>{name}</p>
            <Image
                src={icon} alt={iconName} className='rounded-2xl shadow-xl shadow-gris bg-light bg-opacity-30 p-3 h-10 w-10 md:h-20 md:w-20 lg:h-32 lg:w-32' />
        </motion.article>
    )
}

const SkillsView = () => {
    return (
        <div className='flex flex-col lg:gap-12 justify-between w-full'>
            <div className='grid grid-cols-2 gap-1.5 md:grid-cols-3 lg:gap-6 lg:pt-10'>
                <SViewsCard
                    name='NextJs'
                    icon={nextLogo} iconName='nextjs-logo' />

                <SViewsCard
                    name='React'
                    icon={reactLogo} iconName='react-logo' />

                <SViewsCard
                    name='JavaScript'
                    icon={jsLogo}
                    iconName='js-logo' />

                <SViewsCard
                    name='TailwindCss'
                    icon={tailLogo}
                    iconName='tailwind-logo' />

                <SViewsCard
                    name='TypeScript'
                    icon={tsLogo} iconName='typescript-logo' />

                <SViewsCard
                    name='GitHub'
                    icon={iconGithub} iconName='github-logo' />

                <SViewsCard
                    name='Html'
                    icon={htmlLogo}
                    iconName={'html-logo'} />

                <SViewsCard
                    name='Css'
                    icon={cssLogo}
                    iconName={'css-logo'} />

                <SViewsCard
                    className='gap-2'
                    name='Responsive Desing'
                    icon={responsiveDesing}
                    iconName='responsive-logo' />
            </div>
            <Link
                className='bg-light rounded-md text-center font-titles text-gris font-semibold text-base md:text-xl lg:text-3xl lg:p-3 bg-opacity-95 border-2 border-gris hover:text-light hover:bg-gris hover:translate-y-2 transition duration-300'
                href='/skills' >More about skills</Link>
        </div >

    )
}
export default SkillsView