import React from 'react';
import { Box, Heading, Text, VStack, Image, StackDivider } from '@chakra-ui/react';
import TopographicImage from '../../media/services/topographic_surveys.png';
import backgroundImage from '../../media/brand/home_bg.png';

const TopographicSurveys: React.FC = () => {
  return (
    <Box
      minH="100vh"
      bgImage={`url(${backgroundImage})`}
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
          Topographic Surveys
        </Heading>

        <VStack spacing={8} align="center" textAlign="left">
          <Box w="full" maxW="600px" aspectRatio={4 / 3} overflow="hidden" borderRadius="md">
            <Image
              src={TopographicImage}
              alt="Topographic Surveys"
              objectFit="cover"
              w="full"
              h="full"
            />
          </Box>

          <Text fontSize={{ base: 'md', md: 'lg' }} maxW="3xl">
            Our topographic surveys combine high-precision laser Total Station instruments and differential GPS equipment to deliver detailed and reliable land surveys. Based in London, we operate across the surrounding areas, undertaking projects ranging from individual gardens to 100-acre private estates, business parks, shopping centres, schools, and hospitals.
          </Text>

          <Text fontSize={{ base: 'md', md: 'lg' }} maxW="3xl">
            Site control can be referenced either to a local grid or to OS National Grid coordinates, depending on your project requirements.
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
              <Heading size="md" mb={2}>3D Modelling</Heading>
              <Text>
                Accurate 3D ground models and wireframe building visualisations can be generated to support site planning, area analysis, and volume calculations.
              </Text>
            </Box>

            <Box>
              <Heading size="md" mb={2}>Area & Volume Calculations</Heading>
              <Text>
                Our surveys enable area calculations for land sales, as well as volume estimates for material removal, introduction, and cut-and-fill assessments. Section and profile drawings are also available.
              </Text>
            </Box>

            <Box>
              <Heading size="md" mb={2}>Flood Risk Assessment</Heading>
              <Text>
                We provide highly accurate level surveys using differential GPS equipment to support flood risk assessments and planning applications for sites located within potential flood zones.
              </Text>
            </Box>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default TopographicSurveys;
