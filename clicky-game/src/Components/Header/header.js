import React from "react";
import "./Header.css";

const Header = props => (
    <div id="headerContainer" className="container">
        <div id="title">CLICKbait</div>
        <div id="directions">The human mind is deeply complex wonder.  The rules are simple, use that complex wonder of yours to not click on the same image twice.  If you can manage to do that 12 times in a row without succumbing to your own fragile psyche then you will be a winner.  Of sorts...</div>
        <div id="scoreDiv">Score: {props.score}</div>
    </div>
);
export default Header;
