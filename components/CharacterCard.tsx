import { FunctionalComponent } from "preact/src/index.js";
import { Character } from "../types.ts";
type Props = {
    personaje: Character;
};
const CharacterCard: FunctionalComponent<Props> = ({ personaje }) => {
    return (
        <div class ="characterCard">

            <a href={`/Character/${personaje.id.toString()}`}>
            <img src={personaje.image}></img>
            <h1>{personaje.name}</h1>
            </a>
        </div>
    );
};
export default CharacterCard;
