import React, { useState, useContext} from 'react';
import { GlobalContext} from '../globalcontext/GlobalContext.js';

import '../personal/Personal.scss'

function HookPersonal() {

    const globalLanguage = useContext (GlobalContext);

    return(
        <div className='row'>
        <div id='about' className='col'><h3 className='title'>About</h3>
            <div className='row no-gutters'>
            <div id='about-text' className='col'>
                <p>An open-minded, interdisciplinary-learner with an interest in multidisciplinary, user-oriented projects.
                I believe in the free flow of ideas and a healthy mix of pragmatism, empathy, and a sense of humor for the resolution of most, if not all problems.
                 I have been fortunate enough to work in projects from various fields either as a designer, a project manager, and recently as a developer. In all of those endeavors it was the joint result of the individual contributions that pushed the end result into another level.
                My belief in social contribution led me to volunteer as a youth teacher on various subjects. </p>
            </div>
                <div id='link-col' className='col-1'>
                    
                    <div className='link'>{'mobile'}</div>
                    <div className='link'>{'email'}</div>   
                    <div className='link'>{'linkdn'}</div>  
                    <div className='link'>{'github'}</div>
                    
                </div>
            </div>
        </div>
        <div id='interval'></div>   
        <div id='track' className='col'><h3 className='title'>Professional Track</h3>
            <ul>
                <li>2009 / Present - <b className='highlight'>Freelance Designer</b> (Various Clients)<br/>Designed digital and print marketing materials for various clients.</li>
                <li>2018 / 2019 - <b className='highlight'>Product Designer</b> (Sciencentrics)<br/>Ideation, research, and development of compression wear
                    product for professionals to aid in fatigue recovery.</li>
                <li>2011 - <b className='highlight'>Graphic Designer</b> (Menina Design)<br/>Digital image editing· Designed tradeshow display stands</li>
            </ul>
        <h3>Academic Track</h3>
            <ul>
                <li>2020 Full-Stack Developer (&lt;Academia de Código_>)<br/></li>
                <li>2018 Product Design and Prototyping (AFTEBI/CITEVE)</li>
                <li>2012/2014 2D/3D Illustration & Motion Graphics (IPCA)</li>
                <li>2009/2012 Graphic & Web Design (ESAD)</li>
            </ul>
        </div>
    </div>
    
   
    )
};

export default HookPersonal;