
import '../styles/Card.css'
  function Card(Title,Author,About,Image){
    return(
      <div className="Card">
        <img src={Image} alt={Title} width={10*10} />
        <h4 className="Title">{Title}</h4>
        <h5 className="Author">{Author}</h5>
        <p><span>{About}</span></p>
        <button  className="preview">Preview</button>
        <button className="favorite">🤍</button>

      </div>
    )
}
export default Card