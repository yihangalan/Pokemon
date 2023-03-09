export default function PokemonTile({pokemon, deletePokemon}) {
    return(
    <div>
        <img onDoubleClick={()=>deletePokemon(pokemon)} src={pokemon.image} alt="" />
        <p>{pokemon.name}</p>
    </div>)
}