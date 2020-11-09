import React, { useContext } from "react";
import { GlobalContext } from "../globalcontext/GlobalContext.js";




const GitHelperInfo = () => {

    const [globalContext, setGlobalContext] = useContext(GlobalContext);

    const backToLandingPage = () => setGlobalContext((prevState  => ({ ...prevState,   render: 'landingPage',})));

    const infoEng = () => {
        return (
            <div className='col-sm-5 data-interval="false";' >
            <h2>Git terminal command tutor</h2><br/>
            <h3>Instructions:</h3><br/>
            
            <p>- Select the type of operation to perform.</p>
            <p>- Select option from drop down menu.</p>
            <p>- Insert information if required.</p>
            <p>- Copy/paste into terminal.</p>
            
            <input
                  type='button'
                  value= 'Back to landingpage'
                  onMouseDown={backToLandingPage}     
              />
        </div>
        )
    }

    const infoPort = () => {
        return (
            <div className='col-sm-5 data-interval="false" ' >
            <h2>Tutor de comandos git para terminal</h2><br/>
            <h3>Instruções:</h3><br/>

            <p>- Seleccione tipo de operação a executar.</p>
            <p>- Seleccione opção do menu.</p>
            <p>- Introduza informação se necessário.</p>
            <p>- Copie resultado para terminal.</p>
            <input
                  type='button'
                  value= 'Voltar para a Pagina Inicial'
                  onMouseDown={backToLandingPage}     
              />
        </div>
        )
    }

    const chooseInfoToRender = () => {
        if(globalContext.lang ==='port'){return(infoPort())}
        if(globalContext.lang==='eng'){return(infoEng())}   
    }

    return(
        chooseInfoToRender()
    )
}

export default GitHelperInfo;