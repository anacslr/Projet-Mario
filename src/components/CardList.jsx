import CardItem from "./CardItem"


function CardList ({marioCharacters})   {
   return(
    <div>
   {marioCharacters.map((m) => (
<CardItem 
name={m.name} 
strength={m.strength} 
origin={m.origin} 
image={m.image}
/>
   ))
}
</div>
);   

}

export default CardList