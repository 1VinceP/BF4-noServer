import React, { Component } from 'react';
import axios from 'axios';
import EntryBox from './components/EntryBox'
import EntryBox2 from './components/EntryBox2'

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      soldier1: '',
      soldier2: '',
      platform1: '',
      platform2: '',
      data1: [],
      data2: [],
      spm: []
    }

    this.getSoldier1 = this.getSoldier1.bind(this);
    this.getSoldier2 = this.getSoldier2.bind(this);
    this.getPlatform1 = this.getPlatform1.bind(this);
    this.getPlatform2 = this.getPlatform2.bind(this);
    this.onClick1 = this.onClick1.bind(this);
    this.onClick2 = this.onClick2.bind(this);

  }

  getPlayerInfo1() {
    const apiURL = 'https://api.bf4stats.com/api/playerInfo';

    return axios.get( `${apiURL}?plat=${this.state.platform1}&name=${this.state.soldier1}` )
                .then( res => {
                  console.log( res.data.stats )
                  let stats = res.data.stats
                  stats.extra = res.data.stats.extra
                  this.setState({
                    data1: stats,
                    spm: res.data.stats.extra.spm
                  })
                } );
}

getPlayerInfo2() {
  const apiURL = 'https://api.bf4stats.com/api/playerInfo';

    return axios.get( `${apiURL}?plat=${this.state.platform2}&name=${this.state.soldier2}` )
                .then( res => {
                  console.log( res.data.stats )
                  this.setState({
                    data2: res.data.stats
                  })
                } );
}

onClick1() {
  this.getPlayerInfo1();
  // console.log( this.state.data1 )
  // console.log( this.state.data1 )
}

onClick2() {
  this.getPlayerInfo2()
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

  render() {
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
              <p className='vs'>VS</p>
              <EntryBox2 getSoldier2={ this.getSoldier2 }
                        getPlatform2={ this.getPlatform2 }
                        onClick2={ this.onClick2 }
              />
            </section>

            <section className='resultsSection'>
              <div className='resultsBox'>
                <b><u>Player: { this.state.soldier1 }</u></b><br/>
                Revives: { this.state.data1.revives }<br/>
                Longest headshot: { this.state.data1.longestHeadshot }<br/>
                Skill: { this.state.data1.deaths }<br/>
                {/* SPM: { this.state.spm } */}
                {/* Score/Minute: { JSON.stringify(this.state.data1.extra) } */}
                Score/Minute: { this.state.data1.extra.spm }
              </div>
              <div className='resultsBox'>
              <b><u>Player: { this.state.soldier2 }</u></b><br/>
                Revives: { this.state.data2.revives }<br/>
                Longest headshot: { this.state.data2.longestHeadshot }<br/>
                Skill: { this.state.data2.deaths }<br/>
                SPM: { this.state.spm }
              </div>
            </section>
            
          </section>

          

        </section>

      </div>
    );
  }
}

export default App;