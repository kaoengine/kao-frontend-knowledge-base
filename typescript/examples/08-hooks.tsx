import React, {
    createContext,
    useState,
    useContext,
  } from 'react';
  
  const Counter = () => {
    const [count, setCount] = useState(0);
    const [isOn, toggle] = useToggle(false);
    const {lang} = useContext(LanguageContext);
  
    return (
      <div className="counter">
        <h2>
          The current locale is {lang.toUpperCase()}
        </h2>
  
        <button onClick={toggle}>
          {isOn ? 'ON' : 'off'}
        </button>
  
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  };
  
  const useToggle = (
    initialValue: boolean
  ): [boolean, () => void] => {
    const [currentValue, setState] = useState(
      initialValue
    );
  
    const toggle = () => setState(!currentValue);
  
    return [currentValue, toggle];
  };
  
  type Locale = 'en' | 'fr';
  export const LanguageContext = createContext({
    lang: 'en' as Locale,
  });
  
  export default Counter;