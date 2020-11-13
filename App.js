import React from 'react'
import FirstRuning from './FirstRuning'
import FeacthingCapital from './Components/FeacthingCapital'
import { Route, Switch } from 'react-router-dom'
import Score from './Score'
import SecondRuning from './SecondRuning'

function App() {


  return (
    <>
      <FeacthingCapital/>
      <Switch>
        <Route exact path="/">
          <FirstRuning />
        </Route>
        <Route exact path="/FirstRuning">
          <FirstRuning />
        </Route>
        <Route path="/SecondRuning">
          <SecondRuning />
        </Route>
        <Route path="/Score">
          <Score />
        </Route>
      </Switch>
    </>
  )
}

export default App