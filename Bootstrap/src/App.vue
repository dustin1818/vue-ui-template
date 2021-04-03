<template>
<div class="front-section">
  <div class="navbar  navbar-expand-lg ">
    <div class="container-fluid ">
    <div class="logo p-3  ">
      <h1>Selecao</h1>
    </div>

    
    <ul class="navbar-nav flex-row p-0">
      <li > <span>Home</span> </li>
      <li > <span class="span_color">About</span> </li>
      <li > <span class="span_color">Services</span> </li>
      <li > <span class="span_color">Portfolio</span> </li>
      <li > <span class="span_color">Team</span> </li>
      <li > <span class="span_color">Dropdown</span> </li>
      <li > <span class="span_color">Contact</span> </li>
    </ul>
     
  </div>
</div>
<!-- end of navbar -->

  <section class="header-section d-flex flex-column  justify-content-between align-items-center  p-md-5 p-lg-5 mt-1" >
      <h1 class="mt-sm-5 ">Welcome to Selecao </h1>
    <div class="header-content d-flex flex-column  justify-content-center align-items-center mr-5" >
      <p class="p-5 pt-4 pb-3">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
      <button class="header-btn  d-flex justify-content-center align-items-center  "  > Read More </button>
    </div>
    <div class="pb-5 mb-5"></div>
    

  </section>


</div>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@700&display=swap');
* {
  
font-family: 'Open Sans', sans-serif;  

}

      .front-section{
      background: linear-gradient(0deg, #2a2c39 0%, #33364a 100%);

     }

    .navbar{
        position: fixed;
        top: 0;
        background: transparent;
        
      }

  .navbar-nav{
    margin-right: 2rem;
    gap:1.5rem;    


    }



    span{
      background: tomato;
      padding: 6px 12px;
      border-radius: 21px;
      }


      .span_color{
        background: transparent;
        transition:all 200ms;
        transition-delay: 100ms;
      }

      .span_color:hover{
        background: tomato;
        padding: 6px 12px;
        border-radius: 21px;
        
      }

      .logo{
        position: relative;
        left:40px;
        bottom: 0;
      }

.logo h1{
    font-weight: 700;
    color: #fff;
    font-size: 28px;
    line-height: 1;
    letter-spacing: 1px;
    font-family: 'Raleway', sans-serif;

  }

li{
  list-style-type: none;
  font-size: 13px;
  color: white;

  }

  /* end of nnavbar */

  .header-section{
    z-index: 1000  !important;
    height: 100%;
   min-height: 100%;
   background: linear-gradient(0deg, #2a2c39 0%, #33364a 100%);
   position: relative;

}

  .header-section h1{
    font-weight: 700;
    color: #fff;
    font-size: 40px;
    line-height: 1;
    letter-spacing: 1px;
    font-family: 'Raleway', sans-serif;

    }

    .header-content{
        width: 63%;
        max-width: 100%;
      }

    .header-content p {
        text-align: center;
        line-height: 1.4;
        color:rgba(255, 255, 255,0.9);
        font-family: 'Raleway', sans-serif;
        font-weight: lighter;
      font-size: 0.8rem;
      word-spacing: 1px;

        
      }

      .header-btn{
      background:transparent;
      border-radius: 21px;
      color:rgba(255, 255, 255,0.8);
      border-color: #ef6603;
      padding: 7px 30px;
      font-size: 0.8rem;
       border-bottom-style: inset;
      border-right-style: inset;
      font-family: 'Raleway', sans-serif;
      transition:all 200ms;
        transition-delay: 100ms;

     }



      .header-btn:hover{
      background:#ef6603;
       color:#fff;
      }
     


     /* Mobile Responsive */

      @media screen and (max-width:768px) {
        
      }

       @media screen and (max-width:425px) {
          .header-section h1{
            font-size: 2rem;
          }
      }



</style>
