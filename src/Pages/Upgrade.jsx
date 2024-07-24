import SideBar from '../Components /SideBar'
import Navbar from '../Components /Navbar'
export default function Upgrade({isLogin,setIsLogin}){
    return (<>
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin} isSearchNotVisible = {true} />
        <SideBar isLogin = {isLogin} />
    </>)
}