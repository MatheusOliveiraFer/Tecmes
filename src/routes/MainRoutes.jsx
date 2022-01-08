import { Routes, Route } from 'react-router-dom';
import { PainelProducao } from '../pages/OP/indexOP';
import { AProducao } from '../pages/A.Producao/AP';

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PainelProducao />} />
            <Route path="/AProducao" element={<AProducao />} />
        </Routes>
    );
}