//@ts-nocheck

import React from 'react'
import './InGame.css'


import imgIngame from '../../../../../public/assets/lol-loading.png'

function InGame() {
  return (
    <div className='main' style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', color:'white', fontSize:'16px'}}>
      <img width={600} height={332} style={{borderRadius: '12px', marginBottom:'48px'}} src={imgIngame}/>
      <div>
        On the game loading screen, it will switch to the <span style={{color: 'rgb(255,142,5', fontWeight: 'bold'}}>In-Game</span> page.
      </div>
      <div style={{marginTop: '8px', fontSize: '14px', color :'rgb(123,122,142'}}>
        P.S. It also works when you spectate a friend's game.
      </div>
    </div>
  )
}
export default InGame
