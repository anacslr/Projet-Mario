import { useState } from "react";


function CardItem ( {name, strength, origin, image} )
 {
    const [count, setCount] = useState();
    return (
       
<article className="CardItem" >
<p className="etoile">   {count}</p>
    
  
    <div className="CardItemInfo">
    <button onClick={() => setCount("⭐")}><img src={image} alt={name}/></button>
    <h2>{name}</h2>
    <p>{strength}</p>
    <p>Première apparution : {origin}</p>
    </div>
</article>

    )
}

export default CardItem