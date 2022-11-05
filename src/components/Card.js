import React, { useEffect, useRef } from "react";

const Card = (props) => {

    const ref = useRef(null);

    useEffect(() => {

        const handleClick = (e) => {
            props.shuffle();
            props.update(props.char);
        }
        const element = ref.current;

        element.addEventListener('click', handleClick);

        return () => {
            element.removeEventListener('click', handleClick);
        }
    }, [props])

    return (
        <div className="card" ref={ref}>
            <img className="character-image"
                src={`img/characters/${props.char}.png`}
                alt="a vallhalla character"></img>
            <p className="character-name">{props.char}</p>
        </div>
    )
}

export default Card;