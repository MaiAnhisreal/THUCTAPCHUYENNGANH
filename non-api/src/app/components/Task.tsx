"use client";

import { FormEventHandler, useState } from "react";
import { ITask } from "../../../types/tasks";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";
import Modal from "./Modal";
import { useRouter } from "next/navigation";

interface TaskProps {
  task: ITask;
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const Task: React.FC<TaskProps> = ({ task, tasks, setTasks }) => {
  const router = useRouter();
  const [openModalEdit, setModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setModalDeleted] = useState<boolean>(false);
  const [taskEdit, setTaskEdit] = useState<string>(task.text);
  const [completed, setCompleted] = useState<boolean>(false);

  const handleDeleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter((t) => t.id !== taskId);
    setTasks(updatedTasks);
    setModalDeleted(false);
  };

  const handleCancelDelete = () => {
    setModalDeleted(false);
    router.refresh();
  };

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  
    const updatedTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return { ...t, text: taskEdit };
      }
      return t;
    });
  
    setTasks(updatedTasks);
    setModalEdit(false);
  };


  const handleTaskClick = () => {
    setCompleted(!completed);
  };

  return (
    <tr key={task.id}>
      <td
        className={`w-full ${completed ? "completed-task" : "incomplete-task"}`}
        onClick={handleTaskClick}
      >
        {task.text}
      </td>

      <td className="flex gap-5">
        <RiEditLine
          onClick={() => setModalEdit(true)}
          cursor="pointer"
          className="text-green-400"
          size={22}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg">Edit Task</h3>
            <div className="modal-action">
              <input
                type="text"
                value={taskEdit}
                onChange={(e) => setTaskEdit(e.target.value)}
                placeholder="Type here"
                className="input input-bordered input-info w-full"
              />
              <button type="submit" className="btn bg-blue-300 hover:bg-blue-300">
                Submit
              </button>
            </div>
          </form>
        </Modal>

        <RiDeleteBin5Line
          onClick={() => setModalDeleted(true)}
          cursor="pointer"
          className="text-red-500"
          size={22}
        />
        <Modal modalOpen={openModalDeleted} setModalOpen={setModalDeleted}>
          <h3 className="text-lg">Are you sure to delete this task?</h3>
          <div className="modal-action flex justify-end mt-4">
            <button onClick={() => handleDeleteTask(task.id)} className="btn mr-2 hover:bg-blue-700">
              Yes
            </button>
            <button onClick={handleCancelDelete} className="btn">
              No
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;