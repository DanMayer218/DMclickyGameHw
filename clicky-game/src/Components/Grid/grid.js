import React, {Component} from "react";
import "./Grid.css";
import rorshach from "clicky-game/src/Components/rorshach.json";
import Card from "../Card";
import Header from "../Header/Header";


class Grid extends Component {
    state = {
        rorshach: rorshach,
        score: 0
    }

    resetGame = () => {
        this.setState({
            score: 0,
            // rorshach: rorschach
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

    shuffleArray = rorshach => {
        for (let i = rorshach.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [rorshach[i], rorshach[j]] = [rorshach[j], rorshach[i]];
        }
        return (rorshach);
    };

    render() {
        return(
            <div>
                <Header score={this.state.score}/>
                <div className="gridWrapper">
                    <div className="grid">
                    {this.state.rorshach.map(femme => {
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