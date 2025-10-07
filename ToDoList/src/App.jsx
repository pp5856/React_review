import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import { useState, useRef } from 'react';

const mockData = [
  {
    id: 0,
    isDoen: false,
    content: 'React 공부하기',
    date: new Date().toLocaleDateString('sv-SE'),
  },
  {
    id: 1,
    isDoen: false,
    content: '9시 동아리 회의',
    date: new Date().toLocaleDateString('sv-SE'),
  },
  {
    id: 2,
    isDoen: false,
    content: '2시 PT',
    date: new Date().toLocaleDateString('sv-SE'),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().toLocaleDateString('sv-SE'),
    };
    setTodos([newTodo, ...todos]);
  };
  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} />
    </div>
  );
}

export default App;
