import { createContext, useEffect, useState } from "react";


//type Tema = 'dark' | ''

interface IAppContextProps {

    tema?: string;
    alternarTema?: () => void;
}

const AppContext = createContext<IAppContextProps>({})

 export function AppProvider(props){ //este e ou Provedor
  //---Questaão de alterar tema --------------------------------  
    const [tema, setTema] = useState('dark')  
    
    function alternarTema(){ //se tema === a bazio'' ? e apara alterar paar 'dark' : caso contrario  vai setar o Tema para vazio'' 
        const novoTema = (tema === '' ? 'dark' : '')
        setTema(novoTema)
        localStorage.setItem('tema', novoTema)
    } 
//---------------------Alter tema---------------------------------
      useEffect(() => {
        const temaSalvo = localStorage.getItem('tema')
        setTema(temaSalvo )
      }, [])
 //----------------------------- ----------- 
    return (
        <AppContext.Provider value={{
            tema,
            alternarTema            
        }}>
            {props.children}
        </AppContext.Provider>
    )
 }

export default AppContext
