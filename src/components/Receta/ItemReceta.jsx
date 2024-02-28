import Swal from "sweetalert2";
import { borrarRecetaAPI, leerRecetasAPI } from "../../helpers/queries";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PiNotePencil } from "react-icons/pi";
import { PiTrash } from "react-icons/pi";
import IngredienteItem from "./IngredienteItem";

const ItemReceta = ({receta, setRecetas}) => {

    const borrarReceta =()=>{
        Swal.fire({
            title: "¿Estas seguro de eliminar la receta?",
            text: "No se puede revertir este proceso",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Borrar",
            cancelButtonText: "Cancelar"
          }).then(async (result) => {
            if (result.isConfirmed) {
              const response = await borrarRecetaAPI(receta.id)
              if(response.status === 200){
                Swal.fire({
                    title: "¡Receta eliminada!",
                    text: `La receta "${receta.nombre}" fue eliminada correctamente`,
                    icon: "success"
                  });
                const  recetasActualizadas = await leerRecetasAPI()
                console.log("🚀 ~ borrarProducto ~ productosActualizados:", recetasActualizadas)
                setRecetas(recetasActualizadas)
              }else{
                Swal.fire({
                    title: "¡Ocurrio un error!",
                    text: `La receta "${receta.nombre}" no fue eliminada. Intentelo nuevamente más tarde.`,
                    icon: "error"
                  });
              }
            }
          });
    }

    return (
        <tr>
            {/* <td>{receta.id}</td> */}
            <td>{receta.nombre}</td>
            <td>{receta.fecha}</td>
            <td className="text-center"><img src={receta.imagen} alt={receta.nombre} className="img-thumbnail" width={300}/></td>
            <td>{receta.descripcion}</td>
            <td>
                <ul>
                    {receta.ingredientes && receta.ingredientes.map((ingrediente, index)=> <IngredienteItem key={index} ingrediente={ingrediente}></IngredienteItem>)}
                </ul>
            </td>
            <td>{receta.video}</td>
            <td className="text-center">
                <Button variant="link" as={Link} to={'/administrador/editar/'+receta.id} className="p-0" >
                    <PiNotePencil className="fs-3 text-warning me-1"/>
                </Button>
                <Button variant="link" className="p-0" onClick={borrarReceta}>
                    <PiTrash className="fs-3 text-danger ms-1"/>
                </Button>
            </td> 
        </tr>
    );
};

export default ItemReceta;