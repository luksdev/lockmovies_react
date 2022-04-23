import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthContext";

export const Login = () => {
  const { register, handleSubmit, errors }: any = useForm();
  const { signIn } = useContext<any>(AuthContext);

  const handleSignIn = async (data: any) => {
    await signIn(data);
  };

  return (
    <Container
      maxW="lg"
      display={"flex"}
      height="100vh"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack spacing="2">
        <Stack spacing="3">
          <Heading textAlign={"center"} color={"yellow.400"}>
            LockMovies
          </Heading>
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={useBreakpointValue({ base: "xs", md: "sm" })}>
              Acesse a sua conta
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Novo por aqui?</Text>
              <Link href="/price">
                <Button variant="link" colorScheme="yellow">
                  Assine agora
                </Button>
              </Link>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: "8", sm: "8" }}
          px={{ base: "5", sm: "10" }}
          bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
          boxShadow={{ base: "2xl", sm: useColorModeValue("md", "md-dark") }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <form onSubmit={handleSubmit(handleSignIn)}>
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input {...register("email")} id="email" type="email" />
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    {...register("password")}
                    id="password"
                    type="password"
                  />
                </FormControl>
              </Stack>
              <HStack justify="space-between">
                <Checkbox defaultIsChecked={false}>Lembrar-me</Checkbox>
                <Button variant="link" colorScheme="blue" size="sm">
                  Esqueceu a senha?
                </Button>
              </HStack>
              <Stack spacing="6">
                <Button variant="solid" type="submit" colorScheme={"yellow"}>
                  Acessar
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};
