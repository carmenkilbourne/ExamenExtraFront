import { FunctionalComponent } from "preact/src/index.js";
import { Character, CharacterAPI } from "../types.ts";
import { useEffect, useState } from "preact/hooks";
import axios from "axios";
import CharacterContainer from "../components/CharacterContainer.tsx";

const BuscadorCharacters: FunctionalComponent = () => {
    const [nombre, setNombre] = useState<string>("");
    const [personajes, setPersonajes] = useState<Character[]>([]);
    const [todospersonajes, setTodospersonajes] = useState<Character[]>([]);
    const BuscarTodosCharacter = async () => {
        const res = await axios.get<CharacterAPI>(
            "https://rickandmortyapi.com/api/character",
        );
        const tosdosps = res.data.results;
        setTodospersonajes(tosdosps);
    };
    const BuscarCharacter = async () => {
        const personajesAPI = await axios.get<CharacterAPI>(
            `https://rickandmortyapi.com/api/character/?name=${nombre}`,
        );
        const ps = personajesAPI.data.results;
        setPersonajes(ps);
    };
    useEffect(() => {
        BuscarTodosCharacter();
    }, []);
    return (
        <div class="buscadorContainer">
            <div class="buscador">
                <input
                    type="nombre"
                    name="nombre"
                    value={nombre}
                    onInput={(e) => setNombre(e.currentTarget.value)}
                />
                <button type="submit" onClick={BuscarCharacter}>Buscar</button>
            </div>
            {personajes.length === 0
                ? <CharacterContainer personajes={todospersonajes} />
                : <CharacterContainer personajes={personajes} />}
        </div>
    );
};
export default BuscadorCharacters;
