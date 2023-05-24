"use client"
import { gql, useQuery } from '@apollo/client'
import { ArrowLeftCircleIcon  } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { NextPage } from 'next'
import NavBar from '../../components/NavBar'
import Contact from '../../components/Contact'
import { RichTextRenderer } from "@webiny/react-rich-text-renderer";


type Props = {
    params: {
      slug: string
    }
  }

const GET_WORK = gql`
query GetAppWork($slug: String!) {
    getAppWork(where: {slug: $slug}) {
        data {
            title
            content
            coverPhoto
            thumbnail
            slug
            gallery
        }
    }
}
`;

const content = [
    {
      type: "paragraph",
      data: {
        text: "A well written paragraph of text can bring so much joy!",
        textAlign: "left",
        className: ""
      }
    }
  ];

const Job = ({ params: {slug} }: Props) => {


const { loading, error, data } = useQuery(GET_WORK, {
    variables: { slug }, ssr: true,
  },
  );


if (loading) return <div className="grid grid-cols-12">
    <div className="col-span-9">
    Loading
    </div>
    </div>;

if (error) return <p>Error : {error.message}</p>;

return(
<>
<NavBar/>
<div className='my-6 mx-4 lg:mx-0'>

    <div className="h-96 lg:h-[600px] w-full relative ">
        <Image src={data.getAppWork.data.coverPhoto} alt={data.getAppWork.data.title} fill className="object-cover rounded-3xl shadow-md"/>
    </div>
    <div className="max-w-xl mx-auto my-8 space-y-8">
<h2 className="my-4 text-5xl font-light">{data.getAppWork.data.title}</h2>
<RichTextRenderer data={data.getAppWork.data.content} />
</div>
<div className="grid grid-cols-1 lg:grid-cols-2">
{
data.getAppWork.data.gallery.map((g:any)=> (
<div key={g}className="w-full h-[1000px] relative max-w-xl mx-auto my-8">
<Image src={g} alt="" fill className="object-cover rounded-3xl shadow-md"/>
</div>
))
}
</div>

</div>
<div className="space-x-2 flex ml-3 mx-auto">
    <ArrowLeftCircleIcon className="w-6 h-6"/>
    <p>Back to overview</p>
</div>
<Contact/>
</>
  )
}

export default Job