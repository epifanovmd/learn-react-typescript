import React, { FC, useCallback, useState } from "react";
import { Input } from "../ui/input/Input";
import { Button } from "../ui/button/Button";

interface IProps {
  title: string;
}

interface ITodo {
  name: string;
  date: string | Date;
}

export const Todo: FC<IProps> = ({ title }) => {
  const [inputName, setInputName] = useState("");
  const [todos, setTodo] = useState<ITodo[]>([
    { name: "initial todo name", date: new Date().toTimeString() },
  ]);

  const onSetInoutName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputName(event.target.value);
    },
    [],
  );

  const addTodo = useCallback(() => {
    setTodo(currentTodos => [
      ...currentTodos,
      { name: inputName, date: new Date().toTimeString() },
    ]);
    setInputName("");
  }, [inputName]);

  return (
    <div>
      <div>{title}</div>
      <Input
        value={inputName}
        onChange={onSetInoutName}
        label={"Enter todo"}
        placeholder={"Todo name"}
      />
      <Button buttonText={"Add todo"} onClick={addTodo} />

      <ul>
        {todos.map(item => (
          <li key={item.date.toString()}>{`${
            item.name
          } / ${item.date.toString()}`}</li>
        ))}
      </ul>
    </div>
  );
};
