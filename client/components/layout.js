import React from 'react'
import Navbar from './navbar'


export default function Layout({children}) {
    return (
        <div>
            <Navbar> 
                {children}
            </Navbar>
            <br/>
            {/* { children } */}
        </div>
    )
}
