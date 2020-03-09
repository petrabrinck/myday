import React, { useEffect, useState } from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MyDay } from './components/MyDay'
import { Header } from './components/Header'
import { MyDay2 } from './components/MyDay2'
import { MyDayForm } from './components/MyDayForm'

// import './App.css';

// const url = "https://project-happy-thoughts-api.herokuapp.com/"
const url = "https://localhost:8080/reflection"

//Theresa added const checkboxes down below
//If time ask Jennie about down below sign
export const App = () => {
  const [reflections, setReflections] = useState([])
  const [checkboxes, setCheckboxes] = useState([])
  const [postedReflection, setPostedReflection] = useState("")

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setReflections(json))
  }, [postedReflection])

  //Theresa changed from reflection to message down below
  const handleFormSubmit = message => {
    fetch(url, {
      method: "POST",
      //Theresa changed from reflection to message down below and took away checkbox
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/json" }
    })
    //Theresa changed from reflection to message down below
      .then(() => setPostedReflection(message))
      .catch(err => console.log("error:", err))
  }
//Theresa hided down below export as we have it once already at the top
// export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact> 
          <Header />
          <MyDay />
        </Route>
        <Route path="/photos/:myday2/">
          {/* <Route path="/photos/:photoId"> */}
          <MyDay2 onFormSubmit={handleFormSubmit} />
          <MyDayForm />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}



export default App;
