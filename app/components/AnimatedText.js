//Este componente renderizara una animacion de texto que sera usado en varios momentos.
'use client'

import React from "react";
import { motion } from "framer-motion";

const animated = {
    initial:{
        opacity:1,
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.2,
            staggerChildren: 0.01,
        }
    }
}

const singleWord = {
    initial:{
        opacity:0,
        y:50,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:0.5,
        }
    }
}

const AnimatedText = ({text, className}) => {
    return (
        <div className='w-full flex items-center justify-center text-center overflow-hidden'>
            <motion.h1 className={`inline-block w-full font-titles capitalize text-5xl ${className}`}
            variants={animated}
            initial='initial'
            animate='animate'>
                {
                    text.split('').map((word, index) =>
                    <motion.span key={word+'-'+index} className='inline-block'
                    variants={singleWord}
                    >
                        {word}&nbsp;
                    </motion.span>
                    )
                }
            </motion.h1>
        </div>
    )
}

export default AnimatedText