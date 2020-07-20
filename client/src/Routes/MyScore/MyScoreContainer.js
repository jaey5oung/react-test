import React from "react";
import MyScorePresenter from "./MyScorePresenter";
import { moviesApi } from "api";
import {API_URL, API_KEY} from "../../Components/Config"

export default class extends React.Component {
  state = {
    loading: true,
    // popular: null,
    error: null,
<<<<<<< HEAD
    buttonRef: null,
    Movies: [],
    MainMovieImage: null,
    CurrentPage: 0
=======
    Movies: [],
    MainMovieImage: null,
    CurrentPage: 0,
>>>>>>> 208a71ffe99fa14b8c61e215ab9e60fff23f7b89
  };

  async componentDidMount() {
    try {
      const {
        data: { results: popular },
      } = await moviesApi.popular();

      //landing page
      const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      // fetchMovies(endpoint)


      this.setState({
        popular,
      });

      // const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      // this.fetchMovies(endpoint);

      // window.addEventListener("scroll", handlerScroll);

    } catch (error) {
      this.setState({
        error: "Can't find movies from information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

<<<<<<< HEAD
  
=======
  // fetchMovies = (endpoint) => {
  //   fetch(endpoint)
  //     .then((result) => result.json())
  //     .then((result) => {
  //       this.setState({
  //         Movies: [...Movies, ...result.results],
  //         MainMovieImage: MainMovieImage || result.results[0],
  //         CurrentPage: result.page,
  //       });
  //     }, this.setState({ loading: false }))
  //     .catch((error) => console.log("Error:", error));
  // };

  // loadMoreItems = () => {
  //   let endpoint = "";
  //   this.setState({ loading: true });
  //   console.log("CurrentPage:", CurrentPage);
  //   endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
  //     CurrentPage + 1
  //   }`;
  //   this.fetchMovies(endpoint);
  // };

  // handlerScroll = () => {
  //   const windowHeight =
  //     "innerHeight" in window
  //       ? window.innerHeight
  //       : document.documentElement.offsetHeight;
  //   const body = document.body;
  //   const html = document.documentElement;
  //   const docHeight = Math.max(
  //     body.scrollHeight,
  //     body.offsetHeight,
  //     html.clientHeight,
  //     html.scrollHeight,
  //     html.offsetHeight
  //   );
  //   const windowBottom = windowHeight + window.pageYOffset;

  //   if (windowBottom >= docHeight - 1) {
  //     // loadMoreItems()
  //     console.log("clicked");
  //     buttonRef.current.click();
  //   }
  // };

>>>>>>> 208a71ffe99fa14b8c61e215ab9e60fff23f7b89
  render() {
    const { popular, loading, error } = this.state;

    const fetchMovies=(endpoint)=>{  }
    
    return (
      <MyScorePresenter popular={popular} loading={loading} error={error} />
    );
  }
}
