import React from "react";

function DeletedButton({id, onDelete}){
    return <button className='item_deleted' onClick={()=>onDelete(id)}>Delete</button>
}

export default DeletedButton;