import Navbar from './Navbar'
import SideBar from './SideBar'
const Sad = ({isLogin, setIsLogin}) => {
    return(<>
        <h1 className='ml-16'>Sad</h1>
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
        <SideBar isLogin = {isLogin} />
    </>)
}
export default Sad