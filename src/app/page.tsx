import { Oswald } from "next/font/google"
import Image from "next/image"
import LocationSelection from "./(home)/LocationSelection"
import Events from "./(home)/Events"
import MusicMinisterSelection from "./(home)/MusicMinisterSelection"
import JoinUs from "./(home)/JoinUs"

const oswald = Oswald({ weight: ["300", "400", "500", "600", "700",], subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='h-[80vh] bg-primary flex flex-col justify-center overflow-hidden relative'>
        <Image src='/images/auth/auth-full.jpg' alt="praise" className="object-cover object-bottom absolute" fill />
        {/* <div className={`${oswald.className} bg-white text-7xl text-primary text-center font-bold scale-y-[4]`}>
          WELCOME TO THE PRAISE CENTER
        </div> */}
      </div>
      <div className="container mx-auto">
        <LocationSelection />
        <Events />
        <JoinUs />
      </div>
    </>
  )
}
