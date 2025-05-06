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
    'Measured Building Surveys': 'Detailed floor plans, elevations and sections for planning or design.',
    'Topographic Surveys': 'Accurate land and site mapping using total station and GPS.',
    'Site Engineering Support': 'Experienced support for setting out, QA, and contractor coordination.',
  };

  const services = Object.entries(serviceDescriptions);

  return (
    <Box
      minH="100vh"
      bgImage={`url('/media/brand/home_bg.png')`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={{ base: 4, md: 8 }}
      py={{ base: 6, md: 10 }}
    >
      <Box
        bg="rgba(255, 255, 255, 0.65)"
        borderRadius="md"
        p={{ base: 4, md: 10 }}
        maxW="7xl"
        w="full"
      >
        <VStack spacing={6} textAlign="center">
          <Heading as="h1" size="2xl">
            Welcome to IJRH Services
          </Heading>

          <Heading as="h2" size="md" color="gray.600">
            Accurate. Reliable. Built on site experience.
          </Heading>

          <Text fontSize="xl" maxW="600px">
            Professional Land Surveying and Site Engineering Solutions for Residential and Commercial Projects.
            Based in London and serving clients nationwide.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={16}>
          {services.map(([title, description]) => (
            <Box
              key={title}
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              textAlign="left"
              bg="white"
              shadow="sm"
            >
              <Heading size="md" mb={2}>{title}</Heading>
              <Text fontSize="sm" color="gray.600">{description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Home;
