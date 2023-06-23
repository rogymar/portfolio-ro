import React from "react";
import Layout from "./Inicio";

import { CustomLink } from './NavBar';

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-t-violeta font-texts text-[9px] lg:text-xl text-gris'>
            <Layout className='h-[12px] lg:!h-auto py-5 lg:py-4 lg:!px-20 !px-8 flex items-center justify-between'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div className='flex items-center'>
                    <span className='px-1'>Made with 💜 by </span>
                    <CustomLink href=''>RogyChirinos</CustomLink>
                </div>
            </Layout>
        </footer>
    )
}

export default Footer