import React, { useEffect, useState } from "react";

interface Episode {
    id: number;
    title: string;
    description:string;
}


const EpisodeList: React.FC = () =>{
    const [eposides, setEpisodes] = useState<Episode[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() =>{
        const getEpisodes = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();

                const episodeData: Episode[] = data.map((item:{id:number, title: string, body:string}) =>({
                    id:item.id,
                    title: item.title,
                    description: item.body
                }));
                setEpisodes(episodeData);
            } catch (error) {
                console.log('Error Fetching Episodes',error);
                setLoading(false)
            }
            finally {
                setTimeout(() => {
                    setLoading(false)
                }, 3000);
            }
        }
        getEpisodes();
    }, [])
    return (
        <div className="App">
            <h1>Podcast Episodes</h1>
            {
                loading ? <p>Loading...</p>:(
                    <ul>
                    {eposides.map((episode) => (
                        <li key={episode.id}>
                            <h2>{episode.title}</h2>
                            <p>{episode.description}</p>
                        </li>
                    ))}
                </ul> )
            }

        </div>
    )
}

export default EpisodeList;