
import './App.css';
import React, {useState} from 'react';
import FormBox from './components/boxForm';
import Boxes from './components/boxes';

function App() {
  const [ colorArray, setColorArray] = useState([]);

  return (
    <div className="App">
      <FormBox colorArray={ colorArray } setColorArray={ setColorArray} />
      <Boxes colorArray={ colorArray }/>
    </div>
  );
}

export default App;