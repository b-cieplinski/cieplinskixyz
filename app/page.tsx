"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar'
import Header from '@/components/Header'
import Work from '@/components/Work'
import Contact from '@/components/Contact'
import {motion} from "framer-motion"
import Translations from '@/components/Translations'
import Stack from '@/components/Stack'
import { gql, useQuery } from '@apollo/client'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  works: any
}

const GET_WORK = gql`
query ListAppWorks {
    listAppWorks {
      data{
        id
        title
        content
        slug
        thumbnail
        coverPhoto
        summary
      }
    }
  }`;


export default function Home() {
  const { loading, error, data } = useQuery(GET_WORK, { ssr: true });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data.listAppWorks.data)
  return (
    <main className="">
      <NavBar/>
      <Header/>
      <motion.div
    initial={{ opacity: 0, y: 15}}
    animate={{ opacity: 1, y:0}}
    transition={{delay: 0.50}}
    >
      <h2 id="software" className="text-xl mb-4 ml-8 md:ml-4 mt-5">App Work</h2>
    </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 lg:gap-x-6 px-6 md:px-0 mx-4">

{
  data.listAppWorks.data.map((work:any)=> (
    <Work key={work.title} title={work.title} short={work.summary} description={work.content} link={work.slug} image={work.thumbnail} bgColor={''} textcolor={''} />
  ))
}
            

      </div>

      <Contact/>
    </main>
  )
}