import Navbar from './Navbar'
import SideBar from './SideBar'
const Exicted = ({isLogin, setIsLogin}) => {
    return(<>
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin}/>
        <SideBar isLogin={isLogin}/>
        <h1 className='ml-16'>Exicted</h1>
    </>)
}
export default Exicted