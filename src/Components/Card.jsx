import React,{useState} from 'react';
import '../Styles/Card.css'
  function Card({Title,Author,About,Image,Genre}){
    const [liked, setLiked] = useState(false); 
  const toggleFavorite = () => {
    setLiked(!liked);
  };
    return(
      <div className="Card">
        <h2 className='Genre'>{Genre}</h2>
        <img src={Image} alt={Title} width={10*10} />
        <h4 className="Title">{Title}</h4>
        <h5 className="Author">{Author}</h5>
        <p><span>{About}</span></p>
        <button  className="preview">Preview</button>
        <button className="favorite" onClick={toggleFavorite}>{liked ? '❤️' : '🤍'}</button>

      </div>
    )
}
export default Card