import { useEffect, useState } from 'react';
import axios from 'axios';
export default function DeliveryMethod() {
  const [count, setCount] = useState(1);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    // 1. Оголошуємо асинхронну функцію
    async function fetchCharacter() {
      try {
        const response = await axios.get(
          `https://swapi.info/api/people/${count}`
        );
        setPerson(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCharacter();
  }, [count]);

  return (
    <>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(count + 1)}>Get next character</button>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
}
