import React from 'react'
import Card from '../komponen/cards'

const page = () => {
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div className=' w-64 h-96 ml-40 mb-[10px] mt-20 '>
                    <div className='bg-inherit border-solid border-[3px] border-red-900 rounded-[17px]  w-full h-56 items-center'>
                        <img src='assets//burger1.png' className="h-40 w-44 ml-10 mt-4 flex items-center" />
                    </div></div>
                <div className=''>
                    <p className="text-black font-bold text-4xl pt-20 ml-12 -translate-x-[150px]">RP.50.200</p>
                    <p className="-translate-x-[150px] pt-14 ml-12">5 Fried Chicken Wings + 2 Ovaltine </p>
                    <div>
                        <div className='bg-red-900 h-16 w-96 mt-10 rounded-3xl text-center pt-3 -translate-x-[118px]'>
                            <a className="text-italic text-3xl text-slate-100 " href="/DeliveryDetail"> + Order</a>
                        </div>
                    </div>
                    <div>
                        <h1 className="p-20 pb-0 font-bold text-5xl -translate-x-[600px]">
                            Other Menus
                        </h1>
                    </div>

                </div>
            </div>
            <div>
                <div className="grid grid-cols-4 mb-[370px]">
                    <Card img={"assets//coffe1.png"} judul={"Latte"} isi={"Espresso + Susu segar"} />
                    <Card img={"assets//es kopi.png"} judul={"Caramel Latte"} isi={"Espresso + Susu segar + caramel"} />
                    <Card img={"assets//coffe1.png"} judul={"Latte"} isi={"Espresso + Susu segar"} />
                    <Card img={"assets//es kopi.png"} judul={"Caramel Latte"} isi={"Espresso + Susu segar + caramel"} />
                </div>
            </div>
            <div className="flex justify-center items-center mt-[10px] mb-[150px]">
                <div className="bg-red-900 h-19 w-56 rounded-lg text-center ">
                    <a className="text-italic text-3xl text-slate-100" href="
                    /">Back To Home</a>
                </div>
            </div>

        </div>
    )
}

export default page
