import React, { Component } from 'react';

class EntryBox2 extends Component {

    render() {
        return(
            <div className='entryBox'>
                <input onChange={ (e) => this.props.getSoldier2(e) }
                       className='inputBox' placeholder='Soldier Name'></input>
                <div className='radios'>
                    <input onClick={ (e) => this.props.getPlatform2('pc') }
                           type='radio' name='platform2' value='PC'/>PC
                    <input onClick={ (e) => this.props.getPlatform2('xone') }
                           type='radio' name='platform2' value='XONE'/>XONE
                    <input onClick={ (e) => this.props.getPlatform2('ps4') }
                           type='radio' name='platform2' value='PS4'/>PS4
                </div>
                <button onClick={ () => this.props.onClick2() } className='submitButton'>
                    GET STATS
                </button>
            </div>
        )
    }
}

export default EntryBox2;