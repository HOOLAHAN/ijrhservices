import React from 'react';
import { Box, Heading, Text, Image, SimpleGrid } from '@chakra-ui/react';
import constructionProjects from '../data/constructionProjectsData';

const Projects: React.FC = () => {
  // Flatten the projects data
  const allProjects = constructionProjects.flatMap(company => company.projects);

  return (
    <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }} py={{ base: 6, md: 10 }}>
      <Heading mb={8} textAlign="center" size="xl">
        Projects
      </Heading>

      <Text mb={10} fontSize="lg" textAlign="center">
        IJRH Services has delivered surveying and engineering solutions across a variety of commercial and residential projects throughout London and the South East. Our experience spans high-rise developments, infrastructure upgrades, and bespoke residential builds. Here are some highlights from our recent work.
      </Text>

      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={8} mt={8}>
        {allProjects.map((project, index) => (
          <Box key={index} borderWidth="1px" borderRadius="md" overflow="hidden" p={4}>
            <Box aspectRatio={4 / 3} w="full" overflow="hidden" mb={4} borderRadius="md">
              <Image
                src={project.image}
                alt={project.projectName}
                objectFit="cover"
                w="full"
                h="full"
              />
            </Box>
            <Heading size="md" mb={2}>
              {project.projectName}
            </Heading>
            <Text fontSize="sm" color="gray.500" mb={2}>
              {project.startDate} – {project.endDate} | {project.location}
            </Text>
            <Text fontSize="md">{project.details}</Text>
          </Box>
        ))}
      </SimpleGrid>

    </Box>
  );
};

export default Projects;
