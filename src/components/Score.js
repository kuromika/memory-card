import React from "react";

const Score = (props) => {
    
    return (
        <h2 className="score-header">{props.header}
            <span className="score-number">{props.score}</span>
        </h2>
    )
}

export default Score;