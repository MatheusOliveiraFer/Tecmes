import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';


export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<Login />} />
        </Routes>
    );
}