import React from 'react';
import HeaderSearch from './HeaderSearch';

function ContainHeader({search, onSearchChange}) {
  return (
    <div className='header-app'>
      <HeaderSearch 
        search={search}
        onSearchChange={onSearchChange}/>
    </div>
  );
}

export default ContainHeader;