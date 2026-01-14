import React from 'react'
import Container from './Container'
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from 'react';

const PopUp = ({ setShowEdit , editContent}) => {
    const [data , setData] = useState(editContent.taskName)

    const handleCross = () => {
        setShowEdit(false)
    }

    return (
        <>
            <div className="">
                    <div className="text-center">
                        <input type="text" className='border-2 p-4' placeholder={`Update ${data}`} />
                        <button className='ml-3 p-3 bg-amber-950 text-white font-bold'>Edit</button>
                        <button onClick={handleCross}><IoMdCloseCircle /></button>
                    </div>
            </div>
        </>
    )
}

export default PopUp
