

import axios from "axios"
import qs from "qs"
import { dateService } from "./date.service"
export const sentinelService = {
    getReqBodyDetails,
    getAccessToken
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
        const token = await axios.post('https://services.sentinel-hub.com/oauth/token', body, config)
        return `Bearer ${token.data.access_token}`
    } catch (err) {
        console.log(err);
        throw new Error('can\'t get token')
    }
}


//To build the coordinates area - https://apps.sentinel-hub.com/requests-builder/
function getReqBodyDetails(pageHeight,maxCloudCover = 30, dates = dateService.getRandomDates()) {
    return {
        "input": {
            "bounds": {
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [
                                    35.134816,
                                    33.11685
                                ],
                                [
                                    35.296754,
                                    33.107648
                                ],
                                [
                                    35.368116,
                                    33.05932
                                ],
                                [
                                    35.444968,
                                    33.084638
                                ],
                                [
                                    35.532798,
                                    33.215712
                                ],
                                [
                                    35.565734,
                                    33.282324
                                ],
                                [
                                    35.626118,
                                    33.243282
                                ],
                                [
                                    35.623373,
                                    33.268546
                                ],
                                [
                                    35.65082,
                                    33.280028
                                ],
                                [
                                    35.719359,
                                    33.329381
                                ],
                                [
                                    35.770136,
                                    33.337412
                                ],
                                [
                                    35.819541,
                                    33.317906
                                ],
                                [
                                    35.781115,
                                    33.273139
                                ],
                                [
                                    35.818168,
                                    33.238688
                                ],
                                [
                                    35.816796,
                                    33.203073
                                ],
                                [
                                    35.845615,
                                    33.190432
                                ],
                                [
                                    35.845615,
                                    33.161697
                                ],
                                [
                                    35.816796,
                                    33.11685
                                ],
                                [
                                    35.856594,
                                    33.101896
                                ],
                                [
                                    35.892211,
                                    32.944149
                                ],
                                [
                                    35.826339,
                                    32.778038
                                ],
                                [
                                    35.579316,
                                    32.630123
                                ],
                                [
                                    35.562847,
                                    31.770208
                                ],
                                [
                                    35.43658,
                                    31.222197
                                ],
                                [
                                    35.414622,
                                    30.906938
                                ],
                                [
                                    35.191358,
                                    30.401307
                                ],
                                [
                                    34.993739,
                                    29.506549
                                ],
                                [
                                    34.587524,
                                    30.382353
                                ],
                                [
                                    34.477736,
                                    30.439202
                                ],
                                [
                                    34.477736,
                                    30.675715
                                ],
                                [
                                    34.291096,
                                    31.194008
                                ],
                                [
                                    34.631439,
                                    31.569175
                                ],
                                [
                                    34.488715,
                                    31.644029
                                ],
                                [
                                    35.134816,
                                    33.11685
                                ]
                            ]
                        ]
                    ]
                }
            },
            "data": [
                {
                    "dataFilter": {
                        "timeRange": {
                            "from": dates[0],
                            "to": dates[1]
                        },
                        "maxCloudCoverage": maxCloudCover,
                        "mosaickingOrder": "mostRecent"
                    },
                    "type": "sentinel-2-l2a"
                }
            ]
        },
        "output": {
            "width": pageHeight*0.42,
            "height": pageHeight,
            "responses": [
                {
                    "identifier": "default",
                    "format": {
                        "type": "image/png"
                    }
                }
            ]
        },
        "evalscript": `
        //VERSION=3
    
        function setup() {
            return {
              input: ["B02", "B03", "B04"],
              output: { 
                bands: 3
              }
            }
          }
          
          function evaluatePixel(sample) {
            return [2.5 * sample.B04, 2.5 * sample.B03, 2.5 * sample.B02]
          }
        `
    }
}

