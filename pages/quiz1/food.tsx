import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from "react";
import { items } from "../../public/Items.json";
import { Carousel } from "react-bootstrap";
import styles from "../styles/Bootstrap.module.css";

const Town: NextPage = () => {
    
    return (
        <div>
            <main>
                <section className="overflow-x-hidden">
                    <div className="relative flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                        <a href="/quiz1" className='absolute top-4'>
                            <Image src="/back.png" alt="back" width={32.4} height={7.2} />
                        </a>
                    </div>

                    <div className="relative items-center mt-24 mb-14 py-5 justify-center transition">
                        <h1 className='font-bold text-4xl text-center'>LOCAL FOOD</h1>
                    </div>
                    <div className="group/b transition-all flex items-center bg-emerald-200 py-5 rounded-l-full translate-x-[49rem] hover:translate-x-1/4 drop-shadow-xl">
                        <div className=' w-72 h-72 rounded-full bg-baksobakar bg-cover ml-6 shadow-inner'/>
                        <div className='invisible group-hover/b:visible group-hover/b:translate-x-6 transition font-bold text-3xl'>
                            <h1>Bakso Bakar <span className='text-rose-50'>||</span> Grilled Meatball</h1>
                            <h1 className='text-sm font-light pt-2'>Bakso bakar is a traditional Malang street food item and a type of bakso or Indonesian meatballs.</h1>
                            <h1 className='text-sm font-light pt-2'>The meatballs are usually made with a combination of beef, starch, eggs, soy sauce, and diluted margarine.</h1>
                            <h1 className='text-sm font-light pt-2'>The meat mixture is often flavored with garlic, nutmeg, salt, and pepper.</h1>
                        </div>
                    </div>
                    <div className="group/a transition-all flex items-center bg-indigo-200 py-5 justify-end rounded-r-full -translate-x-8 w-3/5 hover:w-3/4 drop-shadow-xl">
                        <div className='invisible group-hover/a:visible group-hover/a:-translate-x-9 transition font-bold text-3xl text-right'>
                            <h1>Keripik Tempe <span className='text-rose-50'>||</span> Tempe Chips</h1>
                            <h1 className='text-sm font-light pt-2'>Keripik Tempe or Tempe chips, a typical Malang food made from thinly sliced</h1>
                            <h1 className='text-sm font-light pt-2'>tempeh and then fried using seasoned flour. It's salty and savory. Selected focus.</h1>
                        </div>
                        <div className='w-72 h-72 rounded-full bg-kripiktempe bg-cover mr-6 shadow-inner'/>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Town