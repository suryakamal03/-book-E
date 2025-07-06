import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";

function Content() {
  const [books, setBooks] = useState([]);// i put action as books ok 
  const [adventures,setAdventures] = useState([]);//adventure
  const [horrors,setHorror] = useState([]);//horror
  useEffect(() => {
    const fetchbook = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=action&filter=ebooks&maxResults=20`);
        const adven = await fetch(`https://www.googleapis.com/books/v1/volumes?q=adventure&filter=ebooks&maxResults=20`);
        const horr = await fetch(`https://www.googleapis.com/books/v1/volumes?q=horror&filter=ebooks&maxResults=20`);
        const data = await response.json();//action
        const data2 = await adven.json();
        const data3 = await horr.json();
        setBooks(data.items || []);
        setAdventures(data2.items || []);//adventure type books
        setHorror(data3.items || []);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    
    fetchbook(); 
  }, []);

  return (
    <div className="totalwrap">
    <div className="wrap">
    <h2 className="Genre">action</h2>
    <div className="content">
      {books.map((book, index) => (
        <div key={book.id || index} className="Card">
          <img 
            src={book.volumeInfo?.imageLinks?.thumbnail || ""} 
            alt={book.volumeInfo?.title || "Book cover"} 
            width={100} 
            height={150}
          />
          <h4 className="Title">{book.volumeInfo?.title || "No Title"}</h4>
          <h5 className="Author">{book.volumeInfo?.authors?.join(", ") || "Unknown Author"}</h5>
          <p><span>{book.volumeInfo?.description?.substring(0, 20) || "No description available"}...</span></p>
          <button className="preview">
            <a 
              href={book.volumeInfo?.previewLink || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              Preview
            </a>
          </button>
          <button className="favorite" >🤍</button>
        </div>
      ))}
    </div>
  </div>
  <div className="wrap">
    <h2 className="Genre">Adventure</h2>
    <div className="content">
      {adventures.map((adventure, index) => (
        <div key={adventure.id || index} className="Card">
          <img 
            src={adventure.volumeInfo?.imageLinks?.thumbnail || ""} 
            alt={adventure.volumeInfo?.title || "Book cover"} 
            width={100} 
            height={150}
          />
          <h4 className="Title">{adventure.volumeInfo?.title || "No Title"}</h4>
          <h5 className="Author">{adventure.volumeInfo?.authors?.join(", ") || "Unknown Author"}</h5>
          <p><span>{adventure.volumeInfo?.description?.substring(0, 20) || "No description available"}...</span></p>
          <button className="preview">
            <a 
              href={adventure.volumeInfo?.previewLink || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              Preview
            </a>
          </button>
          <button className="favorite">🤍</button>
        </div>
      ))}
    </div>
  </div>
    <div className="wrap">
    <h2 className="Genre">Horror</h2>
    <div className="content">
      {horrors.map((horror, index) => (
        <div key={horror.id || index} className="Card">
          <img 
            src={horror.volumeInfo?.imageLinks?.thumbnail || ""} 
            alt={horror.volumeInfo?.title || "Book cover"} 
            width={100} 
            height={150}
          />
          <h4 className="Title">{horror.volumeInfo?.title || "No Title"}</h4>
          <h5 className="Author">{horror.volumeInfo?.authors?.join(", ") || "Unknown Author"}</h5>
          <p><span>{horror.volumeInfo?.description?.substring(0, 20) || "No description available"}...</span></p>
          <button className="preview">
            <a 
              href={horror.volumeInfo?.previewLink || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              Preview
            </a>
          </button>
          <button className="favorite">🤍</button>
        </div>
      ))}
    </div>
  </div>
  </div>
  );
}

export default Content;