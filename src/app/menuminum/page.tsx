import React from 'react'
import Card from '../komponen/cardMakanan'
import DefaultCarousel from '../komponen/carousel'
import CardMinuman from '../komponen/CardMinuman'

const page = () => {
    return (
        <div>
            <div className="h-[400px] w-screen">
                <DefaultCarousel />
            </div>
            <div>
                <h1 className="p-20 pb-0 font-bold text-5xl">
                    Drinks
                </h1>
            </div>
            <div className="">
                <CardMinuman />
            </div>
        </div>
    )
}

export default page
