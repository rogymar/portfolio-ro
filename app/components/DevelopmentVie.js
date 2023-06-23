import React from "react";
import Image from "next/image";

const DevViewCard = ({title, className, src, alt, description, lenguages, buttonTitle}) => {
    return (
        <div className={` ${className}`}>
            <section>
                <h2>{title}</h2>
                <Image src={src} alt={alt}className='h-full w-full' />
                <p>{description}</p>
                <p>{lenguages}</p>
                <button>{buttonTitle}</button>
            </section>
            <section>
                <h2>Landing Page</h2>
                <Image src={''} alt='landing-about-OliverTree' className='h-auto w-full' />
                <p>Landing Page sencilla que serviría para mostar los datos obtenidos de una API para vídeos de youtube...</p>
                <p>HTML | JavaScript | Tailwind</p>
                <button>More info...</button>
            </section>
            <section>
                <h2>Todo-App</h2>
                <Image src='' alt='to-do-app' className='h-20 w-20' />
                <p>Aplicación sencilla pero funcional para crear, buscar y eliminar TO-DO</p>
                <p>React | Tailwind | NextJS </p>
                <button>More info...</button>
            </section>
            <section>
                <h3>Tik Tak Toe Game</h3>
                <Image src='' alt='tik-tak-toe-game' className='h-20 w-20' />
                <p>Clásico juego de tik, tak, toe, como parte de la enseñanza inicial de React...</p>
                <p>React | Css-In-JS </p>
                <button>More info...</button>
            </section>
            <section>
                <h2>Tetris Game</h2>
                <Image src='' alt='tetris-game' className='h-20 w-20' />
                <p>Juego de Tetris funcional elaborado con Typescript en medio de un curso educativo...</p>
                <p>TypeScript | Styled-Components </p>
                <button>More info...</button>
            </section>
            <section>
                <h3>MercadoLibre Prueba</h3>
                <Image src='' alt='mercado-libre-views' className='h-20 w-20' />
                <p>Desafío en el que se presentan: la vista del Home con el buscados, el listado de los resultados y rl detalle de los productos...</p>
                <p>NextJS | Tailwind | React</p>
                <button>More info...</button>
            </section>
        </div>
    )
}

export default DevViewCard