import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { crearRecetaAPI, editarRecetaAPI } from "../../helpers/queries";
import Swal from "sweetalert2";
import { FormGroup, Row, Container, Col, Button, Form } from "react-bootstrap";
import { PiPlusSquareLight } from "react-icons/pi";
import { useState } from "react";

const FormularioReceta = ({editar, titulo}) => {

    const {
        register,
        handleSubmit,
        formState:{errors},
        reset,
        watch,
        setValue

    }= useForm()
    
    const {id} = useParams()
       
    const recetaValidada=async(receta)=>{
        if(editar){
            // Logica editar
            const response = await editarRecetaAPI(receta, id)
            if(response.status === 200){
                Swal.fire({
                    title: "¡Receta modificada!",
                    text: `La receta ${receta.nombre} fue modificada correctamente.`,
                    icon: "success"
                    })
                navegacion('/administrador')    
            }else{
                Swal.fire({
                title: "¡Error!",
                text: `La receta ${receta.nombre} no pudo ser modificada. Intente nuevamente más tarde.`,
                icon: "error"
                })
            }
        }else{
            const response  = await crearRecetaAPI(receta)
            if (response.status === 201){
                Swal.fire({
                    title: "Receta creada!",
                    text: `La receta ${receta.nombre} fue creada`,
                    icon: "success"
                    })
                    reset()
            }else{
                Swal.fire({
                title: "¡Error!",
                text: `La receta ${receta.nombre} no pudo ser creada. Intente nuevamente más tarde`,
                icon: "error"
                })
            } 
        }

    }
    const ingredientes = watch('ingredientes', []);
    const agregarIngrediente = () => {
        const nuevoIngrediente = watch('nuevoIngrediente');
        if (nuevoIngrediente) {
          setValue('ingredientes', [...ingredientes, nuevoIngrediente]);
          setValue('nuevoIngrediente', ''); // Limpiar el campo después de agregar
        }
      };

      const borrarIngrediente = (index) => {
        const nuevosIngredientes = [...ingredientes];
        nuevosIngredientes.splice(index, 1);
        setValue('ingredientes', nuevosIngredientes);
      };
      

    return (
        <main>
            <Container className="my-5">
                <Form onSubmit={handleSubmit(recetaValidada)}>
                    <h1>{titulo}</h1>
                    <hr />
                    <Row>
                        <FormGroup as={Col} sm={12}>
                            <Form.Label>Nombre*</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ej: Bucatini a la Amatriciana"
                                // required
                                // minLength={5}
                                // maxLength={50}
                                {...register("nombre",{
                                    required: "El nombre del producto es obligatorio",
                                    minLength: {
                                        value:5,
                                        message: "El nombre de la receta debe tener como minimo 5 caracteres"
                                    },
                                    maxLength: {
                                        value:50,
                                        message: "El nombre de la receta debe tener como maximo 50 caracteres"
                                    }
                                })}
                            />
                            <Form.Text className="text-danger">
                                {errors.nombre?.message}
                            </Form.Text>
                        </FormGroup>
                        <FormGroup as={Col} sm={12}>
                                <Form.Label>Fecha*</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ej: 01 - Enero - 2020"
                                    {...register("fecha",{
                                        required: "La fecha de creacion de la receta es obligatoria",
                                        pattern: {
                                            value: /^(0[1-9]|[12][0-9]|3[01]) - (Enero|Febrero|Marzo|Abril|Mayo|Junio|Julio|Agosto|Septiembre|Octubre|Noviembre|Diciembre) - \d{4}$/,
                                            message: "Formato de fecha no válido. Utilice el formato 'dd - Mes - yyyy'."
                                          }
                                    })}
                                    
                                />
                                <Form.Text className="text-danger">
                                {errors.fecha?.message}
                                </Form.Text>
                        </FormGroup>
                        <FormGroup as={Col} sm={12}>
                                <Form.Label>Imagen (URL)*</Form.Label>
                                <Form.Control
                                    type="url"
                                    // required
                                    placeholder="Ej: https://papafelice.com/cdn/shop/articles/Risotto_a_la_Milanese-min.jpg"
                                    {...register("imagen",{
                                        required: "La URL de la imagen del producto es obligatoria",
                                        pattern:{
                                            value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                                            message: "Debe ingresar una URL valida (jpg|jpeg|gif|png)"
                                        }
                                    })}
                                />
                                <Form.Text className="text-danger">
                                    {errors.imagen?.message}
                                </Form.Text>
                        </FormGroup>
                        <FormGroup as={Col} sm={12}>
                                <Form.Label>Descripción*</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ej: El Risotto a la Milanese no necesita presentación. Muy pocos ingredientes para un plato histórico que representa a la ciudad de Milán..."
                                    // required
                                    // minLength={10}
                                    // maxLength={150}
                                    {...register("descripcion",{
                                        required: "La descripción es obligatoria",
                                        minLength: {
                                            value:50,
                                            message: "La descripción de la receta debe tener como minimo 50 caracteres"
                                        },
                                        maxLength: {
                                            value:1000,
                                            message: "La descripción de la receta debe tener como maximo 1000 caracteres"
                                        }
                                    })}
                                />
                                <Form.Text className="text-danger">{errors.descripcion?.message}</Form.Text>
                        </FormGroup>
                        <FormGroup as={Col} sm={12}>
                                <Form.Label>Video (URL)*</Form.Label>
                                <Form.Control
                                    type="url"
                                    // required
                                    placeholder="Ej: https://www.youtube.com/embed/yVwIJSsDrKY?si=-z1ZXM_ZS_nIIC7s"
                                    {...register("video",{
                                        required: "La URL del video obligatoria",
                                        pattern:{
                                            value : /^https:\/\/www\.youtube\.com\//,
                                            message: "Debe comenzar con https://www.youtube.com/ "
                                        }
                                    })}
                                />
                                <Form.Text className="text-danger">
                                    {errors.video?.message}
                                </Form.Text>
                        </FormGroup>     
                         <FormGroup as={Col} sm={12}>
                            <Form.Label>Ingredientes*</Form.Label>
                            <div className="d-flex">
                            <Form.Control
                            type="text"
                            placeholder="Ej: Harina"
                            {...register("nuevoIngrediente")}
                            />
                            <Button type="button" variant="link" onClick={agregarIngrediente}>
                                <PiPlusSquareLight className="align-self-center fs-3 text-primary"></PiPlusSquareLight>
                            </Button>
                            </div>
                            
                            <Form.Text className="text-danger">{errors.ingredientes?.message}</Form.Text>            
                        </FormGroup>
                        
                        <FormGroup as={Col} sm={12}>
                            <Form.Label>Lista de Ingredientes: </Form.Label>
                            <ul>
                            {ingredientes.map((ingrediente, index) => (
                                <li key={index}>
                                    {ingrediente}
                                    <Button
                                    type="button"
                                    variant="link"
                                    onClick={() => borrarIngrediente(index)}
                                    className="ml-2"
                                    >
                                    -
                                    </Button>
                                </li>
                            ))}
                            </ul>
                        </FormGroup> 
                               
                    </Row>
                    <Button type="submit" variant="success" className="mt-3">Guardar</Button>                    
                </Form>
            </Container>
        </main>
    );
};

export default FormularioReceta;