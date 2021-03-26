<template>
  <div class="symbol-page bg-white-dark select-none">
    <section class="min-h-screen text-white font-quick">
      <article class="min-h-60/40 w-full flex flex-col px-10 backgroundImage">
        <nav class="grid grid-cols-12 py-5">
          <div class="flex justify-between items-center col-span-3 max-md:hidden">
            <a href="" class="text-xs uppercase max-lg:px-1">Home</a>
            <a href="" class="text-xs uppercase max-lg:px-1">Features</a>
            <a href="" class="text-xs uppercase max-lg:px-1">Subscribe</a>
            <a href="" class="text-xs uppercase max-lg:px-1">Team</a>
            <a href="" class="text-xs uppercase max-lg:px-1">Contact</a>
          </div>
          <div class="flex justify-center self-center col-span-6 max-md:col-span-6 max-md:justify-start">
            <p class="text-lg font-kiwi font-extrabold">Symbol</p>
          </div>
          <div class="flex justify-end col-span-3 max-md:col-span-6 max-md:justify-end">
            <button class="bg-red-600 rounded-3xl px-5 py-1 text-xs uppercase">Try Free</button>
          </div>
        </nav>
        <!-- flex-grow to adapt remaining spaces of a flex parent div -->
        <div class="flex flex-col flex-grow items-center justify-center max-md:py-16 max-h-md:py-24">
          <p class="text-md max-md:sm">Designed specially for you</p>
          <p class="text-4xl font-semibold max-md:text-3xl max-sm:text-2xl">We proudly present</p>
        </div>
      </article>
      <article class="min-h-40/60 w-full relative py-24">
        <div class="min-h-full w-1/2 max-md:w-3/4 absolute -top-20 left-0 right-0 m-auto bg-gray-900 grid grid-cols-2 max-sm:grid-cols-1">
          <div class="px-3 flex flex-col justify-center max-sm:order-2 py-3">
            <p class="text-md pb-1 font-semibold max-sm:text-sm max-sm:pb-1">A better way to Build website</p>
            <p class="text-xs pb-3 font-light max-sm:hidden">
              One may speculate that over the course of time certain letters were added or deleted at various positions
              within the text. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny
              or nonsensical stories.
            </p>
            <a href="" class="text-xs uppercase text-red-600 right-triangle">learn more</a>
          </div>
          <div class="">
            <div class="h-full w-full bg-red-200">
              <img src="https://i.ibb.co/S59Xc0H/Photo-by-Toa-Heftiba.jpg" alt="Photo-by-Toa-Heftiba" class="w-full h-full max-w-full max-h-full object-cover">
            </div>
          </div>
        </div>
      </article>
    </section>
    <section class="min-h-screen flex max-md:flex-col items-center max-md:items-end  overflow-hidden">
      <article class="flex flex-col max-md:order-2 justify-center pl-10 max-md:px-10 max-md:py-5">
        <p class="text-4xl font-semibold max-md:text-3xl max-sm:text-2xl">Subscribe Now</p>
        <p class="text-md max-md:sm">
          One may speculate that over the course of time certain letters were added or deleted at various positions
          within the text. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny
          or nonsensical stories.
        </p>
        <div>
          <p class="font-thin text-sm ">Sign up to be the first to get the news</p>
        </div>
      </article>
      <img src="https://i.ibb.co/3v29kmN/Group-12.png" alt="desktop" border="0" class="h-96 max-md:h-48 max-md:mt-5">
    </section>
  </div>
</template>

<script>
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

.font-kiwi{
  font-family: "Kiwi Maru", "serif";
}

.font-quick{
  font-family: "Quicksand", "sans-serif";
}

.backgroundImage{
    background: url('https://i.ibb.co/X53x4Jm/Photo-by-Eibner-Saliba-on-Unsplash.jpg');
    background-size: cover;
    background-attachment:fixed;
    background-repeat: no-repeat;
    background-position-y: 60%;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: multiply;
}

.right-triangle::after{
    content: "\2BC8";
    font-size: 10px;
    padding-left: 3px;
    position: relative;
    top: -1px;
}
</style>