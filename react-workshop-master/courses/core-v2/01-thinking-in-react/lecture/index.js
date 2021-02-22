import React from 'react'
import ReactDOM from 'react-dom'
// import { FaTrash } from 'react-icons/fa'
import 'ProjectPlanner/styles/global-styles.scss'
import './styles.scss'

// Let's go
function Button({label}){
return(
  <button onClick={()=> {}} className="button" type="button">
    {label}
  </button>
)
}

function App(){
  return <div>
    <Button />
  </div>
}
