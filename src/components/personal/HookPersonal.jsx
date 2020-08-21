import React, { useContext } from 'react';
import { GlobalContext} from '../globalcontext/GlobalContext.js';

import '../personal/Personal.scss'
import Leo from '../../assets/face.png'
import Email from '../../assets/icons feather/email.png'
import SmartPhone from '../../assets/icons feather/smartphone.png'
import Github from '../../assets/icons feather/github.svg'

function HookPersonal() {

    const lang = useContext (GlobalContext);

    const about = ({
        aboutPortuguese: (
            <div className='col-sm-6'>
            <div  className='col'>
                <div id='about' className='row no-gutters'>
                    <img id='face' src={Leo} alt='face foto'/>
                        <div id='about-text' className='col-9'>
                            <p>Sou um profissional nas áreas de desenvolvimento Front End e Design 
                            que trabalha para se manter ao corrente dos últimos desenvolvimentos 
                            nas áreas de programação e design para criar soluções que vão de encontro 
                            com as necessidades do mercado.
                            </p>
                        </div>
                </div>
            </div>
            <div id='contacts' className='col' style={{marginTop: '40px'}}>

                <p>
                    <img src={SmartPhone} alt='smartphone' style={{height: '30px', width: '20px', marginRight: '20px', marginLeft: '5px'}}/>
                    +351 93 423 84 48
                </p>
                <p>
                    <img src={Email} alt='email' style={{height: '20px', width: '30px', marginRight: '20px'}}/>
                    leandro.hugo.monteiro@gmail.com
                </p>
                <p>
                    <img src={Github} alt='github' style={{height: '30px', width: '30px', marginRight: '20px'}}/>
                    https://github.com/leandrohrmonteiro
                </p>                             
            </div>  

            <div className='col' style={{marginTop: '70px'}}>
                <h3>Percurso Profissional</h3>
                <ul>
                    <li>
                        <p>
                        2009 / Presente<b className='tab'>Designer Freelancer</b> <br/>
                         Criação de conteúdo digital 2D/3D.
                        </p>
                    </li>

                    <li>
                        <p>
                        2018 / 2019<b className='tab'>Designer de Produto</b> (Sciencentrics)<br/>
                        Idealização, investigação e desenvolvimento de produto
                        na área da recuperação física.
                        </p>
                    </li>
                        
                    <li>
                    
                        <p>
                        2011<b className='tab'>Designer Gráfico</b> (Menina Design)<br/>
                        Criação de conteúdo digital 2D.
                        </p>
                    
                   </li>
                </ul>
                        <h3 style={{marginTop: '70px'}}>Percurso Académico</h3>
                <ul>
                    <p>
                        <li>2020 <b className='tab'>Full-Stack Developer</b> (&lt;Academia de Código_)<br/></li>
                    </p>
                    <p>
                        <li>2018 <b className='tab'>Design de Produto e Prototipagem</b> (AFTEBI/CITEVE)</li>
                    </p>
                    <p>
                        <li>2012/2014 <b className='tab'>Ilustração e Animação 2D/3D</b> (IPCA)</li>
                    </p>
                    <p>
                        <li>2009/2012 <b className='tab'>Design Gráfico e Web</b> (ESAD)</li>
                    </p>
                    
                </ul>
            </div>
        </div>
        ),

        aboutEnglish: (
            <div className='col-sm-6'>
            <div  className='col'>
                <div id='about' className='row no-gutters'>
                    <img id='face' src={Leo} alt='face foto'/>
                        <div id='about-text' className='col-9'>
                            <p>I am a profissional in Front End Development and Design 
                            who works to keep up with the latest developments
                            in programming and design trends to create solutions that meet and satisfy market needs.
                            </p>
                        </div>
                </div>
            </div>
            <div id='contacts' className='col' style={{marginTop: '40px'}}>

                <p>
                    <img src={SmartPhone} alt='smartphone' style={{height: '30px', width: '20px', marginRight: '20px', marginLeft: '5px'}}/>
                    +351 93 423 84 48
                </p>
                <p>
                    <img src={Email} alt='email' style={{height: '20px', width: '30px', marginRight: '20px'}}/>
                    leandro.hugo.monteiro@gmail.com
                </p>
                <p>
                    <img src={Github} alt='github' style={{height: '30px', width: '30px', marginRight: '20px'}}/>
                    https://github.com/leandrohrmonteiro
                </p>                             
            </div>  

            <div className='col' style={{marginTop: '70px'}}>
                <h3>Professional Track</h3>
                <ul>
                    <li>
                        <p>
                        2009 / Present<b className='tab'>FreelancerDesigner</b> <br/>
                        2D/3D digital content creation.
                        </p>
                    </li>

                    <li>
                        <p>
                        2018 / 2019<b className='tab'>Product Designer</b> (Sciencentrics)<br/>
                        Ideation, research and development of product in the physical recovery area.
                        </p>
                    </li>
                        
                    <li>
                    
                        <p>
                        2011<b className='tab'>Graphic Designer</b> (Menina Design)<br/>
                        2D digital content creation.
                        </p>
                    
                   </li>
                </ul>
                        <h3 style={{marginTop: '70px'}}>Academic Track</h3>
                <ul>
                    <p>
                        <li>2020 <b className='tab'>Full-Stack Developer</b> (&lt;Academia de Código_)<br/></li>
                    </p>
                    <p>
                        <li>2018 <b className='tab'>Product Design and Prototyping</b> (AFTEBI/CITEVE)</li>
                    </p>
                    <p>
                        <li>2012/2014 <b className='tab'>2D/3D Illustration & Motion Graphics</b> (IPCA)</li>
                    </p>
                    <p>
                        <li>2009/2012 <b className='tab'>Graphic & Web Design</b> (ESAD)</li>
                    </p>
                    
                </ul>
            </div>
        </div>
        )
    });

    const chooseAbout = () => {
        if(lang[0]==='port'){return(about.aboutPortuguese)}
        if(lang[0]==='eng'){return(about.aboutEnglish)}   
    }



    return(
        chooseAbout()
    )
};

export default HookPersonal;