import { FreshContext, PageProps } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";
import axios from "axios";
import { Character } from "../../types.ts";
import CharacterDetails from "../../components/CharacterDetails.tsx";
type Props ={
    personaje:Character;
}
export const handler: Handlers = {
  async GET(_req, ctx:FreshContext) {
    const {id}= ctx.params;
    const personaje =await axios.get<Character>(`https://rickandmortyapi.com/api/character/${id}`);
    return await ctx.render({personaje:personaje.data});
  },
};

export default function AboutPage(props: PageProps<Props>) {
    const personaje =props.data.personaje;
  return (
    <div class="characterDetConts">
        <CharacterDetails personaje={personaje}/>

    </div>
  );
}

