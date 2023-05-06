import React, { useEffect, useState } from "react";
import Layout from "../../common/Layout";
import HotelCards from "../../components/HotelCards";
import getHotels from "../../services/index.services";
import { useParams } from "react-router-dom";

export default function HotelsPage() {
  const { id } = useParams();
  const [hotels, setHotels] = useState();

  useEffect(() => {
    (async () => {
      try {
        const hotels = await getHotels(id);
        setHotels(hotels);
        console.log(hotels, "hotelPAge");
      } catch (err) {
        console.log("Error occured when fetching Hotels");
      }
    })();
  }, [id]);

  return (
    <Layout>
      <HotelCards hotels={hotels} />
    </Layout>
  );
}
