import React from "react";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";
// import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron"

class App extends React.Component {

//set state so we know which image has been clicked. Also we want establish an array of characters so we can randomly assign them to the DOM
state = {
  friends,
  score:0,
  highScore:0,
  aRandomCharacters:[]
  //beginning state

  //game over state
  //high score state
  //click to begin state

};

clickedCharacter = id => {
console.log("character has been clicked")
  // this.setState({})
  //scramble the order of cards in the state.friends array
  //push the id of the clicked cards into an array. loop through that array to determine if the card has already been clicked
}


  
  render(){
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary sticky-top">
    <a className="navbar-brand" href="#">Clicky-Game</a>
    <h3>click to begin</h3>
    <h3>Your Score: {this.state.score}</h3>
    <h3>High Score: {this.state.highScore}</h3>



  </nav>
    <Jumbotron/>
    <Wrapper>


      {
        friends.map(friend => {
          return <FriendCard
            data-id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        })

      }
      {/*
      
        <FriendCard

        name={friends[0].name}
        image={friends[0].image}
        occupation={friends[0].occupation}
        location={friends[0].location}
      />
      <FriendCard
        name={friends[1].name}
        image={friends[1].image}
        occupation={friends[1].occupation}
        location={friends[1].location}
      />
      <FriendCard
        name={friends[2].name}
        image={friends[2].image}
        occupation={friends[2].occupation}
        location={friends[2].location}
      />
      <FriendCard
        name={friends[3].name}
        image={friends[3].image}
        occupation={friends[3].occupation}
        location={friends[3].location}
      />
      <FriendCard
        name={friends[4].name}
        image={friends[4].image}
        occupation={friends[4].occupation}
        location={friends[4].location}
      />
      <FriendCard
        name={friends[5].name}
        image={friends[5].image}
        occupation={friends[5].occupation}
        location={friends[5].location}
      /> */}
    </Wrapper>
    </div>
  );
    }
}

export default App;
