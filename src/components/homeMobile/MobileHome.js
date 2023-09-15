import React from "react";
import "./MobileHome.css";
import notes from "../../assets/icons/notes.jpg";

function HomeMobile(){
    return(
        <div className="mob_home" style={{backgroundImage:`url(${notes})`,
    }}
    >
        Create your first note...
    </div>
    );
}

export default HomeMobile;