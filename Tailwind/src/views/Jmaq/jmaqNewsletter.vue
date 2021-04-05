<template>
  <section class="jmaq-newsletter-section container-max-width">
    <article class="jmaq-newsletter-article">
      <div class="jmaq-newsletter-article-image">
        <!-- this div is relative due to its before and after element having a absolute position -->
        <div class="relative edge-style-3">
          <!-- Adapt image height to parent and adjust its heights instead of width under akward brekapoints-->
          <img src="https://i.ibb.co/gZp5znY/Analytics-1.png" class="max-h-image"/>
        </div>
      </div>
      <div class="jmaq-newsletter-article-content">
        <p class="content-header">What we recently discovered</p>
        <p class="content-title">The new trend of Lorem Ipsum.</p>
        <p class="content-context">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <a href="" class="greater-triangle content-read-more"> Read More </a>
      </div>
    </article>
    <article class="jmaq-newsletter-container">
      <div class="container-side-dash"></div>
      <div class="container-form">
        <form>
          <p class="content-title">
            Subscribe to our <span class="text-mango">Newsletter</span>
          </p>
          <p class="sub-content-context">
            Voluptatem accusantium doloremque laudantium, totam rem ipsum,
            aperiam, eaque ipsa quae ab illo inventore.
          </p>
          <div class="newsletter-form">
            <div class="newsletter-form-content">
              <input type="text" placeholder="Email Address"/>
            </div>
            <button class="greater-triangle primary-submit-sm">Submit</button>
          </div>
        </form>
      </div>
      <div class="container-side-dash"></div>
    </article>
  </section>
</template>

<style lang="scss">
.jmaq-newsletter-section {
  @apply text-black flex flex-col;
}

.jmaq-newsletter-article {
  @apply grid grid-cols-2 max-md:grid-cols-1 gap-8 pt-20;
  &-image {
    @apply pl-20 max-md:pr-0 max-md:pl-8 flex relative;
    .max-h-image {
      @apply h-full max-h-full object-cover z-10;
      @media screen and(max-width: 768px) {
        @apply w-full max-w-full;
      }
    }
  }
  &-content {
    @apply pr-24 max-md:px-8 flex flex-col justify-between;
  }
}

.jmaq-newsletter-container {
  @apply grid grid-cols-12 items-center py-40 max-md:py-20;
  .container-side-dash {
    background-color: #ffc324;
    height: 0.5rem;
    @apply w-full col-span-1 max-md:hidden;
  }
  .container-form {
    @apply col-span-10 max-md:col-span-12;
    form {
      width: 435px;
      @apply px-2 mx-auto my-0;
      @media screen and (max-width: 425px) {
        padding: 0 2rem;
        @apply px-8 w-full;
      }
      .newsletter-form {
        @apply flex items-center text-sm;
        &-content {
          border-width: 1px;
          border-color: rgba(0, 0, 0, 0.35);
          @apply flex-grow rounded-md p-2 mr-2;
          input {
            // remove input border when selected, outline-none
            @apply rounded-md w-full bg-white-dark outline-none;
          }
        }
      }
    }
  }
}
</style>