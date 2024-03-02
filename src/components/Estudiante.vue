<template>
  <div class="container">
    <div class="form">
      <p v-if="flag1" type="Token:"><input v-model="token" type="text" /></p>      
      <p type="Nombre:">
        <input v-model="nombre" placeholder="Nombre" type="text" />
      </p>
      <p type="Apellido:">
        <input v-model="apellido" placeholder="Apellido" type="text" />
      </p>
      <p type="C&eacute;dula:"><input v-model="cedula" type="text" /></p>
      <div class="bot" v-if="flag">
        <button @click="enviar">Guardar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data() {
    return {
      token: null,      
      nombre: null,
      apellido: null,
      cedula: null,
    };
  },

  props: {
    estu:Object
  },

  methods: {
    enviar() {
      this.$emit("selecciono", {
        nombre: this.nombre,
        apellido: this.apellido,
        cedula: this.cedula
      });
      console.log("enviar");
    },
    
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
  }
}
</script>

<style scoped>
p:before {
  content: attr(type);
  display: block;
  margin: 10px 2px;
  font-size: 16px;
  color: #5a5a5a;
}
.container {
  display: grid;
  justify-content: center;
  align-items: center;
}
.bot {
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  height: 25px;
  width: 75px;
  color: #414141;
  background-color: #59abe3;
  border: 0;
  border-radius: 5px;
}
</style>