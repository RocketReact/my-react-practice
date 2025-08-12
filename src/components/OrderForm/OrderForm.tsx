interface OrderFormProps {
  onOrder: (value: string) => void;
}

export default function OrderForm({ onOrder }: OrderFormProps) {
  const handleSubmit = (formData: FormData) => {
    const username = formData.get('username') as string;
    onOrder(username);
  };
  return (
    <form action={handleSubmit}>
      <input
        type='text'
        name='username'
        placeholder='Arnold Schwarznegger'
        required
      />
      <button type='submit'>Place Order</button>
    </form>
  );
}
