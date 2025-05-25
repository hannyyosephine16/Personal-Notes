import React from "react";

function DeleteButton({id, onDelete, title}){
    const handleDelete = () => {
        if(window.confirm(`Apakah Anda yakin ingin menghapus catatan "${title}"?`)) {
            onDelete(id);
        }
    };
    
    return (
        <button 
            className='item_deleted' 
            onClick={handleDelete}
            title="Hapus catatan"
        >
            🗑️ Hapus
        </button>
    );
}

export default DeleteButton;