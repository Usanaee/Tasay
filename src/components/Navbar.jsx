import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BellIcon } from "@chakra-ui/icons";
import { FiMenu } from "react-icons/fi";



function Navbar({ onToggle }) {
  return (
    <div>
      <Flex
        as="nav"
        padding="10px 20px"
        justify={{ base: "space-between", lg: "space-between" }}
        alignItems="center"
        bg="white"
        p="10px 40px"
        pos="sticky"
        top="0"
        shadow="md"
        transition="box-shadow 0.3s ease-in-out"
      >
        <HStack display={{base:'flex', lg:"none" }} >
          <IconButton
            aria-label="menu"
            icon={<FiMenu />}
            onClick={onToggle}
          />
          <Heading as="h1" fontSize="30px">
            Dashboard
          </Heading>
        </HStack>
        <Heading as="h1" fontSize="30px" display={{base:'none',lg:'block'}} >
            Dashboard
          </Heading>
        <Flex alignItems="center" gap="10px">
          <Flex>
            <IconButton
              w="auto"
              aria-label="notification"
              icon={<BellIcon boxSize="25px" />}
            ></IconButton>
            {/* <div className="notify-circle" ><span style={{color:'white', fontWeight:"bold" }} >5</span></div> */}
          </Flex>
          <HStack alignItems="center" gap="5px">
            <Box bg="gray.200" p="2px" borderRadius="50px">
              <Avatar src={"https://i.pravatar.cc/150?img=12"}>
                <AvatarBadge boxSize="1.2em" bg="brand.500">
                  <span style={{ color: "white", fontSize: "12px" }}>5</span>
                </AvatarBadge>
              </Avatar>
            </Box>
            <Text as="span">Mario</Text>
          </HStack>
        </Flex>
      </Flex>
    </div>
  );
}

export default Navbar;
