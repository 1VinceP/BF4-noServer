import React, { Component } from 'react'

class VideoBoxWin extends Component {

    render() {
        return(
            <div className='creatorCompare'>
                <p>{ this.props.loser }, it looks like you could use some help...</p>
                <div>
                    <iframe width="560" height="315" title='Get better'
                        src="https://www.youtube.com/embed/V2lLSt90A44" frameBorder="0" allowFullScreen>
                    </iframe>
                </div>
            </div>
        )
    }
}

export default VideoBoxWin