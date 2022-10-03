import RenderizaCards from "./RenderizaCards"
import styled from "styled-components";
import RodaPe from "./RodaPe"
import Topo from "./Topo"
import {useState} from "react"


export default function Conteudo(){
    const PERGUNTAS =
    [{
        id: 0,
        estado: "inicial",
        resultado:"",
        pergunta: "O que é JSX?",
        resposta: "Uma extensão de linguagem do JavaScript"
    },

    {
        id: 1,
        estado: "inicial",
        resultado:"",
        pergunta: "O React é __",
        resposta: "uma biblioteca JavaScript para construção de interfaces"
    },

    {
        id: 2,
        estado: "inicial",
        resultado:"",
        pergunta: "Componentes devem iniciar com",
        resposta: "letra maiúscula"
    },

    {
        id: 3,
        estado: "inicial",
        resultado:"",
        pergunta: "Podemos colocar __ dentro do JSX",
        resposta: "expressões"
    },
    {
        id: 4,
        estado: "inicial",
        resultado:"",
        pergunta: "O ReactDOM nos ajuda __",
        resposta: "interagindo com a DOM para colocar componentes"
    },
    {
        id: 5,
        estado: "inicial",
        resultado:"",
        pergunta: "Usamos o npm para __",
        resposta: "gerenciar os pacotes necessários e suas dependências"
    },
    {
        id: 6,
        estado: "inicial",
        resultado:"",
        pergunta: "Usamos props para __",
        resposta: "passar diferentes informações para componentes"
    },
    {
        id: 7,
        estado: "inicial",
        resultado:"",
        pergunta: "Usamos estado (state) para __",
        resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }
]
    
    
    const [cartas, setCartas] = useState(PERGUNTAS)
    
    return(
        
        <ConteudoTotal>
            <Topo/>
            <RenderizaCards cartas={cartas} setCartas={setCartas}/>
            <RodaPe cartas={cartas} setCartas={setCartas}/>
            
        </ConteudoTotal>
    )
}  
const ConteudoTotal= styled.div`
    width: 100vw;
    height: 100vh;
    background-color:#FB6B6B;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25vw; 

`