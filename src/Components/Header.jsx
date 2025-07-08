import React,{useState} from "react";
import '../Styles/Header.css'
function Header({onSearch}){
  const[filter,setFilter] = useState('');
  function handleSearch(e){
    if (e.key === 'Enter'){
      onSearch(filter);
      console.log(`the filter${filter}`)
    }
  }
  
  return(
  <div className="header">
    <p>E-BOOK</p>
    <div className="btn">
    <button className="home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</button>
    <button className="favoritebtn" onClick={() =>window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>Favorite</button>
    {/* <select name="filter" className="filters">
      <option value="All">Categories </option>
      <option value="action">Action</option>
      <option value="horror">Horror</option>
      <option value="adventure">Adventure</option>
      <option value="comedy">Comedy</option>
      <option value="feel good">Feel good</option>
    </select> */}
  </div>
    <div className="both">
    <div className="search-box">
    <span className="search-icon">🔍</span>
    <input type="text" placeholder="Title,Author,Genre " value={filter} onChange={(e) => setFilter(e.target.value)} onKeyDown={handleSearch}/>
    </div>
    <button className="login">👤</button>
    </div>
  </div>)
}
export default Header