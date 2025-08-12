interface SearchFormProps {
  onSearch: (topic: string) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const onHandleSearch = (formData: FormData) => {
    const searchQuery = formData.get('searchQuery') as string;

    if (searchQuery === '') {
      alert('Please enter a valid searchQuery!');
    }
    onSearch(searchQuery);
  };
  return (
    <form action={onHandleSearch}>
      <input type='text' name='searchQuery' placeholder='Search...' />
      <button type='submit'>Search</button>
    </form>
  );
}
