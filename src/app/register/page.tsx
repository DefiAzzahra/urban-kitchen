'use client';
import React from 'react'
import { Datepicker } from 'flowbite-react';

export default function page() {
    return (
        <div>
            <div>
                <div className='grid grid-cols-2 p-24'>
                    <div className='h-[1000px] w-[650px] border-solid border-[3px] border-red-900 mb-[370px] rounded-[27px]'>
                        <p className='text-5xl font-bold text-center p-20'>Register</p>
                        <div className='pl-10'>
                            <p className='font-bold text-lg pb-8'>Name:</p>
                            <div className=''>
                                <input type="text" placeholder='Type Here' color='bg-transparent' className='rounded-2xl w-[500px] border-slate-300 input' />

                                <p className='font-bold text-lg pb-8 pt-8'>Telephone:</p>
                                <div className=''>
                                    <input type="text" placeholder='Type Here' color='bg-transparent' className='rounded-2xl w-[500px] border-slate-300 input' />

                                    <p className='font-bold text-lg pb-8 pt-8'>Tanggal Lahir:</p>
                                    <div className=''>
                                        <Datepicker className='w-[500px] border-slate-300 rounded-2xl' language='in-id' />

                                        <p className='font-bold text-lg pb-8 pt-8'>Email:</p>
                                        <div className=''>
                                            <input type="text" placeholder='Type Here' color='bg-transparent' className='rounded-2xl w-[500px] border-slate-300 input' />
                                            <p className='font-bold text-lg pb-8 pt-8'>Password:</p>
                                            <div className=''>
                                                <input type="text" placeholder='Type Here' color='bg-transparent' className='rounded-2xl w-[500px] border-slate-300 input' />


                                            </div>
                                        </div>
                                        <div className="p-10 pl-[150px]">
                                            <div className="bg-red-900 h-10 w-60 rounded-2xl text-center pt-1">
                                                <a className="text-italic text-xl text-slate-100" href="register">Register</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <img className='pt-64 translate-x-[150px]' src="assets//logo.png" />
                </div>
            </div>
        </div >
    )
}