import './ToDoItem.css';
import { memo } from 'react';
const ToDoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
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
