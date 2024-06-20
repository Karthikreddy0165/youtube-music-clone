import {Carousel} from "primereact/carousel";
import {useEffect, useState} from "react";
import SongTemplate from "./SongTemplate";
export default function MyCarousel({title, api}){
    const [songs, setSongs] = useState([])
    useEffect(()=>{
        const fetchSongs = async () =>{
            try {
                const response = await fetch(api, {
                    headers: {
                        'accept': 'application/json',
                        'projectID': 'vn4vuf67z1nk'
                    }
                })
                const data = await response.json()
                setSongs(data.data || [])
            }catch(error){
                console.error('Error fetching songs:', error);
            }
        }
        fetchSongs();
    },[api])

    return (
        <div className="bg-black text-white m-5 ">
            <h1 className="font-semibold text-3xl pl-2 pt-2">{title}</h1>
            <Carousel value={songs} numVisible={5} numScroll={4} itemTemplate={SongTemplate} />
        </div>
    );

}