import React from 'react'
import Card from '../komponen/cardMakanan'
import DefaultCarousel from '../komponen/carousel'

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
            <div className="grid grid-cols-4 pr-20">
                <Card img={"assets//coffe1.png"} judul={"Latte"} isi={"Espresso + Susu segar"} />
                <Card img={"assets//es kopi.png"} judul={"Caramel Latte"} isi={"Espresso + Susu segar + caramel"} />
                <Card img={"assets//coffe1.png"} judul={"Latte"} isi={"Espresso + Susu segar"} />
                <Card img={"assets//es kopi.png"} judul={"Caramel Latte"} isi={"Espresso + Susu segar + caramel"} />
            </div>
            <div className="grid grid-cols-4 mb-[370px] mt-60 pr-20">
                <Card img={"assets//coffe1.png"} judul={"Latte"} isi={"Espresso + Susu segar"} />
                <Card img={"assets//es kopi.png"} judul={"Caramel Latte"} isi={"Espresso + Susu segar + caramel"} />
                <Card img={"assets//coffe1.png"} judul={"Latte"} isi={"Espresso + Susu segar"} />
                <Card img={"assets//es kopi.png"} judul={"Caramel Latte"} isi={"Espresso + Susu segar + caramel"} />
            </div>
        </div>
    )
}

export default page
