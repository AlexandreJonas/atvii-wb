/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import ItemGrid from "./itemGrid";
import { Tipo } from "../model/tipo";


type props = {
    tema: string
    seletorView: Function
}

export default class ListaCliente extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            <div className="collection">

                <ItemGrid tema={this.props.tema} nome=' 1' tipo={Tipo.Clientes} id='' seletorView = {this.props.seletorView}/>
                <ItemGrid tema={this.props.tema} nome=' 2' tipo={Tipo.Clientes} id='' seletorView = {this.props.seletorView}/>
                <ItemGrid tema={this.props.tema} nome=' 3' tipo={Tipo.Clientes} id='' seletorView = {this.props.seletorView}/>
                <ItemGrid tema={this.props.tema} nome=' 4' tipo={Tipo.Clientes} id='' seletorView = {this.props.seletorView}/>
            </div>
        )
    }
}