import React from 'react'
import { Link } from 'react-router-dom'
import useFeatch from './useFeatch'

function SecondRuning() {

  const [country, setCountry] = useFeatch([])
  return (
    <>
      <h5>Which country does this flag belong to?</h5>
      { country.map((countri, i) => {
        country.length = (Math.floor(Math.random() * country.length))
        { country.map((flags) => { < img key={countri.id} className="flags" src={flags.flag} alt="flag" />}) } 
        return (
          <>
                <div key={countri.id}>
                  <button className="button_choice">{countri.name}</button>
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