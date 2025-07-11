import { FunctionalComponent } from "preact/src/index.js";
import { Character } from "../types.ts";
type Props = {
    personaje: Character;
};
const CharacterDetails: FunctionalComponent<Props> = ({ personaje }) => {
    return (
        <div>
           <a href="/">Volver</a> 
            <img src={personaje.image}></img>
            <h1>{personaje.name}</h1>
            <p>status:{personaje.status}</p>
            <p>Species : {personaje.species}</p>
            <p>Gender:{personaje.gender}</p>
            
        </div>
    );
};
export default CharacterDetails;
