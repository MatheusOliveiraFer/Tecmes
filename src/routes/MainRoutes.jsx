import { Routes, Route } from 'react-router-dom';
import { PainelProducao } from '../pages/P.Producao/index';

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<PainelProducao />} />
        </Routes>
    );
}