<template>
  <h1>ESTUDIANTE</h1>
  <Estudiante @seleciono="insertar($event)"/>
  <Listado/>
</template>

<script>
import { insertarFachada , consultarFachada} from '@/helpers/clienteEstudiante';
import Estudiante from "../components/Estudiante.vue";
import Listado from "../components/ListaEstudiantes.vue";
export default {
    created(){
        this.consultar()
    },
  components: {
    Estudiante,
    Listado
  },
  methods:{
    
    async insertar(estuBody) {
      await insertarFachada(estuBody);
    },
    async consultar() {
      await consultarFachada();
    }
  },
  
};
</script>

<style>

</style>