import axios from "axios";

const consultar = async () =>{
    const data = axios.get(`http://localhost:8082/API/v1.0/Inscripcion/estudiantes`).then(r => r.data);
    console.log(data);
    return data;
}

const insertar= async (body) =>{
    const data=axios.post(`http://localhost:8082/API/v1.0/Inscripcion/estudiantes`, body).then (r=>r.data);
    console.log(data);
}



//Fachadas

export const consultarFachada = async (id) =>{
    return await consultar(id);
}

export const insertarFachada = async (body) =>{
    await insertar(body);
}
