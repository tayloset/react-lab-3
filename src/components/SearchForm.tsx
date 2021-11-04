import { FormEvent, useState } from "react";
import "./SearchForm.css";

interface Props {
  setSearchTerm: (searchTerm: string) => void;
}

const SearchForm = ({ setSearchTerm }: Props) => {
  const [gif, setGif] = useState("");

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    setSearchTerm(gif);
  };

  return (
    <form className="SearchForm" onSubmit={submitHandler}>
      <label htmlFor="search">Search for a GIF</label>
      <input
        className="input"
        type="text"
        name="search"
        id="search"
        value={gif}
        onChange={(e) => setGif(e.target.value)}
      />
      <button className="button">Search</button>
    </form>
  );
};

export default SearchForm;
