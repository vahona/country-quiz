
import React from 'react'
import { Link } from 'react-router-dom'
import useFeatch from './useFeatch'

function SecondRuning() {

  const [country, setCountry] = useFeatch([])
  return (
    <>
      <h5>Which country does this flag belong to?</h5>
      <img key={country.id} className="flags" src={country.flag} alt="flag" />
      {country.map((countri) => {
        country.length = (Math.floor(Math.random() * country.length)) 
        return (
          <>
            <div >
              <button className="button_choice" key={countri.id}>{countri.name}</button>
            </div>
          </>
        )
      })
    }
      <Link to='./Score'> <button className="next">Next</button></Link>
    </>
  )
}

export default SecondRuning