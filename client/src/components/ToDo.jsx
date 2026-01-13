import React from 'react'
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";


const ToDo = ({ taskName }) => {
    return (
        <>
            <div className="my-[10px] border-2 px-5 py-3 rounded-[7px] font-bold w-[400px] m-auto flex justify-between items-center">
                <h1>{taskName}</h1>
                <div className="flex text-[25px] gap-x-5">
                    <button className='cursor-pointer'><AiFillEdit /></button>
                    <button className='cursor-pointer'><MdDelete /></button>
                </div>
            </div>
        </>
    )
}

export default ToDo
