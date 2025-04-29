// pages/Home.tsx
import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';

const Home: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minH="80vh"
      textAlign="center"
      px={4}
    >
      <VStack spacing={6}>
        <Heading as="h1" size="2xl">
          Welcome to IJRH Services
        </Heading>
        <Text fontSize="xl" maxW="600px">
          Professional Land Surveying and Site Engineering Solutions for Residential and Commercial Projects.
          Based in London and serving nationwide.
        </Text>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          }}
        >
          Contact Us
        </Button>
      </VStack>
    </Box>
  );
};

export default Home;
