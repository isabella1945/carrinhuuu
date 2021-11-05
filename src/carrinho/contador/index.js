import { Container,  } from '../contador/styled';
import { useEffect, useState } from 'react'


export default function Contador(props) {
    const [qtd, setQtd] = useState(props.value);
  
  
    function incrementar() {
      if (qtd >= 10)
        return;
      setQtd(qtd+1)
    }
  
    function decrementar() {
      if (qtd === 0) 
        return;
      setQtd(qtd-1)
    }
  
  
    useEffect(() => {
      
      props.onChange(qtd);
     
    }, [qtd])
  
  
  
    return (
      <Container>
        <div className="menos" onClick={decrementar}>
          -
        </div>
  
        <div className="quantidade">
          {qtd}
        </div>
  
        <div className="mais" onClick={incrementar}>
          +
        </div>
      </Container>
    )
  }