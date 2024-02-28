import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PiPlusSquareLight } from "react-icons/pi";
import { useEffect, useState } from "react";
import { leerRecetasAPI } from "../../helpers/queries";
import ItemReceta from "../Receta/ItemReceta";

const Administrador = () => {

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
           <Container className="my-5">
           <div className="d-flex justify-content-between mt-5 mb-3 align-items-center">
                    <h2>Productos disponibles</h2>
                    <Link to={'/administrador/crear'}>
                        <PiPlusSquareLight  className="align-self-center fs-3 text-primary"/>
                    </Link> 
                </div>
                <hr />
                <section className="tableAdmin">
                    <Table striped bordered hover > 
                        <thead>
                            <tr>
                                {/* <th>Cod</th> */}
                                <th>Nombre</th>
                                <th>Fecha</th>
                                <th>URL de Imagen</th>
                                <th>Descripcion</th>
                                <th>Ingredientes</th>
                                <th>Video</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                recetas.map((receta)=><ItemReceta key={receta.id} receta={receta} setRecetas={setRecetas}></ItemReceta>)
                            }
                        </tbody>
                    </Table>
                </section>
            </Container> 
        </main>
    );
};

export default Administrador;