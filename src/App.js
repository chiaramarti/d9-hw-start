import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { Col, Container, Row } from "react-bootstrap";
import FavCompaniesIndicator from "./components/FavCompaniesIndicator.jsx";
import FavoritesCompanies from "./components/FavoritesCompanies.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Container className="epizon-container">
        <Row>
          <Col className="text-center background-div">
            <Link to="/">
              <h1>Find your smart work!</h1>
            </Link>
          </Col>
          <FavCompaniesIndicator />
        </Row>
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/:company" element={<CompanySearchResults />} />
          <Route path="/favorites" element={<FavoritesCompanies />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
