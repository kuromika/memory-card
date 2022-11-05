import React from "react";
import Score from "./Score";

const Head = (props) => {


    return (
        <header>
            <img id ='logo' src="./img/logotitle.png" alt="VA-11 HALL-A Memory Game"></img>
            <div className='scores'>
                <Score header='Current Score: ' score={props.current}></Score>
                <Score header='Best Score: ' score={props.best}></Score>
            </div>
        </header>
    )
}

export default Head;