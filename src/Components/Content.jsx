import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";

function Content() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchbook = async () => {
      const keywords = ['action','adventure','comedy','romance'];
       const randomWord = keywords[Math.floor(Math.random() * keywords.length)];
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${randomWord}&filter=ebooks&maxResults=12`);
        const data = await response.json();
        setBooks(data.items || []);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    
    fetchbook(); 
  }, []);

  return (
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
          <p><span>{book.volumeInfo?.description?.substring(0, 100) || "No description available"}...</span></p>
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
          <button className="favorite">🤍</button>
        </div>
      ))}
    </div>
  );
}

export default Content;