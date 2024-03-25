// import { Col, Row, Button } from 'react-bootstrap'
// import { FaTrash } from 'react-icons/fa'
import { useSelector } from 'react-redux';

const FavoritesCompanies = () => {
  const favoriteCompanies = useSelector(state => state.companyFav.content);

  return (
    <div>
      <h1>Favorites</h1>
      <ul>
        {favoriteCompanies.map(job => (
          <li key={job._id}>{job.title}</li> // Modifica qui per accedere al titolo o alle altre informazioni desiderate del lavoro
        ))}
      </ul>
    </div>
  );
};

export default FavoritesCompanies;

  