import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Image
import textRotating from '../../public/text.png';

const RotatingText = () => {
    return (
        <div className='fixed left-6 bottom-4 flex items-center justify-center overflow-hidden'>
            <div className='w-32 h-auto flex items-center justify-center relative'>
                <Image src={textRotating} alt='this-site-are-buit-with' className='animate-spin-slow' />
                <motion.h2 className='flex items-center justify-center absolute left-[24px] top-1/2 -tranlate-x-1/2 -translate-y-1/2 text-gris text-xs font-texts shadow-xs w-20 h-20 rounded-full  hover:text-white uppercase font-semibold'
                whileHover={{
                    background:['#C8B6FF', '#bbd0ff', '#46494c','#BAD9BF'],
                    transition:{duration:1, repeat: Infinity}
                }}
                >
                Built With</motion.h2>
            </div>
        </div>
    )
}

export default RotatingText