import React from 'react';
import {
  Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay,
  Flex, HStack, IconButton, Image, Text, useDisclosure, VStack,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

interface NavbarProps { currentPage: string; setCurrentPage: (page: string) => void; }

const navItems = ['Surveying Services', 'Web Services'];

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const go = (page: string) => { setCurrentPage(page); onClose(); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <Box className="site-nav">
      <Flex align="center" justify="space-between" maxW="1280px" mx="auto">
        <Flex align="center" cursor="pointer" onClick={() => go('Home')}>
          <Image src="/media/brand/IJRH_SERVICES_LOGO.png" alt="IJRH Services" className="nav-logo" />
          <Text className="nav-descriptor">Surveying &amp; Digital</Text>
        </Flex>
        <HStack spacing={2} display={{ base: 'none', md: 'flex' }}>
          {navItems.map(item => <Button key={item} className={currentPage === item ? 'nav-link active' : 'nav-link'} variant="ghost" onClick={() => go(item)}>{item}</Button>)}
          <Button className="contact-button" as="a" href="mailto:info@ijrhservices.co.uk">Get in touch</Button>
        </HStack>
        <IconButton aria-label="Open menu" icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} display={{ base: 'flex', md: 'none' }} onClick={isOpen ? onClose : onOpen} variant="ghost" />
      </Flex>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent><DrawerHeader borderBottomWidth="1px">IJRH Services</DrawerHeader><DrawerBody>
          <VStack align="stretch" spacing={3} mt={4}>
            <Button variant="ghost" justifyContent="start" onClick={() => go('Home')}>Home</Button>
            {navItems.map(item => <Button key={item} variant="ghost" justifyContent="start" onClick={() => go(item)}>{item}</Button>)}
            <Button as="a" href="mailto:info@ijrhservices.co.uk" colorScheme="teal">Get in touch</Button>
          </VStack>
        </DrawerBody></DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
