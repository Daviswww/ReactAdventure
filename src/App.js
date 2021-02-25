import './App.css';
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Blocks from "./components/Blocks";
import Forms from "./components/Forms";

function App() {
  const [showAddForms, setShowAddForms] = useState(false)
  const [blocks, setBlocks] = useState([])


  // Json server
  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers()
      setBlocks(usersFromServer)
    }
    getUsers()
  }, [])

  // Fetch Users
  const fetchUsers = async () =>{
    const res = await fetch('http://localhost:5000/users')
    const data = await res.json()
    console.log(data)
    return data
  }

  // Fetch User
  const fetchUser = async (id) =>{
    const res = await fetch(`http://localhost:5000/users/${id}`)
    const data = await res.json()
    console.log(data)
    return data
  }

  // Delete data
  const deleteBlock = async (id) => {
    console.log(`Delete ${id} user`)
    await fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE", 
    })
    setBlocks(blocks.filter((block) => block.id !== id))
  }

  // Add user
  const addUser = async (user) => {
    const res = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    const data = await res.json()
    setBlocks([...blocks, data])
  }

  // On Like
  const onLike = async (id) => {
    const user = await fetchUser(id)
    const updateUser = {
      ...user,
      reminder: !user.reminder
    }

    const res = await fetch(`http://localhost:5000/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updateUser),
    })

    const update = await res.json()

    setBlocks(
      blocks.map((block)=>
        block.id === id ? {
          ...block, reminder: update.reminder
        } : block
      )
    )
  }

  return (
    <div className='App'>
       <Header />
       <Main  showAdd={showAddForms} onAdd={ () => setShowAddForms(!showAddForms)}/>
       {showAddForms && <Forms onAdd={addUser} />}
       <Blocks blocks={blocks} onDelete={deleteBlock} onToggle={onLike}/>
    </div>
  );
}

export default App;
