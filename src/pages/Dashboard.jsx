import {
  Card,
  CardHeader,
  CardBody,
  SimpleGrid,
  CardFooter,
  HStack,
  Icon,
  Text,
  Tag,
  Progress,
  Box,
  Heading,
  Button,
  Avatar,
  AvatarGroup,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { taskData } from "../data/dumpy";
import { FiLink, FiMessageCircle, FiPlus, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

function Dashboard() {
  const [content,setContent] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Box w="full">
        <Box py="18px">
          <Heading fontSize="28" fontWeight="500" mb="5px">
            
            Tasay Wonder Project 3v.0
          </Heading>
          <Text fontSize="15px"> Tech With Mario Created On July 14. </Text>
          <Button leftIcon={<FiPlus />} colorScheme="brand" mt="18px">
            <Link to='/new-task'>New Task</Link>
            
          </Button>
        </Box>
        {/* <Button onClick={onOpen} mb="10px">
          Open Modal
        </Button> */}
        <SimpleGrid columns={4} spacing={10} minChildWidth={300}>
          {taskData &&
            taskData.map((task) => (
              <Card key={task.id} cursor="pointer" bg="white" onClick={()=>{
                setContent(task.content)
                onOpen()
              }}>
                <CardHeader fontWeight="500" pb="0" flex="1">
                  {task.content}
                </CardHeader>
                <CardBody>
                  <Tag colorScheme="brand" fontSize="13px" fontWeight="400">
                    {task.tag.name}
                  </Tag>
                  <HStack pt="17px" gap="10px">
                    <AvatarGroup max={3} size="sm">
                      {task.assignUsers.map((item, index) => (
                        <Avatar
                          name={item.name}
                          src={item.avatarImage}
                          key={index}
                          showBorder={true}
                        />
                      ))}
                    </AvatarGroup>
                    <Box flex="1">
                      <Text
                        fontSize="13px"
                        textAlign="right"
                        mt="-13px"
                        mb="3px"
                        color="gray.500"
                      >
                        {task.progressPercent}%
                      </Text>
                      <Progress
                        size="xs"
                        rounded="full"
                        colorScheme="brand"
                        value={task.progressPercent}
                      />
                    </Box>
                  </HStack>
                </CardBody>
                <CardFooter
                  justifyContent="space-between"
                  py="13px"
                  color="gray.700"
                  fontSize="14px"
                  border="1px solid #eee"
                >
                  <HStack gap={1}>
                    <Icon as={FiMessageCircle} />
                    <Text>{task.totalComment} Comments </Text>
                  </HStack>
                  <HStack gap={1}>
                    <Icon as={FiLink} />
                    <Text>{task.noOfAttachement} files </Text>
                  </HStack>
                </CardFooter>
              </Card>
            ))}
        </SimpleGrid>

        <Modal isOpen={isOpen} onClose={onClose} isCentered  >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalHeader>{content}</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              necessitatibus. Consequatur dignissimos, quis expedita explicabo
              fugiat minus libero velit nesciunt illum, sed quisquam! Rerum
              nostrum cumque pariatur repellat itaque explicabo?
            </ModalBody>
            <ModalFooter gap="10px">
              <Button variant="outline" onClick={onClose}>
                Cancle
              </Button>
              <Button colorScheme="brand">Save</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </div>
  );
}

export default Dashboard;
