
<script setup>
import Navbar from "./components/Navbar.vue";
import Card from './components/Card.vue';
import Footer from "./components/Footer.vue";


import {ref} from 'vue';
import data1 from "./assets/data.json"

let dataList = ref(data1)


  const removeItem = (id) =>{
  
 
    for(var data in dataList.value){
   
      console.log("This is data.id " + dataList.value[data].id)
   
      
      console.log("This is mf data " + dataList.value[data].isHidden)
      if( dataList.value[data].id == id){


        dataList.value[data].isHidden = true;
      }
    }
  }

</script>

<template>
  
  <Navbar/>
  <router-view/>
  <div v-for="data in dataList" :key="data.id">
    <Card :img="data.imgSrc" :title="data.title" :description="data.desc" v-show="!data.isHidden" :views="data.views" :id="data.id" @sendBack="(id)=>{
      removeItem(id);
    }" />
   
  </div>

  
  <Footer/>

</template>



<style scoped>


@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

body {
  margin: 0px;
  height: 100vh;
  background-color: rgb(27, 26, 26);
  color: rgb(236, 236, 236);
  font-family: "Roboto", sans-serif;
}



h1 {

  font-size: 4em;
}
.hello{
    font-size: 2rem;
    font-weight: bold;
}
.main-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 15% 0 15%;
}
</style>
