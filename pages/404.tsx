import { Box, Heading, Text, Button, Center } from '@chakra-ui/react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Center flexDirection="column">
      <Heading
        display="inline-block"
        as="h2"
        size="4xl"
        bgGradient="linear(to-r, yellow.400, yellow.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Essa página não existe
      </Text>
      <Text color={'gray.500'} mb={6}>
        A página que você está procurando não parece existir
      </Text>

      <Link href={'/'}>
        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, yellow.400, yellow.500, yellow.600)"
          color="white"
          variant="solid"
        >
          Go to Home
        </Button>
      </Link>
    </Center>
  );
}
