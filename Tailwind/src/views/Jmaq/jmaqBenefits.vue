<template>
  <section class="jmaq-benefits-section">
    <article class="jmaq-main-article container-max-width">
      <div class="jmaq-main-article-image">
        <!-- img div is relative because the before and after is an absolute element -->
        <div class="relative edge-style-1">
          <!-- Adapt image height to parent and adjust its heights instead of width under akward brekapoints-->
          <img src="https://i.ibb.co/SfD3x97/JMAQBenefits-Image-1.png" class="max-h-image"/>
        </div>
        <img src="https://i.ibb.co/ZhLhMH9/JMAQBenefits-Graphic-1.png" class="sub-center-image"/>
      </div>
      <div class="jmaq-main-article-content">
        <p class="content-header">
            What can you achieve
        </p>
        <p class="content-title">
          Duis aute Irure dolor in reprehen derit in Voluptate velit esse illu
          dolore eu fugiat.
        </p>
        <p class="content-context">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem lorem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem. eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
        </p>
      </div>
    </article>
    <article class="jmaq-sub-articles container-side-padding container-max-width">
      <p class="sub-content-header">
        What can we do for you
      </p>
      <div class="sub-content-container">
        <div class="sub-content">
          <div class="sub-content-image edge-style-2">
            <img src="https://i.ibb.co/J72sHdS/Performance-Audits-1.png" class="max-w-image"/>
            <!-- my-auto aligned the img element to its parent div-->
            <img src="https://i.ibb.co/4Wpv3wB/Solutions-3-1.png" class="sub-center-image"/>
          </div>
          <p class="sub-content-title">Search Engine Optimization</p>
          <p class="sub-content-context">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet.
          </p>
          <a href="" class="greater-triangle sub-content-read-more">
            Learn more
          </a>
        </div>
        <div class="sub-content">
          <div class="sub-content-image edge-style-2">
            <img src="https://i.ibb.co/FmV0rrf/UX-Audits-1.png" class="max-w-image"/>
            <img src="https://i.ibb.co/1Z4RdSb/Solutions-2-2.png" class="sub-center-image"/>
          </div>
          <p class="sub-content-title">Content Management</p>
          <p class="sub-content-context">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in
          </p>
          <a href="" class="greater-triangle sub-content-read-more">
            Learn more
          </a>
        </div>
        <div class="sub-content">
          <div class="sub-content-image edge-style-2">
            <img src="https://i.ibb.co/fvykT4D/Accessibility-Reports-1.png" class="max-w-image"/>
            <img src="https://i.ibb.co/r317zD8/Solutions-1-3.png" class="sub-center-image"/>
          </div>
          <p class="sub-content-title">Social Media Marketing</p>
          <p class="sub-content-context">
            Uis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum beatae vitae dicta sunt explicabo.
          </p>
          <a href="" class="greater-triangle sub-content-read-more">
            Learn more
          </a>
        </div>
      </div>
    </article>
  </section>
</template>

<style lang="scss">
.jmaq-benefits-section {
  @apply text-black py-20;
}

.jmaq-main-article {
  @apply grid gap-8 grid-cols-2 max-md:grid-cols-1 pb-20 max-md:pb-10;
  &-image {
    @apply pl-20 max-md:pl-0 max-md:pr-8 flex relative;
    .max-h-image {
      @apply h-full max-h-full object-cover z-10;
      @media screen and(max-width: 768px) {
        @apply w-full max-w-full;
      }
    }
    .sub-center-image {
      @apply absolute rounded-lg h-20 max-md:h-16 top-0 m-3 max-md:my-6 max-md:mx-8 z-20;
    }
  }
  &-content {
    @apply pr-24 max-md:px-8 flex flex-col justify-between;
  }
}

.jmaq-sub-articles {
  .sub-content-container {
    @apply grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-3 max-lg:gap-6 max-md:gap-0 justify-center;
    .sub-content {
      @apply flex flex-col max-md:pb-10;
      &-image {
        @apply relative;
        .max-w-image {
          @apply w-full max-w-full object-cover z-10;
        }
        // Centering using my-auto requires a fixed height of the element.
        .sub-center-image {
          @apply absolute my-auto top-0 bottom-0 right-0 mr-5 rounded-lg z-20;
        }
      }
    }
  }
}
</style>