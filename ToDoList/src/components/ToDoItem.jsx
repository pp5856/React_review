import './ToDoItem.css';

import { memo, useContext } from 'react';
import { TododispatchContext } from '../App';
const ToDoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TododispatchContext);

  const onChangeCheckBox = () => {
    onUpdate(id);
  };
  const onClickDeleteItem = () => {
    onDelete(id);
  };
  return (
    <div className="ToDoItem">
      <input
        onChange={onChangeCheckBox}
        checked={isDone}
        type="checkbox"
      ></input>
      <div className={`ToDo ${isDone ? 'done' : ''}`}>{content}</div>
      <div className="Date">{date}</div>
      <button onClick={onClickDeleteItem}>삭제</button>
    </div>
  );
};

export default memo(ToDoItem);
