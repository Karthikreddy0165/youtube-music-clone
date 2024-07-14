import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {assets} from "../assets/assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AvatarComponent } from 'avatar-initials';
import SearchInput from'./SearchInput'
export default function Navbar({ isLogin, setIsLogin}) {
    const navigate = useNavigate();
    const fullName = localStorage.getItem('name');
    let initials = '';

    if (fullName) {
        const nameParts = fullName.split(' ');
        if (nameParts.length === 1) {
            initials = nameParts[0].charAt(0);
        } else {
            initials = nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0);
        }
    }

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleLogout = () => {
        localStorage.removeItem('name');
        setIsLogin(false);
    };

    return (
        <div className='flex items-center justify-between bg-black top-0 w-screen fixed z-10'>
            <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-6">
                    <img src={assets.threeLines} className="w-6 h-5 cursor-pointer" alt="menu-icon" />
                    <img src={assets.logo} alt='logo' />
                </div>
            </div>
           <SearchInput/>
            <div className="mr-24">
                {isLogin ? (
                    <div className="relative" onClick={toggleDropdown}>
                        <AvatarComponent
                            initials={initials}
                            size={36}
                            className='cursor-pointer'
                            background="#f4f6f7"
                            color="#888888"
                            classes="rounded-full"
                            useGravatar={false}
                            fontSize={20}
                            fontWeight={400}
                        />

                        {isDropdownVisible && (
                            <div className="absolute bg-zinc-800 w-48 right-0 text-white rounded-md shadow-lg z-20">
                                <div className='flex items-center p-4'>
                                    <AvatarComponent
                                        initials={initials}
                                        size={36}
                                        className='cursor-pointer'
                                        background="#f4f6f7"
                                        color="#888888"
                                        classes="rounded-full"
                                        useGravatar={false}
                                        fontSize={20}
                                        fontWeight={400}
                                    />
                                    <p className='ml-2'>{fullName}</p>
                                </div>
                                <hr className="border-gray-600" />
                                <ul>
                                    <li className="px-4 py-2 cursor-pointer p-2">View Profile</li>
                                    <hr className="border-gray-600" />
                                    <li className="px-4 py-2 cursor-pointer" onClick={handleLogout}>Logout</li>
                                </ul>
                            </div>
                        )}
                    </div>
                ) : (
                    <button className='bg-white text-black rounded-full py-1 px-4' onClick={() => navigate('/signin')}>
                        Sign In
                    </button>
                )}
            </div>
        </div>
    );
}
