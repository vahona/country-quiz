import React, { useEffect, useState } from 'react'

const COUNTRY_URL = "https://restcountries.eu/rest/v2/all"


function UseFeatch() {

  // Setting a state to all of the components

  const [country, setCountry] = useState([])
  const [randomeCountries, setRandomCountries] = useState({});
  const [randomeChoices, setRandomeChoices] = useState([])
  const [question, setQuestion] = useState([])
  const [wrongAnswear, setWrongAnswear] = useState([])
  const [truQuestion, setTrueQuestion] = useState([])
  const [score, setScore] = useState([])

  // Featching data from the api link



  const counttryList = async () => {
    const response = await fetch(COUNTRY_URL);
    const data = await response.json();
    setCountry(data);
    setRandomCountries(data);
    console.log(data);
  }
  

  useEffect(() => {
    counttryList()
  }, [])

 

  return (
    <div>
      me
    </div>
  )

  
}

export default UseFeatch