// src/components/PrivacyPolicy.tsx

import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Link,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  const linkColor = useColorModeValue('blue.600', 'blue.300');
  const hoverBg = useColorModeValue('gray.100', 'whiteAlpha.200');

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered motionPreset="scale">
      <ModalOverlay />
      <ModalContent mx={4} my={6} borderRadius="xl" boxShadow="lg" bg={useColorModeValue('white', 'gray.800')}>
        <ModalHeader fontSize="2xl" fontWeight="semibold" textAlign="center">
          Privacy Policy
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack align="start" spacing={4} fontSize="sm">
            <Text>
              <strong>Effective Date:</strong> May 1, 2025
            </Text>
            <Text>
              IJRH Services is committed to protecting your privacy when you visit our website. Here’s how we handle your information:
            </Text>
            <Text>
              <strong>Information We Collect</strong><br />
              We do not collect any personal information directly from visitors. We use Google Analytics to monitor website performance and traffic. This may include anonymous data such as browser type, location, and time on site.
            </Text>
            <Text>
              <strong>Use of Cookies</strong><br />
              Google Analytics uses cookies to track user interactions. These cookies are stored on your device and help us understand usage patterns to improve the site.
            </Text>
            <Text>
              <strong>Data Security</strong><br />
              We take appropriate measures to ensure your information is secure. No personally identifiable information is stored or processed by IJRH Services.
            </Text>
            <Text>
              <strong>Your Consent</strong><br />
              By using our website, you consent to our privacy practices as described in this policy.
            </Text>
            <Text>
              For questions, please contact us at{' '}
              <Link
                href="mailto:info@ijrhservices.co.uk"
                color={linkColor}
                _hover={{ textDecoration: 'underline', bg: hoverBg, px: 1, py: 0.5, borderRadius: 'md' }}
              >
                info@ijrhservices.co.uk
              </Link>.
            </Text>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button
            size="sm"
            variant="outline"
            colorScheme="blue"
            _hover={{ bg: hoverBg }}
            _active={{ bg: hoverBg, transform: 'scale(0.95)' }}
            onClick={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PrivacyPolicyModal;
