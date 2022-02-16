import fetch from 'node-fetch';
import * as leagueConnect from "league-connect";
import WebSocket from 'ws'

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

let credentials = await leagueConnect.authenticate();

const btoa = (string) => {
    return Buffer.from(string).toString('base64');
}

const auth = `${btoa(`riot:${credentials.password}`)}`;

console.log(auth);

const get = (endpoint) => {
    console.log('Starting GET %s', endpoint);

    return fetch(`https://127.0.0.1:${credentials.port}${endpoint}`, {
        headers: {
            Accept: 'application/json',
            Authorization: `Basic ${auth}`,
        }
    })
    .then (res => res.json())
    .then(res => {
        console.log('GET request finished for: %s', endpoint);
        return res;
    });
}


function put(endpoint, content) {
    console.log('Starting PUT %s', endpoint);

    return fetch(`https://${Secret.address}:${Secret.port}${endpoint}`, {
        method: 'PUT',
        body: JSON.stringify(content),
        headers: {
            Accept: 'application/json',
            Authorization: `Basic ${auth}`,
            'Content-Type' : 'application/json',
        }
    })
    .then (res => res.json())
    .then(res => {
        console.log('PUT request finished for: %s', endpoint);
        return res;
    });
}



(async () => {
    const res = await get('/lol-summoner/v1/current-summoner');
    let leagueSocket = new WebSocket(`wss://127.0.0.1:${credentials.port}/`, {
    headers: {
        Authorization: `Basic ${auth}`
      }
    })

    leagueSocket.OPEN

})();
