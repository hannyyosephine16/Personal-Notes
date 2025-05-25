import React from "react";

function EmptyMessage({ type = "notes" }){
    const messages = {
        notes: {
            emoji: "📝",
            title: "Belum ada catatan",
            subtitle: "Mulai buat catatan pertama Anda!"
        },
        archive: {
            emoji: "📦",
            title: "Belum ada catatan yang diarsipkan",
            subtitle: "Catatan yang diarsipkan akan muncul di sini"
        }
    };
    
    const message = messages[type] || messages.notes;
    
    return (
        <div className="emptymessage_list">
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                {message.emoji}
            </div>
            <h3 style={{ marginBottom: '8px', color: '#e2e8f0' }}>
                {message.title}
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '14px' }}>
                {message.subtitle}
            </p>
        </div>
    );
}

export default EmptyMessage;