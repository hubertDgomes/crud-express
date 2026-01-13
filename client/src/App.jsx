import { useEffect, useState } from 'react'
import './App.css'
import Container from './components/Container'
import ToDo from './components/ToDo'

function App() {
  const [todo, setTodo] = useState("")
  const [datas, setDatas] = useState([])

  const todoApp = () => {
    fetch("http://localhost:3000/api/get")
      .then(res => res.json())
      .then(data => setDatas(data))
  }

  useEffect(() => {
    todoApp()
  }, [])

  const handleSend = (e) => {
    e.preventDefault()
    if (todo == "") {
      alert("Please write your task!")
    }
    else {
      fetch("http://localhost:3000/api/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ toDo: todo })
      })
      todoApp()
    }

  }

  return (
    <>
      <Container>
        <div className="text-center mb-[20px]">
          <h1 className='py-5 text-[40px] font-bold font-Delius'>ToDo App</h1>
          <form action="">
            <input value={none} onChange={(e) => setTodo(e.target.value)} placeholder='Enter your task' type="text" className='border-2 px-5 py-3 rounded-[7px] font-bold' />
            <button onDle onClick={handleSend} className='ml-5 p-3 border-2 bg-amber-500 text-black font-bold cursor-pointer'>Add</button>
          </form>
        </div>
        {datas.map((item) => (
          <ToDo key={item._id} id={item._id} taskName={item.toDo} />
        ))}
      </Container>
    </>
  )
}

export default App



