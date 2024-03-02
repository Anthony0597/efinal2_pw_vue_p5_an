import axios from "axios";

const consultar = async (body) =>{
    const data = axios.get(`http://localhost:8087/API/v1.0/seguridad/autorizaciones/jwt`,body).then(r => r.data);
    console.log(data);
    return data;
}

//Fachadas

export const consultarFachada = async (body) =>{
    return await consultar(body);
}

