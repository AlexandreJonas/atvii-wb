import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroProdutoServico from "./formularioCadastroProdutoServico";
import ListaCliente from "./listaCliente";
import ListaProdutoServico from "./listaProdutoServico";
import BtnCadastro from "./btnCadastro";
import { Tipo } from "../model/tipo";


type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="purple lighten-4" botoes={['Clientes', 'Produtos', 'Serviços']} />
        let estiloBotao = `btn waves-effect waves-light left purple lighten-4`
        let tipoCadastro
        switch (this.state.tela) {
            case 'Clientes':
                return (
                    <>
                        {barraNavegacao}
                        <ListaCliente tema="purple lighten-4" seletorView={this.selecionarView} />
                        <BtnCadastro tema="purple lighten-4" tipo={Tipo[this.state.tela]} seletorView={this.selecionarView} />
                    </>
                )

            case 'Produtos':
            case 'Serviços':
                return (
                    <>
                        {barraNavegacao}
                        <ListaProdutoServico tema="purple lighten-4" tipo={Tipo[this.state.tela]} seletorView={this.selecionarView} />
                        <BtnCadastro tema="purple lighten-4" tipo={Tipo[this.state.tela]} seletorView={this.selecionarView} />
                    </>
                )

            case 'CadastrosClientes':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroCliente tema="purple lighten-4" seletorView={this.selecionarView} />
                        <a> Produtos Associados</a>
                        <ListaProdutoServico tema="purple lighten-4" tipo={Tipo.Produtos} seletorView={this.selecionarView} />
                        <a> Serviços Associados</a>
                        <ListaProdutoServico tema="purple lighten-4" tipo={Tipo.Serviços} seletorView={this.selecionarView} />
                    </>
                )

            case 'CadastrosProdutos':
            case 'CadastrosServiços':
                tipoCadastro = (this.state.tela === 'CadastrosProdutos' ? Tipo.Produtos : Tipo.Serviços)
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroProdutoServico tema="purple lighten-4" tipo={tipoCadastro} seletorView={this.selecionarView} />
                    </>
                )

            case 'Associar':
                return (
                    <>
                        {barraNavegacao}
                        <a className=""> Clientes</a>
                        <ListaCliente tema="purple lighten-4" seletorView={this.selecionarView} />
                        <a> Produtos</a>
                        <ListaProdutoServico tema="purple lighten-4" tipo={Tipo.Produtos} seletorView={this.selecionarView} />
                        <a> Serviços</a>
                        <ListaProdutoServico tema="purple lighten-4" tipo={Tipo.Serviços} seletorView={this.selecionarView} />
                        <button className={estiloBotao} onClick={(e:any) => (this.selecionarView('CadastrosClientes',e))}>Associar
                            <i className="material-icons right">send </i>
                        </button>
                    </>
                )


        }
    }
}