import ToDoItem from './ToDoItem';
import './List.css';
import { useState, useMemo, useEffect } from 'react';
const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    setFilteredTodos(
      todos.filter((todo) =>
        todo.content.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [todos, filter]);

  const onSearch = () => {
    setFilter(search);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  const { totalList, doneList, notDoneList } = useMemo(() => {
    const totalList = todos.length;
    const doneList = todos.filter((todo) => todo.isDone).length;
    const notDoneList = totalList - doneList;
    return { totalList, doneList, notDoneList };
  }, [todos]);

  return (
    <div className="List">
      <h4 className="title">To do List💕</h4>
      <div className="todoStatistics">
        <span>total Todo: {totalList}</span>
        <span>Done: {doneList}</span>
        <span>Not Done: {notDoneList}</span>
      </div>
      <div className="SearchBar">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={onKeyDown}
          placeholder="검색어를 입력해주세요"
        ></input>
        <button onClick={onSearch}>검색</button>
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
