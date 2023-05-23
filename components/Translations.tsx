import { ArrowTopRightOnSquareIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Link from 'next/link'

const Translations = ({title, logo, description, link}:any) => {

  return (
    <>
    <Link href={`/translations/${link}`}>
    <div className="w-full rounded-3xl hover:bg-zinc-100 hover:cursor-pointer h-44 px-8 py-6 items-center flex justify-between">
        <h3 className="font-bold text-xl line-clamp-3">{title}</h3>
        <div>
            <div className="relative h-12 w-12 mb-4 mx-auto">
                <Image src={logo} alt="" fill className="object-contain rounded-full"/>
            </div>
        <button className="p-3 bg-white rounded-full border"><ArrowTopRightOnSquareIcon className="h-5 w-5" /></button>
        </div>
    </div>
    </Link>

    </>
  )
}

export default Translations