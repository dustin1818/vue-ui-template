<template>
  <div class="jmaq-page bg-white-dark text-white-dark select-none">
    <section class="bg-pict-landing px-16 max-md:px-8 font-poppins">
      <nav class="min-h-navigation grid grid-cols-2 max-lg:grid-cols-12 items-center py-8 max-md:py-6">
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
      <article class="min-h-landing-screen flex">
        <div class="max-md:pr-24 py-28 ">
          <p class="text-5xl max-md:text-4xl max-md:leading-normal pb-5 max-md:pb-1 font-medium">Your unique Brand.</p>
          <p class="text-5xl max-md:text-4xl max-md:leading-normal pb-9 max-md:pb-8 font-medium">Improved to <span class="text-mango">Perfection.</span></p>
          <p class="text-xl max-md:text-lg max-md:leading-normal pb-8 max-md:pb-8 max-md:pr-2">Let us help you transform your business.</p>
          <button class="greater-triangle bg-blue-500 p-2 max-md:p-3 rounded-md text-lg max-md:text-sm">
            Get Started
          </button>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.text-mango{
  color: #fcae40;
}

.bg-pict-landing{
  background: url('https://i.ibb.co/DtrwCF5/Photo-by-Annie-Spratt-on-Unsplash.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-color: rgba(0,0,0,.3);
  background-blend-mode: multiply;
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

.greater-triangle::after{
    content: "\FF1E";
    font-size: 16px;
    position: relative;
}

</style>