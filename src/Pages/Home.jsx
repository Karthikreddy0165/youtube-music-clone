import Sidebar from '../Components /SideBar';
import Navbar from "../Components /Navbar";
import MyCarousel from "../Components /Carousel";
import ReactH5AudioPlayer from 'react-h5-audio-player';
import { AudioProvider, AudioContext } from '../context/AudioContext';
import 'react-h5-audio-player/lib/styles.css';
import { useContext } from 'react';
import AudioPlayer from '../Components /AudioPlayer'
function Home({isLogin, setIsLogin}) {
    const carousels = [
        { title: "Trending Songs", api: 'https://academics.newtonschool.co/api/v1/musicx/song?featured=Trending%20songs' },
        { title: "Top 20 of this week", api: "https://academics.newtonschool.co/api/v1/musicx/song?featured=Top 20 of this week" },
        { title: "Top 50 of this month", api: "https://academics.newtonschool.co/api/v1/musicx/song?featured=Top 50 of this month" },
        { title: "Evergreen melodies", api: 'https://academics.newtonschool.co/api/v1/musicx/song?featured=Evergreen melodies' },
        { title: "Happy", api: "https://academics.newtonschool.co/api/v1/musicx/song?mood=happy" },
        { title: "Romantic", api: "https://academics.newtonschool.co/api/v1/musicx/song?mood=romantic" },
        { title: "Excited", api: "https://academics.newtonschool.co/api/v1/musicx/song?mood=excited" },
        { title: "Sad", api: "https://academics.newtonschool.co/api/v1/musicx/song?mood=sad" }
    ];

    return (
            <div className='h-full bg-black'>
                <Navbar isLogin = {isLogin} setIsLogin = {setIsLogin}  />
                <div className="flex">
                    <Sidebar isLogin = {isLogin}/>
                    <div className='bg-black ml-[17%] pt-16 overflow-y-auto w-full'>
                        {carousels.map((carousel, index) => (
                            <MyCarousel key={index} title={carousel.title} api={carousel.api} isLogin = {isLogin} />
                        ))}
                    </div>
                </div>
                <AudioPlayer />
            </div>
    );
}


export default Home;
