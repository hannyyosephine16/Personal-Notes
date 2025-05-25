import React from "react";

function ArchiveButton({id, onArchived, isArchived}){
    return(
        <button 
            className="item_archivebutton" 
            onClick={()=> onArchived(id)}
            title={isArchived ? 'Pindahkan ke catatan aktif' : 'Arsipkan catatan'}
        >
            {isArchived ? '📤 Pindahkan' : '📦 Arsipkan'}
        </button>
    )
}

export default ArchiveButton;