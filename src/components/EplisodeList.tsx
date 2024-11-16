import React, { useEffect, useState } from "react";
import { Episode } from "../interfaces/Episode";
import Card from "./Card";

const EpisodeList: React.FC = () => {
  const [eposides, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getEpisodes = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();

        const episodeData: Episode[] = data.map(
          (item: { id: number; title: string; body: string }) => ({
            id: item.id,
            title: item.title,
            description: item.body,
          })
        );
        setEpisodes(episodeData);
      } catch (error) {
        console.log("Error Fetching Episodes", error);
        setLoading(false);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    };
    getEpisodes();
  }, []);
  return (
    <div className="flex justify-center items-center w-full">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="flex flex-wrap justify-center gap-4 w-full">
          {eposides.map(({ id, description, title }) => (
            <li key={id} className="flex-grow sm:flex-grow-0 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Card id={id} description={description} title={title} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EpisodeList;
