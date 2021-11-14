//import Head from 'next/head'
import Image from 'next/image';
import router from 'next/router';
import useAuth from '../../data/Hook/useAuth';
import loading from '../../../public/images/loading.gif';


function ForcarAutenticacao (props) {
    
    const {usuario, carregando} = useAuth()

    function renderizarConteudo () {
        return(
            <>
                 {/* <Head>
                    <script 
                        dangerouslySetInnerHTML={{
                            __html:`
                            if(!document.cookie?.includes("Admin-template-Cookie-RD-auth"){
                                window.location.href= "/autenticacao")
                            }
                            `
                        }}
                    />
                </Head>  */}
                {props.children}   
            </>
        )
    }

    function renderizarCarregando () {
        return(
            <div className={`
               flex items-center justify-center h-screen 
            `}>
              <Image src={loading} />
            </div>
        )
    }

    if(!carregando && usuario?.email) {
        return renderizarConteudo()
    } else if (carregando) {
        return renderizarCarregando()
    } else {
        router.push('/autenticacao')
        return null;
    }
}

export default ForcarAutenticacao;