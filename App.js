import React from 'react'
import FeatchFullInformation from './Components/FeactFullCountries'
import FirstRuning from './FirstRuning'
import FeacthingCapital from './Components/FeacthingCapital'
import { Route, Router, Switch } from 'react-router-dom'
import Score from './Score'
import SecondRuning from './SecondRuning'

function App() {
    return(
        <>
        <h1>Country quiz</h1>
        <FeacthingCapital/>
        <Switch>
            <Route exact path="/">
                <FirstRuning />
            </Route>
            <Route path="/SecondRuning">
                    <SecondRuning/>
            </Route>
            <Route path="/Score">
                <Score/>
            </Route>
            </Switch>
        </>
    )
}

export default App