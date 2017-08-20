import React, { Component } from 'react'

class CompareDisplayBox extends Component {
    constructor() {
        super();

        this.state = {
            winner: '',
            creator: false
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
        } else if( this.props.spm1 < this.props.spm2 ){
            this.setWinner( this.props.p2 )
        } else {
            this.setWinner( 'Neither, both are equal' )
        }
    }

    setWinner( winner ) {
        this.setState({
            winner: winner
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
                    <div className='noCreatorCompare'>
                        The better player is:<br/>{ this.state.winner }
                    </div>
                </div>


            </div>
        )
    }
}

export default CompareDisplayBox