//@ts-nocheck

import React from 'react'
import { Link } from 'react-router-dom';




import './Header.css';

import iconOPGG from "../../../../public/assets/opgg-logo-square.svg";
import iconLOL from "../../../../public/assets/img-sidebar-lol.svg";
import iconSearch from "../../../../public/assets/icon-search.svg"
import iconChat from "../../../../public/assets/profileIcon.jpg"
import iconMinimize from "../../../../public/assets/icon-minus.svg"
import iconClose from "../../../../public/assets/icon-close.svg"
import iconSidebar from "../../../../public/assets/icon-mini.svg"
import { NONAME } from 'dns';




function Header() {

  const windowCommand = (arg : string) => {
    window.electron.ipcRenderer.windowCommand(arg);
  };

  return (
    <header id='app-header-win' className='app-header'>

      <div className='game-select'>
        <img width="32px" height="32px" alt="icon" src={iconOPGG} />
        <img width="24px" height="24px" alt="icon" src={iconLOL} style={{marginLeft: '8px'}} />
        <div style={{marginLeft: '4px', fontSize: '12px', fontWeight: 'normal'}}>League of Legends</div>
      </div>

      <div className="user-profile">
        <div className="summoner-search">
          <input type="text" disabled className="summoner-search-input" placeholder='Search a Summoner' />
          <img alt="icon" src={iconSearch} />
        </div>
        <div className="account-info account-info-win">
        <Link to={"/"} style={{textDecoration: 'none', color : '#fff'}}><div className="profile-image-wrapper">
            <img className="info-profile-image" src='https://opgg-static.akamaized.net/images/profile_icons/profileIcon5246.jpg?image=q_auto:best,w_100&v=1518361200' alt="thumbnail"/>
          </div></Link>

          <div className="account">
            <div className="summoner-name">
            <Link to={"/"} style={{textDecoration: 'none', color : '#fff'}}><div className="info-summoner-name">Soùf</div></Link>
            </div>
            <div className="text-account-wrapper">
              <div className="text-account">LoL Account</div>
            </div>
          </div>
        </div>
      </div>

      <div className="title-bar-tools">
        <div className="tool-wrapper" id="minimize" onClick={() => windowCommand('minimize')}><img alt="minimize" src={iconMinimize}/></div>
        <div className="tool-wrapper" id="close" onClick={() => windowCommand('close')}><img alt="close" src={iconClose}/></div>
        <div className="tool-wrapper"><img alt="sidebar" src={iconSidebar}/></div>
      </div>

    </header>
  )
}

export default Header
