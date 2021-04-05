<template>
  <section class="container-side-padding background-navy">
    <article class="jmaq-footer-logo container-max-width">
      <p class="nav-logo text-mango font-prosto">JMaq Inc.</p>
      <img src="https://i.ibb.co/CMtvssK/shout-mango.png" alt="shout-mango" border="0"/>
    </article>
    <article class="jmaq-footer-container container-max-width">
      <div class="jmaq-footer-container-navigation">
        <a href="" class="nav-link">What we do</a>
        <a href="" class="nav-link">Who we are</a>
        <a href="" class="nav-link">Our Insights</a>
        <a href="" class="nav-link">Join Us</a>
        <a href="" class="nav-link">Contact Us</a>
        <a href="" class="nav-link hidden max-md:block">Privacy Policy</a>
        <a href="" class="nav-link hidden max-md:block">Cookies</a>
      </div>
      <div class="jmaq-footer-container-contacts">
        <div class="jmaq-footer-container-contacts-content">
          <p class="contact-data">
            Call Us: <span class="block">(12) 345 678</span>
          </p>
          <p class="contact-data">
            Email Us: <span class="block">hello@jmaq.com</span>
          </p>
          <p class="contact-data">
            Call Us: <span class="block">Taguig, Philippines</span>
          </p>
        </div>
      </div>
      <div class="jmaq-footer-container-policy">
        <div class="jmaq-footer-container-policy-content">
          <a href="" class="">Privacy Policy</a>
          <a href="">Cookies</a>
        </div>
        <p>
          © 2020, Steven Guevarra
          <span class="block max-md:inline-block">All Rights Reserved.</span>
        </p>
      </div>
    </article>
  </section>
</template>

<style lang="scss">
.jmaq-footer-logo {
  @apply py-5 flex;
  .nav-logo {
    @apply text-xl;
  }
  img {
    height: 20px;
    @apply pt-1 pl-2;
  }
}

.jmaq-footer-container {
  @apply grid grid-cols-12 max-md:grid-cols-2 pb-10 max-md:pb-0;
  &-navigation {
    @apply col-span-2 max-md:col-span-1 flex flex-col;
    .nav-link {
      @apply text-sm py-1;
    }
  }
  &-contacts {
    @apply col-span-8 max-md:col-span-1 flex justify-center;
    &-content {
      @apply flex max-md:flex-col max-md:justify-between;
      .contact-data {
        @apply text-sm px-5 max-md:px-0 text-blue-500;
        span {
          @apply text-white-dark;
        }
      }
    }
  }
  &-policy {
    @apply col-span-2 max-md:col-span-2 flex flex-col items-end max-md:items-center max-md:py-10;
    &-content {
      @apply flex max-md:hidden pb-2;
      a {
        @apply text-sm;
      }
      a:nth-child(1) {
        @apply px-5;
      }
    }
    p {
      @apply max-md:font-light text-sm;
    }
  }
}
</style>