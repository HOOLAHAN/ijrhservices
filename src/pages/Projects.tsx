import React from 'react';
import { Box, Heading, Text, Image, SimpleGrid } from '@chakra-ui/react';
import constructionProjects from '../data/constructionProjectsData';

const Projects: React.FC = () => {
  const allProjects = constructionProjects.flatMap(company => company.projects);

  return (
    <Box
      minH="100vh"
      bgImage={`url('/media/brand/home_bg.png')`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      px={4}
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
          Projects
        </Heading>

        <Text mb={10} fontSize="lg" textAlign="center">
          At IJRH Services, we bring deep experience from a wide range of commercial and residential projects across London and the South East. The following highlights showcase work delivered by our lead surveyor and site engineer during previous roles for industry-leading contractors and consultancies. This experience informs the high-quality service we now provide under the IJRH Services banner.
        </Text>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={8}>
          {allProjects.map((project, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="md"
              overflow="hidden"
              p={4}
              bg="white"
              shadow="sm"
              _hover={{ shadow: 'md' }}
            >
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
    </Box>
  );
};

export default Projects;
