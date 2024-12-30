import { useState } from "react"
import s from './SearchBar.module.css'
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({onSearchChange}) => {
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === "") {
      toast.error("Please enter a search term!"); 
    } else {
      onSearchChange(value);
    }
        
    }
    return (
      <header className={s.searchHeader}>
        
  <form onSubmit={handleSubmit} className={s.searchForm}>
          <input
      onChange={(e) => setValue(e.target.value)}
      value={value}
      type="text"
      placeholder="Search images and photos"
      className={s.searchInput}      
    />
    <button className={s.searchButton} type="submit">Search</button>
        </form>
        <Toaster
            position="top-center"
            reverseOrder={false}
             />
</header>
    )
}

export default SearchBar;

