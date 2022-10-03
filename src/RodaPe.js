import styled from "styled-components";
import Botoes from "./Botoes"
import ContaCardsVirados from "./CardsVirados"
import {useState} from "react";

export default function RodaPe({cartas,setCartas}){
    const [contador,setContador]=useState(0);
    console.log(contador);
    return(
        <RodaPeDiv>
            <Botoes cartas={cartas} setCartas={setCartas} contador={contador}setContador={setContador}/>
            <ContaCardsVirados contador={contador} />
        </RodaPeDiv>
    )
}
const RodaPeDiv = styled.div`
height: 150px;
width: 100%;
background-color: white;
display:flex;
flex-direction: column;
align-items: center;
position:fixed;
bottom:0px;
left:0px;

`