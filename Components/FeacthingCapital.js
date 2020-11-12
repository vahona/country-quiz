
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useFeatch from '../useFeatch';


function FeacthingCapital({ capitalName }) {
  const [country, setCountry] = useFeatch({})
  const [capital, setCapital] = useState([])

  // const { capitalName } = useParams()
  const BASE_URL = `https://restcountries.eu/rest/v2/capital/${capitalName}`;

  // https://restcountries.eu/rest/v2/capital/tallinn

  const capitalsCountry = async () => {
    const response = await fetch(BASE_URL)
    console.log(response);
    const capit = await response.json()
    setCapital(capit)
    console.log("j", capit);

  }

  useEffect(() => {
    capitalsCountry();

  }, [capitalName])

  return (
    <div>

    </div>
  )
}

export default FeacthingCapital