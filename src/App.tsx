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
import SurveyingServices from './pages/SurveyingServices';
import WebServices from './pages/WebServices';

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
    if (currentPage === 'Home') return <Home setCurrentPage={setCurrentPage} />;
    if (currentPage === 'Surveying Services') return <SurveyingServices setCurrentPage={setCurrentPage} />;
    if (currentPage === 'Web Services') return <WebServices />;
    if (currentPage === 'Projects') return <Projects />;
    if (currentPage === 'Measured Building Surveys') return <MeasuredBuildingSurveys />;
    if (currentPage === 'Topographic Surveys') return <TopographicSurveys />;
    if (currentPage === 'Drainage & Service Mapping') return <DrainageServiceMapping />;
    if (currentPage === 'Setting Out Services') return <SettingOutServices />;
    if (currentPage === 'Site Engineering Support') return <SiteEngineeringSupport />;
    
    return <Home setCurrentPage={setCurrentPage} />;
  };

  return (
    <div className="app-shell">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="site-main">
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
