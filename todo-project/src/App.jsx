import React from "react"
import{useState} from "react"
import "./styles.css"
// Importing toastify module
import { ToastContainer,toast } from "react-toastify";
 
// Import toastify css file
import "react-toastify/dist/ReactToastify.css";
 
// toast-configuration method,
// it is compulsory method.

export default function App() {
  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] = useState([])
  const notify = () => toast.success('Successfully add todolist!', {
    theme: "colored",
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    
    });
  function handleSubmit(e){
    e.preventDefault()
    setTodos(currentTodos=>{
      
     return [...currentTodos,
        { id: crypto.randomUUID(), title:newItem, completed: false },
      ]
  }, [])
  setNewItem('')
  }
  function toggleTodo(id, completed){

    setTodos(currentTodos=>{
      return currentTodos.map(todo=>{
       if(todo.id === id){
          return{...todo, completed}
        }
       
        return todo
       })
  })
  
} 
  function deleteTodo(id){
    
    setTodos(currentTodos=>{
      return currentTodos.filter(todo => todo.id !==id
      ) 
      
  }) 
  

}

  console.log(todos)
  return(
<>


  <h1 className='header'>React TodoList</h1>
  
  <ul className='list'>
  {todos.length === 0 && <h4>You have no lists!</h4>}
    {todos.map(todo=>{
    return(
      <li key={todo.id}>
      <label>
        <input type='checkbox' checked={todo.completed} onChange={e=>toggleTodo(todo.id, e.target.checked)} />
      {todo.title}
      
      </label>
    <button   onClick={ ()=>deleteTodo(todo.id) } className='btn btn-danger'>Delete</button>
    
     
    
    
    </li>


  
    )
    })}
    
  </ul>
  <form onSubmit = {handleSubmit} className='new-item-form'>
  <div className='form-row'>
  <label htmlFor="item">
   
  </label>
  <input value={newItem} onChange={e=>setNewItem(e.target.value)}  type='text' id='item'  />
  </div>
<button onClick= {notify} className='btn'>Add Todolist</button>
<ToastContainer

position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
</form>

</>
  )
  
}

  
