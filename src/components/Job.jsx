import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Job = ({ data }) => {
  const dispatch = useDispatch();
  
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
        </Col>
        <Col xs={3}>
        <Button
          className="p-1 me-2"
          onClick={() => {
            // qui aggiungimo l'azienda (ovvero ricreaiamo l'array di aziende preferite)
            dispatch({
              // gli diciamo a che azione deve rispondere
              type: "ADD_TO_FAV_COMPANY",
              // e cosa/dove deve andare a mettere l'elemento
              payload: data,
            });
          }}
        >
          ADD FAVOURITE
        </Button>
      </Col>
    </Row>
  );
}

export default Job;
