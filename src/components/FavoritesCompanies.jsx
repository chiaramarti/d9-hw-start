// import { Col, Row, Button } from 'react-bootstrap'
// import { FaTrash } from 'react-icons/fa'
import { useSelector} from 'react-redux'

const FavoritesCompanies = () => {
    const { favorites } = useSelector(state => state);
  
    return (
      <div>
        <h1>Favorites</h1>
        <ul>
          {favorites.map(company => (
            <li key={company._id}>{company.company_name}</li>
          ))}
        </ul>
      </div>
    );
  };

 export default FavoritesCompanies;
  