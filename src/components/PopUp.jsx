import { IoMdCloseCircle } from "react-icons/io";
import { useState } from 'react';
import ToDo from "./ToDo";

const PopUp = ({ setShowEdit , editContent}) => {
    const [data , setData] = useState(editContent.taskName)

    
    const handleCross = () => {
        setShowEdit(false)
    }

    const handleUpdate = async ()=>{
        await fetch(`https://crudbackend-poer.onrender.com/api/update/${editContent.id}`,{
            method: "PUT",
            headers: {"Content-Type" : "application/json"},
            body : JSON.stringify({toDo : data})
        })
        window.location.reload()
    }

    return (
        <>
            <div className="">
                    <div className="text-center">
                        <input value={data} onChange={(e)=> setData(e.target.value)} type="text" className='border-2 p-4' placeholder={`Update ${data}`} />
                        <button onClick={handleUpdate} className='ml-3 p-3 bg-amber-950 text-white font-bold'>Edit</button>
                        <button onClick={handleCross}><IoMdCloseCircle /></button>
                    </div>
            </div>
        </>
    )
}

export default PopUp
