<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <input v-check:name="[{
      type: 'number', message: 'dsdsfsf'
    }]" v-model="name" type="number"/>
    <p>{{name}}</p>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  data () {
    return {
      name: ''
    }
  },
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
