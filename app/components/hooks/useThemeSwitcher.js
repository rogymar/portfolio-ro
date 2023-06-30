'use client'

import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
    //Realizara una consulta para saber la preferencia sobre el tema.
    //prefer-color-scheme es un CSS que se usa para detectar si hay una preferencia entre el tema claro u oscuro.
    const preferDarkQuery = "(prefer-color-scheme: dark)";
    const usePref = window.localStorage.getItem('theme');
    const [mode, setMode] = useState(usePref)

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);

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
            window.localStorage.setItem('theme','dark');
            document.documentElement.classList.add('dark')
        } else {
            window.localStorage.setItem('theme','light');
            document.documentElement.classList.remove('dark')
        }
    }, [mode])

    return [mode, setMode]
}

export default useThemeSwitcher