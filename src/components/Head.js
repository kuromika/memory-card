import React from "react";
import Score from "./Score";

const Head = (props) => {


    return (
        <header>
            <h1>VA-11 HALL-A Memory</h1>
            <div className='scores'>
                <Score></Score>
                <Score></Score>
            </div>
        </header>
    )
}

export default Head;