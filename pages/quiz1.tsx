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
          Hi! Get To Know Me
        </h1>
        <h1 className="text-green-400 text-6xl font-bold">
          Naufal Ihza
        </h1>

        <p className="mt-3 text-2xl">
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            Personal Website
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="/quiz1/profile"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-green-400 focus:text-green-400 group/d"
          >
            <h3 className="text-2xl font-bold group-hover/d:animate-bounce transition">Profile &rarr;</h3>
            <p className="mt-4 text-xl group-hover/d:animate-bounce transition">
              Get to know me here!
            </p>
          </a>

          <a
            href="/quiz1/hometown"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-green-400 focus:text-green-400 group/a"
          >
            <h3 className="text-2xl font-bold group-hover/a:animate-bounce transition">Hometown &rarr;</h3>
            <p className="mt-4 text-xl group-hover/a:animate-bounce transition">
              Wanna know where do I come from?
            </p>
          </a>

          <a
            href="/quiz1/food"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-green-400 focus:text-green-400 group/b"
          >
            <h3 className="text-2xl font-bold group-hover/b:animate-bounce transition">Food &rarr;</h3>
            <p className="mt-4 text-xl group-hover/b:animate-bounce transition">
              Yummy local food that I approved!
            </p>
          </a>

          <a
            href="/quiz1/tourist"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-green-400 focus:text-green-400 group/c"
          >
            <h3 className="text-2xl font-bold group-hover/c:animate-bounce transition">Tourist &rarr;</h3>
            <p className="mt-4 text-xl group-hover/c:animate-bounce transition">
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
          <a href="https://github.com/NaufalIhza17">
            <Image src="/github.png" alt="Vercel Logo" width={32.4} height={7.2} />
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