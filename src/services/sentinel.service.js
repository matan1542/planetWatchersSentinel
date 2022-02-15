

import axios from "axios"
import qs from "qs"
import { utilsService } from "./utils-service"
import { dateService } from "./date.service"
export const sentinelService = {
    getReqBodyDetails
}
const clientId = "361b4940-325f-4481-9cd2-e2529b54e84b"
const clientSecret = "dJm4jla.v@hLxSS.K/1fhLCI7T~Q(Xu>|??}ZY0v"

async function getAccessToken() {
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    }

    const body = qs.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "client_credentials"
    })
    try {
        const token = await axios.post('https://services.sentinel-hub.com/oauth/token',body,config)
        return 'Bearer ${token.data.access_token}'
    } catch (err) {
        console.log(err);
        throw new Error('can\'t get token')
    }

}

function getReqBodyDetails(maxCloudCover = 30, dates = dateService.getRandomDates()){

}


// const data = await response
