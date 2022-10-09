import axios from "../../utils/axios";
import Head from "next/head";
import { CharactersList } from "../../components/characters/CharactersList";
import { ICharacters } from "../../types";

function Characters({ data }: { data: ICharacters }) {
  return (
    <>
      <Head>
        <title>Characters</title>
      </Head>
      <CharactersList initialData={data} />
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get("character");
  const data = await res.data;

  return { props: { data }, revalidate: 10 };
}

export default Characters;
