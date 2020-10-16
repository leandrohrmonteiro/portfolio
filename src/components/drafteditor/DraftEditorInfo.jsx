import React, { useContext } from "react";
import { GlobalContext } from "../globalcontext/GlobalContext.js";

import '../drafteditor/DraftEditorInfo.scss'


const MyEditorInfo = () => {

    const [globalContext, setGlobalContext] = useContext(GlobalContext);

    const backToLandingPage = () => setGlobalContext((prevState  => ({ ...prevState,   render: 'landingPage',})));

    const editorInfoEng = () => {
        return (
            <div div className='col-sm-5 data-interval="false";' >
            <h3>Instructions:</h3><br/>
            
            <p>- Click on 'Click here to start writing...' to activate editor's input field.</p>
            <p>- The top button row hosts block styles, which can only be used one at a time.</p>
            <p>- The styles in the second row of buttons can all be used in the same text selection.</p>
            <p>- The bottom window will show the markdown equivalent to the stylized text of the top window.</p>
            <p>- Copy/Paste operations are supported in both windows</p>
            <p>- Sessions with markdown coding can be saved in txt files with the SAVE button.</p>
            <input
                  type='button'
                  value= 'Back to landingpage'
                  onMouseDown={backToLandingPage}     
              />
        </div>
        )
    }

    const editorInfoPort = () => {
        return (
            <div div className='col-sm-5 data-interval="false";' >
            <h3>Instruções:</h3><br/>

            <p>- Clicar em 'Click here to start writing...' para activar o input do editor.</p>
            <p>- A linha de botões superior corresponde a estilos de linha e só podem ser usados á vez.</p>
            <p>- A linha de botões seguinte permite a utilização de vários estilos na mesma selecção de texto.</p>
            <p>- A janela inferior corresponde ao texto estilizado da janela superior, mas com codificação markdown.</p>
            <p>- É possível executar operações de copy/paste a partir de ambas janelas.</p>
            <p>- É possível salvar a sessão com a codificação markdown em ficheiro de extensão txt com o botão SAVE.</p>
            <input
                  type='button'
                  value= 'Voltar para a Pagina Inicial'
                  onMouseDown={backToLandingPage}     
              />
        </div>
        )
    }

    const chooseDraftEditorInfo = () => {
        if(globalContext.lang ==='port'){return(editorInfoPort())}
        if(globalContext.lang==='eng'){return(editorInfoEng())}   
    }

    return(
        chooseDraftEditorInfo()
    )
}

export default MyEditorInfo;