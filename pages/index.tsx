import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Naufal Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        
        <h1 className="text-6xl font-bold">
          Hi! Get To Know Me,{' '}
          <span className="text-green-400">
            Naufal Ihza
          </span>
        </h1>

        {/* NAVBAR START */}

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>

        {/* NAVBAR END */}

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="/hometown"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-green-400 focus:text-green-400"
          >
            <h3 className="text-2xl font-bold">Profile &rarr;</h3>
            <p className="mt-4 text-xl">
              Get to know me here!
            </p>
          </a>

          <a
            href=""
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-green-400 focus:text-green-400"
          >
            <h3 className="text-2xl font-bold">Hometown &rarr;</h3>
            <p className="mt-4 text-xl">
              Wanna know where do I come from?
            </p>
          </a>

          <a
            href=""
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-green-400 focus:text-green-400"
          >
            <h3 className="text-2xl font-bold">Food &rarr;</h3>
            <p className="mt-4 text-xl">
              Yummy food that I approved!
            </p>
          </a>

          <a
            href=""
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-green-400 focus:text-green-400"
          >
            <h3 className="text-2xl font-bold">Tourist &rarr;</h3>
            <p className="mt-4 text-xl">
              Saving my whole life for this one...
            </p>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <p className="flex items-center justify-center gap-2">
          Find me on{' '}
          <a href="https://www.instagram.com/ihzasyahzada/">
            <Image src="/instagram.png" alt="Vercel Logo" width={32.4} height={7.2} />
          </a>
          <a href="https://www.instagram.com/ihzasyahzada/">
            <Image src="/twitter.png" alt="Vercel Logo" width={32.4} height={7.2} />
          </a>
          <a href="https://www.linkedin.com/in/m-naufal-ihza-syahzada-b266a9217/">
            <Image src="/linkedin.png" alt="Vercel Logo" width={32.4} height={7.2} />
          </a>
        </p>
      </footer>
    </div>
  )
}

export default Home
