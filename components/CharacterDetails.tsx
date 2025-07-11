import { FunctionalComponent } from "preact/src/index.js";
import { Character } from "../types.ts";
type Props = {
    personaje: Character;
};
const CharacterDetails: FunctionalComponent<Props> = ({ personaje }) => {
    return (
        <div class="characterDetCont">
           <a href="/">Volver</a> 
           <div class="characterCardDetails">
            <img src={personaje.image}></img>
            <div>
            <h1>{personaje.name}</h1>
            <p><strong>status: </strong>{personaje.status}</p>
            <p><strong>Species : </strong>{personaje.species}</p>
            <p><strong>Gender: </strong>{personaje.gender}</p>
            <p><strong>Origin: </strong>{personaje.origin.name}</p>
            </div>
            </div>
            
        </div>
    );
};
export default CharacterDetails;
