import './pedidos.css'

export const Pedidos = (props) => {
    
    return(
        <section>
            <table className="table table-action-p">
                    <thead>
                        <tr>
                            <th className="t-small-p"></th>
                            <th className="t-small-p">Código</th>
                            <th className="t-medium-p">Peso da Bobina</th>
                            <th>Unidade de Medida</th>
                            <th>Produto</th>
                            <th className="t-medium-p">State</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><label><input type="checkbox" onClick={ApontamentoEstoque} /></label></td>
                            <td>32</td>
                            <td>{valor}</td>
                            <td>KG</td>
                            <td>{produto}</td>
                            <td class="t-status-p t-active-p">Active</td>
                        </tr>
                        <tr>
                            <td><label><input type="checkbox" /></label></td>
                            <td>12</td>
                            <td>134,435</td>
                            <td>KG</td>
                            <td>Cart.-Depakote ER</td>
                            <td class="t-status-p t-inactive-p">Inactive</td>
                        </tr>
                        <tr>
                            <td><label><input type="checkbox" /></label></td>
                            <td>14</td>
                            <td>350,344</td>
                            <td>KG</td>
                            <td>Cart.- Iruxol</td>
                            <td class="t-status-p t-draft-p">Draft</td>
                        </tr>
                        <tr>
                            <td><label><input type="checkbox" /></label></td>
                            <td>25</td>
                            <td>112,53</td>
                            <td>Kg</td>
                            <td>Cat.-Depakene 10MG</td>
                            <td className="t-status-p t-scheduled-p">Scheduled</td>
                        </tr>
                    </tbody>
                </table>
        </section>
    );
}