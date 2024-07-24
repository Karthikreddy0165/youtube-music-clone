import Navbar from './Navbar'
import SideBar from './SideBar'
const Happy = ({isLogin, setIsLogin}) => {
    return(<>
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
        <SideBar isLogin = {isLogin} />
        <h1 className='ml-16'>Happy</h1>
        </>)
}
export default Happy