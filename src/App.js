import './css/App.css';
import Header from './components/Header'
import Home from './components/Home'
import Socials from './components/Socials'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import ContactMe from './components/ContactMe'
import Projects from './components/Projects'
import Background from './components/Background';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Socials />
      <Background />
    </div>
  );
}

export default App;
