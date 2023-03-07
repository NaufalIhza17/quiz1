import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ChangingText from "../../components/ChangingText";

const Town: NextPage = () => {

    return (
        <div>
            <main>
                <section className="min-h-screen items-center justify-center py-2">
                    <div className="relative flex w-full h-screen flex-1 flex-col items-center justify-center px-20 text-center">
                        <a href="/quiz1" className='absolute top-4'>
                            <Image src="/back.png" alt="back" width={32.4} height={7.2} />
                        </a>
                        <h1 className='text-4xl font-bold'>
                            <ChangingText/>
                        </h1>
                        <h1 className="text-blue-400 text-6xl font-bold">MALANG</h1>
                        <p className='absolute inset-x-0 bottom-10 animate-bounce'>scroll for more</p>
                    </div>
                    <div className='w-screen max-w-full'>
                        <div className="mx-5 grid grid-cols-3 gap-10 place-content-center text-center">
                            <div className='hover:scale-105 transition border-2 border-neutral-900 py-32 rounded-lg bg-malangsatu bg-cover'/>
                            <div className="hover:scale-105 transition border-2 border-neutral-900 py-32 rounded-lg bg-malangdua bg-cover"/>
                            <div className="hover:scale-105 transition border-2 border-neutral-900 py-32 rounded-lg bg-malangtiga bg-cover"/>
                            <div className="hover:scale-105 transition border-2 border-neutral-900 py-32 rounded-lg bg-malangempat bg-cover"/>
                            <div className="hover:scale-105 transition border-2 border-neutral-900 py-32 rounded-lg bg-malanglima bg-cover"/>
                            <div className="hover:scale-105 transition border-2 border-neutral-900 py-32 rounded-lg bg-malangenam bg-cover"/>
                        </div>
                    </div>
                    <div className='w-screen max-w-full items-center px-20 text-center pt-36 pb-36'>
                        <h1 className='text-4xl font-bold'>These are photos that are taken in this lovely city...</h1>
                        <h1 className='text-2xl font-medium pt-2 text-cyan-600'>The reason I fell in love with my hometown is not becuse the place, but the things arround me..</h1>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Town