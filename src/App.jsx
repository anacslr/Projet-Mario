import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardList from './components/CardList'
import NavBar from './components/NavBar'

const marioCharacters  = [
  {
     name: 'Mario',
     strength: 'Jumping ability',
     origin: 'Donkey Kong (1981)',
     image: 'https://super-mario-bros-character-api.onrender.com/images/mario.png'
 },
 {
     name: 'Luigi',
     strength: 'Jumping ability, speed',
     origin: 'Mario Bros. (1983)',
     image: 'https://super-mario-bros-character-api.onrender.com/images/luigi.png'
 },
  {
     name: 'Princess Peach',
     strength: "Magical powers",
     origin: "Super Mario Bros. (1985)",
     image: 'https://super-mario-bros-character-api.onrender.com/images/peach.png'
 },
 {
     name: 'Bowser',
     strength: "Strength, fire breath",
     origin: "Super Mario Bros. (1985)",
     image: 'https://super-mario-bros-character-api.onrender.com/images/bowser.png'
   },
   {
     name: 'Yoshi',
     strength: "Swallowing enemies, long tongue",
     origin: "Super Mario World (1990)",
     image: 'https://super-mario-bros-character-api.onrender.com/images/yoshi.png'
   },
   {
     name: 'Wario',
     strength: "Strength, flatulence",
     origin: "Super Mario Land 2: 6 Golden Coins (1992)",
     image: 'https://super-mario-bros-character-api.onrender.com/images/wario.png'
   }
]



function App() {


  return (
    <>
    <NavBar/>
<CardList marioCharacters={marioCharacters}/>
    </>
  )
}

export default App
