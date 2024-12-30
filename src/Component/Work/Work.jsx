import React from 'react'
import './Work.css'
// import { motion } from 'framer-motion'

const Work = (props) => {
  return (
    <>
          <div  className="work_imageBox">
            <img src={props.img}></img>
          </div>
    </>
  )
}

export default Work