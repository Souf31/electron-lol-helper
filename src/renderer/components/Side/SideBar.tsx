import './SideBar.css'

import MultiSearchSvg from "./MultiSearchSvg";
import ChampionSvg from "./ChampionSvg";
import InGameSvg from "./InGameSvg";

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
          <div className="side-href">
            <a href="" className="side-href-item side-href-item-active" draggable="false">
                <MultiSearchSvg fill="#fff"/>
                <span className='side-href-item-title'>Multi-Search</span>
            </a>
            <a href="" className="side-href-item" draggable="false">
                <ChampionSvg fill="#7b7a8e"/>
                <span className='side-href-item-title'>Champion</span>
            </a>
            <a href="" className="side-href-item" draggable="false">
                <InGameSvg fill="#7b7a8e"/>
                <span className='side-href-item-title'>In-Game</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
