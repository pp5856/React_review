import './Editor.css';
import { useState, useRef } from 'react';

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState('');
  const inputRef = useRef();

  const onKeyDown = (e) => {
    if (e.onKeyDown == 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === '') {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  return (
    <div className="Editor">
      <input
        ref={inputRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      ></input>
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
