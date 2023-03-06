import PokemonTile from "./PokemonTile";

function Pokemon(props, deletePokemon) {
    return (
        <div>
            {props.array.map((item, index) => <PokemonTile key = {index} pokemon={item} deletePokemon = {props.deletePokemon} />)}


        </div>
    )
}
export default Pokemon;