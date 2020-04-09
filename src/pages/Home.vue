<template>
    <div class="page">
      <h2>Home Pages</h2>
      <el-button type="primary" @click="testAxios()">调用axios</el-button>
    </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'Home',
  methods: {
    testAxios() {
      this.$api.login.login().then(res =>{
        console.login(res.data);
        router.push('/login');
      })
      // axios
      // .get('http://localhost:8080/info')
      // .then(res=>{
      //   console.log(res.data);
      // })
      // .catch(error=>{
      //   console.log(error);
      // })
    }
  }
  
}
</script>