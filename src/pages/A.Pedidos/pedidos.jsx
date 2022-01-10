import './pedidos.css'

export const Pedidos = (props) => {

    return (
        <section>
            <div className="content_P">
                <div className="title_formulario_P">
                    <div className="title_formulario_h1_P">Painel de Pedidos</div>
                </div>
                <form class="painel_P">
                    <div className="input_left_P">
                    <br />
                        <div className="title_P">Quantidade Faturada</div>
                        <div className="N_Ordem_P">
                            <input type="number" name="input" autoFocus="true" id="ordem" placeholder="Digite o número da ordem" required />
                        </div>
                    </div>
                    <div className="input_right_P">
                    <br />
                    <div className="title_P">Data:</div>
                        <div className="N_Ordem_P">
                            <input type="date" name="input" id="ordem" placeholder="Digite o número da ordem" required />
                        </div>
                    </div>
                </form>
                <div className="tableF">
                <table className="table_P table-action_P">
                    <thead>
                        <tr>
                            <th className="t-small_P"></th>
                            <th className="t-small_P">Pedido</th>
                            <th className="t-medium_P">Quantidade Produzida</th>
                            <th>Unidade de Medida</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><label><input type="checkbox" /></label></td>
                            <td>32</td>
                            <td>100,98</td>
                            <td>KG</td>
                        </tr>
                        <tr>
                            <td><label><input type="checkbox" /></label></td>
                            <td>12</td>
                            <td>134,435</td>
                            <td>KG</td>
                        </tr>
                        <tr>
                            <td><label><input type="checkbox" /></label></td>
                            <td>14</td>
                            <td>350,344</td>
                            <td>KG</td>
                        </tr>
                        <tr>
                            <td><label><input type="checkbox" /></label></td>
                            <td>25</td>
                            <td>112,53</td>
                            <td>Kg</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div className="AreaButton_P">
                    <div className="button_left_P">
                        <a href="#abrirModal">Faturar</a>
                    </div>
                    <div className="button-right_P">
                        <a href="login.html">Fechar Sistema</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
