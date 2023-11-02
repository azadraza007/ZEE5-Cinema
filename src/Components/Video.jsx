import React from 'react'
import { useTodo} from '../Context/WatchContext'

function Video() {
     const{currWatch} = useTodo()
   // console.log(useTodo())
    console.log(currWatch)
  return (
    <div>
      <video src= {currWatch.video_url} controls width={'900px'}></video>
    </div>
  )
}

export default Video
