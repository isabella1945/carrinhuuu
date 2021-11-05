import Cookie from 'js-cookie'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container } from './styled'
import ReactImageZoom from 'react-image-zoom'


export default function DetalheProduto(props) {
  const [produtos, setProdutos] = useState(props.location.state);  
  

  const navigation = useHistory();
  


  function comprar() {
   
    let carrinho = Cookie.get('carrinho');
    carrinho = carrinho !== undefined 
                ? JSON.parse(carrinho) 
                : [];

    

    if (carrinho.some(item => item.id === produtos.id) === false)
        carrinho.push({...produtos, qtd: 1 });
 
    

    Cookie.set('carrinhuuu', JSON.stringify(carrinho));
    
    
    
    navigation.push('/carrinho');
  }

  
  return (
    <Container>

        <div>
          <Link to="/"> Voltar </Link>
          <h1> Detalhes do Produto </h1>
          <br /> <br />

          <div> 
            
            <ReactImageZoom  
              width="280"  
              zoomWidth="300" 
              img={produtos.imagem} />

          </div>
          <div> <h1> {produtos.titulo} </h1> </div>
          <div> <h3> {produtos.preco} </h3> </div>
        </div>

        <div>
          <h2> Descrição </h2>
          <div> {produtos.descricao} </div>

          <h2> Especificações </h2>
          <div> {produtos.especificacoes} </div>

          <div> <button onClick={comprar}> Comprar </button> </div>
          
          <div> 
            
            
          </div>
        </div>

        

    </Container>
  )



  
}