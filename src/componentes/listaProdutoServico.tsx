/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import ItemGrid from "./itemGrid";
import { Tipo } from "../model/tipo";



type props = {
    tema: string
    tipo: Tipo
    seletorView: Function
}

export default class ListaProdutoServico extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        let estiloBotao = `btn waves-effect waves-light col right ${this.props.tema}`
        // let nome = (this.props.tipo === 'Produtos' ? 'Produto ' : 'Serviço ')
        return (
            <div className="collection">
                {/* <a className="collection-item row">
                    {nome} 1
                    <button className={estiloBotao} type="submit" name="action">Associar
                        <i className="material-icons right">device_hub </i>
                    </button>
                </a> */}

                <ItemGrid tema={this.props.tema} nome=' 1' tipo={this.props.tipo} id='' seletorView = {this.props.seletorView}/>
                <ItemGrid tema={this.props.tema} nome=' 2' tipo={this.props.tipo} id='' seletorView = {this.props.seletorView}/>
                <ItemGrid tema={this.props.tema} nome=' 3' tipo={this.props.tipo} id='' seletorView = {this.props.seletorView}/>
                <ItemGrid tema={this.props.tema} nome=' 4' tipo={this.props.tipo} id='' seletorView = {this.props.seletorView}/>

            </div >
        )
    }
}