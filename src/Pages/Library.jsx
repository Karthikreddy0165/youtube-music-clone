import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../Components /SideBar';
import Navbar from '../Components /Navbar';

function Library({ isLogin, setIsLogin }) {
    const [activeButton, setActiveButton] = useState('songs');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div className="flex flex-col">
            <Sidebar />
            <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />

            <div className="mt-24 flex flex-col">
                <div className="flex ml-80 gap-6 px-4">
                    <Link to="/library/songs">
                        <button
                            className={`rounded-md py-2 px-4  ${
                                activeButton === 'songs' ? 'bg-white text-black' : 'bg-[#2C2B2F] text-[#C7C7C8]'
                            } transition-colors duration-200`}
                            onClick={() => handleButtonClick('songs')}
                        >
                            Songs
                        </button>
                    </Link>
                    <Link to="/library/albums">
                        <button
                            className={`rounded-md py-2 px-4  ${
                                activeButton === 'albums' ? 'bg-white text-black' : 'bg-[#2C2B2F] text-[#C7C7C8]'
                            } transition-colors duration-200`}
                            onClick={() => handleButtonClick('albums')}
                        >
                            Albums
                        </button>
                    </Link>
                    <Link to="/library/playlists">
                        <button
                            className={`rounded-md py-2 px-4  ${
                                activeButton === 'playlists' ? 'bg-white text-black' : 'bg-[#2C2B2F] text-[#C7C7C8]'
                            } transition-colors duration-200`}
                            onClick={() => handleButtonClick('playlists')}
                        >
                            Playlists
                        </button>
                    </Link>
                    <Link to="/library/artists">
                        <button
                            className={`rounded-md py-2 px-4  ${
                                activeButton === 'artists' ? 'bg-white text-black' : 'bg-[#2C2B2F] text-[#C7C7C8]'
                            } transition-colors duration-200`}
                            onClick={() => handleButtonClick('artists')}
                        >
                            Artists
                        </button>
                    </Link>
                </div>
            </div>

            <Outlet />
        </div>
    );
}

export default Library;
