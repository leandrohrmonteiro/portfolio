import React, { useState } from 'react';


import '../GitHelper.scss'


const OptionComponent= (props) => {

  
    const [input,setInput] = useState('')

    const handleOnChange = (event) => {
        setInput(event.target.value)  
    }
    

        return(
            
            
            <div>
                <div className='componentTitle'>
                    <h3>{props.title}:</h3>
                    <h5>{props.description}</h5>
                    <label className='componentSpaceBetweenFields' htmlFor={props.label}>{props.label}: </label>
                    <input 
                    type='text' 
                    minLength='1' 
                    onChange={handleOnChange}
                    placeholder='Write...'
                    />
                    <h3 className='componentSpaceBetweenFields'>Git terminal command is:</h3>
                    <p>{props.code} {input}</p>
                </div>
            </div>
               
        )
    }

export default OptionComponent