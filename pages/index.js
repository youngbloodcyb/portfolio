import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  const letters = "abcdefghijklmnopqrstuvwxyz";

  const handleMouseOver = (e) => {
    let i = 0;

    const interval = setInterval(() => {
      e.target.innerText = e.target.innerText
      .split("")
      .map((el, index) => {
        if(index < i) {
          return e.target.dataset.name[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(i >= e.target.dataset.name.length){ 
      clearInterval(interval);
    }
    
    i++;
    }, 100)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-black w-screen h-screen font-mono uppercase flex justify-center items-center'>
        <div className=''>
          <Link href="/me" className='text-white text-8xl'>
            <span data-name="hello, i'm cameron" onMouseOver={handleMouseOver}>hello, i'm cameron</span>
          </Link>
        </div>
      </main>
    </>
  )
}