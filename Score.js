import React from 'react'
import { Link } from 'react-router-dom'
import SecondRuning from './SecondRuning'
import Background from './images/winner.svg'
import useFeatch from './useFeatch'
import {TryButton} from './styled'



function Score() {
  const [country, setCountry] = useFeatch([{}])
  return (
    <div className="score">
      <img src={Background} alt="quize" />
      <h4>Result</h4>
      <p>you got <span> 0 </span> correct answer</p>
      <Link to="/FirstRuning"><TryButton key={country.id}>Try again</TryButton></Link>
    </div>
  )
}

export default Score