const URL_recetas = import.meta.env.VITE_API_RECETAS
console.log("🚀 ~ URL_recetas:", URL_recetas)

export const leerRecetasAPI = async()=>{
    try {
        const response = await fetch(URL_recetas)
        const listaRecetas = await response.json()
        return listaRecetas
        
    } catch (error) {
        console.log("🚀 ~ leerRecetasAPI ~ error:", error)
        
    }
}

export const obtenerRecetaAPI = async(id)=>{
    try {
        const response = await fetch(`${URL_recetas}/${id}`)        
        return response       
    } catch (error) {
        console.log("🚀 ~ obtenerRecetaAPI ~ error:", error)
        
    }
}

export const borrarRecetaAPI = async(id)=>{
    try {
        const response = await fetch(`${URL_recetas}/${id}`, {
            method: "DELETE"
        })
        console.log("🚀 ~ borrarRecetaAPI ~ response:", response)
        return response;
    } catch (error) {
        console.log("🚀 ~ borrarRecetaAPI ~ error:", error)
    }
} 

export const crearRecetaAPI = async(receta)=>{
    try {
        const response = await fetch(URL_recetas, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(receta)
        })
        return response;
    } catch (error) {
        console.log("🚀 ~ crearRecetaAPI ~ error:", error)
    }
} 

export const editarRecetaAPI = async(receta, id)=>{
    try {
        const response = await fetch(`${URL_recetas}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            }, 
            body: JSON.stringify(receta)
        })
        return response;
    } catch (error) {
        console.log("🚀 ~ editarRecetaAPI ~ error:", error)
    }
} 