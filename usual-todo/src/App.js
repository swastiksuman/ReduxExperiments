import logo from './logo.svg';
import './style.css';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Button from './components/Button';


function App() {
  return (
    <div className="todo-container">
      <Header title='ToDo App'/>
      <TodoItem text='Eat' completed={true}/>
      <TodoItem text='Code'/>
      <TodoItem text='Sleep'/>
      <TodoItem text='Repeat'/>
      <Button />
    </div>
  );
}

export default App;
