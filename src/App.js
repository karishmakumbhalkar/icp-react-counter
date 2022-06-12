import { useState } from 'react';
import './App.css';

function App() {

  const [count, SetCount] =useState(0) ;
  function increase(){
    SetCount(count+1);
  }
  function decrease(){
    SetCount(count-1);
  }
  function reset(){
    SetCount(0);
  }
  
  return (
    <div className='container'>
      <div className='box'>
       <h1 className='counter'>Counter</h1>
       <h1 id='counter'>{count} </h1>
       <button onClick={increase} className="btn">Increase🙁</button>
       <button onClick={decrease} className="btn">Decrease🙃</button>
       <button onClick={reset} className="btn">reset 😑</button>
       </div>
    </div>
  );
}

export default App;
