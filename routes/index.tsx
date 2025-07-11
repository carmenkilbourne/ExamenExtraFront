import { Handlers, PageProps } from "$fresh/server.ts";
import axios from 'axios';
import { Character, CharacterAPI } from "../types.ts";
import CharacterContainer from "../components/CharacterContainer.tsx";
import Header from "../islands/Header.tsx";

type Props={
  personajes:Character[];
}
export const handler: Handlers = {
  async GET(_req, ctx) {
    const res = await axios.get<CharacterAPI>("https://rickandmortyapi.com/api/character");
    return  await ctx.render({personajes:res.data.results});;
  },
};

export default function AboutPage(props:PageProps<Props>) {
  const personajes=props.data.personajes;
  console.log(props.data.personajes);
  return (
    <div class="index">
      <Header/>
      <CharacterContainer personajes={personajes}/>

    </div>
  );
}