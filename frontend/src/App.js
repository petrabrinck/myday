import React, { useEffect, useState } from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MyDay } from './components/MyDay'
import { MyDayForm } from './components/MyDayForm'
import { Header } from './components/Header'
import { MyDayDetails } from './components/MyDayDetails'


// const url = "https://project-happy-thoughts-api.herokuapp.com/"
// const url = "https://myday-reflection.herokuapp.com/"
const url = "http://localhost:9000/"


//If time ask Jennie about down below sign
export const App = () => {
  // const [reflections, setReflections] = useState([])
  const [checkboxes, setCheckboxes] = useState([])
  const [postedReflection, setPostedReflection] = useState("")
  const feeling = ['I feel happy today', 'I feel strong', 'I took a walk', 'I went to the gym', 'I got a compliment', 'I gave someone a hug']
  // const feeling = ['I feel happy today', 'I feel strong', 'I took a walk', 'I went to the gym', 'I got a compliment', 'I gave someone a hug', 'I feel worried', 'I feel tired']

  // useEffect(() => {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(json => setReflections(json))
  // }, [])
// console.log(reflections)

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
      <div className="mainContainer">
        <Route path="/" exact> 
       
        <Header />
          {/* <Header />
            <NewDayButton />  */}
          <MyDay /> 
        </Route>
        <Route path="/newReflection/">
          {/* <MyDay2 /> */}
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
