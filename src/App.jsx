import "./App.css";
import NavBar from "./components/navBar/navBar";
import MovieList from "./components/movieList/movieList";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <main>
        <MovieList />
      </main>
    </div>
  );
};

export default App;
