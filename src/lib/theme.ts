import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("white", "black")(props),
      },
    }),
  },
};

const theme = extendTheme({ config });

export default theme;
