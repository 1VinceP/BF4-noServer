// import React, { Component } from 'react'

export function displayPlayer1( stats ) {
    let scorePM = Math.floor(stats.extra.spm)
    let acc = Math.round(stats.extra.accuracy * 100) / 100
    let time = Math.floor(stats.timePlayed / 3600)

    let result = `Rank: ${ stats.rank ? stats.rank : '0' }
    Score/Minute: ${ scorePM ? scorePM : '0' }
    Time played: ${ time ? time : '0' } hours
    Longest headshot: ${ Math.floor(stats.longestHeadshot) ? stats.longestHeadshot : '0' }
    Accuracy: ${ acc ? acc : '0' }%
    Dogtags Taken: ${ Math.round(stats.dogtagsTaken) ? stats.dogtagsTaken : '0'}
    
    Assault Score: ${ stats.kits.assault.score ? stats.kits.assault.score : '0' }
    Engineer Score: ${ stats.kits.engineer.score ? stats.kits.engineer.score : '0' }
    Support Score: ${ stats.kits.support.score ? stats.kits.support.score : '0' }
    Recon Score: ${ stats.kits.recon.score ? stats.kits.recon.score : '0' }`

    return result;
}

export function displayPlayer2( stats ) {
    let scorePM = Math.floor(stats.extra.spm)
    let acc = Math.round(stats.extra.accuracy * 100) / 100
    let time = Math.floor(stats.timePlayed / 3600)

    let result = `Rank: ${ stats.rank ? stats.rank : '0' }
    Score/Minute: ${ scorePM ? scorePM : '0' }
    Time played: ${ time ? time : '0' } hours
    Longest headshot: ${ Math.floor(stats.longestHeadshot) ? stats.longestHeadshot : '0' }
    Accuracy: ${ acc ? acc : '0' }%
    Dogtags Taken: ${ Math.round(stats.dogtagsTaken) ? stats.dogtagsTaken : '0'}
    
    Assault Score: ${ stats.kits.assault.score ? stats.kits.assault.score : '0' }
    Engineer Score: ${ stats.kits.engineer.score ? stats.kits.engineer.score : '0' }
    Support Score: ${ stats.kits.support.score ? stats.kits.support.score : '0' }
    Recon Score: ${ stats.kits.recon.score ? stats.kits.recon.score : '0' }`

    return result;
}