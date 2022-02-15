import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { sentinelService } from './services/sentinel.service.js'
import { useEffect, useMemo, useState } from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import Home from './pages/Home';

function App() {
  
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
