import React, {useState} from 'react'

const RemoteRepositoryComponent = (props) =>{

const [inputA, setInputA] = useState('')
const [inputB, setInputB] = useState('')

const handleOnChangeA = (event) =>{
setInputA(event.target.value)
}
const handleOnChangeB = (event) =>{
    setInputB(event.target.value)
    }

const whatCommandConfigurationToDisplay = () =>{
    if(props.hasuserinput===true){
        if(props.hasmultipleuserinput===true){
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
              
              <label className='componentSpaceBetweenFields' htmlFor={props.aditionallabel}>{props.aditionallabel}: </label>
              <input
              type='text'
              minLength='1'
              onChange={handleOnChangeB}
              placeholder='write...'
              />
              <h3 className='componentSpaceBetweenFields'>Git terminal command is:</h3>
              {props.codebeforeinput===true ? <p>{props.code} {inputA} {inputB}</p> : <p>{inputA} {inputB} {props.code}</p>}
              </div>
            )
        }
        if(props.hasmultipleuserinput===false && props.isitamessage===false){
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
                  {props.codebeforeinput===true ? <p>{props.code} {inputA}</p> : <p>{inputA} {props.code}</p>}
                  </div>
                )
        }
        if(props.hasmultipleuserinput===false && props.isitamessage===true){
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
                  {props.codebeforeinput===true ? <p>{props.code} '{inputA}'</p> : <p>'{inputA}'' {props.code}</p>}
                  </div>
                )
        }
    }
    if(props.hasuserinput===false){
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

export default RemoteRepositoryComponent