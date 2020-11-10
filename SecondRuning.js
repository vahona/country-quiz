import React from 'react'
import { Link } from 'react-router-dom'

function SecondRuning() {
    return (
        <>
            <img src="" alt="flag" />
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
            <Link to='./Score'> <button className="next">Next</button></Link>
        </>
    )
}

export default SecondRuning