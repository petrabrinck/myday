import React, { useEffect, useState } from 'react'
import './myday.css'
import { Link } from 'react-router-dom'

// TESTING THE CLONED PROJECT AND THE BRANCH 
// Testing opening again and pushing

const apiKey = `563492ad6f917000010000016674d16c530e444482c459f1837b2a47`
const url = "https://api.pexels.com/v1/search?query=example+beach&per_page=25&page=1"

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
        // <div className="headerInfo">
        //     <h1>My Day </h1>   
        // </div>
        <div className="myDayContainer">
            {photos.map((photo) => (
                <div className="myDayPhotos" key={photo.id}>
                    <Link to={`/photos/${photo.id}`}>
                        <img src={photo.src.tiny} />
                        <h3>{photo.photographer} </h3>
                        {/* <img src={`https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&h=130`}/> */}
                        {/* <img src={`https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&h=130`}/> */}
                        {/* <img
                    //     source={{url: photo.src.original}}
                    //     style={{width:400, height:300, marginVertical: 10, }}
                    //     alt={'picture'}
                    // />
                    // {/* <div className="Date">
                    //     <h1>{photo.original_title}</h1>
                    //     <p>Released {photo.release_date}</p>
                    // </div> */}

                        {/* <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.original_title} />   */}
                    </Link>
                </div>
            ))}
        </div>
    )
}
// export const MyDay = () => {
//     const [photos, setPhotos] = useState([])

// useEffect(() => {
//     fetch('https://api.themoviedb.org/3/movie/popular?api_key=3812b9925d12c2723ac148f3607b8bb5&language=en-US&page=1')
//     fetch('https://api.themoviedb.org/3/movie/popular?api_key=3812b9925d12c2723ac148f3607b8bb5&language=en-US&page=1')
//         .then((res) => res.json())
//         .then((json) => {
//             setPhotos(json.results)
//         })
// }, [])

// function goBack() {
//     window.history.back();
//   }

//     return (

//         <div className="movieContainer">
//             {movies.map((movie) => (
//                 <div className="moviePoster" key={movie.id}>
//                     <Link to={`/movies/${movie.id}`}>
//                     <div className="titleRelease">
//                         <h1>{movie.original_title}</h1>
//                         <p>Released {movie.release_date}</p>
//                     </div>

//                         <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.original_title} />  
//                     </Link>
//                 </div>
//             ))}
//         </div>
//     )
// }
