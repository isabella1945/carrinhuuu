import { Container } from './styled'

import Produto from '../produto'
import { useState } from 'react'


export default function Home() {
  const [produtos, setProdutos] = useState([]);


  function listar() {
    const r = [
      {
        id: 10001,
        imagem: "https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2018/07/sonho_recheado_creme.jpg",
        titulo: "Sonho",
        preco: "R$ 3,50",
        descricao: "O melhor sonho que você já provou na sua vida",
        especificacoes: "feito com amor"
      },
      {
        id: 10002,
        imagem: "https://static.clubedaanamariabraga.com.br/wp-content/uploads/2020/11/rocambole-de-chocolate-pratico.jpg",
        titulo: "Rocambole",
        preco: "R$ 4,00",
        descricao: "É muito gostoso para comer como sobremesa",
        especificacoes: "feito com amor"
      },
      {
        id: 10003,
        imagem: "https://www.receitasedicasdochef.com.br/wp-content/uploads/2020/12/Como-fazer-Pao-Doce-Caseiro-com-Creme.jpg",
        titulo: "Pão doce",
        preco: "R$ 2,50",
        descricao: "Ótimo para tomar um bom café da manhã",
        especificacoes: "feito com amor" 
      },
      {
        id: 10004,
        imagem: "https://vovopalmirinha.com.br/wp-content/uploads/2016/05/bolo-chocolate-simples-1.jpg",
        titulo: "Bolo de chocolte",
        preco: "R$ 10,00",
        descricao: "Esse bolo é muito gostoso, você deve comprá-lo porque sua vida será feliz!!!",
        especificacoes: "feito com amor"
      },
      {
        id: 10005,
        imagem: "https://a-static.mlcdn.com.br/618x463/agua-mineral-bonafont-sem-gas-500ml-danone/lepok1/08339/9862464d14357850ee9958409b31395d.jpg",
        titulo: "Àgua",
        preco: "R$ 2,00",
        descricao: "A melhor bebida para todos os momentos",
        especificacoes: "água é vida"
      }
    ]

    setProdutos(r);
  }



  return (
    <Container>

      <h1> Sejam bem-vindos! </h1>
      <br />
      
      <button onClick={listar}> Listar </button>
      <br />

      <div className="lista-produtos">

  
          {produtos.map(item => 
              <Produto 
               key={item.id}
               info={item} />
          )}


      
        

      </div>

     


    </Container>
  )

}