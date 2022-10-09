import axios from "../../utils/axios";
import Head from "next/head";
import { LocationsList } from "../../components/locations/LocationsList";
import { ILocations } from "../../types";

function Locations({ data }: { data: ILocations }) {
  return (
    <>
      <Head>
        <title>Locations</title>
      </Head>
      <LocationsList initialData={data} />
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get("location");
  const data = await res.data;

  return { props: { data }, revalidate: 10 };
}

export default Locations;
