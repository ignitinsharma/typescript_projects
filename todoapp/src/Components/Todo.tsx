import React, { useState } from "react";
import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { Todointerface } from "../Interface/Interfaces";
import TodoList from "./TodoList";

const Todo = () => {
  const [todoInput, setTodoInput] = useState<string>("");
  const [todo, setTodo] = useState<Todointerface[]>([
    {
      todo: "Moj masti",
      id: "masti12",
      isComplete: false,
    },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  const handleAddTodo = () => {
    const object: Todointerface = {
      todo: todoInput,
      id: todoInput + Date(),
      isComplete: false,
    };

    setTodo([...todo, object]);
    // for making input box empty
    setTodoInput("");
  };

  console.log(todo, "todos");
  return (
    <Box w={"90%"} m={"auto"}>
      <Flex w={"40%"} pt={"2rem"} m={"auto"} justifyContent={"space-evenly"}>
        <Input
          w={"60%"}
          onChange={handleInputChange}
          placeholder="Enter Todo..."
          value={todoInput}
        />
        <Button
          bg={"black"}
          _hover={{
            backgroundColor: "#1C2833",
          }}
          onClick={handleAddTodo}
          colorScheme="blue"
        >
          Add Todo
        </Button>
      </Flex>
      <TodoList todo={todo} />
    </Box>
  );
};

export default Todo;
