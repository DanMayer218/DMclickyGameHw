import React from "react";
import "./Card.css";

const Card = props => {
    return(
        <div
            style={{backgroundImage:`url(${props.url})`}}
            alt={props.name}
            className="block"
            onClick={() => props.handleClick(props.name)}>
        </div>
    )
};

export default Card;