import { useEffect, useState } from "react";
import Gif from "../models/Gif";
import GiphyResponse from "../models/GiphyResponse";
import { getSearchTerm, getTrendingGifs } from "../services/GiphyService";
import "./Main.css";
import Result from "./Result";
import ResultsList from "./ResultsList";
import SearchForm from "./SearchForm";

const Main = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

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
      <SearchForm setSearchTerm={setSearchTerm} />
      <ResultsList gifsArray={gifs} />
    </div>
  );
};

export default Main;
