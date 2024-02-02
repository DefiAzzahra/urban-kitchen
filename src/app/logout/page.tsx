'use client';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'
import { auth } from '../../../lib/firebase/page';
import { Button } from 'flowbite-react';

const page = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { push } = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState("");

    const onSubmit = async (e: any) => {
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            alert('gagal logout');
            push("/gagal logout");
        }).catch((error) => {
            alert('Berhasil Logout');
            push("/");
        });

        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='p-24 grid grid-cols-2'>
                    <div className=' h-[800px] w-[650px] border-solid border-[3px] border-red-900 mb-[370px] rounded-[27px]'>
                        <p className='text-center font-bold text-m p-20'>Apakah yakin akan logout?</p>
                        <div className='pl-10'>
                            <div className="pt-[40px] pl-40">
                                <div className="bg-red-900 h-10 w-60 rounded-2xl text-center pt-1">
                                    <button className="text-italic text-xl text-slate-100" type='submit'>Ya</button>
                                </div>
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
