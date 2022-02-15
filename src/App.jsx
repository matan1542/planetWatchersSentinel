import logo from './logo.svg';
import './App.css';
import {sentialService} from './services/sential.service.js'
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    fetch()
    async function fetch(){
      sentialService.getImage()
    }
  },[])
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
