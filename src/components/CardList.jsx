import CardItem from "./CardItem"


function CardList ({marioCharacters, setCharaGood})   {
  


   return(
    <main>

      
   {marioCharacters.map((m) => (
      
<CardItem 
key={m.name} 
name={m.name} 
strength={m.strength} 
origin={m.origin} 
image={m.image}
good={m.good}
/>
   ))
}
</main>
);   
   }


export default CardList