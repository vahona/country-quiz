
import React from 'react'
import { Link } from 'react-router-dom'
import useFeatch from './useFeatch'

function SecondRuning() {

  const [country, setCountry] = useFeatch([])
  return (
    <>
      <h5>Which country does this flag belong to?</h5>
      {country.map((flags) => { 
        country.length = 1
        return (
              <img key={flags.id} className="flags" src={flags.flag} alt="flag" />
          )
         })} 
      {country.map((countri) => {
        country.length = (Math.floor(Math.random() * country.length)) 
        return (
          <>
            <div >
              <button className="button_choice" key={countri.id} > A {countri.name}</button>
            </div>
            <div >
              <button className="button_choice" key={countri.id} > B {countri.name}</button>
            </div>
            <div >
              <button className="button_choice" key={countri.id} > C {countri.name}</button>
            </div>
            <div >
              <button className="button_choice" key={countri.id} >  D {countri.name}</button>
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