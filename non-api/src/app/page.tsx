"use client";

import React,{useState}from "react";
import { BsListCheck } from "react-icons/bs";

import AddTask from "./components/AddTask";
import TodoList from "./components/Todolist";


export default function Home() {
  const [tasks, setTasks] = useState([
    { id: "1", text: "Review a report" },
    { id: "2", text: "Shave cat hair" },
    { id: "3", text: "Buy Headphones" },
  ]);

  return (
    <main className="max-w-5xl mx-auto mt-4">
      <div className="text-center my-5">
        <br></br>
        <h1 className="text-2xl fort-bold flex items-center justify-center" style={{ fontSize: 30 }}>
          <span className="list-icon">
            <BsListCheck />
          </span>
          Welcome to TodoList
        </h1>
        <AddTask tasks={tasks} setTasks={setTasks} />
      </div>
      <TodoList tasks={tasks} setTasks={setTasks} />
    </main>
  );
}