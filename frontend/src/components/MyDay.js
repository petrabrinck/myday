import React, { useEffect, useState } from 'react'
import './myday.css'
import { Link } from 'react-router-dom'
// const url = "https://api.pexels.com/v1/search?query=example+paradise&per_page=25&page=1"
const apiKey = `563492ad6f917000010000016674d16c530e444482c459f1837b2a47`
const url = "https://api.pexels.com/v1/search?query=example+paradise&per_page=55&page=3"

export const MyDay = ({data}) => {
  const [photos, setPhotos] = useState([])
  

  useEffect(() => {
    fetch(url, { headers: { Authorization: apiKey } })
      .then(res => res.json())
      .then(json => {
        setPhotos(json.photos)
        console.log(json)
        // photos.reverse()
      })
  }, [])



  // const photoArray = [photos]
  //   photoArray.reverse()

  // const a = [1, 2, 3];
  //   a.reverse(); 

  let combo = []
  data.forEach((reflection, index) => {
    combo.push({
      reflection: reflection,
      photo: photos[index]
    })
  })
  console.log(combo)
  // console.log(data)
  // console.log(photos)

  // function goBack() {
  //     window.history.back();
  //   }
  
  
 

  return (
    <div className="myDayContainer">
      {photos.length && combo.map((item) => (
        <div className="myDayPhotos" key={item.reflection._id}>
          <Link to={`/reflections/${item.reflection._id}`}>
            <img src={item.photo.src.tiny} />
            <h3>{item.reflection.createdAt} </h3>  
          </Link>
        </div>
      ))}
    </div>
  )
}
