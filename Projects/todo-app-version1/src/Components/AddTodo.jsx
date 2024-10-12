import { useState } from "react";

function AddTodo({onNewItem}) {
  const [todoName,setTodoName]=useState("");
  const[dueDate,setDueDate]=useState("");
const handleNameChange=(event)=>{
setTodoName(event.target.value);

}
const handleDateChange=(event)=>{
setDueDate(event.target.value);
}
const handleAddButtonCLick=()=>{
onNewItem(todoName,dueDate);
setTodoName("");
setDueDate("");
}
  return (
    <div className="row kg-row">
      <div className="col-6">
        <input type="text" placeholder="Enter todo here" value={todoName} onChange={handleNameChange }/>
      </div>
      <div className="col-4">
        <input type="date" val={dueDate} onChange={handleDateChange} />
      </div>
      <div className="col-2">
        <button type="button" class="btn btn-success kg-button"
        onClick={handleAddButtonCLick}>
          Add
        </button>
      </div>
    </div>
  );
}
export default AddTodo;
