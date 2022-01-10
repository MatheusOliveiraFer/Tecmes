import './styleAP.css'

import React from 'react';
import { useState } from 'react';
import { PainelProducao } from '../OP/indexOP';


export const AProducao = (props) => {
    const [valor, setValor] = useState(385);
    const [produto, setProduto] = useState('');

    const [NumeroOrdem, setNumeroOrdem] = useState();

    const HandleNumeroOrdem = (e) => {
        setNumeroOrdem(e.target.value);
    }
    const ApontamentoEstoque = () => {
        setValor(valor - NumeroOrdem);
    }

    const HandleProdutoNome = (e) => {
        setProduto(e.target.value);
    }

    return (
        <section>
            <div className="content_AP">
                <div className="title_formulario_AP">
                    <div className="title_formulario_h1_AP">Apontamento de Produção</div>
                </div>
                <form class="painel_OP_AP">
                    <div className="input_left_AP">
                        <div className="title_AP">Número da Ordem:</div>
                        <div className="N_Ordem_AP">
                            <input type="number"  autoFocus="true"  name="input" id="ordem" placeholder="Digite o número da ordem" required />
                        </div>
                        <div className="title_AP">Cliente:</div>
                        <div className="cliente_AP">
                            <input type="text" name="input" id="email"
                                pattern=".+@globex\.com" size="30" placeholder="Digite nome do cliente" required />
                        </div>
                        <div className="title_AP">Quantidade:</div>
                        <div className="quantidade_AP">
                            <input type="number" name="input" id="quantidade" placeholder="Insira a quantidade" required />
                        </div>
                    </div>
                    <div className="input_right_AP">
                        <div className="title_AP">Produto:</div>
                        <div className="produto_AP">
                            <input type="text" name="input" id="produto" value={produto} onChange={HandleProdutoNome} placeholder="Digite nome do produto" required />
                        </div>
                        <div className="title_AP">Peso:</div>
                        <div className="pedido_AP">
                            <input type="number" name="input" id="peso" value={NumeroOrdem} onChange={HandleNumeroOrdem} placeholder="Insira a quantidade" required />
                        </div>
                        <div className="title_AP">Data:</div>
                        <div className="data_AP">
                            <input type="date" name="input" id="email" placeholder="Insira o número do pedido" required />
                        </div>
                    </div>
                </form>
                <div className="AreaButton_AP">
                    <div className="button_left_AP">
                        <a href="#abrirModal">Pesar</a>
                    </div>
                    <div className="button-right_AP">
                        <a href="login.html">Fechar Sistema</a>
                    </div>
                </div>
            </div>
            <div id="abrirModal" className="modal">
                <a href="#fechar" title="Fechar" class="fechar">x</a>
                <table className="table table-action">
                    <thead>
                        <tr>
                            <th className="t-small"></th>
                            <th className="t-small">Código</th>
                            <th className="t-medium">Peso da Bobina</th>
                            <th>Unidade de Medida</th>
                            <th>Produto</th>
                            <th className="t-medium">State</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><label><input type="checkbox" onClick={ApontamentoEstoque} /></label></td>
                            <td>32</td>
                            <td>{valor}</td>
                            <td>KG</td>
                            <td>{produto}</td>
                            <td class="t-status t-active">Active</td>
                        </tr>
                        <tr>
                            <td><label><input type="checkbox" /></label></td>
                            <td>12</td>
                            <td>134,435</td>
                            <td>KG</td>
                            <td>Cart.-Depakote ER</td>
                            <td class="t-status t-inactive">Inactive</td>
                        </tr>
                        <tr>
                            <td><label><input type="checkbox" /></label></td>
                            <td>14</td>
                            <td>350,344</td>
                            <td>KG</td>
                            <td>Cart.- Iruxol</td>
                            <td class="t-status t-draft">Draft</td>
                        </tr>
                        <tr>
                            <td><label><input type="checkbox" /></label></td>
                            <td>25</td>
                            <td>112,53</td>
                            <td>Kg</td>
                            <td>Cat.-Depakene 10MG</td>
                            <td className="t-status t-scheduled">Scheduled</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}