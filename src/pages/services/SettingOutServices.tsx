import React from 'react';
import { Box, Heading, Text, VStack, Image, StackDivider } from '@chakra-ui/react';
import SettingOutImage from '../../media/services/setting_out.png';

const SettingOutServices: React.FC = () => {
  return (
    <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }} py={{ base: 6, md: 10 }}>
      <Heading mb={8} textAlign="center" size="xl">
        Setting Out Services
      </Heading>

      <VStack spacing={8} align="center" textAlign="center">
        <Box w="full" maxW="600px" aspectRatio={4/3} overflow="hidden" borderRadius="md">
          <Image
            src={SettingOutImage}
            alt="Setting Out Services"
            objectFit="cover"
            w="full"
            h="full"
          />
        </Box>
        <Text fontSize={{ base: "md", md: "lg" }} maxW="3xl">
          IJRH Services provide reliable and accurate setting out services across London and surrounding areas. We can support projects from small extensions and dwellings through to complex developments and public installations.
        </Text>

        <VStack align="start" spacing={6} divider={<StackDivider borderColor="gray.200" />} w="full" maxW="3xl" textAlign="left">
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
  );
};

export default SettingOutServices;
