import React,{ useState} from 'react';


export default function Todo() {
    const [todos,setTodos] = useState([]);
    const [input,setInput] = useState("");
    function remove(index){
        // setTodos(todos.filter(item => item !== todos[index]))
        
        const temp = [...todos];
        temp.splice(index);
        setTodos(temp);
        console.log(temp);
    }
    
    return (
        <div>
            <form onSubmit={
                (e)=>{
                    e.preventDefault();
                    if(input){
                        setTodos([...todos,input])
                    }

                }
            }>

            <input type="text" onChange={(e) => setInput(e.target.value)}/>
            <button><i className="fas fa-add" /></button>
            </form>
            {todos?todos.map((todo,index) =>(
                <div key={index}>
                <div >{todo}</div>
                <button onClick={()=>{remove(index)}}><i className="fas fa-times"></i></button>
                </div>
    )):<></>}
            </div>
            
            
            
    )
}
