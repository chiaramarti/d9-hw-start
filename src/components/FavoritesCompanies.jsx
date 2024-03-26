import { useSelector, useDispatch } from "react-redux";
import { Button, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const FavoritesCompanies = () => {
  const favoriteCompanies = useSelector((state) => state.companyFav.content)
  
  const dispatch = useDispatch();

  const removeFromFavorites = (index) => {
    dispatch({
      type: "REMOVE_FROM_FAV_COMPANY",
      payload: index,
    });
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="display-4 my-3">Your Favorites Companies</h1>
      </div>
      <ListGroup>
        {favoriteCompanies.map((companies, index) => {
          return(
          <ListGroupItem key={index} className="d-flex flex-row justify-content-between">
            <Link to={`/${companies.company_name}`}>{companies.company_name}</Link>
            <Button
              className="p-1 me-2 justify-self-end"
              onClick={() => removeFromFavorites(index)}
            >
              REMOVE FAVOURITE
            </Button>
          </ListGroupItem>
        )})}
      </ListGroup>
    </Container>
  );
};

export default FavoritesCompanies;


  