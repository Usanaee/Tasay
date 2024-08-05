import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { Form, useSubmit } from "react-router-dom";
function NewTask() {
  // const submit = useSubmit();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   submit(event.currentTarget);
  // };
  return (
    <div>
      <Box py="10px" maxW="full">
        {/* <Form onSubmit={handleSubmit} > */}
        <FormControl isRequired mb="10px">
          <FormLabel>Task Name</FormLabel>
          <Input
            name="taskName"
            bg="white"
            type="text"
            placeholder="Enter Your Task Name"
          />
          <FormHelperText>Provide a description task name.</FormHelperText>
        </FormControl>

        <FormControl mb='10px'>
            <FormLabel>Projects</FormLabel>
            <Select name="project" placeholder="Select Your Project" >
                <option>Tasay Project</option>
                <option>Board Project</option>
                <option>Cheggle Project</option>
            </Select>
        </FormControl>

        <FormControl mb="30px">
          <FormLabel>Task Description</FormLabel>
          <Textarea
            minH="200px"
            name="taskDescription"
            bg="white"
            type="text"
            placeholder="Enter Your Task Description"
          />
        </FormControl>
        <FormControl>
          <Checkbox name="isPriority" colorScheme="brand" size="lg">
            I Accept all Terms & Conditions.
          </Checkbox>
        </FormControl>
       
        <Button colorScheme="brand" type='submit' mt='15px' >Submit</Button>
        {/* </Form> */}
      </Box>
    </div>
  );
}

export default NewTask;
