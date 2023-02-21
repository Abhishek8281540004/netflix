import React ,{useEffect,useState} from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import { imageurl,API_KEY} from '../../constants/constants'
import axios from'../axios'
function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlid,seturlId] = useState('')
  useEffect(() => {
   axios.get(props.url).then(Response=>{
    console.log(Response.data)
    setMovies(Response.data.results)
   }).catch(err=>{
    //alert('network error')
   })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    },
  };
  const handleMovie=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        seturlId(response.data.results[0])
      }else {
        console.log('array is empty')
      }
    })
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
       
        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter': 'poster'} src={`${imageurl+obj.backdrop_path}`} alt='poster'/>
        )}
      
      
      </div>
      urlid &&  <YouTube opts={opts} videoId={urlid.key} />
    </div>
  )
}

export default RowPost
