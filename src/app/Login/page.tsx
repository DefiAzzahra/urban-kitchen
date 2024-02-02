'use client';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'
import { auth } from '../../../lib/firebase/page';

const page = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { push } = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState("");

    const onSubmit = async (e:any) => {
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            push("/menu");
            alert('Berhasil');
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            console.log(errorCode)
        });

        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='p-24 grid grid-cols-2'>
                    <div className=' h-[800px] w-[650px] border-solid border-[3px] border-red-900 mb-[370px] rounded-[27px]'>
                        <p className='text-center font-bold text-5xl p-20'>Login</p>
                        <div className='pl-10'>
                            <p className='font-bold text-lg pb-8'>Email:</p>
                            <div className=''>
                                <input type="email" placeholder='Type Here' color='bg-transparent' className='rounded-2xl w-[500px] borde-slate-300 input' onChange={(e) => setEmail(e.target.value)} />

                                <p className='font-bold text-lg pb-8 pt-8'>Password:</p>
                                <div className=''>
                                    <input type="password" placeholder='Type Here' color='bg-transparent' className='rounded-2xl w-[500px] borde-slate-300 input' onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <p className='font-bold text-end pt-10 pr-20 '>Lupa Kata Sandi?</p>
                            </div>
                            <div className="pt-[40px] pl-40">
                                <div className="bg-red-900 h-10 w-60 rounded-2xl text-center pt-1">
                                    <button className="text-italic text-xl text-slate-100" type='submit'>Login</button>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 pl-[200px]">
                            <div className="bg-red-900 h-10 w-60 rounded-2xl text-center pt-1">
                                <a className="text-italic text-xl text-slate-100" href="register">Register</a>
                            </div>
                        </div>
                    </div>
                    <img src="assets//logo.png" className='translate-x-[150px] pt-52' />
                </div>
            </form>

        </div>
    )
}

export default page
