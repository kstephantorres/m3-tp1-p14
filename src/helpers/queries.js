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
        console.log("🚀 ~ leerProductosAPI ~ error:", error)
        
    }
}

export const borrarRecetaAPI = async(id)=>{
    try {
        const response = await fetch(`${URL_recetas}/${id}`, {
            method: "DELETE"
        })
        console.log("🚀 ~ borrarProductoAPI ~ response:", response)
        return response;
    } catch (error) {
        console.log("🚀 ~ borrarProductoAPI ~ error:", error)
    }
} 