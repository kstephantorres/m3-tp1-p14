import { Card, Container, Button, Row } from "react-bootstrap";
import banner from "../../assets/papafelice-banner.png"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { leerRecetasAPI } from "../../helpers/queries";
import CardReceta from "../Receta/CardReceta";

const Inicio = () => {
    const [recetas, setRecetas] = useState([])

    const consultarAPI = async()=>{
        try {
            const response = await leerRecetasAPI()
            setRecetas(response)
        } catch (error) {
            console.log("🚀 ~ consultarAPI ~ error:", error)
        }       
    }

    useEffect(()=>{
        consultarAPI()
    },[])

    return (
        <main>
            <Container className="my-4">
                <section className="text-center">
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
                            <Button variant="success" as={Link} to={'error404'}>Compra ahora</Button>
                        </div>
                    </Card>
                </section>
                <section>
                    <h2>Recetas para deleitar tu paladar</h2>
                    <Row>
                        {recetas.map((receta)=><CardReceta key={receta.id} receta={receta}></CardReceta>)}
                    </Row>
                </section>
            </Container>
        </main>
    );
};

export default Inicio;