import logo from './logo.svg';
import './style/style.scss';
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
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <div className="app-container">
      <header>
        <Header />
      </header>
      <main className="main-container">
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
