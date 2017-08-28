<template>
  <div id="app">
    <input v-check:name="[{
      type: 'number', message: '必须为整数'
    }]" v-model="name" :class="{error: !checkError.name}"/>
    <p>{{checkError.name}}</p>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  data () {
    return {
      name: '',
      checkError: {}
    }
  },
  mounted () {
    console.log(this)
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
.error{
  background: #ff0000
}
</style>
