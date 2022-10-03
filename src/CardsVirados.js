import styled from "styled-components";
export default function ContaCardsVirados(contador){
   
    
    
    return(
        <Contador>{`${contador.contador}`}/8 Concluídos</Contador>
    )
}
const Contador = styled.div`

width: 100%;
height: 50%;
font-family: "Recursive";
font-weight: 400;
color:#333333;
font-size: 18;
display:flex;
justify-content: center;
align-items: center;


`