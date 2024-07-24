import Navbar from './Navbar'
import SideBar from './SideBar'
const Mood = ({isLogin, setIsLogin}) => {
    return(<>
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
        <SideBar isLogin = {isLogin} />
    </>)
}
export default Mood