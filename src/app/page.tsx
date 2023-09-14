import { Oswald } from "next/font/google"
import Image from "next/image"
import LocationSelection from "./(home)/LocationSelection"
import Events from "./(home)/Events"
import MusicMinisterSelection from "./(home)/MusicMinisterSelection"
import JoinUs from "./(home)/JoinUs"
import DefaultLayout from "./(layout)/DefaultLayout/DefaultLayout"

const oswald = Oswald({ weight: ["300", "400", "500", "600", "700",], subsets: ['latin'] })

export default function Home() {
  return (
    <DefaultLayout>
      <div className='h-[80vh] bg-primary flex flex-col justify-center overflow-hidden relative'>
        <Image src='/images/auth/auth-full.jpg' alt="praise" className="object-cover object-bottom absolute" fill />
      </div>
      <div className="container mx-auto">
        <LocationSelection />
        <Events />
        <JoinUs />
      </div>
    </DefaultLayout>
  )
}
