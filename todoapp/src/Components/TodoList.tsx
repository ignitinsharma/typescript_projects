import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface Todointerface {
  todo: Todointerface[];
}

const TodoList = ({ todo }: Todointerface) => {
  console.log(todo);
  return (
    <Box pt={"2rem"} w={"35%"} m={"auto"}>
      {todo.map((elements) => (
        <Flex key={elements.id} alignItems={'center'} justifyContent={'space-between'}>
          <Text fontWeight={"bold"} fontSize={"1.5rem"}>
            {elements.todo}
          </Text>
          <Button
            h={"30px"}
            bg={"#C0392B"}
            _hover={{
              backgroundColor: "#CD6155",
            }}
            colorScheme="blue"
          >
            Delete
          </Button>
        </Flex>
      ))}
    </Box>
  );
};

export default TodoList;
