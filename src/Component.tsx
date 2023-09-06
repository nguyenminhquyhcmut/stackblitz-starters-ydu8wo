import { use, useEffect, useState } from 'react';
import './style.css';

function Counter() {
  let  [count, setCount] = useState(0); // state
  let  [isCount , setIsCount]= useState(false) // flag 

  useEffect(() => {
    
    let interval ; 
    if(isCount)
    {
         interval = setInterval(() => {
          setCount((count) => count + 1);
        }, 1000);
    }
    else()=> 
    {
      clearInterval(interval);// ket thúc 
    }

    return () => 
    {
     
      clearInterval(interval);// kết thúc 
    };
  }, [isCount]);
  const   changeValue = () => {
    setIsCount(!isCount);
    setCount(0); 
  
  };
  

  return (
    <span>
      Counter: {count}
      <button onClick={changeValue}>
        {isCount ? 'Dừng' : 'Bắt đầu'}
      </button>
    </span>
  );
}




export default function Component() {
  return (
    <div>
      <h1>
           HELLO 

      </h1>
      <Counter />
    </div>
  );
}
