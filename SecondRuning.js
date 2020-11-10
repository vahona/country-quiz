import React from 'react'
import { Link } from 'react-router-dom'
import useFeatch from './useFeatch'

function SecondRuning() {

    const [country, setCountry] = useFeatch([])
    return (
        <>
        { country.map((countri) => {
            country.length = 1 
            return (
                <>
            <img className="flags" src={countri.flag} alt="flag" />
            <h5>Which country does this flag belong to?</h5>
            <div>
                <button className="button_choice">{countri.name}</button>
            </div>
            </>
            )
        })
    }
            <Link to='./Score'> <button className="next">Next</button></Link>
        </>
    )
}

export default SecondRuning