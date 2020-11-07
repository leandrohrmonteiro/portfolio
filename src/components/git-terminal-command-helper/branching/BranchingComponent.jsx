import React, {useState} from 'react'

const BranchingComponent = (props) =>{

const [inputA, setInputA] = useState('')
const [inputB, setInputB] = useState('')

const handleOnChangeA = (event) =>{
setInputA(event.target.value)
}
const handleOnChangeB = (event) =>{
    setInputB(event.target.value)
    }

const whatCommandConfigurationToDisplay = () =>{
    if(props.hasUserInput===true){
        if(props.hasMultipleUserInput===true){
            return(  
            <div className='componentTitle'>
            <h3>{props.title}</h3>
                <h5>{props.description}</h5>
              <label className='componentSpaceBetweenFields' htmlFor={props.label}>{props.label}: </label>
              <input
              type='text'
              minLength='1'
              onChange={handleOnChangeA}
              placeholder='write...'
              />
              
              <label className='componentSpaceBetweenFields' htmlFor={props.aditionalLabel}>{props.aditionalLabel}: </label>
              <input
              type='text'
              minLength='1'
              onChange={handleOnChangeB}
              placeholder='write...'
              />
              <h3 className='componentSpaceBetweenFields'>Git terminal command is:</h3>
              {props.codeBeforeInput===true ? <p>{props.code} {inputA} {inputB}</p> : <p>{inputA} {inputB} {props.code}</p>}
              </div>
            )
        }
        if(props.hasMultipleUserInput===false && props.isItAMessage===false){
            return(  
                <div className='componentTitle'>
                <h3>{props.title}</h3>
                    <h5>{props.description}</h5>
                  <label className='componentSpaceBetweenFields' htmlFor={props.label}>{props.label}: </label>
                  <input
                  type='text'
                  minLength='1'
                  onChange={handleOnChangeA}
                  placeholder='write...'
                  />
                  <h3 className='componentSpaceBetweenFields'>Git terminal command is:</h3>
                  {props.codeBeforeInput===true ? <p>{props.code} {inputA}</p> : <p>{inputA} {props.code}</p>}
                  </div>
                )
        }
        if(props.hasMultipleUserInput===false && props.isItAMessage===true){
            return(  
                <div className='componentTitle'>
                <h3>{props.title}</h3>
                    <h5>{props.description}</h5>
                  <label className='componentSpaceBetweenFields' htmlFor={props.label}>{props.label}: </label>
                  <input
                  type='text'
                  minLength='1'
                  onChange={handleOnChangeA}
                  placeholder='write...'
                  />
                  <h3 className='componentSpaceBetweenFields'>Git terminal command is:</h3>
                  {props.codeBeforeInput===true ? <p>{props.code} '{inputA}'</p> : <p>'{inputA}'' {props.code}</p>}
                  </div>
                )
        }
    }
    if(props.hasUserInput===false){
        return(  
            <div className='componentTitle'>
            <h3>{props.title}</h3>
                <h5>{props.description}</h5>
              
              <h3 className='componentSpaceBetweenFields'>Git terminal command is:</h3>
              <p>{props.code}</p>
              </div>
            )
    }
}


return(
<div>
{whatCommandConfigurationToDisplay()}
</div>
  )
}

export default BranchingComponent