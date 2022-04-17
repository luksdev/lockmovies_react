import { ReactNode } from "react";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function TierPricing() {
  return (
    <Box
      h={"100vh"}
      display={"flex"}
      alignItems="center"
      justifyContent={"center"}
      flexDirection="column"
      bg="rgba(10,0,0,0.1)"
      _before={{
        content: '""',
        bgImage:
          "url(https://i.pinimg.com/originals/2f/88/a9/2f88a9427474343f7275e3b8f6fcc2e1.jpg)",
        bgSize: "cover",
        pos: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        opacity: 0.06,
      }}
    >
      <Box textAlign="center">
        <Heading as="h1" fontSize="4xl" color={"yellow.400"}>
          Escolha o plano que melhor atende suas necessidades
        </Heading>
        <Text fontSize="lg" color={"yellow.500"}>
          Comece com 7 dias de teste gratuito. Não é necessário cartão de
          crédito. Cancele a qualquer momento.
        </Text>
      </Box>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Lock Basic
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="1xl" fontWeight="600">
                R$
              </Text>
              <Text fontSize="3xl" fontWeight="900">
                5,99
              </Text>
              <Text fontSize="1xl" color="gray.500">
                /mês
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Apenas 1 tela ativa
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Download apenas 1 aparelho
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Séries e filmes ilimitados
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Assistir em laptop, TV, phone <br />
                or tablet
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="yellow" variant="outline">
                Start trial
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={useColorModeValue("yellow.300", "yellow.700")}
                px={3}
                py={1}
                color={useColorModeValue("gray.900", "gray.300")}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                Mais popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Lock Standard
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="1xl" fontWeight="600">
                  R$
                </Text>
                <Text fontSize="3xl" fontWeight="900">
                  19,99
                </Text>
                <Text fontSize="1xl" color="gray.500">
                  /mês
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Apenas 2 telas ativas
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Download apenas 2 aparelho
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Séries e filmes ilimitados
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Assistir em laptop, TV, phone <br />
                  or tablet
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  HD disponível
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="yellow">
                  Start trial
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Lock Premium
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                R$
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                39,99
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /mês
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Apenas 4 telas ativas
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Download apenas 4 aparelho
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Séries e filmes ilimitados
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Assistir em dispositivos móveis
              </ListItem>

              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Ultra HD Disponível
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="yellow" variant="outline">
                Start trial
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
