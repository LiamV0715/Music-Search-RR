import { useEffect, useRef, useState } from "react";
import Gallery from "./components/Gallery";
import SearchBar from "./components/Searchbar";
import './App.css';
import { SongContext } from "./components/SongContext";
import { SearchContext } from "./components/SearchContext";

function App() {

  let [message, setMessage] = useState('Search for Music!')

  let [songData, setSongData] = useState([])

  let searchInput = useRef('')

 

  const API_URL = 'https://itunes.apple.com/search?term='

 

  const handleSearch = (e, term) => {

    e.preventDefault()

    // Fetch Data

    const fetchData = async () => {

      document.title = `${term} Music`

      const response = await fetch(API_URL + term)

      const resData = await response.json()

      if (resData.results.length > 0) {

        // Set State and Context value

        return setSongData(resData.results)

      } else {

        return setMessage('Not Found')

      }
    }
    fetchData()

  }

  return (
    <div className="App">
      <SearchContext.Provider value={{
        term: searchInput,
        handleSearch: handleSearch
      }}>
        <SearchBar />
      </SearchContext.Provider>
      {message}
      <SongContext.Provider value={songData}>
        <Gallery />
      </SongContext.Provider>
    </div>
  );
}

export default App;
