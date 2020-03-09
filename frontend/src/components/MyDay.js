import React, { useEffect, useState } from 'react'
import './myday.css'
import { Link } from 'react-router-dom'

const apiKey = `563492ad6f917000010000016674d16c530e444482c459f1837b2a47`
const url = "https://api.pexels.com/v1/search?query=example+paradise&per_page=25&page=1"

export const MyDay = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch(url, { headers: { Authorization: apiKey } })
      .then(res => res.json())
      .then(json => {
        setPhotos(json.photos)
        console.log(json)
      })
  }, [])

  // function goBack() {
  //     window.history.back();
  //   }

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
