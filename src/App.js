import React from "react";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import "./App.css";
import logo from "./logo.svg";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron"

class App extends React.Component {

  //set state so we know which image has been clicked. Also we want establish an array of characters so we can randomly assign them to the DOM
  state = {
    friends,
    score:0,
    highScore:0,
    clickedArray:[],
    message: ""
  };

  clickedCharacter = id => {
    //scramble the order of cards in the state.friends array

      const shuffledArray = this.shuffleArray(friends);
      this.setState({friends: shuffledArray});
      // reset if image was already clicked.  set this.state.score = 0; empty clickeadArray, end of if block
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
      // set highscore = score if score>topscore.
      if (this.state.score > this.state.highScore) {
        this.setState({ highScore: this.state.score });
      }
  }
  //push the id of the clicked cards into an array. loop through that array to determine if the card has already been clicked

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
