import React, { useContext }from 'react';
import { GlobalContext } from '../globalcontext/GlobalContext.js';

import '../caroussel/Caroussel.scss';
import ProjectOneScreen from '../../assets/project screenshots/movieDatabaseSearch.png'
import ProjectTwoScreen from '../../assets/project screenshots/reactPortfolio.png'
import ProjectThreeScreen from '../../assets/project screenshots/markdownEditor.png'
import ProjectFourScreen from '../../assets/project screenshots/gitHelper.png'
import FileCode from '../../assets/icons feather/file-plus.svg'

function Caroussel() {

const [globalContext, setGlobalContext] = useContext(GlobalContext);
const sendToEditorProject = () => setGlobalContext((prevState  => ({ ...prevState,   render: 'projectDraftEditor',})));
const sendToGitTerminalHelper = () => setGlobalContext((prevState  => ({ ...prevState,   render: 'projectGitTerminalHelper',})));

const synopsis = ({
    firstSlidePortuguese: (
        <div className='synopsis'>
            <h3>Motor de Busca (Aplicação de Página Única)</h3> 
            <p> Esta aplicação faz uso da Api [OMDB]  <a href='http://www.omdbapi.com/'>http://www.omdbapi.com/</a>
                para devolver listas de filmes e informação detalhada de cada filme.</p>

            <h3>Características:</h3>
            
            <ul>
                <li>Campo de Busca</li> 
                <li>Mudança de página por injecção de conteúdo</li>
                <li>Injecção assíncrona de conteúdo</li>
                <li>Arquitectura modular MVC </li>
            </ul>
            
            <h3>Tecnologia usada:</h3>
            <ul>
                <li>Javascript ES6</li> 
                <li>HTML 5</li>
                <li>CSS 3</li>
            </ul>
            <h3>Ver código: </h3>
            <a  href='https://github.com/leandrohrmonteiro/showCase/tree/master/MovieDatabase'>
                <img src={FileCode} alt="see code" className='code'/>
            </a>
        </div>
        ),
    firstSlideEnglish: (
        <div className='synopsis'>
            <h3>Movie Search Engine (Single Page Application)</h3> 
            <p>This SPA makes use of the [OMDB api] <a href='http://www.omdbapi.com/'>http://www.omdbapi.com/</a>
                to return movie lists and individual movie info.
            </p>
             <h3>Features:</h3>
            
                <ul>
                    <li>Search form</li> 
                    <li>Hash based non reload view change</li>
                    <li>Asynchronous view content injection</li>
                    <li>Module MVC architecture </li>
                </ul>
            
            <h3>Technology used:</h3>
            <ul>
                <li>Javascript ES6</li> 
                <li>HTML 5</li>
                <li>CSS 3</li>
            </ul>
            <h3>See code: </h3>
            <a  href='https://github.com/leandrohrmonteiro/showCase/tree/master/MovieDatabase'>
                <img src={FileCode} alt="see code" className='code'/>
            </a>
        </div>
        ),
        secondSlidePortuguese: (
            <div className='synopsis'>
                <h3>Página Web (com React Hooks)</h3> 
                <p> Esta página faz uso da framework React para dividir o conteúdo do UI em vários componentes 
                que podem ser editados, acrescidos ou retirados sem perturbar o comportamento regular da página.</p>
    
                <h3>Características:</h3>
                
                <ul>
                    <li>Arquitectura Modular</li> 
                    <li>Componentes com acesso ao Contexto Global</li>
                    <li>Encapsulamento e divisão de responsabilidades</li>
                </ul>
                
                <h3>Tecnologia usada:</h3>
                <ul>
                    <li>Javascript ES6</li> 
                    <li>HTML 5</li>
                    <li>.jsx</li>
                    <li>CSS 3</li>
                    <li>Sass</li>
                    <li>Bootstrap</li>
                </ul>
                <h3>Ver código: </h3>
                <a  href='https://github.com/leandrohrmonteiro/portfolio'>
                    <img src={FileCode} alt="see code" className='code'/>
                </a>
            </div>
            ),
        secondSlideEnglish: (
            <div className='synopsis'>
                <h3>Webpage (with React Hooks)</h3> 
                <p> 
                This webpage makes use of the React framework to separate the UI in several editable components,
                that can be added or subtracted without disturbing the normal behaviour of the page.
                </p>
                 <h3>Features:</h3>
                
                    <ul>
                        <li>Modular Architecture</li> 
                        <li>Components with access to the Global Context</li>
                        <li>Encapsulation and division of responsibilities</li>
                    </ul>
                
                <h3>Technology used:</h3>
                <ul>
                    <li>Javascript ES6</li> 
                    <li>HTML 5</li>
                    <li>.jsx</li>
                    <li>CSS 3</li>
                    <li>Sass</li>
                    <li>Bootstrap</li>
                </ul>
                <h3>See code: </h3>
                <a  href='https://github.com/leandrohrmonteiro/portfolio'>
                    <img src={FileCode} alt="see code" className='code'/>
                </a>
            </div>
            ),
    thirdSlidePortuguese: (
    <div className='synopsis'>

    <button onMouseDown={sendToEditorProject}  className='code'>
        Usar o Editor
    </button>
    

    <h3>Editor de texto Markdown</h3> 
    <p> Esta aplicação usa Draft.js como base para um editor de texto com capacidades markdown.</p>
    

    <h3>Características:</h3>
    
    <ul>
        <li>Activar e desactivar multiplos estilos no mesmo texto.</li> 
        <li>Comparar texto estilizado com o equivalente em markdown na janela inferior.</li>
        <li>Gravar resultado de sessão num ficheiro de extensão txt.</li>
    </ul>
    
    <h3>Tecnologia usada:</h3>
    <ul>
    <li>React.js</li> 
            <li>Draft.js</li>
            <li>Javascript ES6</li>
            <li>Jsx</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>sass</li>
            <li>Bootstrap</li>
    </ul>

   
</div>
),
thirdSlideEnglish: (
    <div className='synopsis'>

    <button onMouseDown={sendToEditorProject}  className='code'>
        Use the Editor
    </button>
        <h3>Markdown text editor</h3> 
        <p>This application uses Draft.js as a basis for a rich text editor with markdown capabilities.<br />
        </p>
         <h3>Features:</h3>
         
            <ul>
                <li>Toggling multiple text styles.</li> 
                <li>Comparing stylized text to its markdown equivalent in the bottom window.</li>
                <li>Save session in a txt file.</li>
            </ul>
        
        <h3>Technology used:</h3>
        <ul>
            <li>React.js</li> 
            <li>Draft.js</li>
            <li>Javascript ES6</li>
            <li>Jsx</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>sass</li>
            <li>Bootstrap</li>
        </ul>
        
    </div>
    ),
    fourthSlidePortuguese: (
        <div className='synopsis'>
    
        <button onMouseDown={sendToGitTerminalHelper}  className='code'>
            Usar o Tutor
        </button>
        
    
        <h3>Tutor de comandos de terminal para Git</h3> 
        <p>Esta aplicação faz uso de menus e imput do utilizador para retornar o comando de terminal Git necessário.</p>
        
    
        <h3>Características:</h3>
        
        <ul>
            <li>Selecção de opções por menu.</li> 
            <li>Imput de informação por utilizador.</li>
            <li>Retorno de comando Git para terminal customizado pelo imput do utilizador.</li>
        </ul>
        
        <h3>Tecnologia usada:</h3>
        <ul>
        <li>React.js</li> 
                <li>Javascript ES6</li>
                <li>Jsx</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>scss</li>
                <li>Bootstrap</li>
        </ul>
    
       
    </div>
    ),
    fourthSlideEnglish: (
        <div className='synopsis'>
    
        <button onMouseDown={sendToGitTerminalHelper}  className='code'>
            Use the Tutor
        </button>
            <h3>Git terminal command tutor</h3> 
            <p>This application uses menus and user imput to return the required git terminal command.<br />
            </p>
             <h3>Features:</h3>
             
                <ul>
                    <li>Menu option selection.</li> 
                    <li>Imput of information by user.</li>
                    <li>Return of git terminal command customized by user imput.</li>
                </ul>
            
            <h3>Technology used:</h3>
            <ul>
                <li>React.js</li> 
                <li>Javascript ES6</li>
                <li>Jsx</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>scss</li>
                <li>Bootstrap</li>
            </ul>
            
        </div>
        ),
})
const firstSlide = () => {
    if(globalContext.lang ==='port'){return(synopsis.firstSlidePortuguese)}
    if(globalContext.lang==='eng'){return(synopsis.firstSlideEnglish)}   
}
const secondSlide = () => {
    if(globalContext.lang ==='port'){return(synopsis.secondSlidePortuguese)}
    if(globalContext.lang==='eng'){return(synopsis.secondSlideEnglish)}   
}
const thirdSlide = () => {
    if(globalContext.lang ==='port'){return(synopsis.thirdSlidePortuguese)}
    if(globalContext.lang==='eng'){return(synopsis.thirdSlideEnglish)}   
}
const fourthSlide = () => {
    if(globalContext.lang ==='port'){return(synopsis.fourthSlidePortuguese)}
    if(globalContext.lang==='eng'){return(synopsis.fourthSlideEnglish)}   
}



return(
    
    <div id='carousel' className='col-sm-6 data-interval="false" '>

        <div id="carouselWithIndicators" className="carousel slide">
            <ol className="carousel-indicators">
                <li data-target="#carouselWithIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselWithIndicators" data-slide-to="1"></li>
                <li data-target="#carouselWithIndicators" data-slide-to="2"></li>
                <li data-target="#carouselWithIndicators" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">

                
            <div className="carousel-item active">           
                <img className='img-fluid img-border' src={ProjectFourScreen} alt="fourth project" />   
                    <div className="d-md-block">
                        {fourthSlide()}
                        <p></p>
                    </div>
                </div>
                
                <div className="carousel-item">           
                <img className='img-fluid img-border' src={ProjectThreeScreen} alt="third project" />   
                    <div className="d-md-block">
                        {thirdSlide()}
                        <p></p>
                    </div>
                </div>

                <div className="carousel-item">
                <img className='img-fluid img-border' src={ProjectTwoScreen} alt="second project" />  
                    <div className="d-md-block">
                    {secondSlide()}
                    <p></p>
                    </div>
                </div>


                <div className="carousel-item">
                <img className='img-fluid img-border' src={ProjectOneScreen} alt="first project" />
                    <div className="d-md-block">
                    {firstSlide()}
                        <p></p>
                    </div>
                </div>

            </div>
                <a className="carousel-control-prev" href="#carouselWithIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselWithIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
        </div>


    </div>
    

    )
}

export default Caroussel;