import './styleOP.css'

export const PainelProducao = () => {
    return(
        <section>
            <div className="content">
                <div className="title_formulario">
                        <div className="title_formulario_h1">Painel Ordem de Produção</div>
                </div>
                <form class="painel_OP">
                    <div className="input_left">
                            <div className="title">Cliente:</div>
                            <div className="cliente">
                                <input type="text" name="input" id="email"
                                pattern=".+@globex\.com" size="30" placeholder="Digite nome do cliente" required />
                            </div>
                            <div className="title">Quantidade:</div>
                            <div className="quantidade">
                                <input type="number" name="input" id="quantidade" placeholder="Insira a quantidade" required />
                            </div>
                            <div className="title">Número da Ordem:</div>
                            <div className="N_Ordem">
                                <input type="text" name="input" id="ordem" placeholder="Digite o número da ordem" required />
                            </div>
                    </div>
                    <div className="input_right">
                        <div className="title">Produto:</div>
                        <div className="produto">
                            <input type="text" name="input" id="produto" placeholder="Digite nome do produto" required />
                        </div>
                        <div className="title">Pedido:</div>
                        <div className="pedido">
                            <input type="number" name="input" id="email" placeholder="Insira o número do pedido" required />
                        </div>
                        <div className="title">Data:</div>
                        <div className="data">
                            <input type="date" name="input" id="email" placeholder="Insira o número do pedido" required />
                        </div>
                    </div>
                </form>
                <div className="AreaButton">

                    <div class="button_left"> 
                        <a href="/">Salvar</a>
                    </div>

                    <div class="button-right"> 
                        <a href="login.html">Cancelar</a>
                    </div>
                </div>
            </div>
        </section>
    );
}