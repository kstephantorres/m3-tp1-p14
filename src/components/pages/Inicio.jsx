import { Card, Container, Button } from "react-bootstrap";
import banner from "../../assets/papafelice-banner.png"

const Inicio = () => {
    return (
        <main>
            <Container className="my-4">
                <div className="text-center">
                    <img src={banner} alt="" id="banner" />
                    <Card >
                        <Card.Header>
                            <Card.Title>
                                ¡Elige tu Combo Favorito!
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                            Nuestros KITS son atajos de despensa para deliciosos platos italianos. Combinan diferentes salsas, aceites, pastas y sabores a tú necesidad.
                            </Card.Text>
                        </Card.Body>
                        <div className="text-end m-2">
                        <Button variant="success">Compra ahora</Button>
                        </div>
                    </Card>
                </div>
            </Container>
        </main>
    );
};

export default Inicio;