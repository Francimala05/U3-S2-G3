import { useEffect, useState } from 'react';
import { Card, Row } from 'react-bootstrap';

const Marvel = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://www.omdbapi.com/?apikey=ec01593d&s=Marvel')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        if (data.Response === 'True') {

          setMovies(data.Search.slice(0, 6));
        } else {
          throw new Error(data.Error); 
        }
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="ms-5 mt-5">
      <h4 style={{ color: 'white', marginBottom: '20px' }}>Marvel Movies</h4>
      <Row className="gap-4">
        {movies.map((movie, index) => {
          return (
            <div key={index} style={{ width: '13rem'}}> 
              <Card className="bg-dark border-0">
                <Card.Img variant="top" style={{ width: '13rem', height: '20rem'}} src={movie.Poster} alt={movie.Title} />
             
              </Card>
              <h3 style={{ color: 'white', marginTop: '5px', fontSize:'15px' }}>{movie.Title}</h3> 
            </div>
          );
        })}
      </Row>
   </div>
  );
};

export default Marvel;