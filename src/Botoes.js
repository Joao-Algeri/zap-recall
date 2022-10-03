//import styled from "styled-components";
export default function Botoes({cartas,setCartas,contador,setContador}){
    function Responde(resultado){
      
        
        cartas.map((carta)=>carta.estado==="cartaResposta" ? atualizaCartas(carta,"final",resultado):<></>);
        //cartas.map((carta)=>carta.estado==="final" && carta.resultado===""? carta.resultado = resultado:<></>)
        cartas.map((carta)=>carta.estado==="final"&& contador<8? setContador(contador+1):<></>)
        // setCartas(cartas);
        
    }
    function atualizaCartas(carta,estado,resultado){
        const novasCartas=[...cartas];
             novasCartas[carta.id].estado=estado;
      novasCartas[carta.id].resultado=resultado;
      setCartas(novasCartas);
        
    }
    return(
        <div className="botoes">
        <button onClick={()=>Responde("errado")} className=" botao vermelho">Não lembrei</button>
        <button onClick={()=>Responde("quase")} className="botao laranja">Quase não lembrei</button>
        <button onClick={()=>Responde("certo")} className="botao verde">Zap</button>
        </div>
    )
}
