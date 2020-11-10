import { useEffect, useState } from 'react'

const COUNTRY_URL = "https://restcountries.eu/rest/v2/all"

function useFeatch() {

  const [country, setCountry] = useState([])

  const countries = async () => {
    try {
      const res = await fetch(COUNTRY_URL)
      const country = await res.json()
      setCountry(country)
    }
    catch (e) {
      console.log(e);
    }
  }

  // function RandomCOuntry(e) {
  //     const city = country.length;
  //     setCountry(Math.floor(Math.random() * city))
  //     return city
  // }

  useEffect(() => {
    countries();
    // RandomCOuntry()
  }, [])

  return [country, setCountry, COUNTRY_URL, countries, useEffect]
}

export default useFeatch