import { Todo } from "@/types/Todo";
import { Calendar, Trash2 } from "lucide-react";
import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";

function TodoList({
  todos,
  onToggle,
  onRemove,
  filter,
}: {
  todos: Todo[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  filter: string;
}) {
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <ScrollArea className="h-[400px]">
      {filteredTodos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center space-x-2 mb-4 bg-gray-50 p-3 rounded-md"
        >
          <Checkbox
            checked={todo.completed}
            onCheckedChange={() => onToggle(todo.id)}
          />
          <div className="flex-1">
            <span
              className={todo.completed ? "line-through text-gray-500" : ""}
            >
              {todo.text}
            </span>
            <div className="flex items-center mt-1 text-xs text-gray-500">
              <Calendar size={12} className="mr-1" />
              {new Date(todo.createdAt).toLocaleDateString()}
            </div>
          </div>
          <Badge variant={todo.completed ? "secondary" : "default"}>
            {todo.completed ? "Completed" : "Active"}
          </Badge>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onRemove(todo.id)}
            className="h-8 w-8 p-0"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </ScrollArea>
  );
}

export default TodoList;
