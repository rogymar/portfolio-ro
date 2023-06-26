import React from "react";

const Layout = ({children, className}) => {
    return (
        <div className={`w-full inline-block z-0 ${className}`}>
            {children}
        </div>
    )
}
export default Layout