'use client';

import { Navbar } from 'flowbite-react';
import Image from 'next/image'

export default function DefaultNavbar() {
    return (

        <Navbar fluid rounded>
            <Navbar.Brand href="/">
                <img src="assets//Logo.png" className="h-20 w-20 h-10" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='mr-76 w-40'>
                <Navbar.Link className='text-2xl font-bold' href="/menu" active>
                    Menu
                </Navbar.Link>
                <Navbar.Link className='text-2xl font-bold' href="/HelpCenter">
                    Help Center
                </Navbar.Link>
                <div className='bg-red-900 h-8 w-20 rounded '>
                    <Navbar.Link className='text-2xl font-bold text-slate-100 text-center' href="/Logout">Login
                    </Navbar.Link>
                </div>

            </Navbar.Collapse>
            <a href="/keranjang">
                <img src="assets//keranjang.png" className="h-10 w-11 mr-10" />
            </a>

        </Navbar>


    )
}
