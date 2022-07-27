import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React,{ useState } from 'react';

function App() {

  const[newtask, setnewtask]=useState('')
  const[tasks,settasks]=useState([])
  function addtask(){
    settasks([...tasks,newtask])
  }

  function deletetask(index){
    var duplicatearray=[...tasks]
    duplicatearray.splice(index, 1) 
    settasks(duplicatearray)
  }

  const taskslist = tasks.map((object,index)=>{

    return <div className='row justify-content-center'>

    <h1 className='col-md-6 text-left'>{index+1} {object}</h1>
    <button onClick={()=>{deletetask(index)}} className='col-md-1 btn btn-danger m-1'>DELETE</button>

    </div>
  })




  return (
    <div className='App'>
      <h1>Todo List App</h1>
      <div className='row justify-content-center m-5'>
        
        <input type="text" placeholder="task" className="form-control col-md-6 m-1"
        value={newtask} onChange={(e)=>{setnewtask(e.target.value)}} />
        <button onClick={addtask} className='btn btn-success col-md-1 m-1'>ADD TASK</button>
      </div>


      {taskslist}

    </div>
  );
}

export default App;
