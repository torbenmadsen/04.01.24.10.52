import React from 'react';
    import Header from './components/Header';
    import About from './components/About';
    import Projects from './components/Projects';
    import Contact from './components/Contact';
    import Footer from './components/Footer';

    function App() {
      return (
        <div>
          <Header />
          <div className="container">
            <About />
            <Projects />
            <Contact />
          </div>
          <Footer />
        </div>
      );
    }

    export default App;
