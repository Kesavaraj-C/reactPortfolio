import React, { useEffect, useRef } from 'react'
import './About.css'
import { easeIn, easeInOut, motion,useAnimationControls} from "framer-motion"
import logo from "../../Assets/Images/hero.png" 
import { useInView } from 'react-intersection-observer'
const About = () => {

 
  const[ref1,inview1]=useInView({threshold:0.5})
  console.log("hello",inview1)
  // Use the hook to detect if the element is in view
    const animat = useAnimationControls(()=>{
      animat.start("view")
    });


  return (
    <>
    <div className="about_container" >
        <motion.div className="about_layer" 
                  ref={ref1}
        initial={{ opacity: 0 }}
        animate={inview1?{ opacity:1}:{}} // Animation triggers when in view
        transition={{ duration: 2 }}>
            <motion.div className="about_left" 
              varient={{
                view : {opacity:1,y:0,x:-0}
              }}
              initial={{opacity:0,y:100,x:-100}}
              animate={inview1 ? {opacity:1,y:0,x:-0,scale:1.2}:{}}
              transition={{duration:1}}
            >
                <img src={logo} alt="" />
            </motion.div>
            <div className="about_right">
              <h2>About Me</h2>
              <p>UI / UX Designer & Web Developer</p>
              <p>I am <span className="About_name">Jerry Daniels</span>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever It has survived not only five centuries, but also the leap into electronic but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
              <div className="about_skill skill_details">
                <div className="skill_items">
                  <div className="skill_progress">
                    <span>Wep Designer</span>
                    <motion.div className="skill_progress_status1" initial={{width:"25%"}} animate={inview1 ? {width:"95%"}:{}} transition={{delay:0.5,duration:0.5,ease:easeIn}}>
                      <p>95%</p>
                    </motion.div>
                  </div>
                </div>
                <div className="skill_items">
                  <div className="skill_progress">
                    <span>Branding</span>
                    <motion.div className="skill_progress_status2" initial={{width:"20%"}} animate={inview1 ? {width:"80%"}:{}} transition={{delay:0.5,duration:0.5,ease:easeIn}}>
                      <p>80%</p>
                    </motion.div>
                  </div>
                </div>
                <div className="skill_items">
                  <div className="skill_progress">
                    <span>Development</span>
                    <motion.div className="skill_progress_status3" initial={{width:"22%"}} animate={inview1 ? {width:"90%"}:{}} transition={{delay:0.5,duration:1,ease:easeIn}}>
                      <p>90%</p>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="about_cv">
                <motion.button className="cv_download"
                  whileTap={{scale:0.7}}
                >Download c.v</motion.button>
                <button className="cv_contact_me">Contact Me</button>
              </div>
            </div>
        </motion.div>
    </div>
    </>
  )
}

export default About