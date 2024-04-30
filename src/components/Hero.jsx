// import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";

const Hero = () => {
  return (
    <section className='bg-bg'>
        <div id="home" className="h-[90vh] grid grid-cols-1 md:grid-cols-10 xl:max-w-[2400px] l:max-w-[1200px] mx-auto">
            <div className="md:col-span-5 flex items-center justify-center text-primary-100">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-5xl xl:text-7xl font-bold">Bienvenidos!</h1>
                    <p className="text-2xl xl:text-4xl">Explora la innovación 3D.</p>
                    <p className="text-2xl xl:text-4xl">Descubre nuestra comunidad.</p>
                    <div className="flex items-center justify-center gap-10 text-2xl xl:text-6xl">
                        <a href="https://twitter.com/shar3d_2024">
                            <BsTwitterX className="transition-transform hover:scale-125" />
                        </a>
                        <a href="https://www.facebook.com/people/Shar3d/61558534868827/">
                            <FaFacebook className="transition-transform hover:scale-125" />
                        </a>
                        <a href="https://www.twitch.tv/shar3d_2024">
                            <FaTwitch className="transition-transform hover:scale-125" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCA-3C2FB2mZB-jY1V3KGHnQ">
                            <FaYoutube className="transition-transform hover:scale-125" />
                        </a>
                        <a href="https://www.tiktok.com/@shar3d_2024">
                            <FaTiktok className="transition-transform hover:scale-125" />
                        </a>
                        <a href="https://www.instagram.com/shar3d_2024/">
                            <FaSquareInstagram className="transition-transform hover:scale-125" />
                        </a>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <a href="#" className="relative flex h-[50px] w-40 rounded-xl items-center justify-center overflow-hidden bg-primary-200 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-primary-200 hover:shadow-primary-200 hover:before:border-[25px]">
                            <span className="relative z-10">Descubre más</span>
                        </a>
                        <a href="#" className="relative flex h-[50px] w-40 rounded-xl items-center justify-center overflow-hidden bg-primary-200 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-primary-200 hover:shadow-primary-200 hover:before:border-[25px]">
                            <span className="relative z-10">Contáctanos</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="md:col-span-5 flex items-center justify-center p-12">
                    <img src="hero.png"className="h-30 object-cover"/>
            </div>
        </div>
    </section>
  )
}

export default Hero