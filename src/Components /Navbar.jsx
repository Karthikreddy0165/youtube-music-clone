import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {assests} from "../assests/assests";
import {useGoogleLogin} from "@react-oauth/google";
import { useState} from "react";

export default function Navbar(){
    const [userData, setUserData] = useState(null)

    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: {
                        'Authorization': `Bearer ${tokenResponse.access_token}`,
                    },
                });
                const data = await response.json();
                setUserData(data);
                console.log(data)
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        },
        onError: (error) => {
            console.error('Login failed:', error);
        }
    });


    return(
        <>
            <div className='flex items-center justify-between bg-black top-0 w-screen fixed z-10'>
                <div className="flex items-center justify-between p-6 ">
                    <div className="flex items-center  gap-6">
                        <FontAwesomeIcon  className="cursor-pointer" icon={faBars} style={{color: "#ffffff",}} size='xl'/>
                        <img src={assests.logo} alt='logo'/>
                    </div>
                </div>

                <div className="mr-96">
                    <input type='text' placeholder='Search songs, albums, artists, podcasts'
                           className="bg-zinc-800 border border-zinc-600 text-white rounded py-2 px-4 focus:outline-none focus:bg-black focus:shadow-outline w-96"/>
                </div>
                <div className="mr-24">

                    {userData ? (
                        <div>
                            <img src={userData.picture} alt='profile' className='w-8 h-8 rounded-full'/>
                        </div>
                    ) : (
                        <button className='bg-white text-black rounded-full py-1 px-4'
                                onClick={() => login()}>
                            Sign In
                        </button>
                    )}
                </div>

            </div>
            <hr />
        </>

    )
}