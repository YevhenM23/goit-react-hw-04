import { useState } from "react"

const SearchBar = ({onSearchChange}) => {
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearchChange(value);
        
    }
    return (
       <header>
  <form onSubmit={handleSubmit}>
    <input
      onChange={(e) => setValue(e.target.value)}
      value={value}
      type="text"
      placeholder="Search images and photos"
    />
    <button type="submit">Search</button>
  </form>
</header>
    )
}

export default SearchBar;

