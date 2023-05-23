import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"

const Header = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 my-6 gap-y-4 md:gap-x-6 px-6 md:px-0">
        <motion.div
        initial={{ opacity: 0, y: 15}}
        animate={{ opacity: 1, y:0}}
        transition={{delay: 0.45}}
        className="order-2 md:order-1 p-14 md:col-span-4 bg-gradient-to-tr from-orange-200 via-slate-200 to-slate-100 rounded-3xl"
        >

            <h1 className="font-semibold text-2xl md:text-5xl">Hello!<br/> I’m Brandon, a web developer.</h1>
            <p className="my-auto flex items-center font-light h-36 md:h-32">I set myself a goal of bringing amazing things to life. Through the use of technology, I am able to create user-centric, delightful, and human experiences. Today I'm presenting you with my portfolio mostly built around React. This work is a personal statement about how rapidly things are evolving. Enjoy.</p>
            <div className="flex items-end my-auto">
                <button className="py-4 px-10 rounded-full bg-gray-800 text-white font-semibold">Contact me</button>
                
            </div>

        </motion.div>
        
        <motion.div
        initial={{ opacity: 0, y: 15}}
        animate={{ opacity: 1, y:0}}
        transition={{delay: 0.25}}
        className="relative w-full h-80 md:h-[500px] md:w-full md:col-span-2 order-1 md:order-2"
        >
            <Image src="/profile.jpeg" alt="" fill className="object-cover rounded-3xl"/>
        </motion.div>
    </div>
  )
}

export default Header