import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import {motion} from "framer-motion"


const Cards = ({data, reference}) => {
  return (

    <motion.div 
    drag
    dragConstraints={reference}
    whileDrag={{scale : 1.2}}
    dragElastic={0.1}
    dragTransition={{bounceStiffness: 100, bounceDamping: 30}}
    className='relative w-60 h-72 rounded-[45px] bg-black/60 text-white px-8 py-10 overflow-hidden'>
      
      <FaRegFileAlt/>

      <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
      <div className='absolute bottom-0 left-0 w-full'>
        <div className='flex items-center justify-between mb-3 py-3 px-8'>
          <h5>{data.fileSize}</h5>
          <span className='w-5 h-5 bg-light-blue-200 rounded-full flex items-center justify-center'>
            {data.close ? <IoCloseSharp/> : <FiDownload/>}
          </span>
        </div>

        {data.tag.isOpen ? (
          <div className={`w-full py-4 ${data.tag.tagColor === "blue" ? 'bg-light-blue-200' : "bg-green-500"} flex items-center justify-center`}>
          <h3 className='text-md'>{data.tag.tagTitle} </h3>
        </div>
        ) : null}
        
      </div>
      
    </motion.div>

  )
}

export default Cards