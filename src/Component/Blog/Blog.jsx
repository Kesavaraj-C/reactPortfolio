import React from 'react'
import './Blog.css'
import { motion } from 'framer-motion'

const Blog = (props) => {
  
  return (  
    <motion.div className='Blog_contentBox' 
      initial={{opacity:0,y:"-50%"}}
      whileInView={{opacity:1,y:"0%"}}
      transition={{duration:1}}
    >
        <div className="Blog_image">
            <img src={props.Blogimage} alt="" />
        </div>
        <div className="Blog_contentDetails">
        <h5>{props.topic}</h5>
        <p>{props.content}</p>
        <span>Read More</span>
    </div>
    </motion.div>
  )
}

export default Blog