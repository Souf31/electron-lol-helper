import React from 'react'

import './MyPage.css';
import WinRatio from './SVG/WinRatio';
import Condition from './SVG/Condition';
import Laning from './SVG/Laning.jsx';
import iconLink from '../../../../../public/assets/icon-link.svg';

function MyPage() {
  return (
    <div className="main">
      <div className='main-container mypage'>

      <div className="mypage-top">

        <div className="mypage-top-bg" style={{backgroundImage: 'url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leblanc_0.jpg")'}}></div>

        <div className="mypage-top__top">

          <figure className="chart-two animate">
            <WinRatio />
            <div className="chart-inner">
              <div>65%</div>
              <div>win ratio</div>
            </div>
          </figure>
          <figure className="chart-two animate">
            <Condition />
            <div className="chart-inner">
              <div>S</div>
              <div>condition</div>
            </div>
          </figure>
          <figure className="chart-two animate">
            <Laning />
            <div className="chart-inner">
              <div>B+</div>
              <div>laning</div>
            </div>
          </figure>

        </div>

        <div className="mypage-top__bottom">

          <div className="mypage-top__bottom-seasons">
            <div>S2021 Gold III</div>
            <div>S2020 Gold III</div>
          </div>
          <div className="mypage-top__bottom-profile">
            <div className="mypage-top__bottom-profile-img">
              <img src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon4022.jpg?image=q_auto:best,w_100&v=1518361200"/>
              <div className="profile-level">139</div>
            </div>

            <div className="mypage-top__bottom-profile-info" style={{marginRight: '40px'}}>
            <div>Soùf
              <img src={iconLink}/>
            </div>

            <div style={{fontSize: '12px', marginTop: '4px'}}>
              <span style={{color: 'rgb(158,158,177)'}}>Ladder Rank</span>
              <span style={{color: 'rgb(83,131,232)'}}>910 626th</span>
            </div>

          </div>
          </div>



        </div>

      </div>

      <div className="mypage-bottom"></div>

      </div>
    </div>
  )
}

export default MyPage
