import React from 'react'
import { useState } from 'react';
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import PopUp from './PopUp';


const ToDo = ({id, taskName , setUpdateUI , setShowEdit , setEditContent ,no}) => {
    

    const handleDlt = async (id)=>{
        await fetch(`https://crudbackend-poer.onrender.com/api/delete/${id}`,{
            method : "DELETE"
        })
         window.location.reload()
    }

    const updateTodo = ()=>{
        setEditContent({id , taskName})
        setShowEdit(true)
    }

    return (
        <>
            <div className="my-[10px] border-2 px-5 py-3 rounded-[7px] font-bold w-[400px] m-auto flex justify-between items-center">
                <h1 className='text-red-500'>{no}</h1>
                <h1>{taskName}</h1>
                <div className="flex text-[25px] gap-x-5">
                    
                    <button  onClick={updateTodo} className='cursor-pointer'><AiFillEdit /></button>
                    <button  onClick={()=> handleDlt(id)} className='cursor-pointer'><MdDelete /></button>
                </div>
            </div>
            
                
        </>
    )
}

export default ToDo
