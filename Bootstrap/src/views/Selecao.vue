<template>

  <main>
    
    <home> </home>
    <about></about> 
     </main>

 
</template>


<script>

  import Home from "../views/Home";
  import About from "../views/About";


export default {
  setup() {
    console.log("Selecao Website Running");
  },

  components:{
    Home,
    About
  }

};

</script>
