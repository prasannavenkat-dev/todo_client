import React, { useState } from 'react'
import TodoListContainer from '../TodoListContainer/TodoListContainer';
import "./TodoContainer.css"
import { v4 as uuidv4 } from 'uuid';

const TodoContainer = ({darkMode,setDarkMode}) => {

    const[taskInput,setTaskInput] = useState("");
    const [todoDetails, setTodoDetails] = useState([{ task: "1.TASK", completed: true, id: 1 }, { task: "2.TASK", completed: false, id: 2 }, { task: "2.TASK", completed: false, id: 3 }]);
    function enterHandle(event){
             if(event.key=='Enter'){
               

                setTodoDetails((prev)=>{
                    let newTask = {id:uuidv4(),task:taskInput,completed:false}
                    return [...prev,newTask]
                })
                setTaskInput(()=>"");
             }

    }

    function taskInputHandle(event){

    
setTaskInput(()=> event.target.value)
    }

    return (
        <div className="todoContainer" style={{borderRadius:"4px",paddintTop:"15px"}}>

            <div className='titleContainer'>
                <h1>
                    TODO
                </h1>
                <button>

                <button onClick={()=>setDarkMode((prev)=> !prev)}>

                {
                    darkMode ?
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fillRule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>
                    
                    
                     :

                     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg> 
                }
                </button>

                </button>
            </div>


            <div className='taskContainer' style={{marginBottom:"25px",
            
            background: darkMode ?  "#25273C" : "white",
            borderRadius:"4px",

            }}>
            <span className='checkCircle'
                   style={{     borderColor:darkMode?"#383A4F":"#EAE9EE"}}
            
             />

                 <input placeholder='Create a new todo...' onChange={taskInputHandle} value={taskInput} onKeyDown={enterHandle}
                 style={{color:darkMode ? "#ADAFC6": "#3B3A42"}}
                 
                  />
            </div>

         <TodoListContainer 
         todoDetails={todoDetails} setTodoDetails={setTodoDetails}
         darkMode={darkMode}
          />


        </div>
    )
}

export default TodoContainer;