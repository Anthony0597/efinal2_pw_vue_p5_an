<template>
  
  <div class="container">
    <div class="form">      
      <p type="Semilla:"><input v-model="semilla" type="text" /></p>
      <p type="Tiempo de vigencia:"><input v-model="tiempo" type="text" /></p>
      <p type="Token:"><input v-model="token" type="text" /></p>
      <div class="bot" v-if="flag">
        <button @click="enviar">Generar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            token:null,
            semilla:null,
            tiempo:null,
        }
    },
    props:{
        estu:Object
    },
    methods:{
        async obtenetToken(){
            //const data=await obtenerTokenFachada(tihs.semilla,this.tiempo) 
            //this.token=data
        },
        enviar(){
            this.$emit("seleciono",this.semilla,this.tiempo)
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