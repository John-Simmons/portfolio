import React, {useRef, useState} from 'react';
import { useHistory } from 'react-router-dom'

import NavBarAlt from "../subcomponents/NavBarAlt/NavBarAlt"
import '../subcomponents/NavBarAlt/NavBarAlt.css'

import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount"

export default function Password(props) {

  const passRef = useRef()
  const [error, setError] = useState('')
  const history = useHistory()

  //check to ensure we came from a PrivateRoute otherwise redirect to work on success
  let successPath = '/'
  try{
    successPath = props.location.successPath.successPath
  } catch (error){
  }

  function handleSubmit(e){
    e.preventDefault()

    if (passRef.current.value !== "Simmons123!") {
      return setError('Incorrect Password')
    }

    localStorage.setItem('js-port-auth', true);

    history.push(successPath)

  }

  function handleChange(e){
    e.preventDefault()

    return setError('')
  }

  return(
    <div className="pass-wrapper">
      <ScrollToTopOnMount />

      <NavBarAlt>
      </NavBarAlt>

      <div className="pass-content">
        <h1 className="pass-title">Password</h1>
        <form onSubmit={handleSubmit}>
          <input className="pass-input" type="password" ref={passRef} name="password" onChange={handleChange} />
          {error && <div className="pass-error">Incorrect Password</div>}
          <input className="pass-btn" type="submit" value="Submit" />
        </form>
      </div>

    </div>
  )
}
