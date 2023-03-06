export default function PokemonTile(props) {
    return(
    <div>
        <img src={props.pokemon.image} alt="" onDoubleClick={props.deletePokemon}/>
        <p>{props.pokemon.name}</p>
    </div>)
}