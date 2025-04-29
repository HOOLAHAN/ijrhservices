// components/Contact.tsx
import React from 'react';
import { Box, Text, VStack, Link, HStack, Icon } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <Box bg="gray.600" color="white" py={2} px={4} mt={0}>
      <VStack spacing={2}>
        <Text fontSize="xl" fontWeight="bold">
          Contact Us
        </Text>
        <HStack spacing={4}>
          <Icon as={PhoneIcon} />
          <Text fontSize="sm" >+44 7545 959137</Text>
        </HStack>
        <HStack spacing={4}>
          <Icon as={EmailIcon} />
          <Link href="mailto:info@ijrhservices.co.uk" _hover={{ textDecoration: 'underline' }} fontSize="sm">
            info@ijrhservices.co.uk
          </Link>
        </HStack>
        <HStack spacing={4}>
          <Icon as={FaMapMarkerAlt} />
          <Text fontSize="sm" >London, United Kingdom</Text>
        </HStack>
        <Text fontSize="sm" color="gray.400" mt={2}>
          &copy; {new Date().getFullYear()} IJRH Services Ltd. All rights reserved.
        </Text>
      </VStack>
    </Box>
  );
};

export default Contact;
