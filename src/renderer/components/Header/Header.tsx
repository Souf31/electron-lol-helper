//@ts-nocheck

import React from 'react'

import './Header.css'

import iconOPGG from "../../../../assets/opgg-logo-square.svg";
import iconLOL from "../../../../assets/img-sidebar-lol.svg";
import iconSearch from "../../../../assets/icon-search.svg"
import iconChat from "../../../../assets/profileIcon.jpg"
import iconMinimize from "../../../../assets/icon-minus.svg"
import iconClose from "../../../../assets/icon-close.svg"
import iconSidebar from "../../../../assets/icon-mini.svg"

function Header() {
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
          <div className="profile-image-wrapper">
            <img className="info-profile-image" src={iconChat} alt="thumbnail"/>
          </div>

          <div className="account">
            <div className="summoner-name">
            <div className="info-summoner-name">Login First</div>
            </div>
            <div className="text-account-wrapper">
              <div className="text-account">LoL Account</div>
            </div>
          </div>
        </div>
      </div>

      <div className="title-bar-tools">
        <div className="tool-wrapper" id="minimize"><img alt="minimize" src={iconMinimize}/></div>
        <div className="tool-wrapper" id="close"><img alt="close" src={iconClose}/></div>
        <div className="tool-wrapper"><img alt="sidebar" src={iconSidebar}/></div>
      </div>

    </header>
  )
}

export default Header