"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { NAV_LINKS } from './../../constants/index';
import Button from './Button';

const Navbar = () => {
    const [openmenu, setopenmenu] = useState(false)
    const togglemenu = () => {
        setopenmenu(!openmenu)
    }

    return (
        <nav className='   flexBetween max-container padding-container relative z-30 py-5'>
            <Link href={"/"} className={`${openmenu ? 'hidden':'flex items-start justify-normal'}`}>
                <Image  src={"/hilink-logo.svg"} width={74} height={29} alt='logo'/>
            </Link>
       <div className={`${openmenu ? 'z-50 flex flex-col items-center justify-center ml-[30vw] space-y-10 mt-[10vh]  text-2xl font-semibold':'lg:flex items-center justify-center gap-5'}`}>
            <div className='flex lg:hidden'>
                <Image 
                    onClick={togglemenu}
                    src="menu.svg"
                    alt="menu"
                    width={32}
                    height={32}
                    className="inline-block cursor-pointer"
                />
            </div>
            <ul className={`${openmenu ? 'flex flex-col  items-center justify-center ' : 'hidden'} h-full gap-12 lg:flex`}>
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className={`${openmenu} ? 'font-bold  text-3xl' : 'regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5  transition-all hover:font-bold'}`}>
                        {link.label}
                    </Link>
                ))}
            </ul>
            <div className={`${openmenu ? 'flex flex-col items-center justify-center text-5xl' : 'hidden'} lg:flexCenter`}>
                <Button 
                    type="button"
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green"
                    />
            </div>
        </div>

        </nav>
    )
}

export default Navbar