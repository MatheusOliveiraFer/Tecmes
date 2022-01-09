import { Routes, Route } from 'react-router-dom';
import { PainelProducao } from '../pages/OP/indexOP';
import { AProducao } from '../pages/A.Producao/AP';
import { Pedidos } from '../pages/A.Pedidos/pedidos';

export const MainRoutes = () => {
    const Pedido = 1;
    const Bobina = 100;
    return (
        <Routes>
            <Route path="/" element={<PainelProducao />} />
            <Route path="/AProducao" element={<AProducao bobina={Bobina}/>} />
            <Route path="/Pedidos" element={<Pedidos />} />
            
        </Routes>
    );
}