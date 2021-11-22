import React,{Profiler} from 'react';
import './App.css';
import Todos from './components/todo.jsx'

function App() {
  const callbackFunction=(id,phase,actualDuration,baseDuration,startTime,commitTime,interaction)=>{
    console.log("Id is :"+ id + "Phase is : "+phase);
    console.log("Actual duration is : "+actualDuration+
                "base duration is : "+baseDuration);
}
  return (
  <Profiler id="todo" onRender={callbackFunction}>
  <Todos />
  </Profiler>
  );
}

export default App;
