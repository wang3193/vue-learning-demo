<template>
    <div class="page">
      <h2>Home Pages</h2>
      <el-button type="primary" @click="testAxios()">调用axios</el-button>
    </div>
</template>

<script>
import axios from 'axios'
import mock from '@/mock/mock.js'
export default {
  name: 'Home',
  methods: {
    testAxios() {
      axios
      .get('http://localhost:8080/info')
      .then(res=>{
        console.log(res.data);
      })
      .catch(error=>{
        console.log(error);
      })
    }
  }
  
}
</script>