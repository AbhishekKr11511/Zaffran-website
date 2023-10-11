import React from 'react'
import { useState,useRef } from 'react'
import './intro.css'
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
// import { video01, video04 } from '../../constants/images'

const Intro = ({video}) => {

  const [playvideo, setplayvideo] = useState(false);
  const vidRef = useRef();

  const handleVideo = () =>{
    setplayvideo((prePlayvideo) => !prePlayvideo)

    if(playvideo){
      vidRef.current.pause();
    }
    else{
      vidRef.current.play();
    }
  }

  return (
    <div className='app__video'>
      <video src={video} loop muted ref={vidRef} type="video/mp4" controls={false}></video>
      <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay-circle flex__center' onClick={handleVideo}>
          {playvideo? <BsPauseFill color="var(--color-white)" fontSize={80}/>
          :<BsFillPlayFill color="var(--color-white)" fontSize={80}/>
          }
        </div>
      </div>
    </div>
  )
}
export default Intro