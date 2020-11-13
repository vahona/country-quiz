import { useEffect, useState } from 'react'

const COUNTRY_URL = "https://restcountries.eu/rest/v2/all"

function useFeatch(i) {
  const [country, setCountry] = useState([i])
  const countries = async () => {
  
    try {
      const res = await fetch(COUNTRY_URL)
      const result = await res.json()
      const data = [...result]
      setCountry(data)
      console.log("ww",data);

    }

    catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    countries();

  }, [])

    return [country, setCountry, COUNTRY_URL, countries, useEffect]
}

export default useFeatch