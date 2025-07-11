import { FunctionalComponent } from "preact/src/index.js";
import { Character } from "../types.ts";
import CharacterCard from "./CharacterCard.tsx";
type Props ={
    personajes:Character[];
}
const CharacterContainer:FunctionalComponent<Props>=({personajes})=>{
    return(
        <div class ="characterContainer">
            {personajes.map((p)=>(
        <CharacterCard personaje={p}/>
      ))}


        </div>
    );
}
export default CharacterContainer;