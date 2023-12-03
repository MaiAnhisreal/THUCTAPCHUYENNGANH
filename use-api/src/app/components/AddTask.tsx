"use client";

import { FormEventHandler,useState } from "react";
import { CgAdd } from "react-icons/cg";
import Modal from "./Modal";
import React from "react";
import { useRouter } from "next/navigation";
import { addToDo } from "../../../api";
import { v4 as uuidv4 } from "uuid";


const AddTask = () => {
    const router= useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTaskvalue, setNewTaskValue] = useState<string>('');

    const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await addToDo({
            id: uuidv4(),
            text: newTaskvalue,
        });
        setNewTaskValue("");
        setModalOpen(false);
        router.refresh();
    };

    return (
        
        <div style={{ position: "absolute", top:"8%", left: "46%" }}>
        <br></br>
        <br></br>
        <button 
        onClick = {() => setModalOpen(true)}  
        className='btn items-center bg-blue-300 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full'>
        Add Task
        <CgAdd className="ml-2" size={20} />
        </button>
        <Modal modalOpen={modalOpen} setModalOpen = {setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
            <h3 className='font-bold text-lg'>Add New Task</h3>
            <div className="modal-action">
            <input type="text" 
            value={newTaskvalue}
            onChange={e => setNewTaskValue(e.target.value)}
            placeholder="Type here" 
            className="input input-bordered input-info w-full max-w-xs" />
            <button type='submit' className='btn bg-blue-300 hover:bg-blue-300'>Submit</button>
            </div>
        </form>
        </Modal>
        </div>
    );
};


export default AddTask;