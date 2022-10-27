import React, { useState } from 'react'
import "./TodoListContainer.css"

const TodoListContainer = ({todoDetails,setTodoDetails,darkMode}) => {

const [showAll,setShowAll]= useState(true);
const [showActive,setShowActive] = useState(false);


    function todoHandle(element) {

        setTodoDetails((previous) => {
            let newVal = previous.map((item, i) => {

                if (item.id == element.id) {
                    item.completed = !(item.completed);
                }
                return item;;
            })


            return newVal;
        })
    }


    function deleteTask(element){
        setTodoDetails((previous) => {
            let newVal = previous.filter( (item) => item.id!==element.id )


            return newVal;
        })
    }

    function clearCompleted(){
        setTodoDetails((previous) => {
            let newVal = previous.filter( (item) => item.completed!==true )


            return newVal;
        })
    }

    function filterTask(category){

    }


    return (
        <div className='todoListContainer'
        style={{background: darkMode ?  "#25273C" : "white"}}
        
        >

            <div className='todoList'>

                {todoDetails.map(item => {


                    return (<div className='taskContainer' key={item.id} onClick={() => todoHandle(item)}

                        style={{
                            textDecoration: item.completed && "line-through",


            background: darkMode ?  "#25273C" : "white",
               color: darkMode ? "#ADAFC6" : "#4E4E5A",
               
               border:  darkMode ? "1.5px solid #383A4F" :"1.5px solid #E5E4E9",
               

}}>

                        <span className='checkCircle' style={{ background: item.completed && "linear-gradient(#57ddff, #c058f3)",
                        borderColor:darkMode?"#383A4F":"#EAE9EE"
                        }} >

                            {
                                item.completed &&
                                (<svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                                    <path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" />
                                </svg>)
                            }


                        </span>


                       <span style={{
                            opacity: item.completed && 0.3,

                       }}>
{item.task}
                       </span> 
                        <button className='cancelBtn' onClick={()=>deleteTask(item)} >

                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                                <path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" />
                            </svg>

                        </button>

                    </div>
                    )
                })


                }







            </div>







            <div className='taskContainer utilityContainer' style={{ borderTop: darkMode ? "1.5px solid #383A4F" :"1.5px solid #E5E4E9"}}>
                <span>{todoDetails.length} {todoDetails.length>1 ? "items" :"item" } left</span>

                <div>
                    <span>All</span>
                    <span>Active</span>
                    <span>Completed</span>

                </div>

                <span onClick={clearCompleted} >Clear Completed</span>

            </div>

        </div>
    )
}

export default TodoListContainer