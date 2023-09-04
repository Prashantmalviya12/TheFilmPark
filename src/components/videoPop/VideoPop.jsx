import React from 'react'
import ReactPlayer from 'react-player/youtube'
import './VideoPop.css'

function VideoPop({show,setShow,videoId,setVideoId}) {
    const hidePopUp = () =>{
        setShow(false)
        setVideoId(null);
    }
  return (
    <div className={`videoPop ${show ? "visible":""}`}>
       <div className="opacityLayer" onClick={hidePopUp}></div>
        <div className="videoPlayer">
            <span className="closeBtn" onClick={hidePopUp}>
                close
            </span>
           <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
            width="100%"
            height="100%"
           />
       </div>
    </div>
  )
}

export default VideoPop