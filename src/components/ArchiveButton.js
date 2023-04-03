import React from "react";

function ArchivedButton({id, onArchived, isArchived}){
    return(
        <button className="item_archivebutton" onClick={()=> onArchived(id)}>{isArchived ? 'Pindahkan':'Archieve'}</button>
    )
}

export default ArchivedButton;