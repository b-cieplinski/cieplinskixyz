"use client"
import React from 'react'
import {motion} from "framer-motion"
import { Link, animateScroll as scroll } from "react-scroll";
import { useRouter } from 'next/navigation';


const NavBar = () => {
  const router = useRouter()
  return (
    <div className="justify-between my-8 px-4 hidden md:flex">
      <motion.a
        initial={{ opacity: 0, y: 15}}
        animate={{ opacity: 1, y:0}}
        transition={{delay: 0.35}}
        className="text-xl cursor-pointer"
        onClick={() => router.push('/')}
        >Brandon Cieplinski
        </motion.a>

        <div className="space-x-16 flex">
  
        <Link to="software" smooth={true} onClick={() => router.push('/#software')}>
        <motion.div
        initial={{ opacity: 0, y: 15}}
        animate={{ opacity: 1, y:0}}
        transition={{delay: 0.35}}
        className="cursor-pointer"
        >App Work
        </motion.div>
        </Link>

        {/* <motion.a
        initial={{ opacity: 0, y: 15}}
        animate={{ opacity: 1, y:0}}
        transition={{delay: 0.40}}
        className="cursor-pointer"
        onClick={() => router.push('/blog')}
        >Blog
        </motion.a> */}

        <Link to="contact" smooth={true}>
        <motion.div
        initial={{ opacity: 0, y: 15}}
        animate={{ opacity: 1, y:0}}
        transition={{delay: 0.45}}
        className="cursor-pointer"
        >Contact
        </motion.div>
        </Link>
        </div>
    </div>
  )
}

export default NavBar