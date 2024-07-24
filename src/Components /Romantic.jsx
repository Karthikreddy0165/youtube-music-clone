import Navbar from './Navbar'
import SideBar from './SideBar'
const Romantic = ({isLogin, setIsLogin}) => {
    return(<>
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
        <SideBar isLogin = {isLogin} />
        <h1 className='ml-16'>Romantic</h1>
    </>)
}
export default Romantic 