import React, { useContext }from 'react';
import { GlobalContext } from '../globalcontext/GlobalContext.js';

import '../caroussel/Caroussel.scss';
import ProjectOneScreen from '../../assets/project screenshots/movieDatabaseSearch.png'
import ProjectTwoScreen from '../../assets/project screenshots/reactPortfolio.png'
import ProjectThreeScreen from '../../assets/project screenshots/daPainter.png'
import FileCode from '../../assets/icons feather/file-plus.svg'

function Caroussel() {
//just using the read argument in useContext, don't want to change state from here.
const lang = useContext(GlobalContext);

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
            <h3>Movie SearchEngine (Single Page Aplication)</h3> 
            <p>This spa makes use of the [OMDB api] <a href='http://www.omdbapi.com/'>http://www.omdbapi.com/</a>
                to return movie lists and individual movie info.
            </p>
             <h3>Features:</h3>
            
                <ul>
                    <li>Search form</li> 
                    <li>Hash based non reload view change</li>
                    <li>Asynchronous view content injection</li>
                    <li>Module MVC architecture </li>
                </ul>
            
            <h3>Tecnology used:</h3>
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
                        <li>Encapsulation and division of responsabilities</li>
                    </ul>
                
                <h3>Tecnology used:</h3>
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
    <h3>Programa de Pintura</h3> 
    <p> Esta aplicação faz uso de uma biblioteca de gráficos e uma biblioteca de som.<br /> Muda a cor do cursor e diz que cor foi escolhida na selecção de cor.</p>
    

    <h3>Características:</h3>
    
    <ul>
        <li>Cursor usa cor seleccionada</li> 
        <li>Diz cor escolhida aquando selecção</li>
        <li>Salva e recupera ficheiro criado</li>
    </ul>
    
    <h3>Tecnologia usada:</h3>
    <ul>
        <li>Java 11</li> 
        <li>Biblioteca de gráficos (simplegraphics)</li>
        <li>Biblioteca de sons (sound-library)</li>
    </ul>
    <h3>Ver código: </h3>
    <a href='https://github.com/leandrohrmonteiro/showCase/tree/master/DaPainter'>
        <img src={FileCode} alt="see code" className='code'/>
    </a>
</div>
),
thirdSlideEnglish: (
    <div className='synopsis'>
        <h3>Painter Aplication</h3> 
        <p>This aplication uses graphics and sound libraries.<br />
           Changes the cursor color and states the color selected when color selection is performed.
        </p>
         <h3>Features:</h3>
         
            <ul>
                <li>Cursor changes into selected color</li> 
                <li>Says selected color when color selection is performed</li>
                <li>Saves and loads current file into separate document</li>
            </ul>
        
        <h3>Tecnology used:</h3>
        <ul>
            <li>Java 11</li> 
            <li>Graphics library (simplegraphics)</li>
            <li>Sound library (sound-library)</li>
        </ul>
        <h3>See code: </h3>
        <a  href='https://github.com/leandrohrmonteiro/showCase/tree/master/DaPainter'>
            <img src={FileCode} alt="see code" className='code'/>
        </a>
    </div>
    ),
})
const firstSlide = () => {
    if(lang[0]==='port'){return(synopsis.firstSlidePortuguese)}
    if(lang[0]==='eng'){return(synopsis.firstSlideEnglish)}   
}
const secondSlide = () => {
    if(lang[0]==='port'){return(synopsis.secondSlidePortuguese)}
    if(lang[0]==='eng'){return(synopsis.secondSlideEnglish)}   
}
const thirdSlide = () => {
    if(lang[0]==='port'){return(synopsis.thirdSlidePortuguese)}
    if(lang[0]==='eng'){return(synopsis.thirdSlideEnglish)}   
}



return(
    
    <div id='carousel' className='col-sm-6 data-interval="false" '>

        <div id="carouselWithIndicators" className="carousel slide">
            <ol className="carousel-indicators">
                <li data-target="#carouselWithIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselWithIndicators" data-slide-to="1"></li>
                <li data-target="#carouselWithIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">

                <div className="carousel-item active">           
                <img className='img-fluid' src={ProjectOneScreen} alt="first project" />   
                    <div className="d-md-block">
                        {firstSlide()}
                        <p></p>
                    </div>
                </div>

                <div className="carousel-item">
                <img className='img-fluid' src={ProjectTwoScreen} alt="second project" />  
                    <div className="d-md-block">
                    {secondSlide()}
                    <p></p>
                    </div>
                </div>


                <div className="carousel-item">
                <img className='img-fluid' src={ProjectThreeScreen} alt="third project" />
                    <div className="d-md-block">
                    {thirdSlide()}
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