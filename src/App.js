import {useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/Searchbar'
import { useContext } from 'react'
import { SongContext } from './components/SongContext'

function App() {
	let [search, setSearch] = useState('')
	let [message, setMessage] = useState('Search for Music!')
	let [songData, setSongData] = useState([])

  
	

	
	
	const handleSearch = (e, term) => {
		e.preventDefault()
		setSearch(term)
	}

	return (
		<div>
			<SearchBar handleSearch = {handleSearch}/>
			{message}
			<SongContext.Provider value={songData}>
				<Gallery />
			</SongContext.Provider>
		</div>
  	);
}

export default App;