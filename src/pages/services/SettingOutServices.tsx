import React from 'react';
import { Box, Heading, Text, VStack, Image, StackDivider } from '@chakra-ui/react';
import SettingOutImage from '../../media/services/setting_out.png';
import backgroundImage from '../../media/brand/home_bg.png';

const SettingOutServices: React.FC = () => {
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
          Setting Out Services
        </Heading>

        <VStack spacing={8} align="center" textAlign="center">
          <Box w="full" maxW="600px" aspectRatio={4 / 3} overflow="hidden" borderRadius="md">
            <Image
              src={SettingOutImage}
              alt="Setting Out Services"
              objectFit="cover"
              w="full"
              h="full"
            />
          </Box>

          <Text fontSize={{ base: 'md', md: 'lg' }} maxW="3xl">
            IJRH Services provide reliable and accurate setting out services across London and surrounding areas. We can support projects from small extensions and dwellings through to complex developments and public installations.
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
              <Heading size="md" mb={2}>Primary Site Control</Heading>
              <Text>Establishing robust control networks and reference points tailored to your project requirements.</Text>
            </Box>

            <Box>
              <Heading size="md" mb={2}>Detailed Setting Out</Heading>
              <Text>Full setting out of gridlines, foundations, structures, drainage, and landscape features.</Text>
            </Box>

            <Box>
              <Heading size="md" mb={2}>QA and Verification Surveys</Heading>
              <Text>Ongoing verification surveys to ensure construction elements are built to design tolerances.</Text>
            </Box>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default SettingOutServices;
