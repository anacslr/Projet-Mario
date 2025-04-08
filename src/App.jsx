import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import './App.css'
import CardList from './components/CardList'

const marioCharacters  = [
  {
     name: 'Mario',
     strength: 'Jumping ability',
     origin: 'Donkey Kong (1981)',
     image: 'https://super-mario-bros-character-api.onrender.com/images/mario.png',
     good:"yes",
 },
 {
     name: 'Luigi',
     strength: 'Jumping ability, speed',
     origin: 'Mario Bros. (1983)',
     image: 'https://super-mario-bros-character-api.onrender.com/images/luigi.png',
     good:"yes",
 },
  {
     name: 'Princess Peach',
     strength: "Magical powers",
     origin: "Super Mario Bros. (1985)",
     image: 'https://super-mario-bros-character-api.onrender.com/images/peach.png',
     good:"yes",
 },
 {
     name: 'Bowser',
     strength: "Strength, fire breath",
     origin: "Super Mario Bros. (1985)",
     image: 'https://super-mario-bros-character-api.onrender.com/images/bowser.png',
     good:"no",
   },
   {
     name: 'Yoshi',
     strength: "Swallowing enemies, long tongue",
     origin: "Super Mario World (1990)",
     image: 'https://super-mario-bros-character-api.onrender.com/images/yoshi.png',
     good:"yes",
   },
   {
     name: 'Wario',
     strength: "Strength, flatulence",
     origin: "Super Mario Land 2: 6 Golden Coins (1992)",
     image: 'https://super-mario-bros-character-api.onrender.com/images/wario.png',
     good:"no",
   }
]





function App() {

  

  return (
    <>
    <Navbar/>
    <button className="btn" type="button">Méchants</button>
    <button className="btn" type="button">Gentils</button>
    <CardList marioCharacters={marioCharacters}/>
    <Footer/>
    </>
  )
}

export default App
