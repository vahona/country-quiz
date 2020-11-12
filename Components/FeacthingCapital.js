

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useFeatch from '../useFeatch';






function FeacthingCapital() {
	const [country, setCountry] = useFeatch({})
	const [capital, setCapital] = useState('')

	// const { capitalName } = useParams()
	const BASE_URL = `https://restcountries.eu/rest/v2/capital/${capital}`;

	const capitalsCountry = async () => {
		const response = await fetch(BASE_URL)
		const capit = await response.json()
		setCapital(capit.capital)
		console.log("j",capit.capital);

   }

	useEffect(() => {
		capitalsCountry();

  }, [capital])

  return (
    <div></div>
)

}

export default FeacthingCapital