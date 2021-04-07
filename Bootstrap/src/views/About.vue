<template>


  <div class="about">

    <!-- container for about-section -->
    <div class="container m-5 flex-column align-items-center  "> 

      <div class="row p-4 pb-4">
        <!-- about content heading -->
        <div class="col col-lg-12 p-3 ">
          <h3 class="about-head"> ABOUT </h3>
          <h1>WHO WE ARE </h1>

        </div>
      </div>

      <div class="row ">
        <div class="col-lg-6 p-4  pt-0 pb-0">
        <p class="p-col p-3 pt-0 pb-0 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <ul class="about content-list flex-column align-items-center p-1 pt-0">
        
          <li > Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
          <li> Duis aute irure dolor in reprehenderit in voluptate velit </li>
          <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat </li>

        </ul>

        </div>

        <div class="col-lg-6 p-0">
            <p class="p-col-2 ">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            <div class="col  pt-0 pl-3">
            <button class="butn mt-1"> Learn More </button>
        </div>
        </div>

      </div> 
      <!-- end of second row -->

      
    </div>

  </div>

</template>


<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

  .about-head{
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    color: rgb(181, 179, 179);
    letter-spacing: 2px;
    display: flex;
    
  }

  .about-head::after{
    text-decoration: solid 1.8px #f88f44 underline;
    content: "HelloWorldHe";
    padding: 0px;
    color: #fff;
    position: relative;
    bottom: 7px;
    left: 10px;

  }

  .col h1{
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-family: 36px;
  }

  .p-col{
    font-size: 1rem;
  }

    .p-col-2{
    font-size: 1rem;
  }


  .content-list li{
    list-style-type: none;
    color: #212529;
    font-size: 15px;
    line-height: 30px;
  }

  .content-list li::before{
    content:  "";
    color: #212529;;
    padding: 25px;
    /* background: url("https://img.icons8.com/material/20/000000/double-tick--v1.png" ); */
    background: url('../assets/icons8-double-tick-24.png');
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: center;
  }


    .butn{
    background: none;
    font-family: 'Raleway',sans-serif;
    padding: 10px 33px;
    font-size: 13px;
    border-radius: 4.5px;
    border-color: #ef6603;
      border-bottom-style: inset;
  border-right-style: inset;
    color: #ef6603;
    letter-spacing: 2px;
    display: inline-block;
    font-weight: 700;
    line-height: 15px;
  
}

    .butn:hover{

      background:#ef6603;
      color: #fff;
  
}


    





  




</style>