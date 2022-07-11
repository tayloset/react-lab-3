import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Gif from "../models/Gif";
import { getSearchTerm, getTrendingGifs } from "../services/GiphyService";
import "./Main.css";
import ResultsList from "./ResultsList";
import SearchForm from "./SearchForm";

const Main = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);

  //useLocation().search gives ?term=cat
  //new URLSearchParams(useLocation().search) gives an object representation of your query string parameters
  //.get("provide a key")
  console.log(new URLSearchParams(useLocation().search).get("term"));
  const searchTerm: string | null = new URLSearchParams(
    useLocation().search
  ).get("term");

  useEffect(() => {
    if (!searchTerm) {
      getTrendingGifs().then((response) => {
        setGifs(response.data);
      });
    } else {
      getSearchTerm(searchTerm).then((response) => {
        setGifs(response.data);
      });
    }
  }, [searchTerm]);

  return (
    <div className="Main">
      <SearchForm />
      <ResultsList gifsArray={gifs} />
    </div>
  );
};

export default Main;
