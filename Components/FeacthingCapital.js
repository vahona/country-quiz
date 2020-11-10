

// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// import useFeatch from '../useFeatch';
// import FeatchFullInformation from './FeactFullCountries'


// const BASE_URL = `https://restcountries.eu/rest/v2/capital/`;

// function FeacthingCapital() {
//     const [country, setCountry, useEffect] = useFeatch({})
//     const {capitalName} = useParams()
//     console.log("KKK", capitalName);

//    const capitalsCountry = async () => {
//        const response = await fetch(BASE_URL + capitalName )
//        const capit = await response.json()
//        console.log("kkkkk",capit);
//        setCountry(capit)
//    }
   

//    return (
//        <div>Me</div>
//    )

// }

// export default FeacthingCapital