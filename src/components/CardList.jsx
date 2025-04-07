import CardItem from "./CardItem"


function CardList ({marioCharacters})   {
   return(
    <main>
   {marioCharacters.map((m) => (
<CardItem 
name={m.name} 
strength={m.strength} 
origin={m.origin} 
image={m.image}
/>
   ))
}
</main>
);   

}

export default CardList