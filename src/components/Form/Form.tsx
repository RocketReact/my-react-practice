import css from './Form.module.css';

export default function Form() {
  const handleSubmit = (formData: FormData) => {
    const username = formData.get('username') as string;
    console.log(username);
  };

  return (
    <form action={handleSubmit} className={css.form}>
      <input
        className={css.inputForm}
        name='username'
        type='text'
        placeholder='Arnold Schwarznegger'
        required
      />
      <input
        className={css.inputForm}
        name='email'
        type='text'
        placeholder='Email'
        required
      />
      <button type='submit'>Submit</button>
    </form>
  );
}
