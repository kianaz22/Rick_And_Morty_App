import Head from "next/head";
import CharacterData from "../../components/characters/character";
import { ICharacterData } from "../../types";
import axios from "../../utils/axios";

interface IQuery {
  characterId: string;
}

function Character({ data }: { data: ICharacterData }) {
  return (
    <>
      <Head>
        <title>Character</title>
      </Head>
      <CharacterData data={data} />
    </>
  );
}

export async function getServerSideProps({ query }: { query: IQuery }) {
  const res = await axios.get(`character/${query.characterId}`);
  const data = await res.data;

  return { props: { data } };
}

export default Character;
