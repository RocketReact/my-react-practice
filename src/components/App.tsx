import './App.css';
import Product from './Product';
import Button from './Button/Button.tsx';
import { useState } from 'react';
import ClickCounter1 from './ClickCounter/ClickCounter1.tsx';

interface Values {
  x: number;
  y: number;
}

export default function App() {
  const [value, setValue] = useState<Values>({ x: 0, y: 0 });
  const [click, setClick] = useState(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const updateValue = (key: keyof Values) =>
    setValue({
      ...value,
      [key]: value[key] + 1,
    });

  const handleClick = () => {
    setClick(click + 1);
  };

  const toggleMessage = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <h1>Best selling</h1>
      <Product
        name='Tacos With Lime'
        imgUrl='https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640'
        price={10.99}
      />
      <Product
        name='Fries and Burger'
        imgUrl='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640'
        price={14.29}
      />
      <p>
        x: {value.x} y: {value.y}{' '}
      </p>
      <button onClick={() => updateValue('x')}> UpdateX</button>
      <button onClick={() => updateValue('y')}> UpdateY </button>
      <Button variant='primary' text='Login' />
      <Button variant='secondary' text='Follow' /> <br /> <br />
      <ClickCounter1 value={click} onUpdate={handleClick} />
      <ClickCounter1 value={click} onUpdate={handleClick} />
      <button onClick={toggleMessage}>
        {isOpen ? 'Hide message' : 'Show message'}
      </button>
      {isOpen && <p>🎉 Surprise: you toggle me</p>}
    </>
  );
}
