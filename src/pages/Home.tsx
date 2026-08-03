import React from 'react';
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FiArrowRight, FiCode, FiMap } from 'react-icons/fi';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => (
  <Box className="home-shell">
    <Box className="home-hero">
      <VStack spacing={5} textAlign="center" maxW="850px" mx="auto">
        <Badge className="eyebrow">Surveying &amp; Digital</Badge>
        <Heading as="h1" className="hero-title">
          Practical expertise.<br />Purposeful digital products.
        </Heading>
        <Text className="hero-copy">
          IJRH Services brings together professional surveying and site engineering
          with a growing collection of useful, thoughtfully built web experiences.
        </Text>
      </VStack>
    </Box>

    <Box maxW="1200px" mx="auto" px={{ base: 5, md: 8 }} pb={{ base: 14, md: 24 }}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 5, md: 8 }}>
        <ServicePath
          icon={FiMap}
          number="01"
          label="Surveying services"
          title="Precision from the ground up."
          description="Land surveying, measured building surveys and site engineering support, delivered with real on-site experience across London and nationwide."
          action="Explore surveying"
          tone="survey"
          onClick={() => setCurrentPage('Surveying Services')}
        />
        <ServicePath
          icon={FiCode}
          number="02"
          label="Web services"
          title="Small ideas, well made."
          description="Independent web apps and digital products—from a multiplayer dice game to a smarter way to discover your next city break."
          action="View web projects"
          tone="digital"
          onClick={() => setCurrentPage('Web Services')}
        />
      </SimpleGrid>
    </Box>
  </Box>
);

interface ServicePathProps {
  icon: React.ElementType;
  number: string;
  label: string;
  title: string;
  description: string;
  action: string;
  tone: 'survey' | 'digital';
  onClick: () => void;
}

const ServicePath: React.FC<ServicePathProps> = ({ icon, number, label, title, description, action, tone, onClick }) => (
  <Box className={`path-card path-card--${tone}`} onClick={onClick} tabIndex={0} role="button"
    onKeyDown={(event) => (event.key === 'Enter' || event.key === ' ') && onClick()}>
    <Flex justify="space-between" align="start">
      <Box className="path-icon"><Icon as={icon} boxSize={6} /></Box>
      <Text className="path-number">{number}</Text>
    </Flex>
    <Text className="path-label">{label}</Text>
    <Heading as="h2" className="path-title">{title}</Heading>
    <Text className="path-copy">{description}</Text>
    <Button className="path-action" variant="link" rightIcon={<FiArrowRight />} onClick={onClick}>
      {action}
    </Button>
  </Box>
);

export default Home;
