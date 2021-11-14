import useAppData from "../../data/Hook/useAppData";
import AvatarUsuario from "../AvatarUsuario";
import BotoaAlternarTema from "./BotaoAlternarTema";
import Titulo from "./Titulo";

interface ICabecalhoProps{ 
    titulo: string;
    subtitulo: string;
}

function Cabecalho (props: ICabecalhoProps) {
   
        const {tema, alternarTema} = useAppData()
    
   return (
        <div className={` flex`}>
           <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
           <div className={` flex flex-grow justify-end items-center`}>
                <BotoaAlternarTema tema={tema} alternarTema={alternarTema}/>
                <AvatarUsuario className="ml-3"/>
           </div>
        </div>
    )
}

export default Cabecalho;