import React, {useState} from 'react'

import BranchingOptions from './BranchingOptions'
import BranchingComponent from './BranchingComponent'

const Branching = () => {

const[option, setOption] = useState('None')
const selectOptionOnChange = (event) => {setOption(event.target.value)}
//render all options
const renderAllOptions = (value) => {
return(
<option key={value} value={value}>{value}</option>)}
//render selected option
const filterBranchingOptions = BranchingOptions.filter(selection=>selection.selectedOption === option)
const filteredResult = filterBranchingOptions.map(result => [
  result.selectedOption,
  result.label, 
  result.aditionalLabel, 
  result.hasUserInput,
   result.hasMultipleUserInput, 
   result.isItAMessage, 
   result.codeBeforeInput , 
   result.code, 
   result.description])
//deconstructing the filtered result array
const[resultObject] = filteredResult
const[resultOption, 
  resultLabel, 
  resultAditionalLabel, 
  resultHasUserInput, 
  resultHasMultipleUserInput, 
  resultIsItAMessage,
  resultCodeBeforeInput,
  resultCode, 
  resultDescription] = resultObject




const renderBranchingComponent = () => {
if(resultOption === option && resultOption !== 'None'){
  return(<BranchingComponent 
  label={resultLabel} 
  aditionalLabel={resultAditionalLabel}
  hasUserInput={resultHasUserInput} 
  hasMultipleUserInput={resultHasMultipleUserInput} 
  isItAMessage={resultIsItAMessage}
  codeBeforeInput={resultCodeBeforeInput} 
  code={resultCode} 
  description={resultDescription} />)}
}

  
  return(
<div className='componentTitle'>
<h3>Choose remote repository option:</h3>
<select onChange={selectOptionOnChange}>
{BranchingOptions.map((options)=>{
return renderAllOptions(options.selectedOption);})}
</select>
{renderBranchingComponent()}
</div>
  )
}
export default Branching