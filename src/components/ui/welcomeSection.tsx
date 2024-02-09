'use client';
import Image from "next/image";
import { Button } from "./button";
import { TypeAnimation } from 'react-type-animation';

export default function WelcomeSection() {
    return (
      <section className="mb-28">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                <h1 className="text-white mb-3 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
                    <div className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-500">Kia ora, I&apos;m{" "}</div>
                    <TypeAnimation
                        sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Tutere Durie',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'a Software Engineer',
                        1000,
                        'Māori',
                        1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        // style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-gray-400 text-base sm:text-lg mb-6 lg:text-xl">
                    Currently working at the Bank of New Zealand
                </p>
                <div>
                    <Button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-green-500 hover:bg-slate-200 text-white"> Hire Me</Button>
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-green-500 hover:bg-slate-800 text-white mt-2"> 
                        <span className="block bg-gray-800 hover:bg-slate-600 rounded-full px-5 py-2">Download CV</span>
                    </button>
                </div>    
            </div>
            <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-gray-700 w-[250px] h-[250px] relative">
                    {/* <Image
                    src={"/selfieImage.png.png"}
                    width={400}
                    height={500}
                    alt="selife image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    /> */}
                </div>
            </div>
        </div>
      </section>
    )
  }