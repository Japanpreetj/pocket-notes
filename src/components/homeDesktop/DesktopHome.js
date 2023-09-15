import React from 'react'
import "./DesktopHome.css"
import home from "../../assets/icons/home.png"
import lock from "../../assets/icons/lock.png"

function HomeDesktop(){
    return(
        <div className='home_desktop'>
            <img src={home} alt="home" />
            <h1>Pocket Notes</h1>
            <p>Send and receive messages wihout keeping your phone online.<br/>
                Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
            </p>
            <div className="desk_home">
                <img src={lock} alt="lock" />
                <span>end-to-end encrypted</span>
            </div>
        </div>
    )
}
export default HomeDesktop