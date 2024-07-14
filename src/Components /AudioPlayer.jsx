import {useContext} from "react";
import ReactH5AudioPlayer from 'react-h5-audio-player';
import { AudioProvider, AudioContext } from '../context/AudioContext';
import 'react-h5-audio-player/lib/styles.css';
const  AudioPlayer = () => {
    const { currentSong, isPlaying } = useContext(AudioContext);

    return (
        <div className="fixed bottom-0 w-full">
            { currentSong && isPlaying &&(
                <ReactH5AudioPlayer
                    src={currentSong.audio_url}
                    autoPlay
                    showSkipControls={true}
                    showJumpControls={false}
                    controls
                />
            )}
        </div>
    );
};
export default AudioPlayer;