'use client'



import CardCemilan from "./komponen/CardCemilan";
import CardMinuman from "./komponen/CardMinuman";
import CardMakanan from "./komponen/cardMakanan";
import Card from "./komponen/cardMakanan";
import DefaultCarousel from "./komponen/carousel";

export default function Home() {
  return (
    <div>
      <div className="h-[400px] w-screen">
        <DefaultCarousel />
      </div>
      <div>
        <h1 className="md:p-20 ms:p-10 p-5 pb-0 font-bold md:text-5xl ms:text-4xl text-2xl">
          Urban Foods
        </h1>
      </div>
      <div className="">
        <CardMakanan />

      </div>
      <div className="flex justify-center items-center mt-[400px]">
        <div className="bg-red-900 h-19 md:w-56 ms:w-48 w-44 rounded-lg text-center ">
          <a className="text-italic md:text-3xl ms:text-2xl text-xl text-slate-100" href="/menumakan"> See All Foods</a>
        </div>
      </div>
      <div>
        <h1 className="md:p-20 ms:p-10 p-10 pb-0 font-bold md:text-5xl ms:text-4xl text-2xl">
          Urban Drinks
        </h1>
      </div>
      <div className="">
        <button>
          <CardMinuman />
        </button>

      </div>
      <div className="flex justify-center items-center mt-[80px] mb-[80px]">
        <div className="bg-red-900 h-19 md:w-56 sm:w-48 w-44 rounded-lg text-center ">
          <a className="text-italic md:text-3xl sm:text-2xl text-xl text-slate-100" href="/menuminum"> See All Drinks</a>
        </div>
      </div>
      <div>
        <h1 className="mb:p-20 sm:p-10 p-10 pb-0 font-bold md:text-5xl sm:text-4xl text-2xl">
          Urban Snacks
        </h1>
      </div>
      <div className="">
        <CardCemilan />
      </div>
      <div className="flex justify-center items-center mt-[80px] mb-[80px]">
        <div className="bg-red-900 h-19 md:w-56 sm:w-48 w-44 rounded-lg text-center ">
          <a className="text-italic md:text-3xl sm:text-2xl text-xl text-slate-100" href="/menuSnacks"> See All Snacks</a>
        </div>
      </div>

    </div>

  );
}
