import Sidebar from '../Components /SideBar';
import Navbar from "../Components /Navbar";
import MyCarousel from "../Components /Carousel";
import ReactH5AudioPlayer from 'react-h5-audio-player';
import { AudioProvider, AudioContext } from '../context/AudioContext';
import 'react-h5-audio-player/lib/styles.css';
import { Outlet, Link } from 'react-router-dom';
import { useContext , useState} from 'react';
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

    const [activeButton, setActiveButton] = useState('');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    
    return (
            <div className='h-full bg-black'>
                <Navbar isLogin = {isLogin} setIsLogin = {setIsLogin}  />
                <div className="flex">
                    <Sidebar isLogin = {isLogin} handleButtonClick = {handleButtonClick}/>
                    <div className='bg-black ml-[17%] pt-16 overflow-y-auto w-full'>
                        <div className="flex ml-16 gap-6 px-4 mt-8">
                            <Link to="/mood/happy">
                                <button
                                    className={`rounded-md py-2 px-4  ${
                                        activeButton === 'happy' ? 'bg-white text-black' : 'bg-[#2C2B2F] text-[#C7C7C8]'
                                    } transition-colors duration-200`}
                                    onClick={() => handleButtonClick('happy')}
                                >
                                    Happy
                                </button>
                            </Link>
                            <Link to="/mood/sad">
                                <button
                                    className={`rounded-md py-2 px-4  ${
                                        activeButton === 'sad' ? 'bg-white text-black' : 'bg-[#2C2B2F] text-[#C7C7C8]'
                                    } transition-colors duration-200`}
                                    onClick={() => handleButtonClick('sad')}>
                                    Sad
                                </button>
                            </Link>
                            <Link to="/mood/angry">
                                <button
                                    className={`rounded-md py-2 px-4  ${
                                        activeButton === 'angry' ? 'bg-white text-black' : 'bg-[#2C2B2F] text-[#C7C7C8]'
                                    } transition-colors duration-200`}
                                    onClick={() => handleButtonClick('angry')}
                                >
                                    Angry
                                </button>
                            </Link>
                            <Link to="/mood/exicted">
                                <button
                                    className={`rounded-md py-2 px-4  ${
                                        activeButton === 'exicted' ? 'bg-white text-black' : 'bg-[#2C2B2F] text-[#C7C7C8]'
                                    } transition-colors duration-200`}
                                    onClick={() => handleButtonClick('exicted')}
                                >
                                    Exicted
                                </button>
                            </Link>
                            <Link to="/mood/romantic">
                                <button
                                    className={`rounded-md py-2 px-4  ${
                                        activeButton === 'romantic' ? 'bg-white text-black' : 'bg-[#2C2B2F] text-[#C7C7C8]'
                                    } transition-colors duration-200`}
                                    onClick={() => handleButtonClick('romantic')}
                                >
                                    Romantic
                                </button>
                            </Link>
                        </div>
                        {carousels.map((carousel, index) => (
                            <MyCarousel key={index} title={carousel.title} api={carousel.api} isLogin={isLogin}/>
                        ))}
                    </div>
                </div>
                <AudioPlayer/>
                <Outlet/>
            </div>
    );
}


export default Home;
