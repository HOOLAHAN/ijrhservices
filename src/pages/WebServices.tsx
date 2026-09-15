import React from 'react';
import { Badge, Box, Button, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';
import QRCode from 'react-qr-code';

const products = [
  {
    name: 'Yahtzee',
    tag: 'Game',
    url: 'https://yahtzee.ijrhservices.co.uk/',
    appStoreUrl: 'https://apps.apple.com/gb/app/yahtzee-hub/id6794910138',
    description: 'A polished digital take on the classic dice game. Quick to learn, easy to play and built for friendly competition.',
    mark: 'Y',
    tone: 'yahtzee',
  },
  {
    name: 'Trippa',
    tag: 'Travel',
    url: 'https://trippa.ijrhservices.co.uk/',
    description: 'A personalised travel companion for planning itineraries, discovering places and making more of every trip.',
    mark: 'T',
    tone: 'trippa',
  },
  {
    name: 'Toss the Turkeys',
    tag: 'Game',
    url: 'https://www.tosstheturkeys.ijrhservices.co.uk/',
    description: 'A light-hearted mobile game where players take aim and send turkeys flying in pursuit of a high score.',
    mark: 'TT',
    tone: 'turkeys',
  },
  {
    name: 'Harbour Contractors',
    tag: 'Company website',
    url: 'https://harbourcontractors.co.uk/',
    description: 'A professional company website built to present Harbour Contractors’ services, experience and business clearly to prospective clients.',
    mark: 'HC',
    tone: 'harbour',
  },
  {
    name: 'PF Geomatics',
    tag: 'Company website',
    url: 'https://www.pfgeomatics.com/',
    description: 'A dedicated company website built to showcase PF Geomatics, its specialist capabilities and the services it provides.',
    mark: 'PF',
    tone: 'pfgeomatics',
  },
];

const WebServices: React.FC = () => (
  <Box className="section-page web-page">
    <Box className="web-intro">
      <Text className="section-kicker">Web services</Text>
      <Heading>Useful ideas, brought to life.</Heading>
      <Text>IJRH builds and operates a growing collection of focused web products and mobile applications, providing the foundation behind every one.</Text>
    </Box>
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6} maxW="1100px" mx="auto">
      {products.map(product => (
        <Box className={`product-card product-card--${product.tone}`} key={product.name}>
          <Box className="product-mark">{product.mark}</Box>
          <Badge>{product.tag}</Badge>
          <Heading>{product.name}</Heading>
          <Text>{product.description}</Text>
          {'appStoreUrl' in product && product.appStoreUrl && (
            <Box className="app-store-download">
              <Box as="a" className="app-store-qr" href={product.appStoreUrl} target="_blank" rel="noopener noreferrer" aria-label={`Download ${product.name} from the App Store`}>
                <QRCode value={product.appStoreUrl} size={112} title={`App Store QR code for ${product.name}`} />
              </Box>
              <Box>
                <Text className="app-store-label">Available on the App Store</Text>
                <Text className="app-store-hint">Scan to download Yahtzee Hub</Text>
              </Box>
            </Box>
          )}
          <Button as="a" href={product.url} target="_blank" rel="noopener noreferrer" rightIcon={<FiArrowUpRight />}>
            Visit {product.name}
          </Button>
        </Box>
      ))}
      <Box className="product-card product-card--soon">
        <Box className="product-mark">+</Box>
        <Badge>Coming next</Badge>
        <Heading>More in the works</Heading>
        <Text>New tools and experiences will join the collection here as they launch.</Text>
      </Box>
    </SimpleGrid>
  </Box>
);

export default WebServices;
