import Gif from "../models/Gif";
import Result from "./Result";
import "./ResultsList.css";

interface Props {
  gifsArray: Gif[];
}

const ResultsList = ({ gifsArray }: Props) => {
  return (
    <div className="ResultsList">
      <h2>Results</h2>
      <ul>
        {gifsArray.map((gif) => (
          <Result gif={gif} key={gif.id} />
        ))}
      </ul>
    </div>
  );
};

export default ResultsList;
