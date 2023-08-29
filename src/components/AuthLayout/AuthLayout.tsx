
import Image from "next/image";

function AuthLayout({ children }: { children: React.ReactNode }) {
  const LOGIN_LINK = '/auth/login'
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section
          className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
        >
          <Image
            alt="Auth Image"
            src="/images/auth/auth-full.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
            fill
            quality={100}
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href={LOGIN_LINK}>
              {/* <Image
                alt="Couple Photo"
                src="/images/footer-logo.png"
                width={229}
                height={55}
                quality={100}
              /> */}
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Praisify ✝
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Embracing His Grace, Elevating Our Voices: Let the resonance of our praises create an atmosphere of divine connection and transformation. 🙏✨
            </p>
          </div>
        </section>

        <main
          className="flex justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 md:overflow-y-auto h-screen"
        >
          <div className="max-w-xl lg:max-w-3xl lg:w-[25rem] my-auto">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                href="/"
              >
                {/* <Image
                  alt="Couple Photo"
                  src="/images/logo.png"
                  width={229}
                  height={55}
                  quality={100}
                /> */}
              </a>

              <h1
                className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
              >
                Welcome to Praisify
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Embracing His Grace, Elevating Our Voices: Let the resonance of our praises create an atmosphere of divine connection and transformation. 🙏✨
              </p>
            </div>
            {children}
          </div>
        </main>
      </div>
    </section>
  )
}

export default AuthLayout