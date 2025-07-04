import React,{useState,useEffect,useRef} from "react";
  function Card(){
    return(
      <div className="Card">
        <img src="" alt="Preview not there" />
        <h4 className="Title">{Title}</h4>
        <h5 className="Author">{Author}</h5>
        <p><span>More...</span></p>
        <button  onClick={() => window.open(/*add a preview page link*/</div>, "_blank")} className="preview">Preview</button>

      </div>
    )
}
export default Card