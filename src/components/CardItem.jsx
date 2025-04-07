

function CardItem ( {name, strength, origin, image} ) {
    return (
       
<article className="CardItem" >
    <img src={image} alt={name}/>
    <div className="CardItemInfo">
    <h2>{name}</h2>
    <p>Pouvoir : {strength}</p>
    <p>Première apparution : {origin}</p>
    </div>
</article>

    )
}

export default CardItem