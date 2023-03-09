import PokemonTile from "./PokemonTile";

function Pokemon({array, deletePokemon}) {
    return (
        <div>
            
            {array.map((item, index) => <PokemonTile key = {item.id} pokemon={item} deletePokemon = {deletePokemon} />)}
        </div>
    )
}
export default Pokemon;
