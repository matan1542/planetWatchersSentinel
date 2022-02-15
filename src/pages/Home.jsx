import axios from 'axios';
import React from 'react'
import { useEffect, useMemo, useState } from 'react';
import ImgList from '../components/ImgList';
import { sentinelService } from '../services/sentinel.service';

export default function Home() {
    const [sentinelImgs,setSentinelImgs] = useState(null)
  const instance = axios.create({
    baseURL: 'https://services.sentinel-hub.com',
    responseType: 'blob'
  })
  useEffect(() => {
    setImgs()
  }, [])
  const pageHeight = useMemo(()=>{
      return window.innerHeight * 0.6
  })
  const setImgs = async ()=>{
    const authorizationToken = await sentinelService.getAccessToken()
    Object.assign(instance.defaults, { headers: { authorization: authorizationToken } })
    const imgs = []
    for(let i = 0; i<2;i++){
      const img = await getImg()
      imgs.push(img)
    }
    setSentinelImgs(imgs)
  }
  const getImg = async () => {
  try{
    const img = await instance.post('/api/v1/process', sentinelService.getReqBodyDetails(pageHeight))
    const url = URL.createObjectURL(img.data)

    return url
  }catch(err) {
    console.error(err);
    throw new Error('Oops not avilable right now');
  }
  }

  if(!sentinelImgs) return <div>Loading... </div>
  return (
    <div className="home-container">
        <ImgList sentinelImgs={sentinelImgs}/>
        <div className="buttons-map-container">
            <button className="btn btn-replace" onClick={setImgs}>Replace Images</button>
            <button className="btn btn-cloud">Clouder</button>
        </div>
    </div>
  )
}
