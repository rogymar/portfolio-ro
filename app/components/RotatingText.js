import React from "react";
import Image from "next/image";

// Image
import textRotating from '../../public/text.png';

const RotatingText = () => {
    return (
        <div className='fixed left-6 bottom-4 flex items-center justify-center overflow-hidden'>
            <div className='w-40 h-auto felx items-center justify-center relative'>
                <Image src={textRotating} alt='this-site-are-buit-with' className='animate-spin-slow' />
                <h2 className='flex items-center justify-center absolute left-[32px] top-1/2 -tranlate-x-1/2 -translate-y-1/2 bg-azulito text-light text-sm font-texts shadow-xs w-24 h-24 rounded-full hover:bg-light hover:text-azulito hover:border-2 hover:border-azulito'> BUILT WITH</h2>
            </div>
        </div>
    )
}

export default RotatingText