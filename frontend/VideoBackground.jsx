import React from 'react'
// import './src/assets/video/palms_-_19610 (540p).mp4'

export default function VideoBackground() {
  return (
    
    <div class="home">
        <video autoplay muted loop id='bg-video'>
        <source src="/src/assets/video/palms_-_19610 (540p).mp4" type="video/mp4" />
        </video>
    </div>
  )
}
