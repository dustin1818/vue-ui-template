<template>
  <section class="jmaq-hero-section container-side-padding">
    <nav class="jmaq-hero-navigation container-max-width">
      <div class="jmaq-hero-navigation-child">
        <p class="nav-logo font-prosto">JMaq Inc.</p>
        <img src="https://i.ibb.co/xgyLs6Y/shout-white.png" alt="shout-white" border="0"/>
      </div>
      <div class="jmaq-hero-navigation-child">
        <a href="#" class="nav-link">What we do</a>
        <a href="#" class="nav-link">What we are</a>
        <a href="#" class="nav-link">Our Insights</a>
        <a href="#" class="nav-link">Join Us</a>
        <a href="#" class="nav-link">Contact Us</a>
      </div>
      <div class="jmaq-hero-navigation-burger">
        <div class="burger-lines"></div>
      </div>
    </nav>
    <article class="jmaq-hero-article container-max-width">
      <div class="jmaq-hero-article-child">
        <p class="tagline">
          Your unique <span class="max-md:block">Brand.</span>
        </p>
        <p class="tagline">
          Improved to <span class="max-md:block text-mango">Perfection.</span>
        </p>
        <p class="tagline-support">
          Let us help you
          <span class="max-md:block">transform your business.</span>
        </p>
        <button class="greater-triangle primary-submit">Get Started</button>
      </div>
    </article>
  </section>
</template>

<style lang="scss">
.jmaq-hero-section {
  background: url("https://i.ibb.co/ydnNgRW/Photo-by-Austin-Distel-2-on-Unsplash.png");
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.2);
  background-blend-mode: multiply;
  @media screen and (max-width: 768px) {
    background-position-x: 100%;
    background-repeat: no-repeat;
  }
}

.jmaq-hero-navigation {
  @apply min-h-navigation grid grid-cols-12 items-center py-8 max-md:py-6;
  &-child {
    .nav-logo {
      @apply text-xl;
    }
    .nav-link {
      @apply text-sm pr-2;
    }
    .nav-link:last-child {
      @apply pr-3;
    }
  }
  &-child:nth-child(1) {
    @apply col-span-6 flex;
    img {
      height: 20px;
      @apply pt-1 pl-2;
    }
  }
  &-child:nth-child(2) {
    @apply flex justify-between max-md:hidden col-span-6;
  }
  &-burger {
    @apply hidden max-md:flex justify-end max-lg:col-span-6;
    .burger-lines {
      height: 3px;
      width: 2.5rem;
      border-radius: 5px;
      background-color: rgba(242, 244, 232, 1);
      &::before {
        content: "";
        height: 3px;
        width: 2.5rem;
        background-color: rgba(242, 244, 232, 1);
        position: absolute;
        transform: translateY(-220%) translateX(0%);
        border-radius: 5px;
      }
      &::after {
        content: "";
        height: 3px;
        width: 2.5rem;
        background-color: rgba(242, 244, 232, 1);
        position: absolute;
        transform: translateY(220%) translateX(0%);
        border-radius: 5px;
      }
    }
  }
}

.jmaq-hero-article {
  min-height: 85vh;
  @apply flex;
  @media screen and(min-width: 1440px) {
    // Converted 85vh using https://khaledkzy.github.io/pixel-vh-vw-converter/
    min-height: 650px;
  }
  &-child {
    @apply py-28 max-md:py-16 flex flex-col justify-center;
    .tagline {
      @apply text-5xl max-md:text-4xl max-md:leading-normal pb-5 max-md:pb-1 font-medium;
    }
    .tagline-support {
      @apply text-2xl max-md:text-lg max-md:leading-normal pb-8 max-md:pb-8 max-md:pr-2;
    }
  }
}
</style>