import { Handlers, PageProps } from "$fresh/server.ts";
import axios from 'axios';
import { Character, CharacterAPI } from "../types.ts";
import BuscadorCharacters from "../islands/BuscadorCharacters.tsx";


export default function AboutPage() {
  return (
    <div class="index">
      <BuscadorCharacters/>

    </div>
  );
}