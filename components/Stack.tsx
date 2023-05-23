import Image from 'next/image'
import React from 'react'

const Stack = ({name, logo, dot}:any) => {
  return (
    <div className="mx-auto">
        <div className="relative w-16 h-16">
            <Image src={logo} alt={name} fill className="object-cover bg-white"/>
        </div>
        <div className="flex my-2 space-x-0.5 text-center">
        <p className="text-xs font-semibold">{name}</p>
        <div className="w-1 h-1 relative my-0.5">
            <Image src={dot} alt={name} fill className="object-cover rounded-full"/>
        </div>
        </div>
    </div>
  )
}

export default Stack