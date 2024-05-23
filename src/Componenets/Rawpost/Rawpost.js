import React, { useEffect, useState } from 'react';
import axios from '../../Axios';
import { API_KEY,imageUrl } from '../../Constants/Constant';
import './Rawpost.css'
import YouTube from 'react-youtube';
function Rawpost(props) {

  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  useEffect(()=>{
    axios.get(props.urls).then((reponse)=>{
      setMovies(reponse.data.results);
    })
  },[]);
  const handleMovie = (id) =>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0]);
      }
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
              <img onClick={()=>handleMovie(obj.id)} className={props.isSmall? 'smallPoster': 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="Poster" />
          )}
        </div>
        {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default Rawpost