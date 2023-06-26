'use client'

import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
    //Realizara una consulta para saber la preferencia sobre el tema.
    //prefer-color-scheme es un css que se usa para detectar si hay una preferencia entre el tema claro u oscuro.
    const preferDarkQuery = "(prefer-color-scheme: dark)";
    const [mode, setMode] = useState('')

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const usePref = window.localStorage.getItem('theme');

        const handleChange = () => {
            if (usePref) {
                let check = usePref === 'dark' ? 'dark' : 'light';
                setMode(check);
                if (check === 'dark') {
                    document.documentElement.classList.add('dark')
                } else {
                    document.documentElement.remove('dark')
                }
            } else {
                let check = mediaQuery.matches ? 'dark' : 'light';
                setMode(check);

                if (check === 'dark') {
                    document.documentElement.classList.add('dark')
                } else {
                    document.documentElement.remove('dark')
                }
            }
        }

        mediaQuery.addEventListener('change', handleChange)

        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    useEffect(() => {
        if(mode === 'dark'){
            window.localStorage.setItem('teme','dark');
            document.documentElement.classList.add('dark')
        } else {
            window.localStorage.setItem('teme','light');
            document.documentElement.classList.remove('dark')
        }
    }, [mode])

    return [mode, setMode]
}

export default useThemeSwitcher