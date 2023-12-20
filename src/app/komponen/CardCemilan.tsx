
import { QuerySnapshot, collection, getDoc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../lib/firebase/page';




function CardCemilan() {
    const [cemilan, setCemilan] = useState<any[]>([]);
    const cemilanCollectionRef = collection(db, "cemilan");

    useEffect(() => {
        const getcemilan = async () => {
            try {
                const data: QuerySnapshot = await getDocs(cemilanCollectionRef);
                setCemilan(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            } catch (error) {
                console.error("error", error
                );
            }
        };
        getcemilan()
    }, [])


    return (
        <div className='grid grid-cols-4 mb-[370px] pr-20'>
            {cemilan.map((cemilan) => {
                return (
                    // eslint-disable-next-line react/jsx-key
                    <div>{""}
                        <div className='' ref={cemilan.Link} >



                            <div className='pl-20 pr-4 z-10'>
                                <img src={cemilan.gambar} className="md:h-40 ms:h-32 h-24 md:w-44 ms:w-32 w-24  md:ml-2 ms:ml-6 ml-4 md:mt-3 ms:mt-2 mt-1 md:translate-y-[80px] ms:translate-y-[30px] translate-y-[25px]" />
                                <div className='bg-inherit border-solid border-[3px] border-red-900 rounded-[30px] md:w-full ms:w-80 w-76 md:h-64 ms:h-54 h-48 translate-y-[25px]'>
                                    <h1 className='text-center pt-20 font-bold md:text-xl ms:text-l text-m'>{cemilan.nama}</h1>
                                    <p className='text-center pt-3 font-italic '>{cemilan.keterangan}</p>
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



export default CardCemilan;
