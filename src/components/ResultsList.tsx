import Gif from "../models/Gif";
import Result from "./Result";
import "./ResultsList.css";

interface Props {
  gifsArray: Gif[];
}

const ResultsList = ({ gifsArray }: Props) => {
  return (
    <ul className="ResultsList">
      <h2>Results</h2>
      {gifsArray.map((gif) => (
        <Result gif={gif} />
      ))}
    </ul>
  );
};

export default ResultsList;
