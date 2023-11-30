"use client";

import { useState } from "react";
import { ITask } from "../../../types/tasks";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";
import Modal from "./Modal";

interface TaskProps{
    task: ITask
}
const Task: React.FC<TaskProps> = ({ task }) => {
    const [openmodalEdit, setModalEdit] = useState<boolean>(false);
    const [openmodalDeleted, setModalDeleted] = useState<boolean>(false);
    const [taskEdit, setTaskEdit] = useState<string>(task.text);
    const handleSubmitEditTodo = () => {}

    return (
        <tr key={task.id}>
        <td className='w-full'>{task.text}</td>
        <td className='flex gap-5'>
        <RiEditLine onClick={() => setModalEdit(true)} cursor='pointer' className='text-green-400' size={20} />
        <Modal modalOpen={openmodalEdit} setModalOpen = {setModalEdit}>
        <form onSubmit={handleSubmitEditTodo}>
            <h3 className='font-bold text-lg'>Edit Task</h3>
            <div className="modal-action">
            <input type="text" 
            value={taskEdit}
            onChange={e => setTaskEdit(e.target.value)}
            placeholder="Type here" 
            className="input input-bordered input-info w-full " />
            <button type='submit' className='btn bg-blue-300 hover:bg-blue-300'>Submit</button>
            </div>
        </form>
        </Modal>
        <RiDeleteBin5Line cursor='pointer' className='text-red-500' size={20} />
        
        </td>
      </tr>
    );
  };

export default Task;