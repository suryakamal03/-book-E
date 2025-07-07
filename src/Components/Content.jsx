import React, { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Card from "./Card.jsx";
function Content() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [books, setBooks] = useState([]); // Action books
  const [adventures, setAdventures] = useState([]); // Adventure books
  const [horrors, setHorror] = useState([]); // Horror books
  const [comedys,setComedy] = useState([]); // romance bokk
  const [romances,setRomance] = useState([]);
  const [trillers,setTriller] = useState([]);
  const [scifis,setScifi] = useState([]);
  const [fantasys,setFantasys] = useState([]);

  const [isLoading,setLoading] = useState(true);
  const [fetchLoading,setfetchLoading] =useState(true);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setfetchLoading(true);
  };

  useEffect(() => {
    const fetchbook = async () => {
      try {
        
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=action&filter=ebooks&maxResults=20`);
        const adven = await fetch(`https://www.googleapis.com/books/v1/volumes?q=adventure&filter=ebooks&maxResults=20`);
        const horr = await fetch(`https://www.googleapis.com/books/v1/volumes?q=horror&filter=ebooks&maxResults=20`);
        const com = await fetch(`https://www.googleapis.com/books/v1/volumes?q=comedy&filter=ebooks&maxResults=20`);
        const rom = await fetch(`https://www.googleapis.com/books/v1/volumes?q=romance&filter=ebooks&maxResults=20`);
        const tri = await fetch(`https://www.googleapis.com/books/v1/volumes?q=tri&filter=ebooks&maxResults=20`);
        const sci = await fetch(`https://www.googleapis.com/books/v1/volumes?q=sciencefiction&filter=ebooks&maxResults=20`);
        const fan = await fetch(`https://www.googleapis.com/books/v1/volumes?q=fantasy&filter=ebooks&maxResults=20`);
        
        const data = await response.json(); // action
        const data2 = await adven.json();
        const data3 = await horr.json();
        const data4 = await com.json();
        const data5 = await rom.json();
        const data6 = await tri.json();
        const data7 = await sci.json();
        const data8 = await fan.json();
        
        setLoading(true);
        setBooks(data.items || []);
        setAdventures(data2.items || []);
        setHorror(data3.items || []);
        setComedy(data4.items || []);
        setRomance(data5.items || []); 
        setTriller(data6.items || []);
        setScifi(data7.items || []);
        setFantasys(data8.items || []);

        if (searchQuery.trim() !== "") {
          const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&filter=ebooks&maxResults=20`);
          const searchdata = await res.json();
          setSearchResults(searchdata.items || []);
        } else {
          setSearchResults([]); // Clear results when query is empty
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }finally{
        setLoading(false)
      }
    };

    fetchbook();
  }, [searchQuery]);

  return (
    <div className="totalwrap">
      <Header onSearch={handleSearch} />
      {searchQuery ? (
        <div className="wrap">
          <h2>Search Results</h2>
           {fetchLoading ? (
  <div className="content">
    {[...Array(6)].map((_, i) => (
      <div className="Card skeleton" key={i}></div>
    ))}
  </div>
) : (
          <div className="contents">
            {searchResults.map((book, index) => (
              <div key={book.id || index} className="Card">
                <img
                  src={book.volumeInfo?.imageLinks?.thumbnail || ""}
                  alt={book.volumeInfo?.title || "Book cover"}
                  width={100}
                  height={150}
                />
                <h4 className="Title">{book.volumeInfo?.title || "No Title"}</h4>
                <h5 className="Author">
                  {book.volumeInfo?.authors?.join(", ") || "Unknown Author"}
                </h5>
                <p>
                  <span>
                    {book.volumeInfo?.description?.substring(0, 20) || "No description available"}...
                  </span>
                </p>
                <button className="preview">
                  <a
                    href={book.volumeInfo?.previewLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Preview
                  </a>
                </button>
                <button className="favorite">🤍</button>
              </div>
            ))}
          </div>
)}
        </div>
      ) : (
        <>
          {/* Action Section */}
          <div className="wrap">
            <h2 className="Genre">Action</h2>
            {isLoading ? (
  <div className="content">
    {[...Array(6)].map((_, i) => (
      <div className="Card skeleton" key={i}></div>
    ))}
  </div>
) : (
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
                  <p>
                    <span>
                      {book.volumeInfo?.description?.substring(0, 20) || "No description available"}...
                    </span>
                  </p>
                  <button className="preview">
                    <a
                      href={book.volumeInfo?.previewLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Preview
                    </a>
                  </button>
                  <button className="favorite">🤍</button>
                </div>
              ))}
            </div>
)}
          </div>

          {/* Adventure Section */}
          <div className="wrap">
            <h2 className="Genre">Adventure</h2>
            {isLoading ? (
  <div className="content">
    {[...Array(6)].map((_, i) => (
      <div className="Card skeleton" key={i}></div>
    ))}
  </div>
) : (
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
                  <p>
                    <span>
                      {adventure.volumeInfo?.description?.substring(0, 20) || "No description available"}...
                    </span>
                  </p>
                  <button className="preview">
                    <a
                      href={adventure.volumeInfo?.previewLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Preview
                    </a>
                  </button>
                  <button className="favorite">🤍</button>
                </div>
              ))}
            </div>
)}
          </div>
          
          {/* triller Section */}
          <div className="wrap">
            <h2 className="Genre">Triller</h2>
            {isLoading ? (
  <div className="content">
    {[...Array(6)].map((_, i) => (
      <div className="Card skeleton" key={i}></div>
    ))}
  </div>
) : (
            <div className="content">
              {trillers.map((triller, index) => (
                <div key={triller.id || index} className="Card">
                  <img
                    src={triller.volumeInfo?.imageLinks?.thumbnail || ""}
                    alt={triller.volumeInfo?.title || "Book cover"}
                    width={100}
                    height={150}
                  />
                  <h4 className="Title">{triller.volumeInfo?.title || "No Title"}</h4>
                  <h5 className="Author">{triller.volumeInfo?.authors?.join(", ") || "Unknown Author"}</h5>
                  <p>
                    <span>
                      {triller.volumeInfo?.description?.substring(0, 20) || "No description available"}...
                    </span>
                  </p>
                  <button className="preview">
                    <a
                      href={triller.volumeInfo?.previewLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Preview
                    </a>
                  </button>
                  <button className="favorite">🤍</button>
                </div>
              ))}
            </div>
)}
          </div>
          
          {/* scifi Section */}
          <div className="wrap">
            <h2 className="Genre">Sci-fi</h2>
            {isLoading ? (
  <div className="content">
    {[...Array(6)].map((_, i) => (
      <div className="Card skeleton" key={i}></div>
    ))}
  </div>
) : (
            <div className="content">
              {scifis.map((scifi, index) => (
                <div key={scifi.id || index} className="Card">
                  <img
                    src={scifi.volumeInfo?.imageLinks?.thumbnail || ""}
                    alt={scifi.volumeInfo?.title || "Book cover"}
                    width={100}
                    height={150}
                  />
                  <h4 className="Title">{scifi.volumeInfo?.title || "No Title"}</h4>
                  <h5 className="Author">{scifi.volumeInfo?.authors?.join(", ") || "Unknown Author"}</h5>
                  <p>
                    <span>
                      {scifi.volumeInfo?.description?.substring(0, 20) || "No description available"}...
                    </span>
                  </p>
                  <button className="preview">
                    <a
                      href={scifi.volumeInfo?.previewLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Preview
                    </a>
                  </button>
                  <button className="favorite">🤍</button>
                </div>
              ))}
            </div>
)}
          </div>
          
          {/* fantancy Section */}
          <div className="wrap">
            <h2 className="Genre">Fantacy</h2>
            {isLoading ? (
  <div className="content">
    {[...Array(6)].map((_, i) => (
      <div className="Card skeleton" key={i}></div>
    ))}
  </div>
) : (
            <div className="content">
              {fantasys.map((fantasy, index) => (
                <div key={fantasy.id || index} className="Card">
                  <img
                    src={fantasy.volumeInfo?.imageLinks?.thumbnail || ""}
                    alt={fantasy.volumeInfo?.title || "Book cover"}
                    width={100}
                    height={150}
                  />
                  <h4 className="Title">{fantasy.volumeInfo?.title || "No Title"}</h4>
                  <h5 className="Author">{fantasy.volumeInfo?.authors?.join(", ") || "Unknown Author"}</h5>
                  <p>
                    <span>
                      {fantasy.volumeInfo?.description?.substring(0, 20) || "No description available"}...
                    </span>
                  </p>
                  <button className="preview">
                    <a
                      href={fantasy.volumeInfo?.previewLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Preview
                    </a>
                  </button>
                  <button className="favorite">🤍</button>
                </div>
              ))}
            </div>
)}
          </div>

          {/* comedy Section */}
          <div className="wrap">
            <h2 className="Genre">Comedy</h2>
            {isLoading ? (
  <div className="content">
    {[...Array(6)].map((_, i) => (
      <div className="Card skeleton" key={i}></div>
    ))}
  </div>
) : (
            <div className="content">
              {comedys.map((comedys, index) => (
                <div key={comedys.id || index} className="Card">
                  <img
                    src={comedys.volumeInfo?.imageLinks?.thumbnail || ""}
                    alt={comedys.volumeInfo?.title || "Book cover"}
                    width={100}
                    height={150}
                  />
                  <h4 className="Title">{comedys.volumeInfo?.title || "No Title"}</h4>
                  <h5 className="Author">{comedys.volumeInfo?.authors?.join(", ") || "Unknown Author"}</h5>
                  <p>
                    <span>
                      {comedys.volumeInfo?.description?.substring(0, 20) || "No description available"}...
                    </span>
                  </p>
                  <button className="preview">
                    <a
                      href={comedys.volumeInfo?.previewLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Preview
                    </a>
                  </button>
                  <button className="favorite">🤍</button>
                </div>
              ))}
            </div>
)}
          </div>
          
          {/* Romance Section */}
          <div className="wrap">
            <h2 className="Genre">Romance</h2>
          {isLoading ? (
  <div className="content">
    {[...Array(6)].map((_, i) => (
      <div className="Card skeleton" key={i}></div>
    ))}
  </div>
) : (
            <div className="content">
              {romances.map((romance, index) => (
                <div key={romance.id || index} className="Card">
                  <img
                    src={romance.volumeInfo?.imageLinks?.thumbnail || ""}
                    alt={romance.volumeInfo?.title || "Book cover"}
                    width={100}
                    height={150}
                  />
                  <h4 className="Title">{romance.volumeInfo?.title || "No Title"}</h4>
                  <h5 className="Author">{romance.volumeInfo?.authors?.join(", ") || "Unknown Author"}</h5>
                  <p>
                    <span>
                      {romance.volumeInfo?.description?.substring(0, 20) || "No description available"}...
                    </span>
                  </p>
                  <button className="preview">
                    <a
                      href={romance.volumeInfo?.previewLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Preview
                    </a>
                  </button>
                  <button className="favorite">🤍</button>
                </div>
              ))}
            </div>
)}
          </div>

          {/* Horror Section */}
          <div className="wrap">
            <h2 className="Genre">Horror</h2>
            {isLoading ? (
  <div className="content">
    {[...Array(6)].map((_, i) => (
      <div className="Card skeleton" key={i}></div>
    ))}
  </div>
) : (
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
                  <p>
                    <span>
                      {horror.volumeInfo?.description?.substring(0, 20) || "No description available"}...
                    </span>
                  </p>
                  <button className="preview">
                    <a
                      href={horror.volumeInfo?.previewLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Preview
                    </a>
                  </button>
                  <button className="favorite">🤍</button>
                </div>
              ))}
            </div>
)}
          </div>
        </>
      )}
    </div>
  );
}

export default Content;
