import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ArrowTopRightOnSquareIcon, XMarkIcon} from '@heroicons/react/24/solid'
import {motion} from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  title: string,
  short:string,
  description:[object],
  link:string,
  image:string
  bgColor:string
  textcolor:string
}


const Work = ({title, short, image, textcolor, link}:Props) => {

  return (<>
  <Link href={`/${link}`}>
    <motion.div
    initial={{ opacity: 0, y: 15}}
    animate={{ opacity: 1, y:0}}
    transition={{delay: 0.65}}
    className="group aspect-square w-full rounded-3xl"
    >

<div className="relative h-72 sm:h-96 md:h-96 w-full">
          <Image src={image} alt={title} fill className="object-cover rounded-3xl shadow-xl"/>
        </div> 
    
        <div className="flex justify-between px-3 lg:px-8 pt-8">
        <div>
        <h2 className="text-2xl lg:w-96 font-light mx-2 group-hover:underline w-full">{title}</h2>
        </div>
        <div>
            <button className="p-4 bg-white rounded-full hidden lg:inline"><ArrowTopRightOnSquareIcon className="h-5 w-5" /></button>
        </div>
        </div>


    </motion.div>
    </Link>
    </>
  )
}

export default Work