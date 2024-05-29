import { useState } from 'react'

function SearchBar(props) {
    let [searchTerm, setSearchTerm] = useState('')
    const searchStyle = {
        width: "25vw",
        height: "10vh",
        border: "1px solid black",
        margin: "2px",
        "padding-left": "50%",
        "border-radius": "25%",
        "box-shadow": "10px 10px lightblue"
      };

    return (
        <div style={searchStyle}>
        <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>

            <input type="text" placeholder="Enter a search term here" onChange={
                (e) => setSearchTerm(e.target.value)
            } />

            <input type="submit" />

        </form>
        </div>
    )
}

export default SearchBar