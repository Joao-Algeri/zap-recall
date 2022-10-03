//import styled from "styled-components";
import Botoes from "./Botoes"
import ContaCardsVirados from "./CardsVirados"
import {useState} from "react";

export default function RodaPe({cartas,setCartas}){
    const [contador,setContador]=useState(0);
    return(
        <div className="rodape">
            <Botoes cartas={cartas} setCartas={setCartas} contador={contador}setContador={setContador}/>
            <ContaCardsVirados contador={contador} />
        </div>
    )
}