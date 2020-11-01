import React from 'react';
import Navbar from "./components/Navbar"
import QuoteCard from "./components/QuoteCard"
import ListCard from "./components/ListCard"
import axios from "axios";


function App() {
  const nelson = {
    quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
    character: "Nelson Muntz",
    image: "https://pm1.narvii.com/7070/aeaeadea89d89327a8e5f4f83d10272dc337425fr1-1200-1200v2_128.jpg",
    characterDirection:	"Right"
  }

  const lisa = {
    quote:	"Shut up, brain. I got friends now. I don't need you anymore.",
    character:	"Lisa Simpson",
    image:	"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
    characterDirection:	"Right",
  } 

  const [lists,setLists] = React.useState([]);

  React.useEffect(() => {
     getCharacter()
  },[])

  const getCharacter = () => {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then( res => {
        console.log(res.data)
        const newList = [...lists,res.data[0]]
        setLists(newList)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  
  const handleClick = () => {
    getCharacter()
  }

  return (
    <div className="App">
      <Navbar/>
      <button onClick={handleClick}>add new character</button>
      <ListCard  lists={lists}/>

    </div>
  );
}

export default App;
