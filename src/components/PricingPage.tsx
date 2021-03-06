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
  Flex,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaCheckCircle } from "react-icons/fa";

export default function TierPricing() {
  const router = useRouter();

  return (
    <>
      {/* Header */}
      <Box
        p={4}
        borderBottom="1px solid #a8a8a8"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Heading
          as="h2"
          size="lg"
          color={useColorModeValue("black", "yellow.400")}
        >
          LockMovies
        </Heading>
        <Text
          fontWeight={"semibold"}
          cursor="pointer"
          transition={".08s"}
          _hover={{ color: "white" }}
          onClick={() => router.push("/login")}
        >
          Retornar
        </Text>
      </Box>

      <Box textAlign={"center"} pt={10}>
        <Heading textShadow="lg">Escolha o plano certo para você</Heading>

        <Box>
          <Text fontSize={["sm", "md", "lg"]} fontWeight="light">
            Assista o quanto quiser. Livre de anúncios.
          </Text>
          <Text fontSize={["sm", "md", "lg"]} fontWeight="light">
            Altere ou cancele seu plano a qualquer momento.
          </Text>
        </Box>
      </Box>

      {/* Pricing */}
      <Box
        width={"80%"}
        marginX="auto"
        display="flex"
        alignItems={"center"}
        justifyContent="space-evenly"
        pt={10}
        flexWrap="wrap"
      >
        {/* Tier 1 */}
        <Box
          p={6}
          px={8}
          marginBottom={8}
          bgColor="#EFE7DA"
          color="#292F36"
          rounded={"md"}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          flexDir={"column"}
          boxShadow="0px 0px 10px rgba(00, 0, 0, 0.1)"
        >
          <Flex flexDir={"column"} alignItems={"center"} pb={10}>
            <Box as="h3" color={"#292F36"}>
              Plano Básico
            </Box>
            <Text fontWeight={"semibold"}>R$ 4,90</Text>
          </Flex>

          {/* Caracteristicas */}
          <Box px={10}>
            <Text
              fontSize="sm"
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <FaCheckCircle />
              <Text pl={2} fontSize={20}>
                <strong>Resolução</strong> HD
              </Text>
            </Text>
          </Box>

          <Box px={10}>
            <Text
              fontSize="sm"
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <FaCheckCircle color="green.500" />
              <Text pl={2} fontSize={20}>
                <strong>1</strong> Tela disponível
              </Text>
            </Text>
          </Box>

          <Box px={10}>
            <Text
              fontSize="sm"
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <FaCheckCircle color="green.500" />
              <Text pl={2} fontSize={20}>
                <strong>Celular e PC</strong>
              </Text>
            </Text>
          </Box>

          <Button
            mt={4}
            onClick={() =>
              router.push({ pathname: "/register", query: { plan: 1 } })
            }
            colorScheme="green"
            variant="solid"
          >
            Comprar
          </Button>
        </Box>

        {/* Tier 1 */}
        <Box
          p={6}
          px={8}
          bgColor="#EFE7DA"
          color="#292F36"
          rounded={"md"}
          marginBottom={8}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          flexDir={"column"}
          boxShadow="0px 0px 10px rgba(00, 0, 0, 0.1)"
        >
          <Flex flexDir={"column"} alignItems={"center"} pb={10}>
            <Box as="h3" color={"#292F36"}>
              Plano Premium
            </Box>
            <Text fontWeight={"semibold"}>R$ 8,90</Text>
          </Flex>

          {/* Caracteristicas */}
          <Box px={10}>
            <Text
              fontSize="sm"
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <FaCheckCircle />
              <Text pl={2} fontSize={20}>
                <strong>Resolução</strong> Full HD
              </Text>
            </Text>
          </Box>

          <Box px={10}>
            <Text
              fontSize="sm"
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <FaCheckCircle color="green.500" />
              <Text pl={2} fontSize={20}>
                <strong>3</strong> Telas disponíveis
              </Text>
            </Text>
          </Box>

          <Box px={10}>
            <Text
              fontSize="sm"
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <FaCheckCircle color="green.500" />
              <Text pl={2} fontSize={20}>
                <strong>Celular, PC, TV e Tablet</strong>
              </Text>
            </Text>
          </Box>

          <Button
            mt={4}
            onClick={() =>
              router.push({ pathname: "/register", query: { plan: 2 } })
            }
            colorScheme="green"
            variant="solid"
          >
            Comprar
          </Button>
        </Box>

        {/* Tier 1 */}
        <Box
          p={6}
          px={8}
          bgColor="#EFE7DA"
          color="#292F36"
          rounded={"md"}
          display="flex"
          marginBottom={8}
          alignItems={"center"}
          justifyContent={"center"}
          flexDir={"column"}
          boxShadow="0px 0px 10px rgba(00, 0, 0, 0.1)"
        >
          <Flex flexDir={"column"} alignItems={"center"} pb={10}>
            <Box as="h3" color={"#292F36"}>
              Plano Produtor
            </Box>
            <Text fontWeight={"semibold"}>R$ 13,90</Text>
          </Flex>

          {/* Caracteristicas */}
          <Box px={10}>
            <Text
              fontSize="sm"
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <FaCheckCircle />
              <Text pl={2} fontSize={20}>
                <strong>Resolução</strong> Full HD
              </Text>
            </Text>
          </Box>

          <Box px={10}>
            <Text
              fontSize="sm"
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <FaCheckCircle color="green.500" />
              <Text pl={2} fontSize={20}>
                <strong>4</strong> Telas disponíveis
              </Text>
            </Text>
          </Box>

          <Box px={10}>
            <Text
              fontSize="sm"
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <FaCheckCircle color="green.500" />
              <Text pl={2} fontSize={20}>
                <strong>Celular, Pc, TV e Tablet</strong>
              </Text>
            </Text>
          </Box>

          <Box px={10}>
            <Text
              fontSize="sm"
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <FaCheckCircle color="green.500" />
              <Text pl={2} fontSize={20}>
                Modo produtor
              </Text>
            </Text>
          </Box>

          <Button
            mt={4}
            onClick={() =>
              router.push({ pathname: "/register", query: { plan: 3 } })
            }
            colorScheme="green"
            variant="solid"
          >
            Comprar
          </Button>
        </Box>
      </Box>
    </>
  );
}
