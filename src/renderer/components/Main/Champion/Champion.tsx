import React from 'react';
import './Champion.css'

import videoMP4 from '../../../../../public/assets/video-champion.mp4'

function Champion() {
  return (
    <div className='main' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height:'100%', flexDirection:'column', fontSize:'16px', color: 'rgb(221,221,221)'}}>
    <video width={600} height={337} autoPlay muted loop style={{marginBottom: '48px', borderRadius: '12px'}}>
      <source src={videoMP4} type='video/mp4' />
    </video>

    <div>
        When you pick a champion, it automatically switches to the <span style={{color: 'rgb(255,142,5', fontWeight: 'bold'}}>Champion</span> page.
      </div>
    </div>


  )
}
export default Champion
