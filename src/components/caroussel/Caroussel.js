import React, {Component} from 'react';
import '../caroussel/Caroussel.scss'




class Caroussel extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            lang: 'port',
            
        }
    }

    
 

chooseLang = () => {
    console.log(this.state.import)
    if(this.state.lang ==='port') {
    return (<div id='synopsis'> Caroussel em Portugues</div>)
    } else {
        return (<div id='synopsis'> Caroussel in English</div>)
    }
 }

 

render () {
    
    return (
        <div>does this work
         
        <div> imported lang is the {this.state.lang} language</div>
        </div>
         
        )
    }
}

export default Caroussel;