import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardReceta = ({receta}) => {

    return (
        <Col md={6} lg={4} xl={3} className="my-3">
            <Card className="h-100">
            <div className="overflow-hidden h-50 detalleImageContainer"> 
                <Card.Img src={receta.imagen} alt="Card image" className="object-fit-cover" />
            </div>
            <Card.Title className="mx-2">{receta.nombre}</Card.Title>
            <Card.Text className="mx-2 flex-grow-1">{receta.fecha}</Card.Text>
            <Card.Footer className="text-end">
                <Link to={'/detalle-receta/'+receta.id}>
                    <Button variant="success">Ver más</Button>
                </Link>
            </Card.Footer>
            </Card>
        </Col>
    );
};

export default CardReceta;