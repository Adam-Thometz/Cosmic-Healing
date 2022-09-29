import './App.css';
import CanHelpWith from './can-help-with/CanHelpWith';
import Hero from './hero/Hero';
import HowItWorks from './how-it-works/HowItWorks';
import MeetProfessional from './meet-professional/MeetProfessional';
import Methodology from './methodology/Methodology';
import Navbar from './navbar/Navbar';
import Services from './services/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main>
        <MeetProfessional />
        <CanHelpWith />
        <Methodology />
        <Services />
        <HowItWorks />
      </main>
    </div>
  );
};

export default App;