import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


const Town: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                <h1 className="text-6xl font-bold">
                    My full name is Mochammad{' '}
                    <span className="text-green-400">
                        Naufal Ihza
                    </span>
                    {' '}Syahzada
                </h1>
            </main>
        </div>
    )
}

export default Town