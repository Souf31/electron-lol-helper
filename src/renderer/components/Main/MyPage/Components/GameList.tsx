import React from 'react';

function GameList() {
  return <div className="mypage-stats-right-list">
  <div className="mypage-stats-right-list-result mypage-stats-right-list-result-win"></div>
  <div style={{marginLeft: '12px', width: '106px', marginTop: '12px', marginRight: '10px'}}>
    <div className="win">Ranked Solo/Duo</div>
    <div style={{color: 'rgb(158,158,177)', marginTop: '2px'}}>18 hours ago</div>
    <div style={{width: '48px', height: '1px', backgroundColor: 'rgb(49,49,60)', marginTop: '8px', marginBottom: '4px'}}></div>
    <div style={{fontWeight: 'bold', color: 'rgb(158,158,177)'}}>Victory</div>
    <div style={{color: 'rgb(157,157,177)', marginTop: '2px'}}>33m 54s</div>
  </div>

  <div style={{display: 'flex', flexDirection :'column', marginTop: '10px'}}>

    <div style={{display: 'flex', alignItems: 'center'}}>

      <div style={{position: 'relative'}}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', borderRadius: '24px', width: '48px', height: '48px'}}>
          <img src="https://opgg-static.akamaized.net/images/lol/champion/Akali.png?image=c_scale,q_auto,w_54&v=1628647804"
          style={{objectFit: 'cover', objectPosition: 'center center', width: '48px', height: '48px', transform:'scale(1.1)'}} />
        </div>
        <div className="level">17</div>
      </div>

      <div style={{display: 'flex', flexDirection : 'column', alignItems: 'center', marginLeft:'4px'}}>
        <img src="https://opgg-static.akamaized.net/images/lol/spell/SummonerDot.png?image=c_scale,q_auto,w_22&v=1628647804"
        style={{marginTop: '1px', marginBottom: '2px', borderRadius: '4px'}} />
        <img src="https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=c_scale,q_auto,w_22&v=1628647804"
        style={{borderRadius: '4px'}} />
      </div>

      <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', marginLeft:'4px'}}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '22px', height:'22px', backgroundColor:'rgb(0,0,0)', borderRadius: '11px', marginTop: '1px', marginBottom: '2px'}}>
          <img src="https://opgg-static.akamaized.net/images/lol/perk/8010.png?image=c_scale,q_auto,w_22&v=1628647804"/>
        </div>
        <img src="https://opgg-static.akamaized.net/images/lol/perkStyle/8400.png?image=c_scale,q_auto,w_22&v=1628647804" style={{borderRadius: '4px'}}/>
      </div>

      <div style={{marginLeft: '12px', width: '119px'}}>
        <div style={{fontSize: '15px', color:'rgb(255,255,255)', fontWeight: 'bold'}}>11<span style={{color: 'rgb(123,122,142)', fontWeight: 'normal'}}> / </span>
        <span style={{color: 'rgb(232,64,87)'}}>8</span><span style={{color: 'rgb(123,122,142)', fontWeight: 'normal'}}> / </span>16</div>
        <div style={{color: 'rgb(158,158,177)', marginTop: '2px'}}>3.38:1 KDA</div>
      </div>

      <div style={{borderLeft: '1px solid rgb(49,49,60)', paddingLeft: '8px', width:'138px'}}>
        <div style={{marginBottom: '2px', color: 'rgb(232, 64, 87)'}}>P/Kill 57%</div>
        <div style={{marginBottom: '2px', fontSize: '11px'}}>Control Ward 5</div>
        <div style={{marginBottom: '2px', fontSize: '11px'}}>CS 157 (4.8)</div>
        <div style={{fontSize: '11px'}}>Tier Average <b>Platinum</b></div>
      </div>

    </div>

    <div style={{display : 'flex', alignItems: 'center' }}>
      <div style={{display: 'flex'}}>
        <img src="https://opgg-static.akamaized.net/images/lol/item/3157.png?image=c_scale,q_auto,w_22&v=1628647804" style={{borderRadius: '4px', marginRight: '2px'}}/>
        <img src="https://opgg-static.akamaized.net/images/lol/item/6664.png?image=c_scale,q_auto,w_22&v=1628647804" style={{borderRadius: '4px', marginRight: '2px'}}/>
        <img src="https://opgg-static.akamaized.net/images/lol/item/3020.png?image=c_scale,q_auto,w_22&v=1628647804" style={{borderRadius: '4px', marginRight: '2px'}}/>
        <img src="https://opgg-static.akamaized.net/images/lol/item/4637.png?image=c_scale,q_auto,w_22&v=1628647804" style={{borderRadius: '4px', marginRight: '2px'}}/>
        <img src="https://opgg-static.akamaized.net/images/lol/item/4645.png?image=c_scale,q_auto,w_22&v=1628647804" style={{borderRadius: '4px', marginRight: '2px'}}/>
        <img src="https://opgg-static.akamaized.net/images/lol/item/1052.png?image=c_scale,q_auto,w_22&v=1628647804" style={{borderRadius: '4px', marginRight: '2px'}}/>
        <img src="https://opgg-static.akamaized.net/images/lol/item/3364.png?image=c_scale,q_auto,w_22&v=1628647804" style={{borderRadius: '4px', marginRight: '8px'}}/>
      </div>
      <div style={{display: 'flex'}}>
      </div>
    </div>
  </div>

  <div style={{display: 'flex', marginLeft: '23px', marginTop: '4px', alignItems: 'center'}}>
    <div style={{marginRight:'8px'}}>
      <div style={{display: 'flex', marginBottom:'2px', cursor: 'pointer'}}>
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', overflow:'hidden', borderRadius: '8px', width: '16px', height:'16px', marginRight:'4px'}}>
          <img src="https://opgg-static.akamaized.net/images/lol/champion/Vex.png?image=c_scale,q_auto,w_22&v=1628647804"
          style={{objectFit:'cover', objectPosition:'center center', width:'16px', height:'16px', transform:'scale(1.1)'}} />
        </div>
        <div style={{width:'60px', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>Nilloc</div>
      </div>

      <div style={{display: 'flex', marginBottom:'2px', cursor: 'pointer'}}>
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', overflow:'hidden', borderRadius: '8px', width: '16px', height:'16px', marginRight:'4px'}}>
          <img src="https://opgg-static.akamaized.net/images/lol/champion/Vex.png?image=c_scale,q_auto,w_22&v=1628647804"
          style={{objectFit:'cover', objectPosition:'center center', width:'16px', height:'16px', transform:'scale(1.1)'}} />
        </div>
        <div style={{width:'60px', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>Nilloc</div>
      </div>

      <div style={{display: 'flex', marginBottom:'2px', cursor: 'pointer'}}>
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', overflow:'hidden', borderRadius: '8px', width: '16px', height:'16px', marginRight:'4px'}}>
          <img src="https://opgg-static.akamaized.net/images/lol/champion/Vex.png?image=c_scale,q_auto,w_22&v=1628647804"
          style={{objectFit:'cover', objectPosition:'center center', width:'16px', height:'16px', transform:'scale(1.1)'}} />
        </div>
        <div style={{width:'60px', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>Nilloc</div>
      </div>

      <div style={{display: 'flex', marginBottom:'2px', cursor: 'pointer'}}>
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', overflow:'hidden', borderRadius: '8px', width: '16px', height:'16px', marginRight:'4px'}}>
          <img src="https://opgg-static.akamaized.net/images/lol/champion/Vex.png?image=c_scale,q_auto,w_22&v=1628647804"
          style={{objectFit:'cover', objectPosition:'center center', width:'16px', height:'16px', transform:'scale(1.1)'}} />
        </div>
        <div style={{width:'60px', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>Nilloc</div>
      </div>

      <div style={{display: 'flex', marginBottom:'2px', cursor: 'pointer'}}>
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', overflow:'hidden', borderRadius: '8px', width: '16px', height:'16px', marginRight:'4px'}}>
          <img src="https://opgg-static.akamaized.net/images/lol/champion/Vex.png?image=c_scale,q_auto,w_22&v=1628647804"
          style={{objectFit:'cover', objectPosition:'center center', width:'16px', height:'16px', transform:'scale(1.1)'}} />
        </div>
        <div style={{width:'60px', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>Nilloc</div>
      </div>
    </div>

    <div>
      <div style={{display: 'flex', marginBottom: '2px', cursor: 'pointer'}}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', overflow:'hidden', borderRadius:'8px', width:'16px', height:'16px', marginRight:'4px'}}>
          <img src="https://opgg-static.akamaized.net/images/lol/champion/Yone.png?image=c_scale,q_auto,w_22&v=1628647804"
          style={{objectFit: 'cover', objectPosition:'center center', width:'16px', height:'16px', transform:'scale(1.1)'}}/>
        </div>
        <div style={{width:'60px', overflow:'hidden', textOverflow:'ellipsis',whiteSpace:'nowrap'}}>Samourai Shampoo</div>
      </div>

      <div style={{display: 'flex', marginBottom: '2px', cursor: 'pointer'}}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', overflow:'hidden', borderRadius:'8px', width:'16px', height:'16px', marginRight:'4px'}}>
          <img src="https://opgg-static.akamaized.net/images/lol/champion/Yone.png?image=c_scale,q_auto,w_22&v=1628647804"
          style={{objectFit: 'cover', objectPosition:'center center', width:'16px', height:'16px', transform:'scale(1.1)'}}/>
        </div>
        <div style={{width:'60px', overflow:'hidden', textOverflow:'ellipsis',whiteSpace:'nowrap'}}>Samourai Shampoo</div>
      </div>

      <div style={{display: 'flex', marginBottom: '2px', cursor: 'pointer'}}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', overflow:'hidden', borderRadius:'8px', width:'16px', height:'16px', marginRight:'4px'}}>
          <img src="https://opgg-static.akamaized.net/images/lol/champion/Yone.png?image=c_scale,q_auto,w_22&v=1628647804"
          style={{objectFit: 'cover', objectPosition:'center center', width:'16px', height:'16px', transform:'scale(1.1)'}}/>
        </div>
        <div style={{width:'60px', overflow:'hidden', textOverflow:'ellipsis',whiteSpace:'nowrap'}}>Samourai Shampoo</div>
      </div>

      <div style={{display: 'flex', marginBottom: '2px', cursor: 'pointer'}}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', overflow:'hidden', borderRadius:'8px', width:'16px', height:'16px', marginRight:'4px'}}>
          <img src="https://opgg-static.akamaized.net/images/lol/champion/Yone.png?image=c_scale,q_auto,w_22&v=1628647804"
          style={{objectFit: 'cover', objectPosition:'center center', width:'16px', height:'16px', transform:'scale(1.1)'}}/>
        </div>
        <div style={{width:'60px', overflow:'hidden', textOverflow:'ellipsis',whiteSpace:'nowrap'}}>Samourai Shampoo</div>
      </div>

      <div style={{display: 'flex', marginBottom: '2px', cursor: 'pointer'}}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', overflow:'hidden', borderRadius:'8px', width:'16px', height:'16px', marginRight:'4px'}}>
          <img src="https://opgg-static.akamaized.net/images/lol/champion/Yone.png?image=c_scale,q_auto,w_22&v=1628647804"
          style={{objectFit: 'cover', objectPosition:'center center', width:'16px', height:'16px', transform:'scale(1.1)'}}/>
        </div>
        <div style={{width:'60px', overflow:'hidden', textOverflow:'ellipsis',whiteSpace:'nowrap'}}>Samourai Shampoo</div>
      </div>
    </div>
  </div>
</div>
}

export default GameList;
