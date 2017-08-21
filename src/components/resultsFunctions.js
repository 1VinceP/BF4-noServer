import React from 'react'

export function displayPlayer1( stats ) {

    let scorePM = Math.floor(stats.extra.spm)
    let acc = Math.round(stats.extra.accuracy * 100) / 100
    let time = Math.floor(stats.timePlayed / 3600)

    return(
        <div>
            Rank: { stats.rank ? stats.rank : '0' }<br/>
            Score/Minute: { scorePM ? scorePM : '0' }<br/>
            Time Played: { time ? time : '0' } hours<br/>
            Longest headshot: { Math.floor(stats.longestHeadshot) ? stats.longestHeadshot : '0' }<br/>
            Accuracy: { acc ? acc : '0' }%<br/>
            Dogtags Taken: { Math.round(stats.dogtagsTaken) ? stats.dogtagsTaken : '0'}<br/>
            <br/>
            Assault Score: { stats.kits.assault.score ? stats.kits.assault.score : '0' }<br/>
            Engineer Score: { stats.kits.engineer.score ? stats.kits.engineer.score : '0' }<br/>
            Support Score: { stats.kits.support.score ? stats.kits.support.score : '0' }<br/>
            Recon Score: { stats.kits.recon.score ? stats.kits.recon.score : '0' }<br/>
        </div>
    )
}

export function displayPlayer2( stats ) {

    let scorePM = Math.floor(stats.extra.spm)
    let acc = Math.round(stats.extra.accuracy * 100) / 100
    let time = Math.floor(stats.timePlayed / 3600)

    return( 
        <div>
            Rank: { stats.rank ? stats.rank : '0' }<br/>
            Score/Minute: { scorePM ? scorePM : '0' }<br/>
            Time Played: { time ? time : '0' } hours<br/>
            Longest headshot: { Math.floor(stats.longestHeadshot) ? stats.longestHeadshot : '0' }<br/>
            Accuracy: { acc ? acc : '0' }%<br/>
            Dogtags Taken: { Math.round(stats.dogtagsTaken) ? stats.dogtagsTaken : '0'}<br/>
            <br/>
            Assault Score: { stats.kits.assault.score ? stats.kits.assault.score : '0' }<br/>
            Engineer Score: { stats.kits.engineer.score ? stats.kits.engineer.score : '0' }<br/>
            Support Score: { stats.kits.support.score ? stats.kits.support.score : '0' }<br/>
            Recon Score: { stats.kits.recon.score ? stats.kits.recon.score : '0' }<br/>
        </div>
     )
}