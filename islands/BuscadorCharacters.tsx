import { FunctionalComponent } from "preact/src/index.js";
import { Character } from "../types.ts";
import { useState } from "preact/hooks/src/index.d.ts";
type Props ={
    personajes:Character[];
}
const BuscadorCharacters:FunctionalComponent<Props>=({personajes})=>{
    const [nombre,setNombre]=useState
    const BuscarCharacter =()=>{

    }
    return(
        <div>
            <input type="nombre" name="nombre" value="" />
        <button type="submit" onClick={}>Subscribe</button>
        </div>
    );
}
export default BuscadorCharacters;