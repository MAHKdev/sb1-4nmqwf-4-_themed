'use client'
import Image from "next/image";
import { useState } from 'react';
import { motion } from "framer-motion";
import Mascot from '@/components/Mascot';
import Link from 'next/link';
import config from "@/config";


import { UserMenu } from '@/components/UserMenu';
import { ThemeSwitch } from '@/components/ThemeSwitch';



const MenuListItems = () => {
    return (
        <>
            <li><Link className="justify-between" href='/growth?skipwizard=true'>How Tall</Link></li>
            <li><Link className="justify-between" href='/pricing'>Pricing</Link></li>
            <li><Link className="justify-between" href='/blog'>Blog</Link></li>
            <li><Link className="justify-between" href='/b2b'>Partner</Link></li>
        </>
    )
}

const menuListItemsJson = [
    { link: '/', text: 'Home' },
    { link: '/growth?skipwizard=true', text: 'How Tall' },
    { link: '/pricing', text: 'Pricing' },
    { link: '/blog', text: 'Blog' },
    { link: '/b2b', text: 'Partner' },
]

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Animation variants for each menu item
    const menuItemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1, // Stagger the items by 0.1 seconds
                type: "spring",
                stiffness: 50,
            }
        }),
    };

    return (
        <>
            {/* Navbar section */}
            <div className="fixed top-0 w-full flex justify-center z-[9999995]">
                <header className="w-60vw bg-primary p-2 py-2 rounded-[6em] shadow-lg mt-2 md:mt-4 transition-all duration-300 ease-in-out border border-black "
                style={{ border: '2px solid black', borderBottom: '5px solid black', borderRight: '6px solid black' }}>
                    <div className="w-full flex justify-between items-center gap-6">
                        <div className="navbar-start flex flex-row flex-nowrap">
                            <div className="dropdown">
                                {/* Toggle button to open fullscreen menu */}
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-sm btn-ghost lg:hidden flex flex-row flex-nowrap"
                                    onClick={toggleMenu}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16"
                                        />
                                    </svg>
                                    <Mascot className="h-10 w-10" />
                                </div>
                            </div>

                            <Link className="btn btn-ghost btn-sm text-3xl hidden lg:inline-flex text-xl gap-1" href='/'>
                                <Mascot />
                            </Link>
                        </div>

                        <div className="navbar-center hidden lg:flex flex-row flex-nowrap">
                            <ul className="menu menu-horizontal p-0 gap-4">
                                <MenuListItems />
                            </ul>
                        </div>

                        <div className="navbar-end flex flex-row flex-nowrap">


                            <UserMenu />
                        </div>
                    </div>
                </header>
            </div>

            {/* Fullscreen menu when isOpen is true */}
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full z-[99999999] flex justify-center items-center backdrop-blur bg-base/50"
                >

                    <div className="absolute top-4 left-4 w-16">
                        <Mascot />
                    </div>


                    <div className="flex flex-row absolute bottom-4 right-4 gap-4">

                        {config.socialMedia.twitter &&
                            <Link href={config.socialMedia.twitterURL || "#"} target='_blank'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                </svg>
                            </Link>
                        }



                        {config.socialMedia.trelloBoard &&
                            <Link href={config.socialMedia.trelloBoard || "#"} target='_blank'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-current" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M21,36c0,1.1-0.9,2-2,2h-7 c-1.1,0-2-0.9-2-2V12c0-1.1,0.9-2,2-2h7c1.1,0,2,0.9,2,2V36z M40,24c0,1.1-0.9,2-2,2h-7c-1.1,0-2-0.9-2-2V12c0-1.1,0.9-2,2-2h7 c1.1,0,2,0.9,2,2V24z"></path>
                                </svg>
                            </Link>
                        }

                        {config.socialMedia.docsURL &&
                            <Link href={config.socialMedia.docsURL || "#"} target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24" role="img"><path d="M10.802 17.77a.703.703 0 1 1-.002 1.406.703.703 0 0 1 .002-1.406m11.024-4.347a.703.703 0 1 1 .001-1.406.703.703 0 0 1-.001 1.406m0-2.876a2.176 2.176 0 0 0-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 0 0-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.169.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.354-.477-.355-.477-.658-.315-1.669-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 0 0 2.15 1.862 2.177 2.177 0 0 0 2.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0 0 24 12.72a2.176 2.176 0 0 0-2.174-2.174" />
                                </svg>
                            </Link>
                        }

                        {config.socialMedia.telegramGroupURL &&
                            <Link href={config.socialMedia.telegramGroupURL || "#"} target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                                    <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
                                </svg>
                            </Link>
                        }

                    </div>

                    <div className="flex flex-row absolute bottom-4 left-4 gap-4">
                        <ThemeSwitch />
                    </div>

                    <div className="flex flex-col items-center justify-center w-full h-full">
                        <div
                            onClick={toggleMenu}
                            className="btn btn-circle btn-ghost absolute top-4 right-4"
                        >
                            ✕
                        </div>
                        {/* Animated menu items */}
                        <ul className="flex flex-col items-center text-2xl gap-8">
                            {menuListItemsJson.map((item: any, index) => (
                                <motion.li
                                    key={index}
                                    custom={index}
                                    initial="hidden"
                                    animate="visible"
                                    variants={menuItemVariants}
                                >
                                    <li><Link className="btn btn-primary text-3xl btn-lg" href={item.link} onClick={toggleMenu}>{item.text}</Link></li>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}






export default Header;




