import React,{useState,useEffect,useRef} from "react";
import '../Styles/Header.css'
function Header({filter,setFilter}){
  return(
  <div className="header">
    <h3>E-BOOK</h3>
    <div className="btn">
    <button className="home">Home</button>
    <button className="favoritebtn">Favorite</button>
    <select name="filter" className="filters">
      <option value="All">Categaries</option>
      <option value="action">Action</option>
      <option value="horror">Horror</option>
      <option value="adventure">Adventure</option>
      <option value="comedy">Comedy</option>
      <option value="feel good">Feel good</option>
    </select>
  </div>
    <div className="both">
    <div className="search-box">
    <span className="search-icon">🔍</span>
    <input type="text" placeholder="Title,Author,Genre " value={filter} onChange={(e) => setFilter(e.target.value)}/>
    </div>
    <button className="login">😀</button>
    </div>
  </div>)
}
export default Header