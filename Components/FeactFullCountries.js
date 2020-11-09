import React, { useEffect, useState } from 'react'
import useFeatch from '../useFeatch'


function FeatchFullInformation(props) {
    const [country, setCountry] = useFeatch([])
  


    return (
        <>
        <div>
            {country.map((flags) => {
                console.log(flags);
                <img src={flags.flag} alt="flag"/>
              })}
                <h5>Which country does this flag belong to?</h5>
                <div>
                    <button className="button_choice">A ????</button>
                </div>
                <div>
                    <button className="button_choice">B ????</button>
                </div>
                <div>
                    <button className="button_choice">C ???</button>
                </div>
                <div>
                    <button className="button_choice">D ???</button>
                </div>
        </div>
        </>
    )
}


export default FeatchFullInformation