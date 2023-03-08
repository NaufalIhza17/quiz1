import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ChangingText from "../../components/ChangingText";

const Town: NextPage = () => {

    return (
        <div>
            <main>
                <section className="min-h-screen items-center justify-center py-2">
                    <div className="relative flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                        <a href="/quiz1" className='absolute top-4'>
                            <Image src="/back.png" alt="back" width={32.4} height={7.2} />
                        </a>
                        <div className='flex items-center mt-40 gap-x-28 translate-x-14 -ml-[10rem]'>
                            <Image
                                className='rotate-90 rounded-xl shadow-2xl'
                                src="/me.jpg"
                                alt=""
                                width={580}
                                height={772}
                            />
                            <div className='text-left w-[40rem]'>
                                <h1 className='font-bold text-4xl'>Mochammad Naufal Ihza Syahzada</h1>
                                <h1 className='text-xl text-gray-600 pt-4'>Nice to meet you! You can call me <span className='font-medium hover:scale-150 transition text-red-300'>Jeje</span>. I'm a Informatics Student at <span className='text-blue-600'>ITS</span>. Now I'm at the fourth semester and still trying to do the best to finish this college obstacle.</h1>
                                <h1 className='text-xl text-gray-600'>I have interest in <span className='font-medium'>Website Development</span>, especially Front End Development. So you can say becoming a Full Stack Developer is one of my dream.</h1>
                                <h1 className='text-xl text-gray-600'>Born in 17 August 2003, so in this year I'm gonna be 20 years old</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Town