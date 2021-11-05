import Cookie from 'js-cookie'
import { useState } from 'react';  

import Contador from '../contador'
import { Conteiner, RemoverIcon } from './styled';


export default function CarrinhoItem (props){
    const [produtos, setProdutos ] = useState(props.info); 

    function alterarQtd(qtd){
        setProdutos({...produtos, qtd}); 
        props.onUpdate(produtos.id, qtd)
    }
    
    function remover(){
        props.onRemove(produtos.id); 
    }

    return(
        <Conteiner>
            <div>
                <img className = "capa" src = {produtos.imagem} alt = ""/>
                <Contador onChange = {alterarQtd} value= {produtos.qtd}/>
             </div>



             <div className = "titulo">
                {produtos.titulo}   
            </div>



             <div className = "preco">
                 <span> Preço unitário </span> <br/>
                 {produtos.preco}
             </div>



             <div className = "qtd">
                 <span> Qtd </span> <br/>
                 {produtos.preco}
             </div>


             <div className= "remover"> <RemoverIcon onClick = {remover}/> </div>



        </Conteiner>
    )
}
