import React, { useEffect, useState } from 'react'

const COUNTRY_URL = "https://restcountries.eu/rest/v2/all"


function useFeatch() {

  // Setting a state to all of the components

  const [country, setCountry] = useState([])
  const [question, setQuestion] = useState([])
  const [wrongAnswear, setWrongAnswear] = useState([])
  const [truQuestion, setTrueQuestion] = useState([])
  const [score, setScore] = useState([])

  // Featching data from the api link

  useEffect(() => {
    (async () => {

      const res = await fetch(COUNTRY_URL)
      const result = await res.json()
      setCountry(result)

    })()

  },[])
  
  function Question() {
   
  
  }

    return [country, setCountry, useEffect]
}

export default useFeatch