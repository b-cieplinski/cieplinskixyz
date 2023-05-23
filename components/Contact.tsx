import React from 'react'
import {motion, Variants} from "framer-motion"

const Contact = () => {
  const cardVariants: Variants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  return (
    <motion.div
    initial="offscreen"
    whileInView="onscreen"
    animate={{ opacity: 1, y:0}}
    transition={{delay: 0.45}}
    className="rounded-2xl bg-gradient-to-br from-yellow-50 from-60% via-sky-100 to-sky-200 p-10 my-6 mx-6 md:mx-0"
    id="contact">

        <div className="space-y-4">
        <h2 className="text-4xl font-semibold">Want to work together?</h2>
        <p>Feel free to reach out for collaborations or just a friendly hello</p>
        <p>brandon.cieplinski@live.co.uk</p>
        </div>
        <div className="flex items-end mt-20">
                <button className="py-3 px-10 rounded-full bg-gray-800 text-white font-semibold">Contact me</button>
                <button></button>
            </div>

    </motion.div>
  )
}

export default Contact