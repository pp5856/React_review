import ToDoItem from './ToDoItem';
import './List.css';
import { useState } from 'react';
const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState('');

  const getfilteredTodos = () => {
    if (search == '') {
      return todos;
    }

    return todos.filter((todo) => {
      return todo.content.toLowerCase().includes(search.toLowerCase());
    });
  };
  const filteredTodos = getfilteredTodos();

  return (
    <div className="List">
      <h4>To do List💕</h4>
      <div className="SearchBar">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="검색어를 입력해주세요"
        ></input>
        <button>검색</button>
      </div>
      <div className="todosWrapper">
        {filteredTodos.map((todo) => {
          return (
            <ToDoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            ></ToDoItem>
          );
        })}
      </div>
    </div>
  );
};

export default List;
