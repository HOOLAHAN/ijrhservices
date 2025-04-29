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

      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={8} mt={8}>
        {allProjects.map((project, index) => (
          <Box key={index} borderWidth="1px" borderRadius="md" overflow="hidden" p={4}>
            <Image
              src={project.image}
              alt={project.projectName}
              mb={4}
              borderRadius="md"
              objectFit="cover"
              maxH="200px"
              w="full"
            />
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
