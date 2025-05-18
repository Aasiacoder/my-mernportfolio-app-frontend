import { Routes, Route } from "react-router-dom";
import { SidebarProvider } from './components/common/Sidebar/SidebarContext';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import HireMe from './components/hireme/HireMe';
import { useLocation } from 'react-router-dom';



const MainApp = () => {
    const location = useLocation(); // Access current route
    const isHireMePage = location.pathname === "/hireme"; // Check current route is "/hireme"
  
    return (
      <section>
        {/* Conditionally render Navbar and Footer */}
        <SidebarProvider>
          {!isHireMePage && <Navbar />}
  
          <Routes>
            <Route path='/' element={
              <>
                <Home />
                <About />
                <Project />
                <Contact />
              </>
            }></Route>
            <Route path='/hireme' element={<HireMe />}></Route>
          </Routes>
  
          {!isHireMePage && <Footer />}
        </SidebarProvider>
      </section>
    );
  }

  export default MainApp;
  