import logo from './logo.svg';
import './App.css';
import Counter from './components/Count';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello Swastik</h1>
      <h2>Start editing to see some magic!!</h2>
      <button onClick={e=>dispatch({type: 'INCREMENT'})}>Increment</button>
      <button onClick={e=>dispatch({type: 'DECREMENT'})}>Decrement</button>
      <Counter></Counter>
    </div>
  );
}

export default App;
