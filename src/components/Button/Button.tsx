import clsx from 'clsx';
import css from './Button.module.css';
import { BiSolidLogInCircle } from 'react-icons/bi';
import { useState } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  text: string;
}

export default function Button({ variant, text }: ButtonProps) {
  const [clickCount, setClickCount] = useState<number>(0);
  const [randomNumber, setRandomNumber] = useState<string | null>(null);

  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10000);
    setRandomNumber(`#${randomNumber.toString()}`);
  }

  function handleClickBtn(): void {
    setClickCount(prev => prev + 1);
    generateRandomNumber();
  }

  return (
    <>
      <button
        onClick={handleClickBtn}
        style={{ backgroundColor: `${randomNumber}` }}
        className={clsx(css.button, variant && css[variant])}
      >
        {text} {clickCount} {randomNumber}
        <BiSolidLogInCircle
          style={{
            margin: '0 0 0 8px',
            verticalAlign: 'middle',
            fontSize: '20px',
          }}
        />
      </button>
    </>
  );
}
