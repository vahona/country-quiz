

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useFeatch from '../useFeatch';
// import FeatchFullInformation from './FeactFullCountries'





function FeacthingCapital() {
	const [country, setCountry] = useFeatch({})
	const { capitalName } = useParams()
	const BASE_URL = `https://restcountries.eu/rest/v2/capital/${capitalName}`;

	const capitalsCountry = async () => {
		const response = await fetch(BASE_URL + capitalName)
		console.log("pppp", country)
		const capit = await response.json()
		setCountry(capit)

	}

	useEffect(() => {
		capitalsCountry();

  }, [])

  return (
    <div></div>
	)

}

export default FeacthingCapital