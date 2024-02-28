import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { obtenerRecetaAPI } from '../../helpers/queries';
import { useParams } from 'react-router-dom';
import IngredienteItem from './IngredienteItem';

const DetalleReceta = () => {
    const {id} = useParams()

    const [receta,setReceta] = useState({})
    const obtenerDatos = async()=>{
        try {
            const response = await obtenerRecetaAPI(id)
            if (response.status === 200){
                const datos = await response.json()
                setReceta(datos)
            }
        } catch (error) {
            console.log("🚀 ~ obtenerDatos ~ error:", error)
        }
    }

    useEffect(()=>{
        obtenerDatos()
    },[])
    return (
        <main>
            <Container className='my-5' >
                <Card className='flex-column flex-lg-row my-3' id="detalleContainer">
                    <Card.Img variant="top" src={receta.imagen}></Card.Img>
                    <Card.Body>
                        <Card.Title className="mx-2 text-success">{receta.nombre}</Card.Title>
                        <hr />
                        <Card.Text className="mx-2">{receta.descripcion}</Card.Text>
                    </Card.Body>
                </Card>
                <h3 className='my-4'>Ingredientes</h3>
                <ul>
                    {receta.ingredientes && receta.ingredientes.map((ingrediente, index)=> <IngredienteItem key={index} ingrediente={ingrediente}></IngredienteItem>)}
                </ul>
                <h3 className='my-4'>Preparación</h3>
                <div className='text-center'>
                    <iframe width="560" height="315" src={receta.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>                
            </Container>
        </main>
    );
};

export default DetalleReceta;