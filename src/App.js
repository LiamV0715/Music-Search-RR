import {useEffect, useRef, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/Searchbar'
import { SongContext } from './components/SongContext'
import { SearchContext} from './components/SearchContext'

function App() {
	let [searchTerm, setSearchTerm] = useState('');

  let [message, setMessage] = useState("Search for Music!");

  let [songData, setSongData] = useState([]);

  let searchInput = useRef('')

 

  useEffect(() => {

    const fetchData = async () => {

      document.title = `${searchTerm} Music`;

      const response = await fetch('https://itunes.apple.com/search?term=the%20grateful%20dead');

      const resData = await response.json();

      if (resData.results.length > 0) {

        setSongData(resData.results);

      } else {

        setMessage('Not Found');

      }

      console.log(resData);

    }

    fetchData();

  }, [searchTerm]);
	
	const handleSearch = (e, term) => {

    e.preventDefault()

    setSearchTerm(term)

  }

  return (

    <div className="App">

      <SearchContext.Provider value={{

        term: searchInput,

        handleSearch: handleSearch

      }} >

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