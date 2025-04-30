import React from 'react';
import { Box, Heading, Text, VStack, Image, StackDivider } from '@chakra-ui/react';
import DrainageImage from '../../media/services/drainage_service_mapping.png';

const DrainageServiceMapping: React.FC = () => {
  return (
    <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }} py={{ base: 6, md: 10 }}>
      <Heading mb={8} textAlign="center" size="xl">
        Drainage & Service Mapping
      </Heading>

      <VStack spacing={8} align="center" textAlign="left">
        <Box w="full" maxW="600px" aspectRatio={4/3} overflow="hidden" borderRadius="md">
          <Image
            src={DrainageImage}
            alt="Drainage & Service Mapping"
            objectFit="cover"
            w="full"
            h="full"
          />
        </Box>

        <Text fontSize={{ base: "md", md: "lg" }} maxW="3xl">
          We provide detailed utility drawings to support your construction, refurbishment, and development projects. We map the visible drainage runs and service positions on site, identifying the type, location, and depth where accessible.
        </Text>

        <Text fontSize={{ base: "md", md: "lg" }} maxW="3xl">
          We offer drainage and basic service mapping surveys across London and the surrounding areas.
        </Text>

        <VStack align="start" spacing={6} divider={<StackDivider borderColor="gray.200" />} w="full" maxW="3xl" textAlign="left">
          <Box>
            <Heading size="md" mb={2}>Statutory Services Search</Heading>
            <Text fontSize={{ base: "md", md: "lg" }} maxW="3xl">
              As an additional service, we can provide desktop utility searches to help identify key service providers and the likely location of underground utilities based on statutory records.
            </Text>
          </Box>
        </VStack>
      </VStack>
    </Box>
  );
};

export default DrainageServiceMapping;
