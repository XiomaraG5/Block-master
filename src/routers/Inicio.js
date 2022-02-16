import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import { NavBarPublic } from '../components/NavbarPublic';
import Login from '../containers/Login';
import Registro from '../containers/Registro';

export const Inicio = () => {
    return ( 
        <>
            <div>
                <NavBarPublic />
                <Routes>
                    <Route path="/singin" element={<Login />} />
                    <Route path="/registro" element={<Registro/>} />
                    <Route path='*' element={<Navigate to="/login/singin" />} />
                </Routes>
            </div>

        </>
    )
}
