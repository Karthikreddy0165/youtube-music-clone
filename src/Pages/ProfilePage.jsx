import Navbar from '../Components /Navbar'
import Sidebar from '../Components /SideBar'
export default function ProfilePage({isLogin, setIsLogin}){
    return (<>
        <Navbar  isLogin = {isLogin} setIsLogin = {setIsLogin}/>
        <Sidebar isLogin = {isLogin}/>
        </>)

}