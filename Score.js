import React from 'react'
import { Link } from 'react-router-dom'
import SecondRuning from './SecondRuning'

function Score() {
    return(
        <>
        <img src="" alt="quize" />
        <h4>Result</h4>
        <p>you got ???? correct answer</p>
            <Link to="/FirstRuning"><button className="try_again">Try again</button></Link>
        </>
    )
}

export default Score