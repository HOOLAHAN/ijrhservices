import React from 'react';
import { Box, Heading, Text, VStack, Image, StackDivider } from '@chakra-ui/react';

const DrainageServiceMapping: React.FC = () => {
  return (
    <Box
      minH="100vh"
      bgImage={`url('/media/brand/home_bg.png')`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      justifyContent="center"
      px={{ base: 4, md: 8 }}
      py={{ base: 6, md: 10 }}
    >
      <Box
        bg="rgba(255, 255, 255, 0.85)"
        borderRadius="md"
        p={{ base: 6, md: 12 }}
        maxW="7xl"
        w="full"
      >
        <Heading mb={8} textAlign="center" size="xl">
          Drainage & Service Mapping
        </Heading>

        <VStack spacing={8} align="center" textAlign="left">
          <Box w="full" maxW="600px" aspectRatio={4 / 3} overflow="hidden" borderRadius="md">
            <Image
              src='/media/services/drainage_service_mapping.png'
              alt="Drainage & Service Mapping"
              objectFit="cover"
              w="full"
              h="full"
            />
          </Box>

          <Text fontSize={{ base: 'md', md: 'lg' }} maxW="3xl">
            We provide detailed utility drawings to support your construction, refurbishment, and development projects. We map the visible drainage runs and service positions on site, identifying the type, location, and depth where accessible.
          </Text>

          <Text fontSize={{ base: 'md', md: 'lg' }} maxW="3xl">
            We offer drainage and basic service mapping surveys across London and the surrounding areas.
          </Text>

          <VStack
            align="start"
            spacing={6}
            divider={<StackDivider borderColor="gray.200" />}
            w="full"
            maxW="3xl"
            textAlign="left"
          >
            <Box>
              <Heading size="md" mb={2}>Statutory Services Search</Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }}>
                As an additional service, we can provide desktop utility searches to help identify key service providers and the likely location of underground utilities based on statutory records.
              </Text>
            </Box>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default DrainageServiceMapping;
