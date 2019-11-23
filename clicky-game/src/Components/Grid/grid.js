import React, {Component} from "react";
import "./Grid.css";
import "./rorshach.json";
import Card from "../Card";
import Header from "../Header/Header";


class Grid extends Component {
    state = {
        Rorshach: rorshach,
        score: 0
    }

    resetGame = () => {
        this.setState({
            score: 0,
            rorshach: this.shuffleArray(newRorshach)
        });      
    }

    handleCorrect = newRorshach => {
        this.setState({
            rorshach: this.shuffleArray(newRorshach), 
            score: this.state.score +1,
        });
        
        if (this.state.score === 12) {
            this.resetGame();
            console.log("You won!");
        }

    };

    handleWrong = () => {
        this.resetGame();
    };

    handleClick = name => {
        let guessedCorrect = false;
        const newRorshach = this.state.rorshach.map(rorshach => {
           const newPic = {...rorshach};
           if (newPic.name === name) {
               if(!newPic.clicked){
                   console.log("Already guessed------------");
                   newPic.clicked = true;
                   guessedCorrect = true;
               }
               
           }
           return newPic;
       })       
       console.log("GUESSED CORRECT: ", guessedCorrect)
       guessedCorrect ? this.handleCorrect(newRorshach) : this.handleWrong(newRorshach)
    };

    // shuffleArray runs a for loop through the rorshach.json array length and randomizes the array for the next selection.  It ends by returning the array
    shuffleArray = rorshach => {
        for (let i = rorshach.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [rorshach[i], rorshach[j]] = [rorshach[j], rorshach[i]];
        }
        return (rorshach);
    };

    // This block renders the html elements that will dynamically display in the dom.
    render() {
        return(
            // The div element that houses grid to be rendered
            <div>
                {/* The header element that will display the score */}
                <Header score={this.state.score}/>
                {/* Wrapper that will hold the cards and the actual grid */}
                <div className="gridWrapper">
                    <div className="grid">
                    {this.state.rorshach.map(rorshach => {
                            return (<Card 
                            name={rorshach.name}
                            key={rorshach.name} 
                            handleClick={this.handleClick}
                            src={rorshach.image} 
                            alt={rorshach.name}  
                        />)
                        })}
                    </div>
                </div>
            </div> 
        );
    }
};

export default Grid;