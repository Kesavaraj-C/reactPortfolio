import React,{useState} from 'react'
import './Contact.css'
import { FaLocationArrow } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  // const [address, setaddress] = useState("")
  // const [first, setfirst] = useState(false)
  // console.log(address);
  // function datas(params) {
  //   setfirst(!first)
  // }
  const[ref1,inview1]=useInView({threshold:0.4})

    const [output,updateout] = useState("")
    console.log("")
  return (
    <>
      <div className='contact_container' ref={ref1}>
        <div className="contact_hw">
        <motion.div className='contact_heading' 
          initial={{opacity:0,y:"-100px"}}
          animate={inview1 ?  {opacity:1,y:"0px"} : {}}
          transition={{duration:1,
          }}
        >Contact Us.</motion.div>
          <div className="contact_box">
                <motion.div className="contact_options" initial={{opacity:0,x:"-100vw"}} animate={inview1 ? {opacity:1,x:"0vw"} :{}} transition={{duration:1}}>
                    <span><FaLocationArrow className='contact_icons'/></span>
                    <h3 className='contact_type'>Address</h3>
                    {/* <input type="text" onChange={(e)=>{setaddress(e.target.value)}}/>
                  {first &&   <p>{address}</p>}
                  <button onClick={datas}>click</button> */}
                  <p>Peelamedu - Coimbatore 641004</p>
                </motion.div>
                <motion.div className="contact_options" initial={{opacity:0,y:"100vw"}} animate={inview1 ? {opacity:1,y:"0vw"} :{}} transition={{duration:1}}>
                    <span> <MdEmail className='contact_icons'/></span>
                    <h3 className='contact_type'>Email</h3>
                    <p>kesavaraj48@gamil.com</p>
                </motion.div>
                <motion.div className="contact_options" initial={{opacity:0,x:"100vw"}} animate={inview1 ? {opacity:1,x:"-0vw"} :{}} transition={{duration:1}}>
                    <span> <FaPhone className='contact_icons'/></span>
                    <h3 className='contact_type'>Phone</h3>
                    <p>91+ 12345567890</p>
                </motion.div>
          </div>
          <div className="contact_user">            
            <div className="contact_userinfo">
              <input type="text" className="contact_userinfos" onChange={(e)=>{updateout(e.target.value)}} placeholder='Name' />
              <input type="text" className="contact_userinfos" placeholder='Email'/>
            </div>
            
            <div className="contact_usermsg">
            <textarea name="" id="" className="contact_userMessage" rows={10} cols={20}>
                     Message
            </textarea>
              {/* <input type="text"  placeholder='Message' /> */}
              <button type='submit' className="contact_userSubmit"> Submit </button>
              <p>{output}</p>

            </div>
          </div>
          </div>
      </div>
    </>
  )
  
}

export default Contact