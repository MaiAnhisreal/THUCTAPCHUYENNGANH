
"use client";//?

import { FormEventHandler, useState } from "react";
import { CgAdd } from "react-icons/cg";
import Modal from "./Modal";
import React from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { ITask } from "../../../types/tasks";

interface AddTaskProps {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;//?
}

const AddTask: React.FC<AddTaskProps> = ({ tasks, setTasks }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [taskText, setTaskText] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: taskText,
    };
    setTasks([...tasks, newTask]);
    setTaskText("");
    setModalOpen(false);
  };

  return (
    <div style={{ position: "absolute", top: "8%", left: "46%" }}>
      <br />
      <br />
      <button
        onClick={() => setModalOpen(true)}
        className="btn items-center bg-blue-300 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full"
      >
        Add Task
        <CgAdd className="ml-2" size={20} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold text-lg">Add New Task</h3>
          <div className="modal-action">
            <input
              type="text"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-xs"
            />
            <button type="submit" className="btn bg-blue-300 hover:bg-blue-300">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;