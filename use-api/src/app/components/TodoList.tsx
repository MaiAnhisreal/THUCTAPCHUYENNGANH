import React from "react";
import { ITask } from "../../../types/tasks";
import Task from "./Task";


interface TodoListProps {
    tasks: ITask[];
  }

  
const TodoList: React.FC<TodoListProps> = ({ tasks })=> {
    return (
    <div className="overflow-x-auto mt-20">
    <table className="table w-table-20">
      {/* head */}
      <thead style={{ backgroundColor: "lightgray" }}>
        <tr>
        <th style={{ fontSize: "15px" }}>Tasks</th>
        <th style={{ fontSize: "15px" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
      {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
      </tbody>
    </table>
  </div>);
};

export default TodoList;