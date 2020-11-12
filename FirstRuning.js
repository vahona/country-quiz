

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useFeatch from './useFeatch'
// import FeatchFullInformation from './Components/FeactFullCountries'


function FirstRuning() {
  const [country, setCountry] = useFeatch([])
  const [isnext, setIsnext] = useState(false)

  const handleClick = (e) => {
      e.preventDefault()
      setIsnext(!isnext)
  } 

  return (
    <div>
      <h5> {country.capital} is the capital of</h5>
      <div>
        {
        country.map((capitals) => {
          country.length = (Math.floor(Math.random() * country.length))
          return (
            <div key={country.id}>
              <Link to="./FirstRuning">
                <button className="button_choice" onClick={handleClick} key={country.id}>
                  {capitals.capital}
               </button></Link> 
            </div>
          )
        })}
        { isnext && (<>
          {
            country.map((capita) => {
              country.length = (Math.floor(Math.random() * country.length))
              return (
                <div key={country.id}>
                  <Link to="./FirstRuning">
                    <button className="button_choice" onClick={handleClick} key={country.id}>
                     {capita.capital}
                    </button>
                    </Link>
                </div>
              )
            })}
         <Link to='./SecondRuning'> <button className="next">Next</button></Link>
         </>)}
      </div>
    </div>
  )
}

export default FirstRuning

