import * as lcuApi from './lcu-api-requests.js'
import * as lcuConnector from 'league-connect'
import axios from 'axios';

const url = "https://league-champion-aggregate.iesdev.com"
const webSocketConnection = async () => {

    let blitzInfoChampion;
    const ws = await lcuConnector.connect(lcuApi.credentials);

    ws.subscribe(`/lol-champ-select/v1/current-champion`, async (data, event) => {
        for (const lolVersion of lcuApi.versionJSON.slice(1, 2)) {
            const blitzGGLOLVersion = lolVersion.split('.').splice(0, 2).join('.');
            var requestUri = `${url}/api/champions/${data}?patch=${blitzGGLOLVersion}&queue=420&region=world`
            console.log(requestUri)

            blitzInfoChampion = await axios.get(requestUri)
                .then(res => {
                    return res.data
                })

                console.log(blitzInfoChampion)
        }
        ws.close()
    })

    console.log(blitzInfoChampion)
}

webSocketConnection()
