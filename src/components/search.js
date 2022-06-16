import React from 'react'

const Search = ({onSearchChange, searchChange}) => {
  return (
   <div className='pa2 '>
        <input
            className='bg-light-blue br2 ba-blue pa2'
            type="search"
            placeholder="Search robots"
            onChange={searchChange}
        />
   </div>
  )
}

export default Search;