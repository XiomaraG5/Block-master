import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import { NavBarPrivate } from '../components/NavBarPrivate';
import Home from '../containers/Home';
import MasValoradas from '../containers/MasValoradas';
import MenosValoradas from '../containers/MenosValoradas';
import Mispeliculas from '../containers/Mispeliculas';

export const DashboardRoutes = () => {
    return ( 
        <>
        <NavBarPrivate />
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/mas" element={<MasValoradas />} />
            <Route path="/menos" element={<MenosValoradas />} />
            <Route path="/mis" element={<Mispeliculas />} />
            <Route path='*' element={<Navigate to="/home" />} />
        </Routes>
        </>
    )
}
