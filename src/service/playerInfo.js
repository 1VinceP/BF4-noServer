import axios from 'axios';

export function getPlayerInfo() {
    return axios.get(`https://api.bf4stats.com/api/playerInfo/:`)
                .then( res => res.data );
}