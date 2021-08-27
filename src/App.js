import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movies";
import './App.css'
import './Movies.css'
import ReactLoading from "react-loading";
import { red } from "jest-matcher-utils/node_modules/chalk";

{/* README.md 참조 */ }
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    dotCount: 0
  };

  getMovies = async () => {
    /*  axios의 get 메소드 수행이 끝날 때까지 기다림
        왜냐하면, axios의 get 메소드 수행이 완료되기까지 시간이 필요하다는 판단에 의함
        이는 Promise 방식을 쓰는 것과 같은 효과이다.
    */
    const { data: { data: { movies: moviesOfYTS } } } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    /* fetch(Promise 방식)를 쓰면 다음과 같다.
      const movie = fetch("https://yts-proxy.nomadcoders1.now.sh/list_movies.json")
        .then((res) => res.json())
        .then((json => { return json }));
    */

    this.setState({ isLoading: false, movies: moviesOfYTS });
  }

  // changeStringFormat = (arr) => {
  //   for (let i = arr.length - 2; i >= 0; i--) {
  //     arr[i] += ", ";
  //   }
  //   console.log(arr);
  //   return arr;
  // }

  renderMovie = (ele) => {
    return (<Movie
      key={ele.id}
      id={ele.id}
      year={ele.year}
      rating={ele.rating}
      runtime={ele.runtime}
      title_long={ele.title_long}
      genres={ele.genres}
      summary={ele.summary}
      poster={ele.medium_cover_image}
      genres={ele.genres}
    />);
  }

  // 첫 render 실행 이후 호출
  componentDidMount() {
    this.getMovies();
  }

  render() {

    // 객체 구조 분해 할당
    const { isLoading, movies } = this.state;

    return (
      <section className="container">
        {isLoading ?
          <div className="loader">
            <span className="loader_text">
              Loading...
            </span>
            <span>&nbsp;</span>
            <ReactLoading type={"spin"} color={"skyblue"} width={"50px"} height={"50px"} />
          </div>
          :
          <div className="movies">
            {movies.map(this.renderMovie)};
          </div>
        }
      </section>
    )
  };
}

export default App;

