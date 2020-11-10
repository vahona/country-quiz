import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFeatch from './useFeatch'
// import FeatchFullInformation from './Components/FeactFullCountries'


function FirstRuning() {
  const [country, setCountry] = useFeatch([])


  console.log(country.capital);
  return (
    <>
      <h5> {country.capitals} is the capital of</h5>
      <div>
        {country.map((capitals) => {
          country.length = (Math.floor(Math.random() * country.length))
          return (
            <div key={country.id}>
              <Link to="./FirstRuning"><button className="button_choice"> {capitals.capital}</button></Link>
            </div>
          )
        })}
        <Link to='./SecondRuning'> <button className="next">Next</button></Link>
      </div>
    </>
  )
}

export default FirstRuning


