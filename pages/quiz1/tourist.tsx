import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

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

                    {/* <div className="grid grid-cols-3 mt-32 items-center justify-around sm:w-full mx-auto">
                        <div className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-cyan-400 group/d h-48 hover:shadow-2xl">
                            <h3 className="text-2xl font-bold text-center mt-12">Tokyo</h3>
                        </div>

                        <div className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-cyan-400 group/a h-48 hover:shadow-2xl">
                            <h3 className="text-2xl font-bold text-center mt-12">Lake Brienz</h3>
                        </div>

                        <div className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-cyan-400 group/b h-48 hover:shadow-2xl">
                            <h3 className="text-2xl font-bold text-center mt-12">Den Haag</h3>
                        </div>

                        <div className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-cyan-400 group/c h-48  hover:shadow-2xl">
                            <h3 className="text-2xl font-bold text-center mt-12">Makkah</h3>
                        </div>

                        <div className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-cyan-400 group/c h-48  hover:shadow-2xl">
                            <h3 className="text-2xl font-bold text-center mt-12">Makkah</h3>
                        </div>
                    </div>

                    <div className='w-[95%] mx-auto mt-6 h-72 rounded-xl group-hover/a:bg-slate-900'/> */}

                    <div className="grid grid-cols-3 grid-rows-3 grid-flow-row gap-4 mt-20 mx-10">
                        <div className="bg-green-200 rounded-xl h-20 text-center pt-6 font-bold text-xl">Tokyo</div>
                        <div className="border-2 border-cyan-200 rounded-xl h-20 text-center pt-6 font-bold text-xl">Lake Brienz</div>
                        <div className="bg-purple-200 rounded-xl h-20 text-center pt-6 font-bold text-xl">Den Haag</div>
                        <div className="col-span-2 bg-pink-400 rounded-xl h-20 text-center pt-6 font-bold text-xl">Makkah</div>
                        <div className="border-2 border-rose-200 rounded-xl h-20 text-center pt-6 font-bold text-xl">Paris</div>
                        <div className="border-2 border-rose-400 rounded-xl h-20 text-center pt-6 font-bold text-xl">Seoul</div>
                        <div className="col-span-2 bg-purple-400 rounded-xl h-20 text-center pt-6 font-bold text-xl">Amsterdam</div>

                        <div className="bg-green-200 rounded-xl h-20 text-center pt-6 font-bold text-xl">Bali</div>
                        <div className="bg-cyan-200 rounded-xl h-20 text-center pt-6 font-bold text-xl">Los Angeles</div>
                        <div className="bg-purple-200 rounded-xl h-20 text-center pt-6 font-bold text-xl">Sydney</div>
                        <div className="border-2 border-pink-400 rounded-xl h-20 text-center pt-6 font-bold text-xl">Cape Town</div>
                        <div className="rounded-xl h-20 text-center pt-5 font-bold text-4xl">BUCKET LISTS</div>
                        <div className="bg-rose-200 rounded-xl h-20 text-center pt-6 font-bold text-xl">London</div>
                        <div className="bg-rose-400 rounded-xl h-20 text-center pt-6 font-bold text-xl">New York</div>
                        <div className="border-2 col-span-2 border-purple-400 rounded-xl h-20 text-center pt-6 font-bold text-xl">Seoul</div>

                        <div className="border-2 border-green-200 rounded-xl h-20 text-center pt-6 font-bold text-xl">Odense</div>
                        <div className="bg-cyan-200 rounded-xl h-20 text-center pt-6 font-bold text-xl">Quebec</div>
                        <div className="bg-purple-200 rounded-xl h-20 text-center pt-6 font-bold text-xl">Dubai</div>
                        <div className="col-span-2 bg-pink-400 rounded-xl h-20 text-center pt-6 font-bold text-xl">Kyoto</div>
                        <div className="bg-rose-200 rounded-xl h-20 text-center pt-6 font-bold text-xl">Roma</div>
                        <div className="bg-rose-400 rounded-xl h-20 text-center pt-6 font-bold text-xl">Moskow</div>
                        <div className="col-span-2 bg-purple-400 rounded-xl h-20 text-center pt-6 font-bold text-xl">Las Vegas</div>
                    </div>

                    {/* <h1 className='text-5xl text-center py-20 font-extrabold'>Bucket List</h1> */}
                </section>
            </main>
        </div>
    )
}

export default Town