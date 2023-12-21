import { QuerySnapshot, collection, getDoc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../lib/firebase/page';




function CardMakanan() {
    const [makanan, setMakanan] = useState<any[]>([]);
    const makananCollectionRef = collection(db, "makanan");

    useEffect(() => {
        const getmakanan = async () => {
            try {
                const data: QuerySnapshot = await getDocs(makananCollectionRef);
                setMakanan(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            } catch (error) {
                console.error("error", error
                );
            }
        };
        getmakanan()
    }, [])


    return (
        <div className='grid grid-cols-4 mb-[370px] pr-20'>
            {makanan.map((makan) => {
                return (
                    // eslint-disable-next-line react/jsx-key
                    <div>{""}
                        <div className='' ref={makan.Link} >



                            <div className='pl-20 pr-4 relative'>
                                <div className='bg-inherit border-solid border-[3px] border-red-900 z-10 rounded-[30px] md:w-full ms:w-80 w-76 md:h-64 ms:h-54 h-48 translate-y-[200px] mb-52'>
                                    <img src={makan.gambar} className="md:h-40 z-30 ms:h-32 h-24 md:w-44 ms:w-32 w-24  md:ml-2 ms:ml-6 ml-4 md:mt-3 ms:mt-2 mt-1 -translate-y-[100px]  z-20 " />
                                    <h1 className='text-center pt-[100px] font-bold md:text-xl ms:text-l text-m -translate-y-[200px]'>{makan.nama}</h1>
                                    <p className='text-center pt-5 font-italic
                                     -translate-y-[200px] '>{makan.keterangan}</p>
                                </div>
                            </div>

                        </div>


                    </div>
                )
            }
            )
            }
        </div>
    )


}



export default CardMakanan;
