import styled from "styled-components";
export default function Botoes({cartas,setCartas,contador,setContador}){
    function Responde(resultado){
      
        
        cartas.map((carta)=>carta.estado==="cartaResposta" ? atualizaCartas(carta,"final",resultado):<></>);
        cartas.map((carta)=>carta.estado==="final"&& contador<8? setContador(contador+1):<></>)
        
        
    }
    function atualizaCartas(carta,estado,resultado){
        const novasCartas=[...cartas];
             novasCartas[carta.id].estado=estado;
      novasCartas[carta.id].resultado=resultado;
      setCartas(novasCartas);
        
    }
    return(
        <BotoesDiv>
        <button onClick={()=>Responde("errado")} className=" botao vermelho">Não lembrei</button>
        <button onClick={()=>Responde("quase")} className="botao laranja">Quase não lembrei</button>
        <button onClick={()=>Responde("certo")} className="botao verde">Zap</button>
        </BotoesDiv>
    )
}
const BotoesDiv = styled.div`
    width: 100%;
    height: 50%;
    display:flex;
    align-items: center;
    justify-content: center;
    button{
        width: 25%;
        height: 75%;
        border: none;
        font-family: "Recursive";
        font-weight: 400;
        margin-right:2%;
        border-radius: 5%;
        color:white;
        font-size: 12px;
    }
    .vermelho{
        background-color: #FF3030;
       
    }
    .laranja{
        background-color:#FF922E;
        
    }
    .verde{
        background-color: #2FBE34;
    }
`