<template>
  <div class="jmaq-page bg-white-dark text-white-dark select-none">
    <section class="bg-pict-landing px-20 max-md:px-8 font-poppins">
      <nav class="min-h-navigation grid grid-cols-2 max-lg:grid-cols-12 items-center py-8 max-md:py-6 scroll-out-1440">
        <div class="max-lg:col-span-4">
          <p class="text-xl">Jmaq Inc.</p>
        </div>
        <div class="flex justify-between max-md:hidden max-lg:col-span-8">
          <a href="#" class="text-sm max-lg:pr-2">What we do</a>
          <a href="#" class="text-sm max-lg:pr-2">What we are</a>
          <a href="#" class="text-sm max-lg:pr-2">Our insights</a>
          <a href="#" class="text-sm max-lg:pr-2">Join us</a>
          <a href="#" class="text-sm">Contact us</a>
        </div>
        <div class="hidden max-md:flex justify-end max-lg:col-span-8">
          <div class="black-line"></div>
        </div>
      </nav>
      <article class="min-h-landing-screen flex scroll-out-1440">
        <div class="max-md:pr-24 py-28 max-md:py-16 flex flex-col justify-center">
          <p class="text-5xl max-md:text-4xl max-md:leading-normal pb-5 max-md:pb-1 font-medium">Your unique Brand.</p>
          <p class="text-5xl max-md:text-4xl max-md:leading-normal pb-9 max-md:pb-8 font-medium">Improved to <span class="text-mango">Perfection.</span></p>
          <p class="text-xl max-md:text-lg max-md:leading-normal pb-8 max-md:pb-8 max-md:pr-2">Let us help you transform your business.</p>
          <button class="greater-triangle bg-blue-500 p-2 max-md:p-3 rounded-md text-lg max-md:text-sm btn-size">
            Get Started
          </button>
        </div>
      </article>
    </section>
    <section class="min-h-screen text-black ">
      <article class="grid grid-cols-2 max-md:grid-cols-1 py-14 max-md:py-7 scroll-out-1440">
        <div class="max-md:py-3 flex items-center pl-20 max-md:pl-0 relative img-edge-1">
          <!-- Adapt image height to parent and adjust its heights instead of width under akward brekapoints-->
          <img src="https://i.ibb.co/SfD3x97/JMAQBenefits-Image-1.png" class="h-full max-h-full object-cover pr-20 max-md:pr-8 z-10">
          <img src="https://i.ibb.co/ZhLhMH9/JMAQBenefits-Graphic-1.png" class="absolute rounded-lg h-20 max-md:h-16 max-sm:h-12 top-0 m-3 max-md:my-6 max-md:mx-8 z-20">
          <div class="yellow-box"></div>
        </div>
        <div class="max-md:py-3 pr-24 max-md:px-8 flex flex-col justify-center">
          <p class="text-lg max-md:text-sm text-mango font-medium pb-2">What can you achieve</p>
          <p class="text-4xl max-md:text-3xl font-medium pb-3">
            Duis aute Irure dolor in reprehen derit in Voluptate velit esse illu dolore eu fugiat.
          </p>
          <p class="text-lg max-md:text-sm">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem lorem accusantium doloremque 
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.
          </p>
        </div>
      </article>
      <article class="px-20 max-md:px-8">
        <p class="text-lg max-md:text-sm text-mango font-medium">What can we do for you</p>
        <div class="grid grid-cols-3 justify-center max-md:grid-cols-1">
          <div class="flex flex-col">
            <img src="" class="">
            <p class="text-xl max-md:text-lg font-medium">Search Engine Optimization</p>
            <p class="text-sm max-md:text-sm">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
              aut odit aut fugit, sed quia consequuntur magni dolores 
              eos qui ratione voluptatem sequi nesciunt. Neque porro 
              quisquam est, qui dolorem ipsum quia dolor sit amet.
            </p>
            <a href="" class="greater-triangle text-sm font-medium">
              Learn more
            </a>
          </div>
          <div class="flex flex-col">
            <img src="" class="">
            <p class="text-xl max-md:text-lg font-medium">Content Management</p>
            <p class="text-sm max-md:text-sm">
              At vero eos et accusamus et iusto odio dignissimos 
              ducimus qui blanditiis praesentium voluptatum deleniti 
              atque corrupti quos dolores et quas molestias excepturi 
              sint occaecati cupiditate non provident, similique sunt in 
              culpa qui officia deserunt.
            </p>
            <a href="" class="greater-triangle text-sm font-medium">
              Learn more
            </a>
          </div>
          <div class="flex flex-col">
            <img src="" class="">
            <p class="text-xl max-md:text-lg font-medium">Social Media Marketing</p>
            <p class="text-sm max-md:text-sm">
              Uis aute irure dolor in reprehenderit in voluptate velit esse 
              cillum dolore eu fugiat nulla pariatur. Excepteur sint 
              occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum beatae vitae dicta 
              sunt explicabo. 
            </p>
            <a href="" class="greater-triangle text-sm font-medium">
              Learn more
            </a>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.scroll-out-1440{
  @media screen and(min-width: 1440px){
    max-width: 1440px;
    margin: 0 auto;
  }
}

.text-mango{
  color: #fcae40;
}

.bg-pict-landing{
  background: url('https://i.ibb.co/ydnNgRW/Photo-by-Austin-Distel-2-on-Unsplash.png');
  background-size: cover;
  background-attachment: fixed;
  // background-color: rgba(0,0,0,.3);
  // background-blend-mode: multiply;
}

.min-h-landing-screen{
  min-height: 85vh;
}

.font-poppins{
  font-family: 'Poppins', sans-serif;
}

.black-line {
  height: 3px;
  width: 2rem;
  border-radius: 5px;
  background-color: white;
  &::before {
    content: "";
    height: 3px;
    width: 2rem;
    background-color: white;
    position: absolute;
    transform: translateY(-220%) translateX(0%);
    border-radius: 5px;
  }
  &::after {
    content: "";
    height: 3px;
    width: 2rem;
    background-color: white;
    position: absolute;
    transform: translateY(220%) translateX(0%);
    border-radius: 5px;
  }
}

.btn-size{
  width: 150px;
}

.greater-triangle::after{
    content: "\FF1E";
    font-size: 16px;
    position: relative;
}

.img-edge-1 {
  &:before {
    content: "";
    position: absolute;
    height: 0.5rem;
    width: 50%;
    right: 0;
    bottom: -5px;
    background-color: #ffc324;
    margin-right: 80px;
    @media screen and(max-width: 768px) {
      left: 0;
      bottom: 7px;
      margin-right: 32px;
      width: 50%;
    }
    @media screen and(max-width: 600px) {
      bottom: 7px;
      left: auto;
      right: 0;
      margin-right: 32px;
      width: 60%;
    }
  }
  &:after {
    content: "";
    position: absolute;
    height: 70%;
    width: 0.5em;
    background-color: #ffc324;
    z-index: 2;
    right: -4px;
    bottom: -5px;
    margin-right: 80px;
    @media screen and(max-width: 768px) {
      left: -4px;
      right: auto;
      bottom: 7px;
      z-index: 99;
    }
    @media screen and(max-width: 600px) {
      display: block;
      left:auto;
      right: -4px;
      bottom: 7px;
      margin-right: 32px;
      height: 60%;
      z-index: 1;
    }
  }
}

</style>