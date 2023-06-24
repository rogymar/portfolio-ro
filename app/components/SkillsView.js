'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Images
import iconGithub from '../../public/githublines.svg';
import reactLogo from '../../public/react-color.svg';
import jsLogo from '../../public/js-color.svg';
import htmlLogo from '../../public/html-color.svg';
import cssLogo from '../../public/css-color.svg';
import responsiveDesing from '../../public/responsive-mincolor.svg';
import tailLogo from '../../public/tailwind-color.svg';
import tsLogo from '../../public/ts-color.svg';
import nextLogo from '../../public/next-light.svg';

const SViewsCard = ({ name, className, icon, iconName, }) => {
    return (
        <article className={`w-ful flex flex-col items-center justify-center gap-2 w-full pb-5 md:pb-8 md:px-5 lg:gap-1 ${className}`}>
                <p className='text-gris font-bold text-sm lg:text-lg'>{name}</p>
                <Image
                    src={icon} alt={iconName} className='h-10 w-10 md:h-20 md:w-20 lg:h-32 lg:w-32' />
        </article>
    )
}

const SkillsView = () => {
    return (
        <div className='flex flex-col lg:gap-12 justify-between w-full'>
            <div className='grid grid-cols-2 gap-1.5 md:grid-cols-3 lg:gap-6 lg:pt-10'>
                <SViewsCard
                    name='Html'
                    icon={htmlLogo}
                    iconName={'html-logo'} />
                <SViewsCard
                    name='Css'
                    icon={cssLogo}
                    iconName={'css-logo'} />
                <SViewsCard
                    name='JavaScript'
                    icon={jsLogo}
                    iconName='js-logo' />
                <SViewsCard
                    name='React'
                    icon={reactLogo} iconName='react-logo' />
                <SViewsCard
                    name='TypeScript'
                    icon={tsLogo} iconName='typescript-logo' />
                <SViewsCard
                    name='TailwindCss'
                    icon={tailLogo}
                    iconName='tailwind-logo' />
                <SViewsCard
                    name='NextJs'
                    icon={nextLogo} iconName='nextjs-logo' />
                <SViewsCard
                    className='gap-2'
                    name='Responsive Desing'
                    icon={responsiveDesing}
                    iconName='responsive-logo' />
                <SViewsCard
                    name='GitHub'
                    icon={iconGithub} iconName='github-logo' />
            </div>
            <Link
            className='bg-light rounded-md text-center font-titles text-gris font-semibold text-base md:text-xl lg:text-3xl lg:p-3 bg-opacity-95 border-2 border-gris hover:text-light hover:bg-gris'
            href='/skills' >More about skills</Link>
        </div >

    )
}
export default SkillsView