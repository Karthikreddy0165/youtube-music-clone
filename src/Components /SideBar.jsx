import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {assests} from "../assests/assests";
import {faHouse, faCompass, faMusic} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
    return (
        <div className='w-[17%] h-screen bg-black fixed top-16'>

            <div className="flex items-center text-white p-5 gap-6 pt-5">
                <FontAwesomeIcon className="cursor-pointer" icon={faHouse} size='xl'/>
                Home
            </div>
            <div className="flex items-center text-white p-5 gap-6 ">
                <FontAwesomeIcon className="cursor-pointer" icon={faCompass} size='xl'/>
                Explore
            </div>
            <div className="flex items-center text-white p-5 gap-6 ">
                <FontAwesomeIcon className="cursor-pointer" icon={faMusic} size='xl'/>
                Library
            </div>

        </div>
    );
}
