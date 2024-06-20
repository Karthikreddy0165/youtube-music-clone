export default function SongTemplate(song){
    const artists = song.artist.map(artist => artist.name).join(', ').slice(0, 25) + (song.artist.length > 3 ? '...' : '')
    return(<div className="border-spacing-0.5 surface-border border-round m-1 py-2 px-3 ">
        <img src={song.thumbnail} alt={song.title} className=" shadow rounded "/>
        <h4 className="font-medium pt-3">{song.title}</h4>
        <h5 className="font-light pt-1 text-gray-300">{artists}</h5>
    </div>)
}