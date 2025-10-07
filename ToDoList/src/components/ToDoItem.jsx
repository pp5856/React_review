import './ToDoItem.css';
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
      <div className="ToDo">{content}</div>
      <div className="Date">{date}</div>
      <button onClick={onClickDeleteItem}>삭제</button>
    </div>
  );
};

export default ToDoItem;
