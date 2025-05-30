import React from 'react';
import { Box, Heading, Text, VStack, Image, StackDivider } from '@chakra-ui/react';

const SiteEngineeringSupport: React.FC = () => {
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
          Site Engineering Support
        </Heading>

        <VStack spacing={8} align="center" textAlign="center">
          <Box w="full" maxW="600px" aspectRatio={4 / 3} overflow="hidden" borderRadius="md">
            <Image
              src='/media/services/site_engineering_support.png'
              alt="Site Engineering Support"
              objectFit="cover"
              w="full"
              h="full"
            />
          </Box>

          <Text fontSize={{ base: 'md', md: 'lg' }} maxW="3xl">
            IJRH Services provide technical site engineering support across a wide range of construction projects. We bring experience in setting out, technical problem-solving, quality assurance, and site coordination.
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
              <Heading size="md" mb={2}>Setting Out and Surveying</Heading>
              <Text>Accurate setting out of gridlines, foundations, drainage, structural elements, and landscape features, based on approved technical designs.</Text>
            </Box>

            <Box>
              <Heading size="md" mb={2}>Technical Supervision and QA</Heading>
              <Text>Reviewing drawings, supervising works on site, verifying construction against specifications, and conducting quality assurance inspections.</Text>
            </Box>

            <Box>
              <Heading size="md" mb={2}>Coordination and Reporting</Heading>
              <Text>Supporting the main contractor and subcontractors with technical advice, resolving site issues, preparing reports, and tracking project progress.</Text>
            </Box>

            <Box>
              <Heading size="md" mb={2}>Health, Safety and Compliance</Heading>
              <Text>Ensuring all operations comply with health, safety, and environmental standards throughout the construction programme.</Text>
            </Box>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default SiteEngineeringSupport;
