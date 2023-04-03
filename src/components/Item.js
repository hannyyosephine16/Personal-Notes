import React from "react";
import BodyItem from "./BodyItem";
import DeletedButton from "./DeletedButton";
import ArchiveButton from "./ArchiveButton";


function Item({title, body, id, onDelete, onArchived, isArchived}){
    return(
        <div className="item">
            <BodyItem title={title} body={body}/>
            <DeletedButton id={id} onDelete={onDelete}/>
            <ArchiveButton id={id} onArchived={onArchived} isArchived={isArchived}/>
     
        </div>
    );
}

export default Item;