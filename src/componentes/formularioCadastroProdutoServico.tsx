import { Component } from "react";
import { Tipo } from "../model/tipo";

type props = {
    tema: string
    tipo:Tipo
    seletorView: Function
}

export default class FormularioCadastroProdutoServico extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light col ${this.props.tema}`
        let tela:string =  Tipo[this.props.tipo]
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="price" type="text" className="validate" />
                            <label htmlFor="price">Preço</label>
                        </div>
                    </div>
                    <div className="">
                        <div className="row">
                            <button className={estiloBotao} onClick={(e:any) => this.props.seletorView(tela, e)}>Salvar
                                <i className="material-icons right">send</i>
                            </button>

                            <a className="col s1"> </a>

                            <button className={estiloBotao} >Deletar
                                <i className="material-icons right">clear</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}