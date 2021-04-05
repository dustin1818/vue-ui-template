<template>
  <section class="jmaq-testimonial-section background-navy">
    <article class="jmaq-testimonial-section-container container-max-width">
      <div class="jmaq-testimonial-section-container-text">
        <p class="content-header">What we have done</p>
        <p class="content-title">Itaque earum rerum hic tenetur a sapient</p>
        <p class="content-context">
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero
          tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          minus.
        </p>
        <a href="" class="greater-triangle content-read-more">
          View Projects
        </a>
      </div>
      <div class="jmaq-testimonial-section-swiper-large">
        <swiper :slides-per-view="2" :space-between="30" :loop="true" :pagination="{ clickable: true }" class="swiper-container">
          <swiper-slide>
            <div class="swiper-container-content edge-style-2">
              <img src="https://i.ibb.co/jWRYvQS/Globe-Lorem-1.png" class="swiper-container-content-image"/>
              <p class="absolute top-0 left-0 m-2 text-lg text-white font-elite">
                Global Lorem <span class="max-md:block">Inc.</span>
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-container-content edge-style-2">
              <img src="https://i.ibb.co/SNBCXtM/Frame-1.png" class="swiper-container-content-image"/>
              <p class="absolute top-0 left-0 m-2 text-lg text-white font-elite">
                Medical Ipsum <span class="max-md:block">Inc.</span>
              </p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="jmaq-testimonial-section-swiper-small">
        <swiper :slides-per-view="1" :space-between="30" :loop="true" :pagination="{ clickable: true }" class="swiper-container">
          <swiper-slide>
            <div class="swiper-container-content edge-style-2">
              <img src="https://i.ibb.co/jWRYvQS/Globe-Lorem-1.png" class="swiper-container-content-image"/>
              <p class="absolute top-0 left-0 m-2 max-md:m-8 text-lg max-md:text-xl text-white font-elite">
                Global Lorem <span class="max-md:block">Inc.</span>
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="swiper-container-content edge-style-2">
              <img src="https://i.ibb.co/SNBCXtM/Frame-1.png" class="swiper-container-content-image"/>
              <p class="absolute top-0 left-0 m-2 max-md:m-8 text-lg max-md:text-xl text-white font-elite">
                Global Lorem <span class="max-md:block">Inc.</span>
              </p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </article>
    <article class="jmaq-testimonial-section-reviews container-max-width container-side-padding">
      <p class="content-header"> 
        What we recently discovered
      </p>
      <aside class="reviews-content">
        <swiper :slides-per-view="4" :space-between="30" :loop="true" :pagination="{ clickable: true }" class="swipper-container">
          <swiper-slide class="swiper-slide-container edge-style-4">
            <p class="sub-content-context">
              “At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum delenit atque corrupti quos
              dolores et quas molestias exceptu sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt
              mollitia."
            </p>
            <div class="sub-content-container">
              <div class="sub-content-container-image">
                <img src="https://i.ibb.co/SJ7WKrL/Mask-Group.png" alt="Mask-Group"/>
              </div>
              <div class="sub-content-container-profile">
                <p class="sub-content-context">
                  Timothy Vaynerchuk
                </p>
                <p class="sub-content-context text-blue-500">
                  CEO of Atvero Eos Inc.
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide-container edge-style-4">
            <p class="sub-content-context">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur."
            </p>
            <div class="sub-content-container">
              <div class="sub-content-container-image">
                <img src="https://i.ibb.co/nQdZSW7/Mask-Group-2.png" alt="Mask-Group"/>
              </div>
              <div class="sub-content-container-profile">
                <p class="sub-content-context">
                  Chloe Lok
                </p>
                <p class="sub-content-context text-blue-500">
                  President of Lorem Inc.
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide-container edge-style-4">
            <p class="sub-content-context">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae
              vitae dicta sunt explicabo."
            </p>
            <div class="sub-content-container">
              <div class="sub-content-container-image">
                <img src="https://i.ibb.co/3fbJj7p/Mask-Group-3.png" alt="Mask-Group"/>
              </div>
              <div class="sub-content-container-profile">
                <p class="sub-content-context">
                  Manu Lopez
                </p>
                <p class="sub-content-context text-blue-500">
                  Chairman of Perspic Inc.
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide-container edge-style-4">
            <p class="sub-content-context">
              Ducimus qui blanditiis praesentium voluptatum delenit atque
              corrupti quos dolores et quas molestias exceptu sint occaecati
              cupiditate non provident, similique sunt in culpa qui officia
              deserunt mollitia."
            </p>
            <div class="sub-content-container">
              <div class="sub-content-container-image">
                <img src="https://i.ibb.co/dQf19kd/Mask-Group.png" alt="Mask-Group"/>
              </div>
              <div class="sub-content-container-profile">
                <p class="sub-content-context">
                  Dana Black
                </p>
                <p class="sub-content-context text-blue-500">
                  Director of Dolores Inc.
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <swiper :slides-per-view="3" :space-between="30" :loop="true" :pagination="{ clickable: true }" class="swipper-container">
          <swiper-slide class="swiper-slide-container edge-style-4">
            <p class="sub-content-context">
              “At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum delenit atque corrupti quos
              dolores et quas molestias exceptu sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt
              mollitia."
            </p>
            <div class="sub-content-container">
              <div class="sub-content-container-image">
                <img src="https://i.ibb.co/SJ7WKrL/Mask-Group.png" alt="Mask-Group"/>
              </div>
              <div class="sub-content-container-profile">
                <p class="sub-content-context">
                  Timothy Vaynerchuk
                </p>
                <p class="sub-content-context text-blue-500">
                  CEO of Atvero Eos Inc.
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide-container edge-style-4">
            <p class="sub-content-context">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur."
            </p>
            <div class="sub-content-container">
              <div class="sub-content-container-image">
                <img src="https://i.ibb.co/nQdZSW7/Mask-Group-2.png" alt="Mask-Group"/>
              </div>
              <div class="sub-content-container-profile">
                <p class="sub-content-context">
                  Chloe Lok
                </p>
                <p class="sub-content-context text-blue-500">
                  President of Lorem Inc.
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide-container edge-style-4">
            <p class="sub-content-context">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae
              vitae dicta sunt explicabo."
            </p>
            <div class="sub-content-container">
              <div class="sub-content-container-image">
                <img src="https://i.ibb.co/3fbJj7p/Mask-Group-3.png" alt="Mask-Group"/>
              </div>
              <div class="sub-content-container-profile">
                <p class="sub-content-context">
                  Manu Lopez
                </p>
                <p class="sub-content-context text-blue-500">
                  Chairman of Perspic Inc.
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide-container edge-style-4">
            <p class="sub-content-context">
              Ducimus qui blanditiis praesentium voluptatum delenit atque
              corrupti quos dolores et quas molestias exceptu sint occaecati
              cupiditate non provident, similique sunt in culpa qui officia
              deserunt mollitia."
            </p>
            <div class="sub-content-container">
              <div class="sub-content-container-image">
                <img src="https://i.ibb.co/dQf19kd/Mask-Group.png" alt="Mask-Group"/>
              </div>
              <div class="sub-content-container-profile">
                <p class="sub-content-context">
                  Dana Black
                </p>
                <p class="sub-content-context text-blue-500">
                  Director of Dolores Inc.
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <swiper :slides-per-view="2" :space-between="30" :loop="true" :pagination="{ clickable: true }" class="swipper-container">
          <swiper-slide class="swiper-slide-container edge-style-4">
            <p class="sub-content-context">
              “At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum delenit atque corrupti quos
              dolores et quas molestias exceptu sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt
              mollitia."
            </p>
            <div class="sub-content-container">
              <div class="sub-content-container-image">
                <img src="https://i.ibb.co/SJ7WKrL/Mask-Group.png" alt="Mask-Group"/>
              </div>
              <div class="sub-content-container-profile">
                <p class="sub-content-context">
                  Timothy Vaynerchuk
                </p>
                <p class="sub-content-context text-blue-500">
                  CEO of Atvero Eos Inc.
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide-container edge-style-4">
            <p class="sub-content-context">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur."
            </p>
            <div class="sub-content-container">
              <div class="sub-content-container-image">
                <img src="https://i.ibb.co/nQdZSW7/Mask-Group-2.png" alt="Mask-Group"/>
              </div>
              <div class="sub-content-container-profile">
                <p class="sub-content-context">
                  Chloe Lok
                </p>
                <p class="sub-content-context text-blue-500">
                  President of Lorem Inc.
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide-container edge-style-4">
            <p class="sub-content-context">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae
              vitae dicta sunt explicabo."
            </p>
            <div class="sub-content-container">
              <div class="sub-content-container-image">
                <img src="https://i.ibb.co/3fbJj7p/Mask-Group-3.png" alt="Mask-Group"/>
              </div>
              <div class="sub-content-container-profile">
                <p class="sub-content-context">
                  Manu Lopez
                </p>
                <p class="sub-content-context text-blue-500">
                  Chairman of Perspic Inc.
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide-container edge-style-4">
            <p class="sub-content-context">
              Ducimus qui blanditiis praesentium voluptatum delenit atque
              corrupti quos dolores et quas molestias exceptu sint occaecati
              cupiditate non provident, similique sunt in culpa qui officia
              deserunt mollitia."
            </p>
            <div class="sub-content-container">
              <div class="sub-content-container-image">
                <img src="https://i.ibb.co/dQf19kd/Mask-Group.png" alt="Mask-Group"/>
              </div>
              <div class="sub-content-container-profile">
                <p class="sub-content-context">
                  Dana Black
                </p>
                <p class="sub-content-context text-blue-500">
                  Director of Dolores Inc.
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <swiper :slides-per-view="1" :space-between="30" :loop="true" :pagination="{ clickable: true }" class="swipper-container">
          <swiper-slide class="swiper-slide-container edge-style-4">
            <p class="sub-content-context">
              “At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum delenit atque corrupti quos
              dolores et quas molestias exceptu sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt
              mollitia."
            </p>
            <div class="sub-content-container">
              <div class="sub-content-container-image">
                <img src="https://i.ibb.co/SJ7WKrL/Mask-Group.png" alt="Mask-Group"/>
              </div>
              <div class="sub-content-container-profile">
                <p class="sub-content-context">
                  Timothy Vaynerchuk
                </p>
                <p class="sub-content-context text-blue-500">
                  CEO of Atvero Eos Inc.
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide-container edge-style-4">
            <p class="sub-content-context">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur."
            </p>
            <div class="sub-content-container">
              <div class="sub-content-container-image">
                <img src="https://i.ibb.co/nQdZSW7/Mask-Group-2.png" alt="Mask-Group"/>
              </div>
              <div class="sub-content-container-profile">
                <p class="sub-content-context">
                  Chloe Lok
                </p>
                <p class="sub-content-context text-blue-500">
                  President of Lorem Inc.
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide-container edge-style-4">
            <p class="sub-content-context">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae
              vitae dicta sunt explicabo."
            </p>
            <div class="sub-content-container">
              <div class="sub-content-container-image">
                <img src="https://i.ibb.co/3fbJj7p/Mask-Group-3.png" alt="Mask-Group"/>
              </div>
              <div class="sub-content-container-profile">
                <p class="sub-content-context">
                  Manu Lopez
                </p>
                <p class="sub-content-context text-blue-500">
                  Chairman of Perspic Inc.
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide-container edge-style-4">
            <p class="sub-content-context">
              Ducimus qui blanditiis praesentium voluptatum delenit atque
              corrupti quos dolores et quas molestias exceptu sint occaecati
              cupiditate non provident, similique sunt in culpa qui officia
              deserunt mollitia."
            </p>
            <div class="sub-content-container">
              <div class="sub-content-container-image">
                <img src="https://i.ibb.co/dQf19kd/Mask-Group.png" alt="Mask-Group"/>
              </div>
              <div class="sub-content-container-profile">
                <p class="sub-content-context">
                  Dana Black
                </p>
                <p class="sub-content-context text-blue-500">
                  Director of Dolores Inc.
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </aside>
    </article>
  </section>
</template>

<script>
import "swiper/swiper.scss";
import "./jmaqPagination.scss";

import SwiperCore, { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

SwiperCore.use([Pagination, A11y]);
export default {
  components: {
    Swiper,
    SwiperSlide
  },
};
</script>

<style lang="scss">
.jmaq-testimonial-section {
  @apply py-20;
  &-container {
    @apply grid grid-cols-12 pl-20 max-md:px-0;
    &-text {
      @apply col-span-5 max-md:col-span-12 max-md:px-8 pr-16 flex flex-col justify-center max-md:order-2;
    }
  }
  &-swiper-large {
    @apply col-span-7 max-md:hidden;
    .swiper-container {
      @apply pb-10;
      &-content { 
        @apply relative;
        &-image {
          height: 325px;
          @apply w-full max-w-full object-cover z-10;
        }
      }
    }
  }
  &-swiper-small {
    @apply col-span-12 hidden max-md:block;
    .swiper-container {
      @apply pb-10;
      &-content { 
        @apply relative;
        &-image {
          height: 325px;
          @apply w-full max-w-full object-cover z-10;
        }
      }
    }
  }
  &-reviews {
    @apply pt-10;
    .reviews-content {
      .swipper-container {
        @apply pb-10;
        .swiper-slide-container {
          @apply p-4;
        }
        .sub-content-container {
          @apply flex justify-between;
          &-image {
            @apply flex justify-center;
            img {
              @apply w-full max-w-full object-contain;
            }
          }
          &-profile {
            @apply flex-grow flex flex-col justify-center pl-2;
            p{
              padding: 0 !important;
            }
          }
        }
      }
      .swiper-container:nth-child(1){
        display: none;
        @media only screen and (min-width: 1200px) {
            display: block;
        }
      }
      .swiper-container:nth-child(2){
        display: none;
        @media only screen and (max-width: 1199px) and (min-width: 900px) {
            display: block;
        }
      }
      .swiper-container:nth-child(3){
        display: none;
        @media only screen and (max-width: 899px) and (min-width: 500px) {
            display: block;
        }
      }
      .swiper-container:nth-child(4){
        display: none;
        @media only screen and (max-width: 499px) and (min-width: 0px) {
            display: block;
        }
      }
    }
  }
}
.swiper-slide {
  color: black !important;
  background-color: rgb(255, 255, 255) !important;
}

.swiper-pagination-bullet {
  background-color: #3d83f6 !important;
  background: #3d83f6 !important;
}
</style>
