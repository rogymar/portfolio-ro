import React from "react";
import Image from "next/image";

const SkillsViewsCard = ({ name, className, src, description }) => {
    return (
        <div>
            <div className={`w-ful ${className}`}>
                <Image className='w-30 h-20'
                src={src} 
                alt={description}
                />
                <p>{name}</p>
            </div>
        </div>
    )
}

export default SkillsViewsCard