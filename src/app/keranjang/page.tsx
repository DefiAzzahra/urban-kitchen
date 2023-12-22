import React from 'react'

export default function page() {
    return (
        <>
            <div>
                <a href="/">
                    <p className='font-bold text-2xl pt-10 pl-10'>2 items</p>
                    <div className='grid grid-cols-3'>
                        <div className=' w-96 p-20'>
                            <img src="assets//burger1.png" />
                        </div>
                        <div className='pt-28'>
                            <p className='font-bold text-2xl'>Burger Beef</p>
                            <p className='font-bold text-xl'>Rp.25.000</p>
                            <div className='w-24 h-[40px] bg-red-900 text-slate-100 text-center border-solid border-[2px] rounded-[8px] mt-5 '>
                                <p className='translate-y-[5px]'>cancel</p>
                            </div>
                        </div>
                        <div className='pt-40'>
                            <div className='w-44 h-[50px] bg-red-900 text-slate-100  border-solid border-[2px] rounded-[8px] mt-5 grid grid-cols-3'>
                                <div className='pl-5 text-5xl'>
                                    -
                                </div>
                                <div className='p-1 pl-6 text-2xl'>
                                    3
                                </div>
                                <div className='p-1 pl-5 text-3xl'>
                                    +
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-3'>
                        <div className='mb-[370px] w-96 p-20'>
                            <img src="assets//burger1.png" />
                        </div>
                        <div className='pt-20 '>
                            <p className=' font-bold text-2xl'>Burger Beef</p>
                            <p className='font-bold text-xl'>Rp.25.000</p>
                            <div className='w-24 h-[40px] bg-red-900 text-slate-100 text-center border-solid border-[2px] rounded-[8px] mt-5'>
                                <p className='translate-y-[5px]'>cancel</p>
                            </div>

                        </div>
                        <div className='pt-32'>
                            <div className='w-44 h-[50px] bg-red-900 text-slate-100  border-solid border-[2px] rounded-[8px] mt-5 grid grid-cols-3'>
                                <div className='pl-5 text-5xl'>
                                    -
                                </div>
                                <div className='p-1 pl-6 text-2xl'>
                                    3
                                </div>
                                <div className='p-1 pl-5 text-3xl'>
                                    +
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='border-t border-black w-screen h-1 mt-5 -translate-y-[400px]'>
                        <div className='grid grid-cols-2'>
                            <p className='text-3xl font-bold p-20 pl-48'>Sub Total:</p>
                            <p className='text-3xl font-bold p-20 pl-48'>Rp.50.000:</p>
                        </div>

                        <div className='grid grid-cols-2'>
                            <div className='pl-[180px]'>
                                <p className='w-44 bg-red-900 text-slate-100 text-center bg-inherit border-solid border-[2px] rounded-[8px] text-xl'>View Bag</p>
                            </div>

                            <div className='pl-48'>

                                <a href="/payment">
                                    <p className='w-44 bg-red-900 text-slate-100 text-center bg-inherit border-solid border-[2px] rounded-[8px] text-xl'>CheckOut</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>

    )
}
