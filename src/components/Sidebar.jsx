import {
  Button,
  Divider,
  List,
  ListItem,
  VStack,
  HStack,
  IconButton,
  Heading,
} from "@chakra-ui/react";

import { FiX } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { MdTaskAlt } from "react-icons/md";
import { MdSupervisorAccount } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

function Sidebar({ onClose }) {
  const itemStyle = {
    color: "#757575",
    fontSize: "18px",
    a: {
      display: "flex",
      aliginItems: "center",
      p: "15px 0px",
    },
  };

  return (
    <div>
      <VStack w="full" align="flex-start" spacing={7}>
        <HStack justify="space-between" alignItems="center">
          <Heading as="h1" fontSize="30px">
            <Link to="/"> Tasa.</Link>
          </Heading>
          <IconButton
            display={{ base: "flex", lg: "none" }}
            onClick={onClose}
            variant="ghost"
            aria-label=""
            icon={<FiX />}
            rounded="full"
          />
        </HStack>
        <List sx={itemStyle} w="full" spacing={3}>
          <ListItem display="flex" alignItems="center" color="white" gap={2}>
            <AiFillHome fontSize="26px" />
            <Link to="/">Dashborad</Link>
          </ListItem>
          <ListItem display="flex" alignItems="center" color="white" gap={2}>
            <MdTaskAlt fontSize="26px" />
            <Link to="/new-task">Tasks</Link>
          </ListItem>
          <ListItem display="flex" alignItems="center" color="white" gap={2}>
            <MdSupervisorAccount fontSize="26px" />

            <Link to="/accounts">Accounts</Link>
          </ListItem>
          <ListItem display="flex" alignItems="center" color="white" gap={2}>
            <GrProjects fontSize="20px" />
            <Link to="/projects">Projects</Link>
          </ListItem>
          <Divider />
          <ListItem display="flex" alignItems="center" color="white" gap={2}>
            <IoMdSettings fontSize="26px" />
            <Link to="/user-setting">Setting</Link>
          </ListItem>
          <ListItem>
            <Button
              w="full"
              colorScheme="brand"
              justifyContent="flex-start"
              color="white"
              pl="0"
              fontWeight="400"
              gap={2}
            >
              <IoMdLogOut fontSize="26px" />
              <Link to="/user-logout">Logout</Link>
            </Button>
          </ListItem>
        </List>
      </VStack>
    </div>
  );
}

export default Sidebar;
