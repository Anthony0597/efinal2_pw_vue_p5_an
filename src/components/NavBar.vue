<template>
  <div>
    <router-link to="/generar">Generar Token</router-link>
    <router-link to="/guardar">Guardar Estudiante</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div a{
    color: #0954b6;
    margin: 0px 10px;
    font-weight: bold;
    border: solid;
    border-radius: 10px;
    background-color: #e6e6e6;
    padding: 10px 10px;
}
.router-link-exact-active{
    background-color: #898787;
}
</style>