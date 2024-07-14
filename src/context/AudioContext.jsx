import React, { createContext, useState } from 'react';

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(null);
    const [currentSongId, setCurrentSongId] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
    return (
        <AudioContext.Provider value={{
            isPlaying,
            setIsPlaying,
            currentSong,
            setCurrentSong,
            currentSongId,
            isLogin,
            setIsLogin,
            setCurrentSongId }}>
            {children}
        </AudioContext.Provider>
    );
};
