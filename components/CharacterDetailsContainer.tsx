import { FunctionalComponent } from "preact/src/index.js";
import { Character } from "../types.ts";
import CharacterCard from "./CharacterCard.tsx";
type Props ={
    personajes:Character[];
}
const CharacterDetailsContainer:FunctionalComponent<Props>=({personajes})=>{
    return(
        <div class ="characterContainer">
            {personajes.map((p)=>(
        <CharacterCard personaje={p}/>
      ))}


        </div>
    );
}
export default CharacterDetailsContainer;