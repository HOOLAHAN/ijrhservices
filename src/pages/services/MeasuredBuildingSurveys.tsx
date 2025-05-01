import React from 'react';
import { Box, Heading, Text, VStack, Image, StackDivider } from '@chakra-ui/react';

const MeasuredBuildingSurveys: React.FC = () => {
  return (
    <Box
      minH="100vh"
      bgImage={`url('/media/brand/home_bg.png')`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      px={{ base: 4, md: 8 }}
      py={{ base: 6, md: 10 }}
      display="flex"
      justifyContent="center"
    >
      <Box
        bg="rgba(255, 255, 255, 0.85)"
        borderRadius="md"
        p={{ base: 6, md: 12 }}
        maxW="7xl"
        w="full"
      >
        <Heading mb={8} textAlign="center" size="xl">
          Measured Building Surveys
        </Heading>

        <VStack spacing={8} align="center" textAlign="left">
          <Box w="full" maxW="600px" aspectRatio={4 / 3} overflow="hidden" borderRadius="md">
            <Image
              src='/media/services/measured_building_surveys.png'
              alt="Measured Building Surveys"
              objectFit="contain"
              w="full"
              h="full"
            />
          </Box>

          <Text fontSize={{ base: 'md', md: 'lg' }} maxW="3xl">
            Our measured building surveys deliver high-quality floor plans, elevations, and sections tailored to planning applications, design projects, and property developments. Based in London, we operate across the surrounding areas to support projects of all sizes.
          </Text>

          <Text fontSize={{ base: 'md', md: 'lg' }} maxW="3xl">
            Surveys are completed on site using laser equipment, with data processed into fully detailed AutoCAD drawings to meet your required specification and level of detail.
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
              <Heading size="md" mb={2}>
                Floor Plans
              </Heading>
              <Text>
                We offer building floor plans at varying levels of detail, from basic wall, door, and window layouts through to fully detailed service drawings showing fixtures, fittings, sockets, and communication points.
              </Text>
            </Box>

            <Box>
              <Heading size="md" mb={2}>
                Street Scene Elevations
              </Heading>
              <Text>
                Increasingly required for planning submissions, our street scene elevations show how proposed developments sit within their existing urban environment — often achievable even without direct access to neighbouring properties.
              </Text>
            </Box>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default MeasuredBuildingSurveys;
