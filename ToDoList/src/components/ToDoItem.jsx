import './ToDoItem.css';
const ToDoItem = ({ id, isDone, content, date }) => {
  return (
    <div className="ToDoItem">
      <input checked={isDone} type="checkbox"></input>
      <div className="ToDo">{content}</div>
      <div className="Date">{date}</div>
      <button>삭제</button>
    </div>
  );
};

export default ToDoItem;
