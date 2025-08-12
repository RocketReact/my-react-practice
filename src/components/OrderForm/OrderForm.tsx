import { useId } from 'react';

interface OrderFormProps {
  onOrder: (value: string) => void;
}

export default function OrderForm({ onOrder }: OrderFormProps) {
  const id = useId();

  const handleSubmit = (formData: FormData) => {
    const username = formData.get('username') as string;
    onOrder(username);
  };
  return (
    <>
      <form action={handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Arnold Schwarznegger'
          required
        />
        <button type='submit'>Place Order</button>
      </form>
      <form>
        <label htmlFor='email' id={`${id}-email`}>
          Email:
        </label>
        <input type='text' id={`${id}-email`} name='email' />

        <label htmlFor='surname' id={`${id}-surname`} />
        <input type='text' id={`${id}-surname`} name='surname' />
        <button type='submit'></button>
      </form>
    </>
  );
}
