import './App.css';
import CanHelpWith from './can-help-with/CanHelpWith';
import Hero from './hero/Hero';
import MeetProfessional from './meet-professional/MeetProfessional';
import Methodology from './methodology/Methodology';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main>
        <MeetProfessional />
        <CanHelpWith />
        <Methodology />
      </main>
    </div>
  );
};

export default App;