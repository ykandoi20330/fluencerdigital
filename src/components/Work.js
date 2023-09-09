import React, { useEffect, useState } from 'react'
import bikeLogo from './Myple.png'
import firstLogo from './Garol Advisory.png'
import thirdLogo from './Sandesh Foundation.png'
// import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
  Link,
} from "react-router-dom";
import Work1 from './Work1'
import Work0 from './Work0'
import Work2 from './Work2'

const Work = () => {

  // for animation
  // const { ref: myRef, inView: myElementIsVisible } = useInView();

  //AOS animation

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, [])

  //JavaScript code for change the div Content
  const [showtab, setShowtab] = useState("part1");

  return (
    <>
      <div className='works cont' style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '40px'
      }}>
        <div className="" data-aos="slide-left"> {/* {`${'hid'} ${myElementIsVisible? 'show': 'hid'}`} ref={myRef}  */}
          <div>
            <h3 className='h3title' style={{ color: 'white', fontSize: '2.75rem', marginTop: '10%' }}>Our Works<span style={{ color: 'orangered' }}>.</span></h3>
          </div>
        </div>
        <div>
          <i className="material-icons mx-3" style={{ color: '#fff' }}><Link className='slide' to='/' onClick={() => setShowtab("part1")}>&#xe5c4;</Link></i>
          <i className="material-icons mx-3" style={{ color: '#fff' }}><Link className='slide' to='/' onClick={() => setShowtab("part2")}>&#xe5c8;</Link></i>
        </div>
      </div>
      <div className="first">
      { showtab === "part1" && <Work0 title="1"/> }
      { showtab === "part2" && <Work1 title="2"/> }
      { showtab === "part3" && <Work2 title="3"/> }
      </div>
      <div className='logobtn'>
        <button className="Showbtn" onClick={() => setShowtab("part1")}><img className='btn1 back' style={{ width: '60%' }} src={firstLogo} alt="" /></button>
        <button className="Showbtn" onClick={() => setShowtab("part2")}><img className='btn2 back' style={{ width: '60%' }} src={bikeLogo} alt="" /></button>
        <button className='Showbtn' onClick={() => setShowtab("part3")}><img className='btn2 back' style={{ width: '60%' }} src={thirdLogo} alt="" /></button>
      </div>
    </>
  )
}

export default Work