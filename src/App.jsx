import logo from './logo.svg';
import './App.css';
import {sentinelService} from './services/sentinel.service.js'
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    fetch()
    async function fetch(){
      sentinelService.getImage()
    }
  },[])
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
