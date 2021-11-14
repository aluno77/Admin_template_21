
interface IConteudoProps { 
   children?: any;
    
}

function Conteudo (props: IConteudoProps) {
    return (
        <div className={`
            flex flex-col mt-7
            dark:text-gray-200
        `}>
            {props.children}
        </div>
    )
}

export default Conteudo;