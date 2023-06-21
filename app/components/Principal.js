import React, { Children } from "react";

const Layout = ({children, className}) => {
    return (
        <div className={`w-full h-screen inline-block z-0 bg-light px-16 lg:px-32 ${className}`}>
            {children}
        </div>
    )
}
export default Layout