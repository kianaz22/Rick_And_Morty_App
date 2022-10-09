import Head from "next/head";
import axios from "../../utils/axios";
import LocationData from "../../components/locations/location";
import { ILocationData } from "../../types";

interface IQuery {
  locationId: string;
}

function Location({ data }: { data: ILocationData }) {

  return (
    <>
      <Head>
        <title>Location</title>
      </Head>
    <LocationData data={data} />
    </>
  );
}

export async function getServerSideProps({ query }: { query: IQuery }) {
  const res = await axios.get(`location/${query.locationId}`);
  const data = await res.data;

  return { props: { data } };
}

export default Location;
