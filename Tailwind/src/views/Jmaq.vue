<template>
  <div class="jmaq-page bg-white-dark text-white-dark select-none font-poppins">
    <section class="bg-pict-landing px-20 max-md:px-8">
      <nav class="min-h-navigation grid grid-cols-2 max-lg:grid-cols-12 items-center py-8 max-md:py-6 scroll-out-1440">
        <div class="max-lg:col-span-4">
          <p class="text-xl">JMaq Inc.</p>
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
          <button class="greater-triangle bg-blue-500 p-2 max-md:p-3 rounded-md text-lg max-md:text-sm btn-size-lg flex justify-center">
            Get Started
          </button>
        </div>
      </article>
    </section>
    <section class="text-black flex flex-col">
      <article class="grid gap-8 grid-cols-2 max-md:grid-cols-1 scroll-out-1440 flex-grow pt-20">
        <div class="pl-20 max-md:pl-0 max-md:pr-8 flex relative">
          <!-- img div is relative because the before and after is an absolute element -->
          <div class="relative img-edge-1 ">
          <!-- Adapt image height to parent and adjust its heights instead of width under akward brekapoints-->
            <img src="https://i.ibb.co/SfD3x97/JMAQBenefits-Image-1.png" class="h-full max-h-full object-cover z-10">
          </div>
          <img src="https://i.ibb.co/ZhLhMH9/JMAQBenefits-Graphic-1.png" class="absolute rounded-lg h-20 max-md:h-16 top-0 m-3 max-md:my-6 max-md:mx-8 z-20">
        </div>
        <div class="pr-24 max-md:px-8 flex flex-col justify-center ">
          <p class="text-lg max-md:text-sm text-mango font-medium pb-2">What can you achieve</p>
          <p class="text-3xl max-md:text-3xl font-medium pb-3">
            Duis aute Irure dolor in reprehen derit in Voluptate velit esse illu dolore eu fugiat.
          </p>
          <p class="text-lg max-md:text-sm">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem lorem accusantium doloremque 
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.
          </p>
        </div>
      </article>
      <article class="px-20 max-md:px-8 py-14 max-md:pt-7 scroll-out-1440">
        <p class="text-lg max-md:text-sm text-mango font-medium pb-2 max-md:pb-4 ">What can we do for you</p>
        <div class="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-3 max-lg:gap-6 max-md:gap-8  justify-center">
          <div class="flex flex-col">
            <div class="relative mb-3 img-edge-2">
              <img src="https://i.ibb.co/J72sHdS/Performance-Audits-1.png" class="w-full max-w-full object-cover z-10">
              <!-- my-auto aligned the img element to its parent div-->
              <img src="https://i.ibb.co/4Wpv3wB/Solutions-3-1.png" class="absolute my-auto top-0 bottom-0 right-0 mr-5 rounded-lg h-18 z-20">
            </div>
            <p class="text-xl max-md:text-lg font-medium pb-3">Search Engine Optimization</p>
            <p class="text-sm max-md:text-sm pb-2">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
              aut odit aut fugit, sed quia consequuntur magni dolores 
              eos qui ratione voluptatem sequi nesciunt. Neque porro 
              quisquam est, qui dolorem ipsum quia dolor sit amet.
            </p>
            <a href="" class="greater-triangle-sm text-sm font-medium text-blue-500 flex">
              Learn more
            </a>
          </div>
          <div class="flex flex-col">
            <div class="relative mb-3 img-edge-2">
              <img src="https://i.ibb.co/FmV0rrf/UX-Audits-1.png" class="w-full max-w-full object-cover z-10">
              <img src="https://i.ibb.co/1Z4RdSb/Solutions-2-2.png" class="absolute my-auto top-0 bottom-0 right-0 mr-5 rounded-lg h-18 z-20">
            </div>
            <p class="text-xl max-md:text-lg font-medium pb-3">Content Management</p>
            <p class="text-sm max-md:text-sm pb-2">
              At vero eos et accusamus et iusto odio dignissimos 
              ducimus qui blanditiis praesentium voluptatum deleniti 
              atque corrupti quos dolores et quas molestias excepturi 
              sint occaecati cupiditate non provident, similique sunt in
            </p>
            <a href="" class="greater-triangle-sm text-sm font-medium text-blue-500 flex">
              Learn more
            </a>
          </div>
          <div class="flex flex-col">
            <div class="relative mb-3 img-edge-2">
              <img src="https://i.ibb.co/fvykT4D/Accessibility-Reports-1.png" class="w-full max-w-full object-cover z-10">
              <img src="https://i.ibb.co/r317zD8/Solutions-1-3.png" class="absolute my-auto top-0 bottom-0 right-0 mr-5 rounded-lg h-18 z-20">
            </div>
            <p class="text-xl max-md:text-lg font-medium pb-3">Social Media Marketing</p>
            <p class="text-sm max-md:text-sm pb-2">
              Uis aute irure dolor in reprehenderit in voluptate velit esse 
              cillum dolore eu fugiat nulla pariatur. Excepteur sint 
              occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum beatae vitae dicta 
              sunt explicabo. 
            </p>
            <a href="" class="greater-triangle-sm text-sm font-medium text-blue-500 flex">
              Learn more
            </a>
          </div>
        </div>
      </article>
    </section>
    <section class="min-h-screen bg-bl">

    </section>
    <section class="text-black flex flex-col pt-20 pb-40 max-md:pb-20 scroll-out-1440">
      <article class="grid gap-16 max-md:gap-8 grid-cols-2 max-md:grid-cols-1 flex-grow ">
        <div class="pl-20 max-md:pr-0 max-md:pl-8 flex relative">
          <!-- img div is relative because the before and after is an absolute element -->
          <div class="relative img-edge-3">
          <!-- Adapt image height to parent and adjust its heights instead of width under akward brekapoints-->
            <img src="https://i.ibb.co/gZp5znY/Analytics-1.png" class="h-full max-h-full object-cover z-10">
          </div>
        </div>
        <div class="pr-24 max-md:px-8 flex flex-col justify-center">
          <p class="text-lg max-md:text-sm text-mango font-medium pb-2">What we recently discovered</p>
          <p class="text-3xl max-md:text-3xl font-medium pb-3">
            The new trend of Lorem Ipsum.
          </p>
          <p class="text-lg max-md:text-sm pb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut 
            labore et dolore  magna aliqua. Ut enim ad minim veniam, quis nost exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <a href="" class="text-lg max-md:text-sm greater greater-triangle-sm text-blue-500 font-medium">
            Read More 
          </a>
        </div>
      </article>
      <article class="grid grid-cols-12 items-center pt-40 max-md:pt-20">
        <div class="yellow-line col-span-1 max-md:hidden"></div>
        <div class="col-span-10 max-md:col-span-12">
          <form class="w-form ">
            <p class="text-3xl pb-2">
              Subscribe to our <span class="text-mango">Newsletter</span>
            </p>
            <p class="text-xs pb-4">
              Voluptatem accusantium doloremque laudantium, totam rem ipsum, aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto. 
            </p>
            <div class="flex items-center text-sm">
              <div class="flex-grow border-gr rounded-md p-5px mr-2">
                <input type="text" placeholder="Email Address" class="rounded-md">
              </div>
              <button class="greater-triangle bg-blue-500  btn-size-sm flex justify-center items-center rounded-md">Submit</button>
            </div>
          </form>
        </div>
        <div class="yellow-line col-span-1 max-md:hidden"></div>
      </article>
    </section>
    <section class="px-20 max-md:px-8 scroll-out-1440 bg-bl text-sm">
        <article class="pt-8 ">
          <p class="text-xl text-mango">JMaq Inc.</p>
        </article>
        <article class="grid grid-cols-12 max-md:grid-cols-2">
          <div class=" flex flex-col py-5 col-span-2 max-md:col-span-1">
            <a href="" class="pb-1 max-md:pb-2">What we do</a>
            <a href="" class="pb-1 max-md:pb-2">Who we are</a>
            <a href="" class="pb-1 max-md:pb-2">Our Insights</a>
            <a href="" class="pb-1 max-md:pb-2">Join Us</a>
            <a href="" class="pb-1 max-md:pb-2">Contact Us</a>
            <a href="" class="pb-1 max-md:pb-2 hidden max-md:block">Privacy Policy</a>
            <a href="" class="pb-1 max-md:pb-2 hidden max-md:block">Cookies</a>
          </div>
          <div class="flex justify-center py-5 col-span-7 max-md:col-span-1">
            <div class="flex max-md:flex-col max-md:justify-between max-md:py-2">
              <p class="px-4 text-blue-500">
                Call Us: <span class="block text-white">(12) 345 678</span>
              </p>
              <p class="px-4 text-blue-500">
                Email Us: <span class="block text-white">hello@jmaq.com</span>
              </p>
              <p class="px-4 text-blue-500">
                Call Us: <span class="block text-white">Taguig, Philippines</span>
              </p>
            </div>
          </div>
          <div class="py-5 col-span-3 max-md:col-span-2 flex flex-col items-end max-md:items-center pb-10">
            <div class="flex pb-2 max-md:hidden">
              <a href="" class="px-5">Privacy Policy</a>
              <a href="">Cookies</a>
            </div>
            <p class="max-md:font-light">
              © 2020, Steven Guevarra
              <span class="block max-md:inline">All Rights Reserved.</span>
            </p>
          </div>
        </article>
    </section>
  </div>
</template>

<script>
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.bg-bl{
  background-color: #01060D;
}

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
  @media screen and(min-width: 1440px){
    min-height: 650px;
  }
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

.btn-size-lg{
  width: 150px;
}

.btn-size-sm{
  padding: 10px;
  color: white;
}

.greater-triangle::after{
    content: "\FF1E";
    font-size: 16px;
    font-weight: 1000;
    padding-left: 6px;
    position: relative;
}

.greater-triangle-sm::after{
    content: "\FF1E";
    font-size: 10px;
    padding-top: .5px;
    padding-left: 3px;
    font-weight: 1000;
    position: relative;
}

.img-edge-1 {
  &:before {
    content: "";
    position: absolute;
    background-color: #ffc324;
    height: 0.5rem;
    width: 65%;
    right: 0;
    bottom: -8px;
  }
  &:after {
    content: "";
    position: absolute;
    background-color: #ffc324;
    height: 65%;
    width: 0.5rem;
    right: -8px;
    bottom: -8px;
  }
}

.img-edge-2 {
  background-color: black;
  &:before {
    content: "";
    position: absolute;
    background-color: #ffc324;
    height: 0.4rem;
    width: 40%;
    top:0;
    right: 0;
  }
  &:after {
    content: "";
    position: absolute;
    background-color: #ffc324;
    height: 0.4rem;
    width: 40%;
    bottom:0;
    left: 0;
  }
}

.img-edge-3 {
  background-color: black;
  &:before {
    content: "";
    position: absolute;
    background-color: #ffc324;
    height: 0.5rem;
    width: 65%;
    top:-8px;
    left:-8px;
  }
  &:after {
    content: "";
    position: absolute;
    background-color: #ffc324;
    height: 80%;
    width:  0.5rem;
    top: -8px;
    left:-8px;
  }
}

.yellow-line{
    background-color: #ffc324;
    height: 0.5rem;
    width:  100%;
}

input{
  width: 100%;
  background-color: #F2F4E8;
  text-indent: 10px;
  &:focus{
    outline: none;
  }
}

.w-form{
  width: 450px;
  padding: 0 10px;
  margin: 0 auto; 
}

.p-5px{
  padding: 10px;
}

.border-gr{
  border-width: 1px;
  border-color: rgba(0,0,0,.35);
}
</style>