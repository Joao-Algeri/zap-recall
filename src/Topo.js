 import styled from "styled-components";
import Zap from "./img/logo.png"
export default function Topo(){
    return(
       <Logo>
       
            <img src={Zap} alt="imagem zap"/>
            <div>ZapRecall</div>
        </Logo>
    )
} 
 const Logo = styled.div`
 display:flex;
 font-size: 36px;
 font-family: 'Righteous';
 font-weight: 400;
 color:white;
 align-items: center;
 margin-bottom:60px;
 margin-top:48px;
 img{
    margin-right: 15px;
    width: 42px;
    height: 60px;
}
`;