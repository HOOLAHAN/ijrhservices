import React, { useState, useEffect } from 'react';
import { Box, Fade } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import TopographicSurveys from './pages/services/TopographicSurveys';
import MeasuredBuildingSurveys from './pages/services/MeasuredBuildingSurveys';
import DrainageServiceMapping from './pages/services/DrainageServiceMapping';
import SettingOutServices from './pages/services/SettingOutServices';
import SiteEngineeringSupport from './pages/services/SiteEngineeringSupport';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const [showPage, setShowPage] = useState(true);

  useEffect(() => {
    setShowPage(false); // Start fade out
    const timeout = setTimeout(() => {
      setShowPage(true); // Then fade in
    }, 50); // Short delay to reset fade
    return () => clearTimeout(timeout);
  }, [currentPage]);

  const renderPage = () => {
    if (currentPage === 'Home') return <Home />;
    if (currentPage === 'Projects') return <Projects />;
    if (currentPage === 'Measured Building Surveys') return <MeasuredBuildingSurveys />;
    if (currentPage === 'Topographic Surveys') return <TopographicSurveys />;
    if (currentPage === 'Drainage & Service Mapping') return <DrainageServiceMapping />;
    if (currentPage === 'Setting Out Services') return <SettingOutServices />;
    if (currentPage === 'Site Engineering Support') return <SiteEngineeringSupport />;
    
    return <Home />;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow px-4 py-6 max-w-7xl mx-auto w-full" style={{ minHeight: 'calc(100vh - 300px)' }}>
        <Fade in={showPage}>
          <Box w="full">
            {renderPage()}
          </Box>
        </Fade>
      </main>
      <Contact />
    </div>
  );
};

export default App;
