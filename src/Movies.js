import react from "react";
import PropTypes, { number } from "prop-types";
import './App.css'

function Movie({ id, year, rating, runtime, title_long, genres, summary, poster }) {
   return (
      <div className="movies_container">
         <span className="movies_container_img">
            <img src={poster} alt="noImage" title={title_long} />
         </span>

         <div className="movies_data">
            <h2 className="movies_title"> {title_long} </h2>
            <h4 className="movies_genres"> {changeStringFormat(genres)}  </h4>
            <p className="movies_summary"> {summary.slice(0, 250)}... </p>
         </div>
      </div>
   );
}

function changeStringFormat(arr) {
   const tmpString = arr.join(', ');
   return tmpString;
}

Movie.propTypes = {
   id: PropTypes.number.isRequired,
   year: PropTypes.number.isRequired,
   rating: PropTypes.number.isRequired,
   runtime: PropTypes.number.isRequired,
   title_long: PropTypes.string.isRequired,
   genres: PropTypes.arrayOf(PropTypes.string).isRequired,
   summary: PropTypes.string.isRequired,
   poster: PropTypes.string.isRequired,
}

export default Movie;