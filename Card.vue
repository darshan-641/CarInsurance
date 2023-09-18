  <template>
    <div class="card-main-body">
      <div class="img-body">
        <img :src="img"  alt="this is image" />
      </div>
      <div class="info">
        <h3 class="title">{{ title }}</h3>
        <h4 class="views">{{views}} views</h4>
        <span>{{ id}}</span>
        <p class="description">{{ description.substring(0,170) }}...</p>
        <button class="button" @click="$emit('sendBack',id)">Remove</button>
      </div>
    </div>
  </template>

  <script setup>
      const props = defineProps({title:String, views:Number, description:String, img:String, id:String});
  </script>

<style scoped>

.card-main-body{
    display: flex;
    align-items: flex-start;
    justify-content:flex-start;
    margin: 2vh 0 2vh 0;
    padding: 5vh 15vw 0vh 15vw;
}

.info h3{
  margin-top: 0px;
}

.info{
    padding-left: 5vw;
  
}

.title{
    color: #f1f1f1;
    font-size: 32px;
    font-weight: 800;
}

.view, .description{
    color: #aaa;
}


.img-body img{
    height: 250px;
}
.button {
  background-color: rgb(27, 26, 26);
  border: 0.7px solid #ccc;
  color: #ccc;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 10px;
}

.button:hover {
  background-color: #ccc;
  transition: 0.09s ease-in;
  color: rgb(27, 26, 26);
}


</style>
