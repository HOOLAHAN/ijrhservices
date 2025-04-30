import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Button,
  VStack,
  HStack,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import IJRHLogo from '../media/brand/IJRH_SERVICES_LOGO.png';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const pages = [
  'Home',
  'Measured Building Surveys',
  'Topographic Surveys',
  'Drainage & Service Mapping',
  'Setting Out Services',
  'Site Engineering Support',
  'Projects',
];

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlePageClick = (page: string) => {
    setCurrentPage(page);
    onClose(); // Close drawer if mobile
  };

  return (
    <Box
      bg="white"
      color="gray.800"
      px={6}
      py={3}
      boxShadow="sm"
      position="sticky"
      top="0"
      zIndex="1000"
      w="100%"
    >
      {/* Outer Flex: Logo and Nav */}
      <Flex align="center" justify="space-between" w="100%">
        {/* Logo (always left) */}
        <Box flexShrink={0} cursor="pointer" onClick={() => handlePageClick('Home')}>
          <Image
            src={IJRHLogo}
            alt="IJRH Logo"
            width={{ base: "150px", md: "200px" }}
            objectFit="contain"
          />
        </Box>

        {/* Navigation area */}
        <Box flex="1" ml={4}>
          <Flex align="center" justify="flex-end" maxW="7xl" mx="auto">
            {/* Desktop buttons */}
            <HStack spacing={6} display={{ base: 'none', '2xl': 'flex' }}>
              {pages
                .filter(page => page !== 'Home')
                .map(page => (
                  <Button
                    key={page}
                    bg={currentPage === page ? 'gray.200' : 'transparent'}
                    color="gray.800"
                    _hover={{ bg: 'gray.100' }}
                    _active={{ bg: 'gray.300' }}
                    onClick={() => handlePageClick(page)}
                  >
                    {page}
                  </Button>
                ))}
            </HStack>

            {/* Mobile hamburger button */}
            <IconButton
              aria-label="Open Menu"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              display={{ base: 'flex', '2xl': 'none' }}
              onClick={isOpen ? onClose : onOpen}
              variant="ghost"
              color="gray.800"
              ml={2}
            />
          </Flex>
        </Box>
      </Flex>

      {/* Mobile drawer */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="white" color="gray.800" p={4}>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={4} mt={4}>
              {pages.map(page => (
                <Button
                  key={page}
                  w="full"
                  justifyContent="flex-start"
                  bg={currentPage === page ? 'gray.200' : 'transparent'}
                  color="gray.800"
                  _hover={{ bg: 'gray.100' }}
                  _active={{ bg: 'gray.300' }}
                  onClick={() => handlePageClick(page)}
                >
                  {page}
                </Button>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
