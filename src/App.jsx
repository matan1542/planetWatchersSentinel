import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { sentinelService } from './services/sentinel.service.js'
import { useEffect, useMemo, useState } from 'react';

function App() {
  const [sentinelImgs,setSentinelImgs] = useState(null)
  const instence = axios.create({
    baseURL: 'https://services.sentinel-hub.com',
    responseType: 'blob'
  })
  useEffect(() => {
    setImgs()
  }, [])
  const setImgs = async ()=>{
    const authorizationToken = await sentinelService.getAccessToken()
    Object.assign(instence.defaults, { headers: { authorization: authorizationToken } })
    const imgs = []
    for(let i = 0; i<2;i++){
      const img = getImg(authorizationToken)
      imgs.push(img)
    }
    setSentinelImgs(imgs)
  }
  const getImg = async () => {
  try{
    const img = await instence.post('/api/v1/process', sentinelService.getReqBodyDetails())
    const url = URL.createObjectURL(img.data)

    return url
  }catch(err) {
    console.error(err);
    throw new Error('Oops not avilable right now');
  }
  }
  return (
    <div className="App">

    </div>
  );
}

export default App;
