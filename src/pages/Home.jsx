import axios from 'axios';
import React from 'react'
import { useEffect, useMemo, useState } from 'react';
import ImgList from '../components/ImgList';
import _ from 'lodash';
import Loader from '../components/Loader';
import { isDarkMode } from '../store/store';
import { sentinelService } from '../services/sentinel.service';
import { useRecoilValue } from 'recoil';

export default function Home() {
    const isDark = useRecoilValue(isDarkMode)
    const [sentinelImgs, setSentinelImgs] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [cloudCover, setCloudCover] = useState(30)
    const [imgsCount, setImgsCount] = useState(2)
    const [activeToken, setActiveToken] = useState(null)
    const instance = axios.create({
        baseURL: 'https://services.sentinel-hub.com',
        responseType: 'blob'
    })
    useEffect(() => {
        setImgs()
    }, [cloudCover, imgsCount])
    const pageHeight = useMemo(() => {
        return window.innerHeight * 0.6
    })
    const setImgs = async () => {
        setIsLoading(true)
        console.log('imgsCount: ' + imgsCount);
        let authorizationToken
        if (activeToken) {
            authorizationToken = `Bearer ${activeToken.data.access_token}`
        } else {
            const token = await sentinelService.getAccessToken()
            authorizationToken = `Bearer ${token.data.access_token}`
            setActiveToken(token)
        }

        Object.assign(instance.defaults, { headers: { authorization: authorizationToken } })
        const imgs = []
        for (let i = 0; i < imgsCount; i++) {
            const img = await getImg()
            imgs.push(img)
        }
        setIsLoading(false)
        setSentinelImgs(imgs)
    }
    const getImg = async () => {
        try {
            const img = await instance.post('/api/v1/process', sentinelService.getReqBodyDetails(pageHeight, cloudCover))
            const url = URL.createObjectURL(img.data)
            return url
        } catch (err) {
            console.error(err);
            throw new Error('Oops not available right now');
        }
    }
    const replaceImgs = async () => {
        setImgs()
    }
    const increaseCloudCover = () => {
        if (cloudCover > 100) return
        setCloudCover(cloudCover + 10)
    }
    const decreaseCloudCover = () => {
        if (cloudCover < 0) return
        setCloudCover(cloudCover - 10)

    }

    const addDeleteNewImg = (counter) => {
        let count = imgsCount + counter
        if (count > 4 || count < 0) return
        setImgsCount(count)

    }
    return (
        <div className={`home-container ${isDark ? 'dark-mode' : ''}`}>
            <div className={`map-details-container ${isDark ? 'dark-mode' : ''}`}>
                <h1>Israel map</h1>
                <h2>cloud covarage: {cloudCover}%</h2>
            </div>
            <div className="img-container">
                {(!isLoading && sentinelImgs) ? <ImgList sentinelImgs={sentinelImgs} /> : <Loader />}
            </div>
            <div className={`buttons-map-container ${isDark ? 'dark-mode' : ''}`}>
                <button className="btn btn-replace" onClick={_.debounce(replaceImgs, 2000)}>Replace Images</button>
                <button className="btn btn-cloud" onClick={_.debounce(increaseCloudCover, 1000)}>Clouder</button>
                <button className="btn btn-bright" onClick={_.debounce(decreaseCloudCover, 1000)}>Brighter</button>
                <button className="btn btn-increase-count" onClick={_.debounce(() => addDeleteNewImg(1), 1000)}>Add new image</button>
                <button className="btn btn-increase-count" onClick={_.debounce(() => addDeleteNewImg(-1), 1000)}>Remove one image</button>
            </div>
        </div>
    )
}
