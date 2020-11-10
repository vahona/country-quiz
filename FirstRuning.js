import React from 'react'
import { Link } from 'react-router-dom'
import FeatchFullInformation from './Components/FeactFullCountries'

function FirstRuning() {
    return(
        <>
            <div>
                <h5>??? is the capital of</h5>
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
                <Link to='./SecondRuning'> <button className="next">Next</button></Link>
            </div>
        </>
    )
}

export default FirstRuning