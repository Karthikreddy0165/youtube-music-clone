import Navbar from './Navbar'
import SideBar from './SideBar'
const Angry = ({isLogin,setIsLogin}) => {
    return(<>
        <h1 className='text-white'>Angry</h1>
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin}/>
        <SideBar isLogin={isLogin}/>
        {console.log('I am angry')}

    </>)
}
export default Angry