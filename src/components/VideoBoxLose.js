import React, { Component } from 'react'

class VideoBoxLose extends Component {

    render() {
        return(
            <div className='creatorCompare'>
                <p>{ this.props.winner }, it looks like you aren't playing fair...</p>
                <div>
                    <iframe width="560" height="315" title='Stop hacking'
                        src="https://www.youtube.com/embed/3NFQi3Ekzqc" frameBorder="0" allowFullScreen>
                    </iframe>
                </div>
            </div>
        )
    }
}

export default VideoBoxLose