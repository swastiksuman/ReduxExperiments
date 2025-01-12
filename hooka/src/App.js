import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import ChildComponent from './components/ChildComponent';

function App() {
 const [myvar, setMyvar] = useState(0);

 useEffect(() => {
    componentDidMount();
    return () => {
      componentDidUpdate();
    }
  }, [myvar]);
 const componentDidMount = () => {
    console.log('App Component mounted');
  }

  const componentDidUpdate = () => {
    console.log('App Component updated');
  }

  return (
    <div className="App">
      <button onClick={() => {setMyvar(myvar + 1);console.log(myvar);}}>Click me</button>
      <ChildComponent />
    </div>
  );
}

export default App;
