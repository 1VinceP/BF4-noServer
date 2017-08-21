import React, { Component } from 'react'
import VideoBoxWin from './VideoBoxWin'
import VideoBoxLose from './VideoBoxLose'

class CompareDisplayBox extends Component {
    constructor() {
        super();

        this.state = {
            winner: '',
            loser: ''
        }
    }
    
    componentDidMount() {
        this.findWinner();
        this.setCreator();
    }

    findWinner() {
        if( this.props.p1 === 'Griffener' || this.props.p2 === 'Griffener' ) {
            this.setWinner()
        }

        if( this.props.spm1 > this.props.spm2 ) {
            this.setWinner( this.props.p1 )
            this.setLoser( this.props.p2 )
        } else if( this.props.spm1 < this.props.spm2 ){
            this.setWinner( this.props.p2 )
            this.setLoser( this.props.p1 )
        } else {
            this.setWinner( 'Neither, both are equal' )
        }
    }

    setWinner( winner ) {
        this.setState({
            winner: winner
        })
    }

    setLoser( loser ) {
        this.setState({
            loser: loser
        })
    }

    setCreator() {
        if( this.props.p1 === 'Griffener' || this.props.p2 === 'Griffener' )
        this.setState({
            creator: true
        })
    }

    render() {
        return(
            <div className='compareBG'>
                <div className='compareDisplay'>
                    { this.state.winner === 'Griffener' ? <VideoBoxWin loser={ this.state.loser } />
                        : this.state.loser === 'Griffener' ? <VideoBoxLose winner={ this.state.winner } />
                        :<div className='noCreatorCompare'>
                            The better player is:<br/>{ this.state.winner }
                        </div>
                    }
                </div>


            </div>
        )
    }
}

export default CompareDisplayBox