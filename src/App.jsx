import './style/style.scss';
import {
  RecoilRoot
} from 'recoil';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <div className="app-container">
      <RecoilRoot>
        <header>
          <Header />
        </header>
        <main className="main-container">
          <Home />
        </main>
        <footer>
          <Footer />
        </footer>
      </RecoilRoot>
    </div>
  );
}

export default App;
