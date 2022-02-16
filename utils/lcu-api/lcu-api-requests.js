import * as leagueConnect from "league-connect";
import fetch from 'node-fetch';
import axios from 'axios'

import runes from "./runes.js"
import ddragonAPI from './ddragon.js'

let championByIdCache = {};
let championJson = {};

export const credentials = await leagueConnect.authenticate();

export const getKeystone = (response, runes) => {
  for (var i = 0; i < 17; i++) {
    if (runes.keystones[i].perkId == response.selectedPerkIds[0]) {
      return runes.keystones[i]
    }
  }
}

export const getFirstRow = (response, runes) => {
  for (var i=0; i<9; i++) {
    if (runes.firstRow[i].perkId == response.selectedPerkIds[1]) {
      return runes.firstRow[i];
    }
  }
}

export const getRunes = (response, runes) => {
  var keystone = getKeystone(response, runes);
  var firstRow = getFirstRow(response, runes)

  let Runes = {
    "keystone" : keystone,
    'firstRow' : firstRow
  }

  return Runes

}

export const getRunePage = async () => {
    const response = await leagueConnect
    .request(
      {
        method: "GET",
        url: "/lol-perks/v1/pages/1079361308",
      },
      credentials
    )
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
    console.log(response)
}

export const webSocketConnection = async () => {
    const ws = await leagueConnect.connect(credentials);

    ws.subscribe(`/lol-champ-select/v1/current-champion`, async (data, event) => {
      console.log(data)  
      ws.close()
    })
}

export const versionJSON = await axios.get('https://ddragon.leagueoflegends.com/api/versions.json')
  .then(res => {
    return res.data
})
