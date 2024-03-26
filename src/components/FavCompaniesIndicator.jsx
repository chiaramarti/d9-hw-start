import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'; 
import { useSelector } from 'react-redux';

const FavCompaniesIndicator = () => {
  const favoriteCompanies = useSelector(state => state.favorite.content);
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-end my-4">
      <Button onClick={() => navigate('/favorites')} className="d-flex align-items-center">
        <FaHeart /> {/* Icona del cuore */}
        <span className="ms-2">{favoriteCompanies.length}</span>
      </Button>
    </div>
  );
};

export default FavCompaniesIndicator;
