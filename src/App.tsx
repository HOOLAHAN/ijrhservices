import React, { useState, useRef } from 'react';
import { ChakraProvider, Box, Heading, extendTheme, Center, Text } from '@chakra-ui/react';
import { Project } from './types/project';
import constructionProjects from './data/constructionProjectsData';
import ConstructionProjectCard from './components/ConstructionProjectCard';
import Modal from './components/Modal';
import About from './components/About';

const theme = extendTheme({});

const App: React.FC = () => {
  const projectsRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box p="6" maxWidth={1600} mx="auto">
        <About />      
        <Center><Heading ref={projectsRef} my={4} size="lg">Construction Projects</Heading></Center>
        {constructionProjects.map((company, companyIndex) => (
          <Box key={companyIndex} mb={6}>
            <Center><Text fontSize="xl" fontWeight="bold" mt={4} mb={2}>{company.company}</Text></Center>
            <Box display="flex" flexWrap="wrap" gridGap="4" justifyContent="center">
              {company.projects.map((project, projectIndex) => (
                <ConstructionProjectCard
                  key={`${companyIndex}-${projectIndex}`}
                  project={project}
                  company={company.company}
                />
              ))}
            </Box>
          </Box>
        ))}
        
        {showModal && selectedProject && <Modal project={selectedProject} onClose={handleCloseModal} />}
      </Box>
    </ChakraProvider>
  );
};

export default App;
