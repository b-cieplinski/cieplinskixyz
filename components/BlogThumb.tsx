import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogThumb = ({image, title, description, link}:any) => {
  return (
    <Link href={`/blog/${link}`}>
    <div className="cursor-pointer group">
      <div className="h-56 w-full relative mb-2 ">
        <Image src={image} alt={title} fill className="object-cover rounded-3xl shadow-md"/>
      </div>
      <h2 className="text-xl font-light mx-2 group-hover:underline truncate">{title}</h2>
      <p className="text-xs line-clamp-3 text-zinc-600">{description}</p>
      <p></p>
    </div>
    </Link>
  )
}

export default BlogThumb