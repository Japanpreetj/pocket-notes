import React from "react";
import "./DesktopNotesContent.css";

function NotesDesktopContent({note}) {
    return(
        <div className="desk_notes">
            <div className="desk_notes_dt">
                <div className="desk_notes_date">{note.date}</div>
                <div className="desk_notes_time">{note.time}</div>
            </div>
            <div className="desk_notes_details">
                <p>{note.content}</p>
            </div>
        </div>
    );
}

export default NotesDesktopContent;
