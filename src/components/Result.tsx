import { useContext } from "react";
import { useHistory } from "react-router";
import FavoritesContext from "../context/FavoritesContext";
import Gif from "../models/Gif";
import "./Result.css";

interface Props {
  gif: Gif;
}

const Result = ({ gif }: Props) => {
  const history = useHistory();

  //uriencoder safely puts the id into the URL
  const seeDetails = (id: string): void => {
    history.push(`/gifs/${encodeURIComponent(id)}/details`);
  };

  const { addFavorite, removeFavorite, isFav } = useContext(FavoritesContext);

  return (
    <li className="Result">
      <p>{gif?.title}</p>
      <img
        src={gif?.images.original.url}
        alt={gif?.title}
        onClick={() => seeDetails(gif?.id)}
      />
      <br />
      <div className="links-container">
        <a className="link" href={gif?.url}>
          Link to GIPHY
        </a>

        {!isFav(gif?.id) ? (
          <i className="fas fa-heart" onClick={() => addFavorite(gif)}></i>
        ) : (
          <i
            className="fas fa-heart favorite"
            onClick={() => removeFavorite(gif.id)}
          ></i>
        )}
      </div>
    </li>
  );
};

export default Result;
