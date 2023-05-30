import React, { useContext, useState } from 'react'
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

import { todoContext } from '../context/context';

function SearchFilter() {
    const {searchVal, setSearchVal, sortTodo, sortVal, sortType} = useContext(todoContext);
    
   
  return (
    <>
    {/* css from index.css */}
    <div className='searchFilter'>

      {/* Search Section */}
     <div className='search'>

        <input 
            type="text"
            placeholder="Search Task"
            id='search'
            className='input'
            value={searchVal}
            onChange={(e)=>setSearchVal(e.target.value)}
              />

        <button className='btn' >
          {searchVal ? 
            (<XMarkIcon strokeWidth={2} height={24} width={24}/>):
            (<MagnifyingGlassIcon strokeWidth={2} height={24} width={24}/>)}
        </button>
    </div> 

    {/* Filter Section */}
    {searchVal ?  null : (
      <button className='btn' id='filterBtn' onClick={sortTodo}>
      <span style={{color:"white"}}>Sort {sortType}</span> 
      <AdjustmentsHorizontalIcon strokeWidth={2} height={24} width={24}/>
      </button>
    )  }
      
   </div>
    </>
  )
}

export default SearchFilter