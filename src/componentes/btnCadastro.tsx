import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import { Tipo } from "../model/tipo";

type props = {
    tema: string
    tipo: Tipo
    seletorView: Function
}

export default class BtnCadastro extends Component<props> {
    render() {
        let btnEstilo = `btn-floating btn-large waves-effect waves-light right ${this.props.tema}`
        let tela:string =  Tipo[this.props.tipo]
        return (
            <>
                <a className= {btnEstilo}  onClick={(e:any) => this.props.seletorView('Cadastros' + tela, e)}>
                    <i className="material-icons">add</i>
                </a>
            </>
        )
    }
}