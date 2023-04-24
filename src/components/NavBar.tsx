import { HStack, Text, Show, Button, Flex } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { useState } from "react";

interface Props {
  children: string;
}
const NavBar = ({ children }: Props) => {
  const [value, setValue] = useState(" ");

  return (
    <Flex pos="sticky" justifyContent="space-between">
      <Text fontFamily="sans-serif" padding="20px" marginY="10px">
        {children}
      </Text>
      <HStack justifyContent="flex-end" padding="20px" gap="20px">
        <ColorModeSwitch />
      </HStack>
    </Flex>
  );
};

export default NavBar;
