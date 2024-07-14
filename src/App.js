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

function App() {
    const { isLogin, setIsLogin } = useContext(AudioContext);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home isLogin={isLogin} setIsLogin={setIsLogin} />,
        },
        {
            path: '/signin/',
            element: <SignIn setIsLogin={setIsLogin} />,
        },
        {
            path: '/signup/',
            element: <SignUp />,
        },
        {
            path: '/library',
            element: <Library isLogin={isLogin} setIsLogin={setIsLogin} />,
            children: [
                { path: 'songs', element: <Songs isLogin={isLogin} /> },
                {
                    path: 'albums',
                    element: <Albums isLogin={isLogin} setIsLogin={setIsLogin}/>,
                    children: [
                        { path: ':albumId', element: <AlbumDetails isLogin={isLogin} /> }
                    ]
                },
                { path: 'playlists', element: <Playlists /> },
                { path: 'artists', element: <Artists /> },
            ],
        },
        {
            path: '/subscription/',
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
