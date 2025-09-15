import React from 'react'
import './Services.css'
import {motion} from 'framer-motion'
import { useInView} from 'react-intersection-observer'

const Services = (props) => {
  const[ref1,inview1] = useInView({threshold:0.1});
  let data = props
  console.log(data.id)
  // const dla = ()=>{
    
  // }
  return (
    <>
      <motion.div className="services_optList1" ref={ref1}
        initial={{opacity:0,y:-100,x:-50}}
        animate={inview1 ? {opacity:1,y:0,x:0} :{}}
        transition={{
          duration:2
        }}
        style={inview1 ? {transitionDelay:`${data.id*.01}ms`,transitionDuration:3,scale:1}:{}}
      >  
        <div  className='services_list1'>{data.icon}</div>
        <h2>{data.title}</h2>
        <p>{data.content}</p>
      </motion.div>
      
    </>
  )
}

export default Services