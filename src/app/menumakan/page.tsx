'use client'
import React from 'react'


import Card from '../komponen/cardMakanan';
import DefaultCarousel from '../komponen/carousel';
import CardMakanan from '../komponen/cardMakanan';


export default function page() {
    return (
        <div>
            <div className="h-[400px] w-screen">
                <DefaultCarousel />
            </div>
            <div>
                <h1 className="p-20 pb-0 font-bold text-5xl">
                    Foods
                </h1>
            </div>
            <div className='mt-10'>
                <CardMakanan />

            </div>
        </div>
    )
}
