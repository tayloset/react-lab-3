import { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import "./SearchForm.css";

const SearchForm = () => {
  const [term, setTerm] = useState("");
  const history = useHistory();

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    history.push(`/gifs/search?${new URLSearchParams({ term })}`);
  };

  return (
    <form className="SearchForm" onSubmit={submitHandler}>
      <label htmlFor="search">Search for a GIF</label>
      <input
        className="input"
        type="text"
        name="search"
        id="search"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button className="button">Search</button>
    </form>
  );
};

export default SearchForm;
