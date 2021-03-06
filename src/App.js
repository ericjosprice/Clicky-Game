import React from "react";
import Wrapper from "./components/Wrapper";
import "./App.css";
import logo from "./logo.svg";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron"

class App extends React.Component {

  //We need a "clickedArray" in the state, so we can track the id's of the cards that have been clicked
  state = {
    friends,
    score:0,
    highScore:0,
    clickedArray:[],
    message: ""
  };
// when a character card is clicked
  // 1. shuffle friends Array indeces then set the friends array state 
  // 2. determine if the card's id has already been clicked
    // a. if it has been clicked then game over
    // b. if it hasn't been clicked then increment score
    // c. determine if high score has been reached. if so set highScore state  
  clickedCharacter = id => {
    //shuffle friends array
      const shuffledArray = this.shuffleArray(friends);
      this.setState({friends: shuffledArray});
      // reset game if image was already clicked.  Set this.state.score = 0; empty clickeadArray, end of game if card's id exists in clicked array
      if (this.state.clickedArray.includes(id)) {
        this.setState({ score: 0, clickedArray: [], message: "Game Over try again!"});
      }
      else {
        this.setState({
          clickedArray: this.state.clickedArray.concat([id]),
          score: this.state.score + 1,
          message: "Correct"
        });
      }
      // if score>highScore, set highScore = score
      if (this.state.score > this.state.highScore) {
        this.setState({ highScore: this.state.score });
      }
  }
// randomly shuffle array indeces 
  shuffleArray = (imagesArray) => {
    for (let i = imagesArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imagesArray[i], imagesArray[j]] = [imagesArray[j], imagesArray[i]];
    }
    return imagesArray;
}


  
  render(){
    return (
      <div>
        <Navbar message={this.state.message} highScore={this.state.highScore} score={this.state.score}/>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
        <Jumbotron/>

        <Wrapper>
          {
            friends.map(friend => {
              return <FriendCard
                id={friend.id}
                key={friend.id}
                name={friend.name}
                image={friend.image}
                occupation={friend.occupation}
                location={friend.location}
                clickedCharacter={this.clickedCharacter}
              />
            })

          }
        
        </Wrapper>
      </div>
    );
  }
}

export default App;
