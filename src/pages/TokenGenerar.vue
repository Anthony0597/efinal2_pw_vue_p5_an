<template>
  <h1>TOKEN</h1>
  <Token/>
</template>

<script>
import { consultarFachada} from '@/helpers/clienteToken';
import Token from "@/components/Token.vue"
export default {
 components:{
    Token
 }
}
</script>

<style>

</style>