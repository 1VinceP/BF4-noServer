import React, { Component } from 'react';

class EntryBox extends Component {

    render() {
        return(
            <div className='entryBox'>
                <input onChange={ (e) => this.props.getSoldier1(e) }
                       className='inputBox' placeholder='Soldier Name'></input>
                <div className='radios'>
                    <input onClick={ (e) => this.props.getPlatform1('pc') }
                           type='radio' name='platform1' value='PC'/>PC
                    <input onClick={ (e) => this.props.getPlatform1('xone') }
                           type='radio' name='platform1' value='XONE'/>XONE
                    <input onClick={ (e) => this.props.getPlatform1('ps4') }
                           type='radio' name='platform1' value='PS4'/>PS4
                </div>
                <button onClick={ () => this.props.onClick1() } className='submitButton'>
                    GET STATS
                </button>
            </div>
        )
    }
}

export default EntryBox;