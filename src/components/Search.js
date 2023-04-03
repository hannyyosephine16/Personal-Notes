import React from "react";

function Search({search, onSearch}){
    return(
        <div className="header-app">
        <h1>Aplikasi catatan</h1>
        <div className="item-search">
            <input value={search} id="search" type="text" placeholder="Cari catatan ..." onChange={(event)=> onSearch(event)}/>
        </div>
    </div>
    )
}
export default Search;