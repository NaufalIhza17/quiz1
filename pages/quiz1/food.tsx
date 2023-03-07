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
                <section className="">
                    <div className="relative flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                        <a href="/quiz1" className='absolute top-4'>
                            <Image src="/back.png" alt="back" width={32.4} height={7.2} />
                        </a>
                    </div>

                    <div className="relative items-center mt-28 mb-14 py-5 justify-center transition">
                        <h1 className='font-bold text-4xl text-center'>LOCAL FOOD</h1>
                    </div>
                    <div className="group/b transition-all flex items-center bg-emerald-200 py-5 justify-start rounded-l-full translate-x-10 w-3/5 right-0">
                        <div className='border-2 border-stone-800 w-72 h-72 rounded-full bg-baksobakar bg-cover ml-10'/>
                        <div className='invisible group-hover/b:visible group-hover/b:translate-x-6 transition font-bold text-3xl'>
                            <h1>Bakso Bakar</h1>
                            <h1 className='text-sm font-light'>Meatball</h1>
                        </div>
                    </div>
                    <div className="group/a transition-all flex items-center bg-indigo-200 py-5 justify-end rounded-r-full -translate-x-10 w-3/5 hover:w-3/4">
                        <div className='invisible group-hover/a:visible group-hover/a:-translate-x-6 transition font-bold text-3xl '>
                            <h1>Keripik Tempe</h1>
                            <h1 className='text-sm font-light'>Keripik Tempe</h1>
                        </div>
                        <div className='border-2 border-stone-800 w-72 h-72 rounded-full bg-kripiktempe bg-cover mr-10'/>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Town