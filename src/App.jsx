import { Box, Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  const { isOpen, onClose, onToggle } = useDisclosure();
  return (
    <>
      <Grid
        templateColumns={{ lg: "repeat(6,1fr)", base: "repeat(4,1fr)" }}
        bg="gray.50"
        h="100vh"
        overflow="hidden"
        w="full"
      >
        <GridItem
          as="aside"
          bgColor="brand.500"
          colSpan={{ base: "6", lg: "2", xl: "1" }}
          position={{ base: "absolute", lg: "static" }}
          zIndex="99"
          left={{ base: isOpen ? "0" : "-300px", lg: "auto" }}
          minH="100vh"
          p="20px"
          transition="all 0.5s ease-in-out"
        >
          <Sidebar onClose={onClose} />
        </GridItem>
        <GridItem
          as="main"
          colSpan="5"
          bg="#f2f2f2"
          overflowX="hidden"
          overflowY="auto"
        >
          <Navbar onToggle={onToggle} />
          <div style={{ padding: "20px 40px" }}>
            <Outlet />
          </div>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
