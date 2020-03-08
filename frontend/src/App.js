import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MyDay } from './components/MyDay'
import { Header } from './components/Header'
import { MyDay2 } from './components/MyDay2'

// import './App.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact> 
          <Header />
          <MyDay />
        </Route>
        <Route path="/photos/:myday2/">
          {/* <Route path="/photos/:photoId"> */}
          <MyDay2 />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}



export default App;
