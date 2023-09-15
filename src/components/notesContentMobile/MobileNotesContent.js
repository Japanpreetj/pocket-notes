import React from "react"
import "./MobileNotesContent.css";

function NotesContentMobile({note}) {
    return(
        <div className="mob_notes_body">
            <div className="mob_notes_dt">
                <div className="mob_notes_date">{note.date}</div>
                <div className="mob_notes_time">{note.time}</div>
            </div>
            <div className="mob_notes_details">
                <p>{note.content}</p>
            </div>
        </div>
    );
}

export default NotesContentMobile;
