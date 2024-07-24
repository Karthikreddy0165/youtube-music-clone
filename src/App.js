import  { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Library from './Pages/Library';
import Upgrade from './Pages/Upgrade';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Songs from './Components /Songs';
import Albums from './Components /Albums';
import Artists from './Components /Artists';
import Playlists from './Components /Playlists';
import { AudioContext } from './context/AudioContext';
import AlbumDetails from './Components /AlbumDetails';
import ProfilePage from './Pages/ProfilePage'
import Happy from './Components /Happy'
import Sad from './Components /Sad'
import Angry from './Components /Angry'
import Exicted from './Components /Exicted'
import Romantic from './Components /Romantic'
import Mood from './Components /Mood'

function App() {
    const { isLogin, setIsLogin } = useContext(AudioContext);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home isLogin={isLogin} setIsLogin={setIsLogin}/>,
        },
        {
            path: '/mood/happy',
            element: <Happy isLogin={isLogin} setIsLogin={setIsLogin} />
        },
        {
            path: '/mood',
            element: <Mood isLogin={isLogin} setIsLogin={setIsLogin}/>,
            children: [
                { path: 'happy', element: <Happy isLogin={isLogin} setIsLogin={setIsLogin} /> },
                {path: 'sad', element: <Sad isLogin={isLogin} setIsLogin={setIsLogin}/>,},
                { path: 'angry', element: <Angry isLogin={isLogin} setIsLogin={setIsLogin} /> },
                { path: 'exicted', element: <Exicted isLogin={isLogin} setIsLogin={setIsLogin} /> },
                { path: 'romantic', element: <Romantic isLogin={isLogin} setIsLogin={setIsLogin} /> }
            ],
        },
        {
            path: '/signin',
            element: <SignIn setIsLogin={setIsLogin} />,
        },
        {
            path: '/signup',
            element: <SignUp />,
        },
        {
            path: '/profile',
            element: <ProfilePage isLogin={isLogin} setIsLogin={setIsLogin} />
        },
        {
            path: '/library',
            element: <Library isLogin={isLogin} setIsLogin={setIsLogin} />,
            children: [
                { path: 'music', element: <Songs isLogin={isLogin} /> },
                {
                    path: 'album',
                    element: <Albums isLogin={isLogin} setIsLogin={setIsLogin}/>,
                    children: [
                        { path: ':albumId', element: <AlbumDetails isLogin={isLogin} /> }
                    ]
                },
                { path: 'playlist', element: <Playlists isLogin={isLogin} setIsLogin={setIsLogin} /> },
                { path: 'artist', element: <Artists isLogin={isLogin} setIsLogin={setIsLogin} /> },
            ]
        },
        {
            path: '/subscription',
            element: <Upgrade isLogin={isLogin} setIsLogin={setIsLogin} />,
        },
    ]);

    return (
        <div className="bg-black min-h-screen">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
