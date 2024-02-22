import { Route, Routes } from "react-router-dom";
import ContaInfo from "./pages/ContaInfo";
import Home from "./pages/Home";
import Conta from "./pages/Conta";
import { useContext } from "react";
import { AppContext } from "./components/App.Context";
import UserInfo from "./pages/UserInfo";
import User from "./pages/User";

const MainRoutes = () => {

    const { isLoggedIn} = useContext(AppContext)


    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta/:id' element={isLoggedIn ? <Conta/> : <Home />} />
            <Route path='/info/:id' element={isLoggedIn ? <User/> : <Home />} />
            <Route path='/infoconta/' element={<ContaInfo />} />
            <Route path='/infouser/' element={<UserInfo />} />
        </Routes>
    )
}

export default MainRoutes;