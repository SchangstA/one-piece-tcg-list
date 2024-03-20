import React, { useState } from 'react'

const SearchCardFilter = ({ Cards, setFilteredCards }) => {

    const [shownames, setShowNames] = useState([])

    const handleSearchFilter = (name) => {
        const updatedNames = { ...showColors, [color]: !showColors[color] };
        setShowColors(updatedNames);
        filterCards(updatedNames);
    };
  return (
    <div>
      
    </div>
  )
}

export default SearchCardFilter
