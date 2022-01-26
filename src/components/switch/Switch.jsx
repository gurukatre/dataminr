import React, {useState} from 'react';
import './Switch.css';
    
const Switch = ({ onColor, id}) => {
    const [value, setValue] = useState(false);
    return (
      <>
        <input
          checked={value}
          onChange={() => setValue(!value)}
          className="react-switch-checkbox"
          id={`react-switch-new-${id}`}
          type="checkbox"
        />
        <label
          style={{ background: value && onColor }}
          className="react-switch-label"
          htmlFor={`react-switch-new-${id}`}
        >
          <span className={`react-switch-button`} />
        </label>
      </>
    );
  };
  
  export default Switch;