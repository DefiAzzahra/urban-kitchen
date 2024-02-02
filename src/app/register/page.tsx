'use client';
import React, { useRef, useState } from 'react';
import { Alert, Datepicker } from 'flowbite-react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../lib/firebase/page';
import { db } from '../../../lib/firebase/page';
import { collection, addDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { count } from 'console';


async function addDataToFirestore({ nama, email, nomor }: { nama?: any, email?: any, nomor?: any }) {
    try {
        const docRef = await addDoc(collection(db, "userweb"), {
            nama: nama,
            email: email,
            nomor: nomor
        });
        return true;
    } catch (error) {
        console.error("error", error)
    }

}

const Signup = () => {
    const { push } = useRouter();


    const emailRef = useRef<HTMLInputElement>(null);
    const namaRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const nomorRef = useRef<HTMLInputElement>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [nama, setNama] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [nomor, setNomor] = useState("");


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const namaValue = namaRef.current?.value;
        const emailValue = emailRef.current?.value;
        const passwordValue = passwordRef.current?.value;
        const nomorValue = nomorRef.current?.value;


        // if (!nama || !emailValue || !passwordValue || !nomorValue) {
        //     // Lakukan validasi di sini jika ada input yang kosong
        //     console.error("Harap isi semua input");
        //     return;
        // }

        try {
            // Buat pengguna dengan email dan password
            const userCredential = await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
            const user = userCredential.user;
            // Tambahkan data ke Firestore
            const docRef = await addDoc(collection(db, "userweb"), {
                nama: nama,
                email: email,
                nomor: nomor
            });

            // Handle berhasil membuat pengguna
            console.log("Pengguna berhasil dibuat:", user);

            alert('Berhasil');
            setNama('');
            push("/menu");

        } catch (error) {
            // Handle error saat menambahkan data ke Firestore atau saat membuat pengguna
            console.error("Terjadi kesalahan:", error);
            alert(error);
        }
    };



    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div>
                    <div className='grid grid-cols-2 p-24'>
                        <div className='h-[600px] w-[450px] border-solid border-[3px] border-red-900 mb-[370px] rounded-[27px]'>
                            <p className='text-3xl font-bold text-center p-[50px]'>Register</p>
                            <div className='pl-10'>
                                <p className='font-bold text-lg pb-3'>Name:</p>
                                <div className=''>
                                    <input required type="text" placeholder='Type Here' ref={namaRef} color='bg-transparent' className='rounded-2xl w-[350px] border-slate-300 input'
                                        onChange={(e) => setNama(e.target.value)}
                                    />

                                    <p className='font-bold text-lg pb-3 pt-8'>Telephone:</p>
                                    <div className=''>
                                        <input required type="text" placeholder='Type Here' ref={nomorRef} color='bg-transparent' className='rounded-2xl w-[500px] border-slate-300 input'
                                            onChange={(e) => setNomor(e.target.value)}
                                        />

                                        <p className='font-bold text-lg pb-3 pt-8'>Tanggal Lahir:</p>
                                        <div className=''>
                                            <Datepicker className='w-[500px] border-slate-300 rounded-2xl' language='in-id' />

                                            <p className='font-bold text-lg pb-3 pt-8'>Email:</p>
                                            <div className=''>
                                                <input required type='text' placeholder='Type Here' ref={emailRef} color='bg-transparent' className='rounded-2xl w-[500px] border-slate-300 input'
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />

                                                <p className='font-bold text-lg pb-3 pt-8'>Password:</p>
                                                <div className=''>
                                                    <input required type='password' placeholder='Type Here' ref={passwordRef} color='bg-transparent' className='rounded-2xl w-[500px] border-slate-300 input' />


                                                </div>
                                            </div>

                                            <div className="p-10 pl-[150px]">
                                                <div className="bg-red-900 h-10 w-60 rounded-2xl text-center pt-1">
                                                    <button className="text-italic text-xl text-slate-100"
                                                        type='submit'>Submit</button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                            <div>
                            </div>
                        </div>
                        <img className='pt-64 translate-x-[150px]' src="assets//logo.png" />
                    </div>
                </div>
            </form>

        </div>



    )
}

export default Signup
