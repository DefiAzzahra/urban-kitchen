'use client';
import React from 'react'
import DefaultCarousel from '../komponen/carousel'
import Card from '../komponen/cardMakanan'
import Burger from '../komponen/Burger'
import Link from 'next/link'
import Kopi from '../komponen/Kopi'
import Pancake from '../komponen/Pancake'

export default function page() {
    return (
        <div>
            <div className='h-[400px] w-screen'>
                <DefaultCarousel />
            </div>
            <p className='text-4xl font-bold text-center pt-20'>
                Category Menus
            </p>

            <div className='grid grid-cols-2'>
                <div>
                    <a href="/menumakan">
                        <div className=' w-64 h-96 ml-64 mt-20 '>
                            <div className='border-solid border-[3px] border-red-900 rounded-[17px]  w-full h-64 items-center '>
                                <div className='w-full h-[80%]'>
                                    <Burger
                                        obj={"./assets/3d/burgerBaru1.gltf"}
                                    />
                                </div>
                                <p className='font-bold text-2xl text-center'>Foods</p>
                            </div></div>
                    </a>

                </div>


                <a href="menuminum">
                    <div className=' w-64 h-96 ml-40 mt-20 '>
                        <div className='bg-inherit border-solid border-[3px] border-red-900 rounded-[17px] w-full h-64 items-center '>

                            <div className='w-full h-[80%]'>
                                <Kopi
                                    obj={"./assets/3d/gelasBaru1.gltf"}


                                />
                            </div>
                            <div>
                                <p className='font-bold text-2xl text-center'>Drinks</p>
                            </div>

                        </div></div></a>

            </div>
            <a href="menuSnacks">
                <div className=' w-64 h-96 ml-[550px]  '>
                    <div className='bg-inherit border-solid border-[3px] border-red-900 rounded-[17px]  w-full h-64 items-center '>
                        <div className='w-full h-[80%]'>
                            <Pancake
                                obj={"./assets/3d/pancakeBaru1.gltf"}


                            />
                        </div>
                        <p className='font-bold text-2xl text-center'>Snacks</p>
                    </div></div>
            </a>






        </div>
    )
}
