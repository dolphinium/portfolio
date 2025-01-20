import React from 'react';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <main className="pt-16">
        <Home />
        <About />
        <WorkExperience />
        <Projects />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
