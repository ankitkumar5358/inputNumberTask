import React, {useState} from 'react';
import "./App.css";

const App = () => {

  const [number, setNumber] = useState('');
  const [data, setData] = useState('');

  const handleInputValue = (e) => {
    const value = parseInt(e.target.value, 10);
    if(isNaN(value)){
      setData('');
      setNumber('')
      return;
    }
    setNumber(value);


    if(value < 0){
      setData('Enter a positive value');
    }
    else if(value % 2 == 0){
      setData(`Next 3 even numbers are ${value + 2}, ${value + 4}, ${value + 4}`);
    }
    else{
      setData(`Next 3 odd numbers are ${value + 2}, ${value + 4}, ${value + 4}`);
    }
  }




  return (
    <div className='container'> 
    <h2>Number Checker Task</h2>
    <input type="number" value={number}  onChange={handleInputValue} placeholder='Enter any number' className='input'/>
    <div className='result'>{data}</div>
    </div>
  )
}

export default App;