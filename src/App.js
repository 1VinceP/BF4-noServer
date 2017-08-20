import React, { Component } from 'react';
import axios from 'axios';
import EntryBox from './components/EntryBox'
import EntryBox2 from './components/EntryBox2'
import CompareDisplayBox from './components/CompareDisplayBox'
import { displayPlayer1, displayPlayer2 } from './components/resultsFunctions'

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      soldier1: '',
      soldier2: '',
      platform1: '',
      platform2: '',
      data1: { extra: {},
               kits: { assault: '',
                       engineer: '',
                       support: '',
                       recon: '' }
      },
      data2: { extra: {},
               kits: { assault: '',
                       engineer: '',
                       support: '',
                       recon: '' } }
      }
      compareDisplay: false

    this.getSoldier1 = this.getSoldier1.bind(this);
    this.getSoldier2 = this.getSoldier2.bind(this);
    this.getPlatform1 = this.getPlatform1.bind(this);
    this.getPlatform2 = this.getPlatform2.bind(this);
    this.onClick1 = this.onClick1.bind(this);
    this.onClick2 = this.onClick2.bind(this);

  }

  getPlayerInfo1() {
    if( this.state.soldier1 === '' )
      alert( 'Please enter a name' )
    else {
      const apiURL = 'https://api.bf4stats.com/api/playerInfo';

      return axios.get( `${apiURL}?plat=${this.state.platform1}&name=${this.state.soldier1}` )
                  .then( res => {
                    console.log( res.data.stats )
                    let stats = res.data.stats
                    stats.extra = res.data.stats.extra
                    this.setState({
                      data1: stats
                    })
                  } );
    }
}

  getPlayerInfo2() {
    if( this.state.soldier2 === '' )
      alert( 'Please enter a name' )
    else {
      const apiURL = 'https://api.bf4stats.com/api/playerInfo';

        return axios.get( `${apiURL}?plat=${this.state.platform2}&name=${this.state.soldier2}` )
                    .then( res => {
                      console.log( res.data.stats )
                      this.setState({
                        data2: res.data.stats,
                        spm2: res.data.stats.extra.spm
                      })
                    } );
    }
}

  onClick1() {
    if( this.state.platform1 === 'xone' || this.state.platform1 === 'pc' || this.state.platform1 === 'ps4' )
      this.getPlayerInfo1();
    else
      alert( 'Please select a gaming platform' )
    // console.log( this.state.data1 )
  }

  onClick2() {
    if( this.state.platform2 === 'xone' || this.state.platform2 === 'pc' || this.state.platform2 === 'ps4' )
      this.getPlayerInfo2();
    else
      alert( 'Please select a gaming platform' )
  }

  getSoldier1( s1 ) {
    // console.log( s1.target.value )
    this.setState({
      soldier1: s1.target.value
    })
  }

  getSoldier2( s2 ) {
    // console.log( s2.target.value )
    this.setState({
      soldier2: s2.target.value
    })
  }

  getPlatform1( p1 ) {
    // console.log( p1 )
    this.setState({
      platform1: p1
    })
  }

  getPlatform2( p2 ) {
    // console.log( p2 )
    this.setState({
      platform2: p2
    })
  }

  comparePlayers() {
    if( Number(this.state.data1.extra.spm) > 0 && Number(this.state.data2.extra.spm) > 0 ) {
      this.setState({
        compareDisplay: !this.state.compareDisplay
      })
    }
    else {
      alert( 'Please enter two valid players' )
    }
  }

  render() {

    let dataOne = this.state.data1
    let dataTwo = this.state.data2

    return (
      <div className="App">
        <header className='header'></header>

        <section className='bodyBG'>
          <section className='grayBG'>
            <section className='inputSection'>
              <EntryBox getSoldier1={ this.getSoldier1 }
                        getPlatform1={ this.getPlatform1 }
                        onClick1={ this.onClick1 }
              />

              <button onClick={ e => this.comparePlayers() } className='compareButton'>
                <p className='vs'>VS</p>
              </button>

              <EntryBox2 getSoldier2={ this.getSoldier2 }
                         getPlatform2={ this.getPlatform2 }
                         onClick2={ this.onClick2 }
              />
            </section>

            <section className='resultsSection'>
              <div className='resultsBox'>
                <b><u>Player: { this.state.soldier1 }</u></b><br/>
                {/* Rank: { dataOne.rank ? dataOne.rank : '0' }<br/>
                Score/Minute: { Math.floor(dataOne.extra.spm) ? dataOne.extra.spm : '0' }<br/>
                Skill: { Math.floor(dataOne.skill ? dataOne.skill : '0') }<br/>
                Longest headshot: { Math.floor(dataOne.longestHeadshot) ? dataOne.longestHeadshot : '0' }<br/>
                Accuracy: { Math.round(dataOne.extra.accuracy * 100) / 100 ? dataOne.extra.accuracy : '0' }%<br/>
                Dogtags Taken: { Math.round(dataOne.dogtagsTaken) ? dataOne.dogtagsTaken : '0'}<br/>
                <br/>
                Assault Score: { dataOne.kits.assault.score ? dataOne.kits.assault.score : '0' }<br/>
                Engineer Score: { dataOne.kits.engineer.score ? dataOne.kits.engineer.score : '0' }<br/>
                Support Score: { dataOne.kits.support.score ? dataOne.kits.support.score : '0' }<br/>
                Recon Score: { dataOne.kits.recon.score ? dataOne.kits.recon.score : '0' }<br/> */}
                { displayPlayer1( dataOne ) }
              </div>
              <div className='resultsBox'>
              <b><u>Player: { this.state.soldier2 }</u></b><br/>
                {/* Rank: { dataTwo.rank ? dataTwo.rank : '0' }<br/>
                Score/Minute: { Math.floor(dataTwo.extra.spm) ? dataTwo.extra.spm : '0'}<br/>
                Skill: { Math.floor(dataTwo.skill) ? dataTwo.skill : '0' }<br/>
                Longest headshot: { Math.floor(dataTwo.longestHeadshot) ? dataTwo.longestHeadshot : '0' }<br/>
                Accuracy: { Math.round(dataTwo.extra.accuracy * 100) / 100 ? dataTwo.extra.accuracy : '0' }%<br/>
                Dogtags Taken: { Math.round(dataTwo.dogtagsTaken) ? dataTwo.dogtagsTaken : '0'}<br/>
                <br/>
                Assault Score: { dataTwo.kits.assault.score ? dataTwo.kits.assault.score : '0' }<br/>
                Engineer Score: { dataTwo.kits.engineer.score ? dataTwo.kits.engineer.score : '0' }<br/>
                Support Score: { dataTwo.kits.support.score ? dataTwo.kits.support.score : '0' }<br/>
                Recon Score: { dataTwo.kits.recon.score ? dataTwo.kits.recon.score : '0' }<br/> */}
                { displayPlayer2( dataTwo ) }



              </div>
            </section>
            
          </section>

          <section></section>

        { this.state.compareDisplay ? <CompareDisplayBox spm1={ this.state.data1.extra.spm }
                                                         spm2={ this.state.data2.extra.spm }
                                                         p1={ this.state.soldier1 }
                                                         p2={ this.state.soldier2 } 
                                                         /> : null }

        </section>


      </div>
    );
  }
}

export default App;
