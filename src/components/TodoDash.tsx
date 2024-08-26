"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "../lib/supabaseClient";
import Auth from "../app/signin/page";
import Sidebar from "./SideBar";
import { Todo } from "@/types/Todo";
import { User } from "@supabase/supabase-js";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { useRouter } from "next/navigation";

function TodoDash() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState("all");
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN") {
          setUser(session?.user ?? null);
          router.push("/"); // Redirect to main route after sign in
        } else if (event === "SIGNED_OUT") {
          setUser(null);
          router.push("/signin");
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]);

  useEffect(() => {
    if (user) {
      fetchTodos();
    }
  }, [user]);

  const fetchTodos = async () => {
    const { data, error } = await supabase
      .from("todos")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching todos:", error);
    } else {
      setTodos(data || []);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  //   const toggleTodo = async (id: string) => {
  //     const todoToUpdate = todos.find(todo => todo.id === id);
  //     if (!todoToUpdate) return;

  //     const { error } = await supabase
  //       .from('todos')
  //       .update({ is_complete: !todoToUpdate.is_complete })
  //       .eq('id', id);

  //     if (!error) {
  //       setTodos(todos.map(todo =>
  //         todo.id === id ? { ...todo, is_complete: !todo.is_complete } : todo
  //       ));
  //     }
  //   };

  const removeTodo = async (id: string) => {
    const { error } = await supabase.from("todos").delete().eq("id", id);

    if (!error) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const addTodo = async (text: string) => {
    const { data, error } = await supabase
      .from("todos")
      .insert([{ task: text, user_id: user?.id, is_complete: false }])
      .select();

    if (!error && data) {
      setTodos([data[0], ...todos]);
    }
  };

  if (!user) {
    return <Auth />;
  }

  function toggleTodo(id: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar
        user={user}
        onFilterChange={setFilter}
        onSignOut={handleSignOut}
      />
      <div className="flex-1 p-8">
        <Card className="w-full max-w-3xl mx-auto bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Todo List Dashboard</CardTitle>
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
