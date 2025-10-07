import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import { useState, useRef } from 'react';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().toLocaleDateString('sv-SE'),
  },
  {
    id: 1,
    isDone: false,
    content: '동아리 회의 9시',
    date: new Date().toLocaleDateString('sv-SE'),
  },
  {
    id: 2,
    isDone: false,
    content: 'PT 2시',
    date: new Date().toLocaleDateString('sv-SE'),
  },
  {
    id: 3,
    isDone: false,
    content: '여자친구 만나기',
    date: new Date().toLocaleDateString('sv-SE'),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(4);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().toLocaleDateString('sv-SE'),
    };
    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };

  const onDelete = (targetId) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== targetId;
      })
    );
  };
  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
