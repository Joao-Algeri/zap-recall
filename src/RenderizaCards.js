import seta_play from "./img/seta_play.png"
import seta_virar from "./img/seta_virar.png"
import certo from "./img/icone_certo.png"
import quase from "./img/icone_quase.png"
import errado from "./img/icone_erro.png"
import {useState} from "react";
export default function RenderizaCards({cartas,setCartas}) {
       
    
    
    return (
        <>
            {cartas.map((carta) => 
            <ImprimeInicial carta={carta} />
            )}

        </>
    )
    function ImprimeInicial({carta}){
        // const novaSeta=seta_play;
        //const[seta,setSeta]=useState(seta_play) 
        // if(carta.resultado==="certo"){novaSeta=certo;}
        // else if(carta.resultado==="quase"){novaSeta=quase;}
        // else if(carta.resultado==="errado"){novaSeta=errado;}
        //setSeta(certo)

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

            carta.resultado === "certo"? <img src={certo}/>
            :
            carta.resultado === "quase"? <img src={quase}/>
            :
            carta.resultado === "errado"?<img src={errado}/>
            :
            <></>
        )
    }
    return (
        carta.estado==='inicial' ?
            <div key={carta.id} className={`carta ${carta.estado} ${carta.resultado}`}>

                <div>{`Pergunta${carta.id + 1}`}</div>
                <img onClick={() => viraCarta(carta.id)} src={seta_play} alt="play" />
            </div>
            :
            carta.estado==='final' ?
            <div key={carta.id} className={`carta ${carta.estado} ${carta.resultado}`}>

                <div>{`Pergunta${carta.id + 1}`}</div>
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

            <div>{carta.estado === 'enunciado' ? carta.pergunta : carta.resposta}</div>
            <img onClick={() => mostrarResposta(carta.id, carta.estado)} src={seta_virar} alt="play" />
        </div>
    )
}
