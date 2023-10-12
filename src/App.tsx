import './App.css';
import { Banner } from './components/Banner';
import { Brief } from './components/Brief';
import { ContactUs } from './components/ContactUs';
import { FAQ } from './components/FAQ';
import { Header } from './components/Header';
import { LeadMagnet } from './components/LeadMagnet';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { SocialNetworks } from './components/SocialNetworks';
import { WhyUs } from './components/WhyUs';
import { TranslationProvider } from "./hooks/useTranslation";

function App() {
  return (
    <div className="App">
      <TranslationProvider>
        <Header />
        <Banner />
        <WhyUs />
        <Services />
        <Portfolio />
        <ContactUs />
        <Brief />
        <FAQ />
        <SocialNetworks />
        <LeadMagnet />
      </TranslationProvider>
    </div>
  );
}

export default App;
