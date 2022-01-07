import { Routes, Route } from 'react-router-dom';
import { PainelProducao } from '../pages/OP/index';
import { AProducao } from '../pages/A.Producao';

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PainelProducao />} />
            <Route path="/AProducao" element={<AProducao />} />
        </Routes>
    );
}