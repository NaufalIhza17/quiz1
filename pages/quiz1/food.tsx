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
                <section className="min-h-screen items-center justify-center py-2">
                    <div className="relative flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                        <a href="/quiz1" className='absolute top-4'>
                            <Image src="/back.png" alt="back" width={32.4} height={7.2} />
                        </a>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Town