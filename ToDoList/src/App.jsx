import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import {
  useState,
  useRef,
  useReducer,
  useCallback,
  usememo,
  useMemo,
  memo,
} from 'react';
import { createContext } from 'react';

export const TodoStateContext = createContext();
export const TododispatchContext = createContext();

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
    content: '동아리 회의 10시',
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

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((todo) =>
        todo.id === action.data.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    case 'DELETE':
      return state.filter((todo) => todo.id !== action.data.id);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4);

  const onCreate = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().toLocaleDateString('sv-SE'),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id: targetId,
      },
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      data: {
        id: targetId,
      },
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onDelete, onUpdate };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TododispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TododispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
