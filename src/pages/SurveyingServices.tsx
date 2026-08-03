import React from 'react';
import { Box, Button, Heading, Icon, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { FiArrowRight, FiCompass, FiHome, FiLayers, FiMap, FiTool } from 'react-icons/fi';

interface SurveyingServicesProps { setCurrentPage: (page: string) => void; }

const services = [
  ['Measured Building Surveys', 'Accurate floor plans, elevations and sections for design and planning.', FiHome],
  ['Topographic Surveys', 'Detailed land and site mapping using total station and GPS.', FiMap],
  ['Drainage & Service Mapping', 'Clear mapping of drainage runs and below-ground services.', FiLayers],
  ['Setting Out Services', 'Reliable transfer of design information from drawings to site.', FiCompass],
  ['Site Engineering Support', 'Practical setting out, QA and contractor coordination.', FiTool],
] as const;

const SurveyingServices: React.FC<SurveyingServicesProps> = ({ setCurrentPage }) => (
  <Box className="section-page survey-page">
    <VStack className="section-intro" spacing={4}>
      <Text className="section-kicker">Surveying services</Text>
      <Heading>Built on site experience.</Heading>
      <Text>Professional land surveying and site engineering solutions for residential and commercial projects, based in London and serving clients nationwide.</Text>
    </VStack>
    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={5} maxW="1200px" mx="auto">
      {services.map(([title, description, icon]) => (
        <Box className="service-card" key={title}>
          <Icon as={icon} boxSize={6} color="teal.700" />
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <Button variant="link" colorScheme="teal" rightIcon={<FiArrowRight />} onClick={() => setCurrentPage(title)}>Learn more</Button>
        </Box>
      ))}
      <Box className="service-card service-card--projects">
        <Text className="section-kicker">Selected work</Text>
        <Heading size="md">Surveying projects</Heading>
        <Text>See experience from major commercial, infrastructure and residential projects.</Text>
        <Button variant="link" colorScheme="teal" rightIcon={<FiArrowRight />} onClick={() => setCurrentPage('Projects')}>View projects</Button>
      </Box>
    </SimpleGrid>
  </Box>
);

export default SurveyingServices;
