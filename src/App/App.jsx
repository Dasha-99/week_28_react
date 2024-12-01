import { useState } from "react";
import "./App.scss";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [text, setText] = useState([]);
  const [isError, setError] = useState(false);

  const handleInput = (e) => {
    setInputValue(e.target.value);
    setError(false);
  };

  const handleInputText = () => {
    if (inputValue.trim()) {
      setText([...text, inputValue.trim().toUpperCase()]);
      setInputValue("");
    } else setError(true);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Введите текст..."
        value={inputValue}
        onChange={handleInput}
        className="input"
      />
      {isError && <p className="error">Заполните поле, чтобы добавить текст</p>}
      <button onClick={handleInputText} className="button">
        Добавить текст
      </button>
      {text.map((item, index) => (
        <p key={index} className="text">
          {item}
        </p>
      ))}
    </div>
  );
}
