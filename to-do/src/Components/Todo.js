import React,{ useState} from 'react';


export default function Todo() {
    const [todos,setTodos] = useState([]);
    const [input,setInput] = useState("");
    const todosLS = JSON.parse(localStorage.getItem("todos"));
    

    
    function remove(index){
        // setTodos(todos.filter(item => item !== todos[index]))
        
        const temp = [...todos];
        temp.splice(index,1);
        setTodos(temp);
        console.log(temp);
        updateLS();
        
    }
    function updateLS() {
        const todosEl = document.querySelectorAll("span");
      
        const todosArr = [];
      
        todosEl.forEach((todoEl) => {
          todosArr.push(todoEl.innerText,);
        });
        localStorage.setItem("todos", JSON.stringify(todosArr));
        console.log(todosEl);
      }
    return (
        <div>
            <form onSubmit={
                (e)=>{
                    e.preventDefault();
                    if(input){
                        
                        setTodos([...todos,input])
                        updateLS();
                        
                    }

                }
            }>

            <input type="text" onChange={(e) => setInput(e.target.value)}/>
            <button><i className="fas fa-add" /></button>
            </form>
            {todos?todos.map((todo,index) =>(
                <div key={index}>
                <span>{todo}</span>
                <button onClick={()=>{remove(index)}}><i className="fas fa-times"></i></button>
                </div>
    )):<></>}
    {todos?todosLS.map((todo,index) =>(
                <div key={index}>
                <span>{todo}</span>
                <button onClick={()=>{remove(index)}}><i className="fas fa-times"></i></button>
                </div>
    )):<></>}
            </div>
            
            
            
    )
}
