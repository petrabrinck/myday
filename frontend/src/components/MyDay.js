import React, { useEffect, useState } from 'react'
import './myday.css'
import { Link } from 'react-router-dom'

const apiKey = `563492ad6f917000010000016674d16c530e444482c459f1837b2a47`
const url = "https://api.pexels.com/v1/search?query=example+paradise&per_page=30&page=1"

export const MyDay = ({data}) => {
  const [photos, setPhotos] = useState([])
  const [summary, setSummary] = useState([])

  useEffect(() => {
    fetch(url, { headers: { Authorization: apiKey } })
      .then(res => res.json())
      .then(json => {
        setPhotos(json.photos)
        console.log(json)
      })
  }, [])

  const TheSetDays = ({data}) => {
    // const data = [data]
    const photos = [photos]
    const summary = data.concat([photos]) 
  }



  // const Summary
  // const photos = [photos]
  // const data = [data]

  // const summary = [].concat({photos}, {data})



  // function goBack() {
  //     window.history.back();
  //   }
  
  console.log(data)
  console.log(photos)
  console.log(summary)

  return (
    <div className="myDayContainer">
      {photos.map((photo) => (
        <div className="myDayPhotos" key={photo.id}>
          <Link to={`/photos/${photo.id}`}>
            <img src={photo.src.tiny} />
            <h3>{photo.photographer} </h3>  
          </Link>
        </div>
      ))}
    </div>
  )
}
