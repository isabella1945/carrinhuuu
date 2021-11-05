

import { BrowserRouter, Switch, Route } from "react-router-dom";


import App from './home';

import DetalheProduto from "./detalheProduto";

import Carrinho from "./carrinho"; 





export default function Routes (){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/detalhe" component={DetalheProduto} />
                <Route path="/carrinho" component={Carrinho} />
 
               
            </Switch>
        </BrowserRouter>
    )
}