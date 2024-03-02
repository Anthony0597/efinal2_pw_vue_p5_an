<template>
  <table>
    <tr>
      <th>ID</th>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Cédula</th>

      <th>Pa&iacute;s</th>
    </tr>

    <tr :v-for="{ id, nombre, apellido, cedula } in lista">
      <td>{{ id }}</td>
      <td>{{ nombre }}</td>
      <td>{{ apellido }}</td>
      <td>{{ cedula }}</td>
    </tr>
  </table>
</template>

<script>
import { consultarFachada } from '@/helpers/clienteToken';
export default {
  data() {
    return {
        id:null,
      nombre: undefined,
      apellido: null,
      cedula: null,      
      lista: estudiantes,
    };
  },
  props:{
    estu:Object
  },
  methods:{
    async consultar(){
      const data = await consultarFachada()

    }
  },
  watch:{
    estu(value, oldvalue){
      if(value !== oldvalue){
        this.id=this.estu.id;
        this.cedula=this.estu.cedula;
        this.nombre=this.estu.nombre;
        this.apellido=this.estu.apellido;
      }
    }
};
</script>

<style>
</style>