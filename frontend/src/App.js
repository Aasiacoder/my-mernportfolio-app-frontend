import './App.css';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/common/Sidebar/Sidebar';
import { SidebarProvider } from './components/common/Sidebar/SidebarContext';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <section>

      <SidebarProvider>
        <Navbar />
        <Sidebar />

        <Home />
        <About />
        <Project />
        <Contact />
        <Footer />
      </SidebarProvider>

    </section>
  );
}

export default App;
