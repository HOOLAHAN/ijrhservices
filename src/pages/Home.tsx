// pages/Home.tsx
import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
} from '@chakra-ui/react';

const Home: React.FC = () => {

  const serviceDescriptions = {
    'Topographic Surveys': 'Accurate land and site mapping using total station and GPS.',
    'Measured Building Surveys': 'Detailed floor plans, elevations and sections for planning or design.',
    'Site Engineering Support': 'Experienced support for setting out, QA, and contractor coordination.',
  };

  const services = Object.entries(serviceDescriptions);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minH="80vh"
      px={4}
      textAlign="center"
      m={3}
    >
      <VStack spacing={6}>
        <Heading as="h1" size="2xl">
          Welcome to IJRH Services
        </Heading>

        <Heading as="h2" size="md" color="gray.500">
          Accurate. Reliable. Built on site experience.
        </Heading>

        <Text fontSize="xl" maxW="600px">
          Professional Land Surveying and Site Engineering Solutions for Residential and Commercial Projects.
          Based in London and serving clients nationwide.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={16} maxW="6xl" w="full">
        {services.map(([title, description]) => (
          <Box
            key={title}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            textAlign="left"
            bg="white"
          >
            <Heading size="md" mb={2}>{title}</Heading>
            <Text fontSize="sm" color="gray.600">{description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
