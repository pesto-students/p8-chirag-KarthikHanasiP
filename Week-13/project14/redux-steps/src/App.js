import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCounter } from './redux/counter/counterSlice';
import './App.css';

function App() {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">

      <span className='show-result'>You have walked {counter.value} steps today</span>
      <div className="add-step">
        <button type="button" className='btn-add-step' onClick={() => {
          dispatch(setCounter(counter.value + 1))
        }}>Add Step</button>
      </div>

      <div className="reset-step">
        <button type="button" className='btn-reset-step' onClick={() => {
          dispatch(setCounter(0))
        }}>Reset Steps</button>
      </div>
    </div>
  );
}

export default App;
