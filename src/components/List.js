import React from "react";
import Item from "./Item";

function List({keyword, notes, onDelete, onArchived, onActive}){
    if(notes.lenght > 0){
        notes = notes.filter((note)=>{
            if(keyword === ""){
                return note
            }
            return note.title.toLowerCase().includes(keyword.toLowerCase())
        })
    } 
    
    
    return(
        <div className="list">
            {
                notes.map((note)=>(
                    <Item 
                    key={note.id} 
                    onDelete={onDelete}
                     {...note}
                    id={note.id}
                    onArchived={onArchived}
                    onActive={onActive}
                    isArchived={note.archived}
                   
                    />
                ))
            }
            
        </div>
    );
}

export default List;