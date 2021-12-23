import React from 'react'
import './SideBar.css'

let imgs = [
  "https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=c_scale,q_auto,w_42&v=1626880099"
];

function SideBar() {
  return (
    <div className='side'>
      <div className="side-item">
        <div className="side-item-title">
          <h1>Spell Key Setting</h1>
        </div>

        <div className="side-href">
          <div className="side-item-setting">
            <img src={imgs[0]} alt="flash"/>
            <div className="side-item-setting-spell">D</div>
            <div className="side-item-setting-spell side-item-setting-spell-active">F</div>
          </div>
        </div>
      </div>

      <div className="side-separator"></div>

      <div className="side-main">
        <div className="side-item side-liveGame">
          <div className="side-item-title">
            <h1>Live Game</h1>
          </div>
          <div className="side-item-href">
            <a href="" className="side-href-item" draggable="false"></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
