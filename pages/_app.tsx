import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Outfit, Paytone_One } from '@next/font/google'
import { useEffect, useRef, useState } from 'react'
import Scroll from '@/components/Scrollbar'
import Image from 'next/image'
import AnimatedLoader from '@/components/AnimatedLoader'
import Link from 'next/link'
const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin']
})
const paytone = Paytone_One({
  weight: "400",
  variable: "--font-paytone",
  subsets: ["latin"]
})
export default function App({ Component, pageProps }: AppProps) {
  const trailer = useRef<HTMLDivElement>(null);
  const [interacting, setInteracting] = useState(false);
  const [showLoader, setShowLoader] = useState(true)
  const content = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (content?.current) {
      content.current.animate([
        { transform: 'translateY(10%)', opacity: 0 },
        { transform: 'translateY(0)', opacity: 1 }
      ],
        {
          delay: 3800,
          duration: 500,
          fill: "forwards",
          easing: "ease-in"
        })
    }
  }, []);
  setTimeout(() => {
    setShowLoader(false)
  }, 4500)
  useEffect(() => {
    window.onmousemove = e => {
      if (e?.target) {
        const target = e.target as HTMLElement
        const interactable = target.closest(".interactable");
        setInteracting(interactable !== null);
        animateTrailer(e)
      }
    }
  })
  const animateTrailer = (e: MouseEvent) => {
    if (trailer && trailer.current) {
      const x = e.pageX - trailer.current.offsetWidth / 2, y = e.pageY - trailer.current.offsetHeight / 2;
      const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 2 : 1})`,
      }
      trailer.current.animate(keyframes, {
        duration: 500,
        fill: "forwards"
      })
    }
  }
  return (
    <main className={`${outfit.variable} ${paytone.variable} font-sans container mx-auto  cursor-none pb-3`}>
      <div ref={trailer} className={`trailer h-8 w-8 ${interacting ? 'bg-white/50' : 'bg-white'}  fixed z-[10000] top-0 left-0 rounded-full pointer-events-none opacity-0 transition-opacity  duration-500  ease-in  flex items-center justify-center`}>
        <div className={`icon text-black ${interacting ? 'opacity-100' : 'opacity-0'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>

        </div>


      </div>
      {showLoader && <AnimatedLoader />}
      <div ref={content} className='flex flex-col opacity-0'>
        <header className=' py-12 flex justify-between mb-12'>
          <div className="logo">
            <Link href={"/"}>
              <Image
                src="/logo/logo.svg"
                height={150}
                width={150}
                alt="logo"
                priority
              />
            </Link>
          </div>
          <div className="nav">
            <nav>
              <p className='interactable font-medium decoration-dotted underline underline-offset-4'>
                <Link href="/uses">uses</Link>
              </p>
            </nav>
          </div>
        </header>
        <Component {...pageProps} />
      </div>
      <footer>
        <p className=' text-right text-[10px] text-gray-900/50 '>
          © {new Date().getFullYear()} Akash Anand Mane
        </p>
      </footer>
    </main>
  )
}

