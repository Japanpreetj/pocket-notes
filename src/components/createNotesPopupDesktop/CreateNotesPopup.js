import React, {useState} from "react";
import "./CreateNotesPopup.css";

function CreateNotesPopup({ groupNamesParent, setGroupNamesParent, onClose }) {
    const [groupName, setGroupName] = useState("");
    const [bgColor, setBgColor] = useState("");
  
    const handleGroupName = (e) => {
      setGroupName(e.target.value);
    };
  
    const handleColor = (e) => {
      const div = e.target;
      setBgColor(getComputedStyle(div).backgroundColor);
    };
  
    const saveName = () => {
      const newGroup = { name: groupName, color: bgColor };
      setGroupNamesParent([...groupNamesParent, newGroup]);
      localStorage.setItem(
        "groupNames",
        JSON.stringify([...groupNamesParent, newGroup])
      );
      onClose();
    };
  

return(
    <div className="popup">
        <div className="title">Create New Notes Group</div>
        <div className="input_box">
            <span>Group Name</span>
            <input
            value={groupName}
            onChange={handleGroupName}
            type="text"
            placeholder="Enter your Group Name..."
            />
        </div>
        <div className="color_input">
            <span>Group Color</span>
            <div className="color_input_color">
                <div
                classNamse={`color_input_color_1 ${
                    bgColor === "rgb(179, 139, 250)" ? `highlight` : null
                }`}
                onClick={handleColor}
                ></div>
                <div
                classNamse={`color_input_color_2 ${
                    bgColor === "rgb(255, 121, 242)" ? `highlight` : null
                }`}
                onClick={handleColor}
                ></div>
                <div
                classNamse={`color_input_color_3 ${
                    bgColor === "rgb(67, 230, 252)" ? `highlight` : null
                }`}
                onClick={handleColor}
                ></div>
                <div
                classNamse={`color_input_color_4 ${
                    bgColor === "rgb(241, 149, 118)" ? `highlight` : null
                }`}
                onClick={handleColor}
                ></div>
                <div
                classNamse={`color_input_color_5 ${
                    bgColor === "rgb(0, 71, 255)" ? `highlight` : null
                }`}
                onClick={handleColor}
                ></div>
                <div
                classNamse={`color_input_color_6 ${
                    bgColor === "rgb(102, 145, 255)" ? `highlight` : null
                }`}
                onClick={handleColor}
                ></div>
            </div>
        </div>
        <div className="close">
            <button onClick={saveName} disabled={groupName.length ===0}>
                Create
            </button>
        </div>
    </div>
);
            }

export default CreateNotesPopup;