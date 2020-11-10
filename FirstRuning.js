import React from 'react'
import { Link } from 'react-router-dom'
import useFeatch from './useFeatch'
// import FeatchFullInformation from './Components/FeactFullCountries'


function FirstRuning() {
    const [country, setCountry] = useFeatch([])
    console.log(country.capital);
    return(
        <>
            <div>
                <h5>{setCountry.capital} is the capital of</h5>
                {country.map((capitals) => {
                    country.length = 4;
                     return (
                        <div key={country._id}>
                    <button className="button_choice"> {capitals.capital}</button>
                   </div>

                     )
                }  )}
                <Link to='./SecondRuning'> <button className="next">Next</button></Link>
            </div>
        </>
    )
}

export default FirstRuning


    //    </div >
    //                         <div>
    //                 <button className="button_choice">B{capitals.capital}</button>
    //                         </div>
    //                         <div>
    //                             <button className="button_choice">C {capitals.capital}</button>
    //                         </div>
    //                         <div>
    //                             <button className="button_choice">D {capitals.capital}</button>
    //                         </div>
    //                     </div >