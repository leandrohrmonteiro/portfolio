import React, { useState, useContext }from 'react';
import { GlobalContext } from '../globalcontext/GlobalContext.js';

import '../caroussel/Caroussel.scss';
import ProjectOneScreen from '../../assets/project screenshots/'

function Caroussel() {

const globaLanguage = useContext(GlobalContext);
const [caroussel, setCaroussel] = useState({
    firstSlide: 'first project',
    secondSlide: 'second project',
    thirdSlide: 'third project',
})


return(
    <div className='row'>
    <div id='carousel' className='col-sm-6'>

        <div id="carouselWithIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselWithIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselWithIndicators" data-slide-to="1"></li>
                <li data-target="#carouselWithIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                        
                        {caroussel.firstSlide}
                       
                    <div className="carousel-caption d-none d-md-block">
                        <h4>Searchable Movie Database Spa</h4>
                        <p>Click to see project</p>
                    </div>
                </div>
                <div className="carousel-item">

                        {'second slide'}

                    <div className="carousel-caption d-none d-md-block">
                        <h5>Test Title Second Slide</h5>
                        <p>Test text second slide</p>
                    </div>
                </div>
                <div className="carousel-item">
                    
                        {'third slide'}

                    <div className="carousel-caption d-none d-md-block">
                        <h5>Test Title Third Slide</h5>
                        <p>Test text third slide</p>
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
</div>
    )
}

export default Caroussel;