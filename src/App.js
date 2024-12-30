import './App.css';
import './Component/Services/Services.css'
import './Component/Work/Work.css'
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Services from './Component/Services/Services';
import { IoIosLaptop } from "react-icons/io";
import { FaBullhorn } from "react-icons/fa";
import { IoUmbrellaSharp } from "react-icons/io5";
import { IoDiamondOutline } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import Work from './Component/Work/Work';
import image1 from './Assets/Images/1.jpg';
import image2 from './Assets/Images/2.jpg';
import image3 from './Assets/Images/3.jpg';
import image4 from './Assets/Images/4.jpg';
import image5 from './Assets/Images/5.jpg';
import image6 from './Assets/Images/6.jpg';
import Blog from './Component/Blog/Blog';
import Blogimage1 from './Assets/Images/Blog/1.jpg'
import Blogimage2 from './Assets/Images/Blog/2.jpg'
import Blogimage3 from './Assets/Images/Blog/3.jpg'
import Blogimage4 from './Assets/Images/Blog/4.jpg'
import Contact from './Component/Contact/Contact';
import { Swiper, SwiperSlide } from 'swiper/react';
import { calcLength, inView, motion,useScroll} from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../src/Component/Blog/swiper.css';
import { useInView } from 'react-intersection-observer';
// import required modules
import { Pagination } from 'swiper/modules';
import { useEffect, useRef,useState } from 'react';

function App() {
  let lap=IoIosLaptop

//  const {ref: myref,inView:myElementisVisible} = useInView({triggerOnce:false,threshold:0.2})
//   console.log("naa vanthutandaa",myElementisVisible)

  const [ref1,inView1]=useInView({triggerOnce:true,threshold:0.2})
  const [ref2,inview2]=useInView({threshold:0.1})
  // let image1 = image1
  // const myref = useRef();

  // const [myElementisVisible,setmyElementisVisible] = useState();
  // console.log('myElementisVisible',myElementisVisible)

  // useEffect(()=>{
  //       const observer = new IntersectionObserver((entries)=>{
  //         const entry = entries[0];
  //         setmyElementisVisible(entry.isIntersecting)
  // })
  // observer.observe(myref.current)
  // },[])
    const {scrollYprogess} = useScroll();

  return (
   <div className='App' data-aos="fade-down" >
     <Home
     />
     <About />
     <motion.div  ref={ref2} className="services_container" 
     initial={{opacity:0,x:"-10vw",y:'40px',}}
     whileInView={{opacity:1,x:'-0vw',y:'0px'}}
     transition={{duration:1,
     }}
     >
         <div className="services_heading">Services</div>
        <div className="services_options" >
     <Services 
     id={1}
     icon={<IoIosLaptop/>}
     title="Web Design"
     content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, illo? lorem"
     />
     <Services
     id={2}
      icon={<FaBullhorn/>}
      title="Web Design"
      content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, illo? lorem"
      />
     <Services
     id={3}
      icon={<IoUmbrellaSharp/>}
     title="Web Design"
     content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, illo? lorem"
     />
     <Services
     id={4}
     icon={<IoIosLaptop/>}
     title="Web Design"
     content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, illo? lorem"
     />
     <Services 
     id={5}
     icon={<IoDiamondOutline/>}
     title="Web Design"
     content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, illo? lorem"
     />
     <Services
     id={6}
     icon={<FaCamera/>}
     title="Web Design"
     content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, illo? lorem"
     />
      </div>
    </motion.div>
    <div >
      <motion.div className="work_container" ref={ref1} 
      // initial={{"100vw" : '-100vw'}}
      animate={{x:inView1 ? "-0vw":"10vw"}}
      transition={{
        duration:inView1 ? "2":'0'
      }}
      >
        <h1  className='work_heading'>Portfolio.</h1>
          <div className="workTypes">
                <li className="WorkImage work_img">ALL</li>
                <li className="WorkImage work_img">Brand</li>
                <li className="WorkImage work_img">Design</li>
                <li className="WorkImage work_img">Graphic</li>
        </div>
           <div className={!inView ?'image_div_animate' : 'image_div image_div_animate' } 
        // initial={{opacity:0,scale:0.5,y:"100vh"}}
        // whileInView={{opacity:1,scale:1,y:"-0vh"}}
        // transition={{duration:0.5,
        //   delayChildren:0.5
        // }}
        >
        <Work style="--index : 1"
          img = {image1}
          type = "Brand,All"
        />
        <Work style="--index : 2"
          img = {image2}
          type = "Brand,All"
        />
        <Work style="--index : 3"
          img = {image3}
          type = "Brand,All"
        />
        <Work style="--index : 4"
          img = {image4}
          type = "Brand,All"
        />
        <Work style="--index : 5"
          img = {image5}
          type = "Brand,All"
        />
        <Work style="--index : 6"
          img = {image6}
          type = "Brand,All"
        />
      </div>
      </motion.div>
    </div>
    <div>
       <div className='Blog_container'>
        <div className='Blog_heading'>Our Blog.</div>
        <div className='Blog_element_box'>
        <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
        <SwiperSlide><Blog 
          Blogimage={Blogimage1}
          topic="WordPress"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, eius."
          /></SwiperSlide>
        <SwiperSlide>
          <Blog
        Blogimage={Blogimage2}
          topic="Trends"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, eius."/>
        </SwiperSlide>
        <SwiperSlide>
        <Blog 
          Blogimage={Blogimage3}
          topic="Themeforest"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, eius."
          />
        </SwiperSlide>
        <SwiperSlide>          
          <Blog 
          Blogimage={Blogimage4}
          topic="Trends"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, eius."
          />
        </SwiperSlide>
      </Swiper>
        </div>
       </div>
    </div>
    <Contact />
  </div>
 );
}

export default App;

