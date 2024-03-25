import { useSelector } from "react-redux";
import { Button, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";

const FavoritesCompanies = () => {
  const favoriteCompanies = useSelector((state) => state.companyFav.content);
  const dispatch = useDispatch();

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="display-4 my-3">Your Favorites Companies</h1>
        <Link to="/">
          <Button variant="outline-secondary p-2">Go Back</Button>
        </Link>
      </div>
      <ListGroup>
        {favoriteCompanies.map((companies, i) => {
          return (
            <ListGroupItem key={i}>
              <Button
                className="p-0 me-2"
                onClick={() => {
                  // risettiamo lo stato con l'azienda selezionata
                  dispatch({
                    type: "REMOVE_ITEM",
                    payload: i,
                  });
                }}
              >
                -
              </Button>
              <Link to={`/${companies.company_name}`}>{companies.company_name}</Link>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </Container>
  );
};

export default FavoritesCompanies;

  