import './App.css';
import { Banner } from './components/Banner';
import { FAQ } from './components/FAQ';
import { Header } from './components/Header';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <WhyUs />
      <Services />
      <Portfolio />
      <FAQ />
    </div>
  );
}

export default App;
