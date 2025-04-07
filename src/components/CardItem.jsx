

function CardItem ( {name, strength, origin, image} ) {
    return (
<article >
    <img src={image} alt={name}/>
    <h2>{name}</h2>
    <p>Pouvoir : {strength}</p>
    <p>Première apparution : {origin}</p>
</article>
    )
}

export default CardItem