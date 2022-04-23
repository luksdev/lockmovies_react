import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,
} from "@chakra-ui/react";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Register = () => {
  const { register, handleSubmit, errors }: any = useForm();
  const { signUp } = useContext<any>(AuthContext);

  const handleSignUp = async (data: any) => {
    await signUp(data);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Cadastre-se
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"} textAlign="center">
            Preencha seus dados e tenha acesso a uma grande diversidade de
            filmes ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={handleSubmit(handleSignUp)}>
              <HStack>
                <Box>
                  <FormControl id="username" isRequired>
                    <FormLabel>Nome completo</FormLabel>
                    <Input
                      {...register("name")}
                      type="text"
                      required
                      name="name"
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="birth_date" isRequired>
                    <FormLabel>Data de nascimento</FormLabel>
                    <Input
                      type="date"
                      {...register("birth_date")}
                      required
                      name="birth_date"
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="cellphone" isRequired>
                <FormLabel>Celular</FormLabel>
                <Input
                  type="text"
                  as={InputMask}
                  mask="(99) 99999-9999"
                  {...register("phone")}
                  name="phone"
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" {...register("email")} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type={"password"} {...register("password")} />
              </FormControl>
              <FormControl id="Productor" isRequired>
                <FormLabel>Você é produtor?</FormLabel>
                <Select {...register("productor")} defaultValue={false}>
                  <option value={"true"}>Sim</option>
                  <option value={"false"}>Não</option>
                </Select>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link color={"blue.400"}>Login</Link>
                </Text>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
