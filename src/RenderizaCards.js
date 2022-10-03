import seta_play from "./img/seta_play.png"
import seta_virar from "./img/seta_virar.png"
import certo from "./img/icone_certo.png"
import quase from "./img/icone_quase.png"
import errado from "./img/icone_erro.png"
import styled from "styled-components";
export default function RenderizaCards({cartas,setCartas}) {
       
    
    
    return (
        <>
            {cartas.map((carta) => 
            <ImprimeInicial carta={carta} />
            )}

        </>
    )
    function ImprimeInicial({carta}){
              return (carta.estado === 'inicial' || carta.estado === 'final' ?

            <ImprimeInicialOuFinal carta={carta} setCartas={setCartas} cartas={cartas}/>
            :
            <ImprimeEnunciado carta={carta} setCartas={setCartas} cartas={cartas} />
        )

    }
    
    
}
function ImprimeInicialOuFinal({carta,setCartas,cartas}){

    function viraCarta(id) {
        let arrayEstadoDasCartas=[];
        cartas.map((carta)=>arrayEstadoDasCartas.push(carta.estado))
        
        const temCartaEnunciado=arrayEstadoDasCartas.includes("enunciado")
        const temCartaResposta=arrayEstadoDasCartas.includes("cartaResposta")
        if(!temCartaEnunciado&&!temCartaResposta){

        const novasCartas=[...cartas]
        novasCartas[id].estado="enunciado";
        setCartas(novasCartas)
        }
           
    }
    function IconeCheck() {
        return (

            carta.resultado === "certo"? <img className="icone"src={certo} alt="icone certo"/>
            :
            carta.resultado === "quase"? <img className="icone"src={quase} alt="icone quase"/>
            :
            carta.resultado === "errado"?<img className="icone"src={errado} alt="icone errado"/>
            :
            <></>
        )
    }
    return (
        carta.estado==='inicial' ?
       
            <div  className={`carta ${carta.estado} ${carta.resultado}`}>

                <div className="pergunta">{`Pergunta ${carta.id + 1}`}</div>
               <img className="icone"onClick={() => viraCarta(carta.id)} src={seta_play} alt=" icone play" />
            </div>
            
            :
            carta.estado==='final' ?
           
            <div  className={`carta ${carta.estado} ${carta.resultado}`}>

                <div className="pergunta">{`Pergunta ${carta.id + 1}`}</div>
                <IconeCheck/>
            </div>
           
            :<></>
    );
}
function ImprimeEnunciado({carta,setCartas,cartas}) {
    function mostrarResposta(id, estado) {
        if (estado === "enunciado") {

            const novasCartas = [...cartas]
            novasCartas[id].estado = "cartaResposta";
            setCartas(novasCartas)
        }
    }
    return (
        
        <div key={carta.enunciado} className={`carta ${carta.estado}`}>

            <div className={"texto"}>{carta.estado === 'enunciado' ? carta.pergunta : carta.resposta}</div>
            <div className={"imagem"}> <img onClick={() => mostrarResposta(carta.id, carta.estado)} src={seta_virar} alt="play" /></div>
        </div>
       
    )
}
