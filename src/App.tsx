import { useEffect, useState } from 'react';
import './App.css';
import { Banner } from './components/Banner';
import { Brief } from './components/Brief';
import { ContactUs } from './components/ContactUs';
import { FAQ } from './components/FAQ';
import { Header } from './components/Header';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { SocialNetworks } from './components/SocialNetworks';
import { WhyUs } from './components/WhyUs';
import { LeadMagnet } from './components/LeadMagnet';

function App() {

  

  return (
    <div className="App">
      <Header />
      <Banner />
      <WhyUs />
      <Services />
      <Portfolio />
      <ContactUs />
      <Brief />
      <FAQ />
      <SocialNetworks />
      <LeadMagnet/>
    </div>
  );
}

export default App;
