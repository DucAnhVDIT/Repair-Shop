"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Trash2 } from "lucide-react";
import { supabase } from "../lib/supabaseClient";
import Auth from "../app/signin/page";
import Sidebar from "./SideBar";
import { Todo } from "@/types/Todo";
import { User } from "@supabase/supabase-js";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function TodoDash() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState("all");
  const [user, setUser] = useState<User | null>(null);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  if (!user) {
    return <Auth />;
  }
  function toggleTodo(id: string): void {
    throw new Error("Function not implemented.");
  }

  function removeTodo(id: string): void {
    throw new Error("Function not implemented.");
  }

  function addTodo(id: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        user={user}
        onFilterChange={setFilter}
        onSignOut={handleSignOut}
      />
      <div className="flex-1 p-8">
        <Card className="w-full max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Todo List Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <AddTodo onAdd={addTodo} />
            <TodoList
              todos={todos}
              onToggle={toggleTodo}
              onRemove={removeTodo}
              filter={filter}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default TodoDash;
