import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './myday2.css'

const questionsGroup = ['I feel happy today', 'I feel strong']
const questionsGroup2 = ['I took a walk', 'I went to the gym']

// export const MayDay2 = () => {
//     //   const [name, setName] = useState("")
//     const [question1, setquestion1] = useState() 

export const MyDay2 = () => {
    const { myDay2 } = useParams()
    const [questions1, setQuestions1] = useState()
    const [questions2, setQuestions2] = useState()
    const [photo, setPhoto] = useState([])

    return (
        <section className="myDay2Container">
            <div className="header2">
                <h1>Hey there beautiful!</h1>
                <p>How was your day?</p>
            </div>
            <div className="Questions1">
                {questionsGroup.map(group => (
                    <label key={group}>
                        <input className="questions1"
                            type="checkbox"


                            value={group}
                            onChange={event => setQuestions1(event.target.value)}
                            checked={questions1 === group}
                        />
                        {group}
                    </label>
                ))}
            </div>

            {/* second row  */}

            <div className="Questions2">
                {questionsGroup2.map(group => (
                    <label key={group}>
                        <input className="questions2"
                            type="checkbox"


                            value={group}
                            onChange={event => setQuestions2(event.target.value)}
                            checked={questions2 === group}
                        />
                        {group}
                    </label>
                ))}
            </div>
        </section>
    )
}
