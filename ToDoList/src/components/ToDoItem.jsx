import './ToDoItem.css';
const ToDoItem = ({ id, isDone, content, date, onUpdate }) => {
  const onChangeCheckBox = () => {
    onUpdate(id);
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
      <button>삭제</button>
    </div>
  );
};

export default ToDoItem;
