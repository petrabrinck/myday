import React, { useEffect, useState } from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MyDay } from './components/MyDay'
import { MyDayForm } from './components/MyDayForm'
import { Header } from './components/Header'
import { MyDayDetails } from './components/MyDayDetails'
import { Login } from './components/Login'
import { Registration } from './components/Registration'


const url = "https://myday-reflection.herokuapp.com/"
// const url = "http://localhost:9000/"

export const App = () => {
  const [postedReflection, setPostedReflection] = useState("")
  const feeling = ['I feel happy today', 'I feel strong', 'I took a walk', 'I went to the gym', 'I got a compliment', 'I gave someone a hug']
  const handleFormSubmit = message => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => setPostedReflection(message))
      .catch(err => console.log("error:", err))
  }
  return (
    <BrowserRouter>
      <Switch>

          {/* Route for Singing up new member and logging in exicsting member */}
        <Route path="/" exact>    
        {/* Added exact above */}
        <div className="authContainer">
          <Registration />
          <Login />
        </div>
        </Route>
        {/* Route for memberpage   */}
        {/* <Route path="/MemberPage">
          <MemberPage />
        </Route> */}

        <div className="mainContainer">
          <Route path="/MyDay" > 
          {/* <Route path="/" exact>  */}
            <Header />
            <MyDay /> 
          </Route>
          <Route path="/newReflection/">
            <MyDayForm feelings={feeling} />
          </Route>
          <Route path="/reflections/:reflectionId/">
            <MyDayDetails feelings={feeling}/>
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
  )
}