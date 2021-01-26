import axios from 'axios';

class PokemonService{
    async getPokemons(){
        const result = await axios.get("https://pokeapi.co/api/v2/pokemon")
        const pokemonsRequest = result.data
    
        let pokemons:Array<Object> = []

        await Promise.all(
            pokemonsRequest.results.map(async (pokemon:{name:string, url:string}) =>{
                let pokemonData = await axios.get(pokemon["url"])
                pokemons.push({
                    name:pokemonData.data["name"],
                    type:pokemonData.data["types"][0]["type"]["name"],
                    image: pokemonData.data["sprites"]["front_default"]
                })
            })
        )
        
      return pokemons
    }
}


const r = new RequestApiService()
r.getPokemons().then(r => console.log(r))