//@ts-nocheck
import React from 'react';

import './MyPage.css';
import WinRatio from './SVG/WinRatio';
import Condition from './SVG/Condition';
import Laning from './SVG/Laning.jsx';
import Stats from './SVG/Stats.jsx';
import iconLink from '../../../../../public/assets/icon-link.svg';
import arrowIconPrev from '../../../../../public/assets/icon-arrow-prev.svg';
import arrowIconNext from '../../../../../public/assets/icon-arrow-next.svg';
import midIcon from '../../../../../public/assets/icon-position-MID-wh.svg';
import topIcon from '../../../../../public/assets/icon-position-TOP-wh.svg';
import GameList from './Components/GameList'

function MyPage() {
  return (
    <div className="main">
      <div className="main-container mypage">
        <div className="mypage-top">
          <div
            className="mypage-top-bg"
            style={{
              backgroundImage:
                'url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg")',
            }}
          ></div>

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
                <img src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon5246.jpg?image=q_auto:best,w_100&v=1518361200" />
                <div className="profile-level">139</div>
              </div>

              <div
                className="mypage-top__bottom-profile-info"
                style={{ marginRight: '40px' }}
              >
                <div>
                  Soùf
                  <img src={iconLink} />
                </div>

                <div style={{ fontSize: '12px', marginTop: '4px' }}>
                  <span style={{ color: 'rgb(158,158,177)' }}>
                    Ladder Rank{' '}
                  </span>
                  <span style={{ color: 'rgb(83,131,232)' }}>910 626th</span>
                </div>
              </div>

              <div className="mypage-top__bottom-profile-rank">
                <div className="mypage-section-title">Ranked Solo</div>
                <div className="mypage-top__bottom-profile-rank-contents">
                  <img src="https://opgg-static.akamaized.net/images/medals/platinum_1.png?image=q_auto:best,w_40&v=1" />
                  <div>
                    <div
                      style={{
                        fontWeight: 'bold',
                        fontSize: '14px',
                        color: '#fff',
                      }}
                    >
                      Gold I
                    </div>
                    <div>80 LP</div>
                  </div>

                  <div>
                    <div style={{ marginBottom: '2px' }}>48W 29L</div>
                    <div>62%</div>
                  </div>
                </div>
              </div>

              <div className="mypage-top__bottom-profile-rank">
                <div className="mypage-section-title">Ranked Solo</div>
                <div className="mypage-top__bottom-profile-rank-contents">
                  <img src="https://opgg-static.akamaized.net/images/medals/silver_1.png?image=q_auto:best,w_40&v=1" />
                  <div>
                    <div
                      style={{
                        fontWeight: 'bold',
                        fontSize: '14px',
                        color: '#fff',
                      }}
                    >
                      Gold I
                    </div>
                    <div>80 LP</div>
                  </div>

                  <div>
                    <div style={{ marginBottom: '2px' }}>48W 29L</div>
                    <div>62%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mypage-bottom">
          <div className="mypage-bottom-section">
            <div className="mypage-section-title">Tier Graph</div>
            <div className="recharts-responsive-container"></div>
          </div>

          <div className="mypage-bottom-section mypage-bottom-section__2">
            <div
              className="mypage-section-title"
              style={{ marginLeft: '14px' }}
            >
              Season Most Champions
            </div>
            <div>
              <div className="most-champions-wrapper">
                <div className="pager">
                  <img src={arrowIconPrev} alt="" />
                </div>

                <div className="most-champions">
                  <div className="most-champions-img">
                    <img
                      src="https://opgg-static.akamaized.net/images/lol/champion/Azir.png?image=c_scale,q_auto,w_54&v=1628647804"
                      alt=""
                    />
                  </div>
                  <div style={{ marginTop: '8px' }}>36W 23L</div>
                  <div
                    className="most-champions__kda"
                    style={{ color: 'rgb(148,148,148' }}
                  >
                    2.85:1 KDA
                  </div>
                </div>

                <div className="most-champions">
                  <div
                    className="most-champions-img"
                    style={{ borderColor: 'rgb(39, 179, 138)' }}
                  >
                    <img
                      src="https://opgg-static.akamaized.net/images/lol/champion/Katarina.png?image=c_scale,q_auto,w_54&v=1628647804"
                      alt=""
                    />
                  </div>
                  <div style={{ marginTop: '8px' }}>8W 2L</div>
                  <div
                    className="most-champions__kda"
                    style={{ color: 'rgb(39,179,138' }}
                  >
                    3.46:1 KDA
                  </div>
                </div>

                <div className="most-champions">
                  <div className="most-champions-img">
                    <img
                      src="https://opgg-static.akamaized.net/images/lol/champion/Leblanc.png?image=c_scale,q_auto,w_54&v=1628647804"
                      alt=""
                    />
                  </div>
                  <div style={{ marginTop: '8px' }}>2W 1L</div>
                  <div
                    className="most-champions__kda"
                    style={{ color: 'rgb(148,148,148' }}
                  >
                    2.56:1 KDA
                  </div>
                </div>

                <div className="pager">
                  <img src={arrowIconNext} alt="" />
                </div>
              </div>
            </div>
            <div className="pager-dot-wrapper">
              <div className="pager-dot pager-dot-active"></div>
              <div className="pager-dot"></div>
              <div className="pager-dot"></div>
            </div>
          </div>

          <div className="mypage-bottom-section mypage-bottom-section__3">
            <div className="mypage-section-title">Lane Analytics</div>

            <div className="most-line-wrapper" style={{ marginTop: '28px' }}>
              <div className="most-lane-img">
                <img src={midIcon} alt="" />
              </div>
              <div className="most-lane-champion-stats">
                <div>A</div>
                <div>59%</div>
              </div>
              <div className="most-lane-champion-img-container">
                <div className="most-lane-champion-img">
                  <img src="https://opgg-static.akamaized.net/images/lol/champion/Azir.png?image=c_scale,q_auto,w_42&v=1628647804" />
                </div>
                <div className="most-lane-champion-img">
                  <img src="https://opgg-static.akamaized.net/images/lol/champion/Katarina.png?image=c_scale,q_auto,w_42&v=1628647804" />
                </div>
                <div className="most-lane-champion-img">
                  <img src="https://opgg-static.akamaized.net/images/lol/champion/Leblanc.png?image=c_scale,q_auto,w_42&v=1628647804" />
                </div>
                <div className="most-lane-champion-img">
                  <img src="https://opgg-static.akamaized.net/images/lol/champion/Irelia.png?image=c_scale,q_auto,w_42&v=1628647804" />
                </div>
                <div className="most-lane-champion-img">
                  <img src="https://opgg-static.akamaized.net/images/lol/champion/Yone.png?image=c_scale,q_auto,w_42&v=1628647804" />
                </div>
              </div>
            </div>

            <div className="most-line-wrapper">
              <div className="most-lane-img">
                <img src={topIcon} alt="" />
              </div>
              <div className="most-lane-champion-stats">
                <div>B-</div>
                <div>25%</div>
              </div>
              <div className="most-lane-champion-img-container">
                <div className="most-lane-champion-img">
                  <img src="https://opgg-static.akamaized.net/images/lol/champion/Azir.png?image=c_scale,q_auto,w_42&v=1628647804" />
                </div>
              </div>
            </div>

            <div className="analytics">
              <div style={{ marginRight: '20px' }}>Playtime 63 hours</div>
              <div>KDA 2.53</div>
            </div>
          </div>
        </div>

        <div
          className="mypage-stats"
          style={{ width: '100%', paddingBottom: '8px' }}
        >
          <div className="mypage-stats-left">
            <div className="mypage-stats-left-container">
              <div>20G 12W 8L</div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '18px',
                  marginBottom: '7px',
                }}
              >
                <figure class="chart-two chart-wl animate">
                  <Stats />
                  <div className="chart-inner">
                    <div>60%</div>
                    <div>win ratio</div>
                  </div>
                </figure>

                <div style={{ color: 'rgb(158, 158, 177)' }}>
                  <div>
                    8.3 / <span style={{ color: 'rgb(232, 64, 87' }}>6.8</span>{' '}
                    / 7.3
                  </div>
                  <div
                    style={{
                      color: 'rgb(255,255,255',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      margin: '2px 0px',
                    }}
                  >
                    2.28:1
                  </div>
                  <div style={{ color: 'rgb(232,64,87' }}>P/Kill 44%</div>
                </div>
              </div>
            </div>

            <div className="mypage-stats-left-container">
              Recently Played Champion
              <div style={{ marginTop: '16px' }}>
                <div className="mypage-stats-left-container-recent">
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      overflow: 'hidden',
                      borderRadius: '8px',
                      width: '36px',
                      height: '36px',
                      marginRight: '8px',
                      border: '2px solid rgb(39,179,138)'
                    }}
                  >
                    <img
                      src="https://opgg-static.akamaized.net/images/lol/champion/Akali.png?image=c_scale,q_auto,w_42&v=1628647804"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center center',
                        width: '36px',
                        height: '36px',
                        transform: 'scale(1.1)',
                      }}
                    />
                  </div>

                  <div style={{ fontSize: '11px' }}>
                    <div
                      style={{ color: 'rgb(255,255,255)', marginBottom: '4px' }}
                    >
                      Akali
                    </div>
                    <div>
                      <span style={{ color: 'rgb(232,64,87)' }}>75% </span>6W 2L
                    </div>
                  </div>

                  <div
                    style={{
                      marginLeft: 'auto',
                      fontSize: '11px',
                      color: 'rgb(39,178,138)',
                    }}
                  >
                    3.36:1 KDA
                  </div>
                </div>

                <div className="mypage-stats-left-container-recent">
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      overflow: 'hidden',
                      borderRadius: '8px',
                      width: '36px',
                      height: '36px',
                      border: '2px solid rgb(60,60,60)',
                      marginRight: '8px',
                    }}
                  >
                    <img
                      src="https://opgg-static.akamaized.net/images/lol/champion/Leblanc.png?image=c_scale,q_auto,w_42&v=1628647804"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center center',
                        width: '36px',
                        height: '36px',
                        transform: 'scale(1.1)',
                      }}
                    />
                  </div>

                  <div style={{ fontSize: '11px' }}>
                    <div
                      style={{ color: 'rgb(255,255,255)', marginBottom: '4px' }}
                    >
                      LeBlanc
                    </div>
                    <div>
                      <span style={{ color: 'rgb(232,64,87)' }}>60% </span>3W 2L
                    </div>
                  </div>

                  <div
                    style={{
                      marginLeft: 'auto',
                      fontSize: '11px',
                      color: 'rgb(123,122,142)',
                    }}
                  >
                    2.66:1 KDA
                  </div>
                </div>

                <div className="mypage-stats-left-container-recent">
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      overflow: 'hidden',
                      borderRadius: '8px',
                      width: '36px',
                      height: '36px',
                      border: '2px solid rgb(60,60,60)',
                      marginRight: '8px',
                    }}
                  >
                    <img
                      src="https://opgg-static.akamaized.net/images/lol/champion/Katarina.png?image=c_scale,q_auto,w_42&v=1628647804"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center center',
                        width: '36px',
                        height: '36px',
                        transform: 'scale(1.1)',
                      }}
                    />
                  </div>

                  <div style={{ fontSize: '11px' }}>
                    <div
                      style={{ color: 'rgb(255,255,255)', marginBottom: '4px' }}
                    >
                      Katarina
                    </div>
                    <div>
                      <span style={{ color: 'rgb(232,64,87)' }}>75% </span>3W 1L
                    </div>
                  </div>

                  <div
                    style={{
                      marginLeft: 'auto',
                      fontSize: '11px',
                      color: 'rgb(123,122,142)',
                    }}
                  >
                    2.30:1 KDA
                  </div>
                </div>

                <div className="mypage-stats-left-container-recent">
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      overflow: 'hidden',
                      borderRadius: '8px',
                      width: '36px',
                      height: '36px',
                      border: '2px solid rgb(60,60,60)',
                      marginRight: '8px',
                    }}
                  >
                    <img
                      src="https://opgg-static.akamaized.net/images/lol/champion/Azir.png?image=c_scale,q_auto,w_42&v=1628647804"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center center',
                        width: '36px',
                        height: '36px',
                        transform: 'scale(1.1)',
                      }}
                    />
                  </div>

                  <div style={{ fontSize: '11px' }}>
                    <div
                      style={{ color: 'rgb(255,255,255)', marginBottom: '4px' }}
                    >
                      Azir
                    </div>
                    <div>
                      <span style={{ color: 'rgb(232,64,87)' }}>25% </span>1W 3L
                    </div>
                  </div>

                  <div
                    style={{
                      marginLeft: 'auto',
                      fontSize: '11px',
                      color: 'rgb(123,122,142)',
                    }}
                  >
                    2.10:1 KDA
                  </div>
                </div>

                <div className="mypage-stats-left-container-recent">
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      overflow: 'hidden',
                      borderRadius: '8px',
                      width: '36px',
                      height: '36px',
                      border: '2px solid rgb(31,142,205)',
                      marginRight: '8px',
                    }}
                  >
                    <img
                      src="https://opgg-static.akamaized.net/images/lol/champion/Yone.png?image=c_scale,q_auto,w_42&v=1628647804"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center center',
                        width: '36px',
                        height: '36px',
                        transform: 'scale(1.1)',
                      }}
                    />
                  </div>

                  <div style={{ fontSize: '11px' }}>
                    <div
                      style={{ color: 'rgb(255,255,255)', marginBottom: '4px' }}
                    >
                      Yone
                    </div>
                    <div>
                      <span style={{ color: 'rgb(232,64,87)' }}>100% </span>1W 0L
                    </div>
                  </div>

                  <div
                    style={{
                      marginLeft: 'auto',
                      fontSize: '11px',
                      color: 'rgb(123,122,142)',
                    }}
                  >
                    4.50:1 KDA
                  </div>
                </div>

                <div className="mypage-stats-left-container-recent">
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      overflow: 'hidden',
                      borderRadius: '8px',
                      width: '36px',
                      height: '36px',
                      border: '2px solid rgb(60,60,60)',
                      marginRight: '8px',
                    }}
                  >
                    <img
                      src="https://opgg-static.akamaized.net/images/lol/champion/Zeri.png?image=c_scale,q_auto,w_42&v=1628647804"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center center',
                        width: '36px',
                        height: '36px',
                        transform: 'scale(1.1)',
                      }}
                    />
                  </div>

                  <div style={{ fontSize: '11px' }}>
                    <div
                      style={{ color: 'rgb(255,255,255)', marginBottom: '4px' }}
                    >
                      Zeri
                    </div>
                    <div>
                      <span style={{ color: 'rgb(232,64,87)' }}>100% </span>1W 0L
                    </div>
                  </div>

                  <div
                    style={{
                      marginLeft: 'auto',
                      fontSize: '11px',
                      color: 'rgb(123,122,142)',
                    }}
                  >
                    2.00:1 KDA
                  </div>
                </div>

                <div className="mypage-stats-left-container-recent">
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      overflow: 'hidden',
                      borderRadius: '8px',
                      width: '36px',
                      height: '36px',
                      border: '2px solid rgb(60,60,60)',
                      marginRight: '8px',
                    }}
                  >
                    <img
                      src="https://opgg-static.akamaized.net/images/lol/champion/Fizz.png?image=c_scale,q_auto,w_42&v=1628647804"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center center',
                        width: '36px',
                        height: '36px',
                        transform: 'scale(1.1)',
                      }}
                    />
                  </div>

                  <div style={{ fontSize: '11px' }}>
                    <div
                      style={{ color: 'rgb(255,255,255)', marginBottom: '4px' }}
                    >
                      Azir
                    </div>
                    <div>
                      <span style={{ color: 'rgb(232,64,87)' }}>100% </span>1W 0L
                    </div>
                  </div>

                  <div
                    style={{
                      marginLeft: 'auto',
                      fontSize: '11px',
                      color: 'rgb(123,122,142)',
                    }}
                  >
                    2.25:1 KDA
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mypage-stats-right">
              <GameList />
              <GameList />
              <GameList />
              <GameList />
              <GameList />
              <GameList />
              <GameList />
              <GameList />
              <GameList />
              <GameList />
              <GameList />
              <GameList />
              <GameList />
              <GameList />
              <GameList />
              <GameList />
              <GameList />
              <GameList />
              <GameList />

          </div>


        </div>
      </div>
    </div>
  );
}

export default MyPage;
