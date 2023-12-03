import React from "react";
import { ITask } from "../../../types/tasks";
import Task from "./Task";
import AddTask from "./AddTask";

interface TodoListProps {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, setTasks }) => {
  return (
    <div className="overflow-x-auto mt-20">
       <br></br>
      <table className="table w-table-20">
        <thead style={{ backgroundColor: "#F0F8FF" }}>
          <tr>
            <th style={{ fontSize: "17px" }}>Tasks</th>
            <th style={{ fontSize: "17px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />//?
          ))}
        </tbody>
      </table>
      <AddTask tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default TodoList;