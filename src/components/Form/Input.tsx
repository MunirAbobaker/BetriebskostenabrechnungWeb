import * as React from "react";
import { ThemeContext } from 'styled-components';

interface InputProps {
  id: any;
  text: string;
  value: string;
  onChange: any;
  placheholder: string;
  error?: string;
}

const Input: React.FC<InputProps> = React.memo((props) => {
  const themeContext = React.useContext(ThemeContext);
  return (
    <div className="InputContainer">
      <p>{props.text}</p>
      <input
        id={props.id}
        className={props.error ? "InputElement InputError" : "InputElement"}
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placheholder}
        autoComplete="on"
      />
      <span className="SpanElement">{props.error}</span>
    </div>
  );
});

export default Input;
