export type Character={
  id:number;
  name:string;
  status:string;
  species:string;
  gender:string;
  origin:Origin;
  location:string[];
  image:string;

}
export type CharacterAPI={
  results:Character[];
}
type Origin={
  name:string;
  url:string;
}