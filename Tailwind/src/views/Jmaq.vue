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
          <p class="text-5xl max-md:text-4xl max-md:leading-normal pb-5 max-md:pb-1 font-medium">
            Your unique Brand.
          </p>
          <p class="text-5xl max-md:text-4xl max-md:leading-normal pb-9 max-md:pb-8 font-medium">
            Improved to <span class="text-mango">Perfection.</span>
          </p>
          <p class="text-xl max-md:text-lg max-md:leading-normal pb-8 max-md:pb-8 max-md:pr-2">
            Let us help you transform your business.
          </p>
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
          <div class="relative img-edge-1">
            <!-- Adapt image height to parent and adjust its heights instead of width under akward brekapoints-->
            <img src="https://i.ibb.co/SfD3x97/JMAQBenefits-Image-1.png" class="h-full max-h-full object-cover z-10"/>
          </div>
          <img src="https://i.ibb.co/ZhLhMH9/JMAQBenefits-Graphic-1.png" class="absolute rounded-lg h-20 max-md:h-16 top-0 m-3 max-md:my-6 max-md:mx-8 z-20"/>
        </div>
        <div class="pr-24 max-md:px-8 flex flex-col justify-center">
          <p class="text-lg max-md:text-sm text-mango font-medium pb-2">
            What can you achieve
          </p>
          <p class="text-3xl max-md:text-3xl font-medium pb-3">
            Duis aute Irure dolor in reprehen derit in Voluptate velit esse illu
            dolore eu fugiat.
          </p>
          <p class="text-lg max-md:text-sm">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem lorem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem.
          </p>
        </div>
      </article>
      <article class="px-20 max-md:px-8 py-14 max-md:pt-7 scroll-out-1440">
        <p class="text-lg max-md:text-sm text-mango font-medium pb-2 max-md:pb-4">
          What can we do for you
        </p>
        <div class="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-3 max-lg:gap-6 max-md:gap-8 justify-center">
          <div class="flex flex-col">
            <div class="relative mb-3 img-edge-2">
              <img src="https://i.ibb.co/J72sHdS/Performance-Audits-1.png" class="w-full max-w-full object-cover z-10"/>
              <!-- my-auto aligned the img element to its parent div-->
              <img src="https://i.ibb.co/4Wpv3wB/Solutions-3-1.png" class="absolute my-auto top-0 bottom-0 right-0 mr-5 rounded-lg h-18 z-20"/>
            </div>
            <p class="text-xl max-md:text-lg font-medium pb-3">
              Search Engine Optimization
            </p>
            <p class="text-sm max-md:text-sm pb-2">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet.
            </p>
            <a href="" class="greater-triangle-sm text-sm font-medium text-blue-500 flex">
              Learn more
            </a>
          </div>
          <div class="flex flex-col">
            <div class="relative mb-3 img-edge-2">
              <img src="https://i.ibb.co/FmV0rrf/UX-Audits-1.png" class="w-full max-w-full object-cover z-10"/>
              <img src="https://i.ibb.co/1Z4RdSb/Solutions-2-2.png" class="absolute my-auto top-0 bottom-0 right-0 mr-5 rounded-lg h-18 z-20"/>
            </div>
            <p class="text-xl max-md:text-lg font-medium pb-3">
              Content Management
            </p>
            <p class="text-sm max-md:text-sm pb-2">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in
            </p>
            <a href="" class="greater-triangle-sm text-sm font-medium text-blue-500 flex">
              Learn more
            </a>
          </div>
          <div class="flex flex-col">
            <div class="relative mb-3 img-edge-2">
              <img src="https://i.ibb.co/fvykT4D/Accessibility-Reports-1.png" class="w-full max-w-full object-cover z-10"/>
              <img src="https://i.ibb.co/r317zD8/Solutions-1-3.png" class="absolute my-auto top-0 bottom-0 right-0 mr-5 rounded-lg h-18 z-20"/>
            </div>
            <p class="text-xl max-md:text-lg font-medium pb-3">
              Social Media Marketing
            </p>
            <p class="text-sm max-md:text-sm pb-2">
              Uis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum beatae vitae dicta sunt explicabo.
            </p>
            <a href="" class="greater-triangle-sm text-sm font-medium text-blue-500 flex" >
              Learn more
            </a>
          </div>
        </div>
      </article>
    </section>
    <section class="bg-bl py-20 max-md:pb-6">
      <article class="grid grid-cols-12 pl-20 max-md:px-0 overflow-hidden scroll-out-1440">
        <div class="max-md:order-2 col-span-5 max-md:col-span-12 max-md:px-8 pr-16 max-md:pb-20 flex flex-col justify-center">
          <p class="text-lg max-md:text-sm text-mango font-medium pb-2">
            What we have done
          </p>
          <p class="text-3xl max-md:text-3xl font-medium pb-3">
            Itaque earum rerum hic tenetur a sapient
          </p>
          <p class="text-lg max-md:text-sm">
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus.
          </p>
        </div>
        <div class="col-span-7 max-md:hidden">
          <swiper :slides-per-view="2" :space-between="30" :loop="true" :pagination="{ clickable: true }" class="pb-14">
            <swiper-slide class="">
              <div class="relative img-edge-2">
                <img src="https://i.ibb.co/jWRYvQS/Globe-Lorem-1.png" class="img-box-height w-full max-w-full object-cover z-10"/>
                <!-- my-auto aligned the img element to its parent div-->
                <p class="absolute top-0 left-0 m-2 text-lg text-white text-special-elite">
                  Global Lorem <span class="max-md:block">Inc.</span>
                </p>
              </div>
            </swiper-slide>
            <swiper-slide class="">
              <div class="relative img-edge-2">
                <img src="https://i.ibb.co/jWRYvQS/Globe-Lorem-1.png" class="img-box-height w-full max-w-full object-cover z-10"/>
                <!-- my-auto aligned the img element to its parent div-->
                <p class="absolute top-0 left-0 m-2 text-lg text-white text-special-elite">
                  Global Lorem <span class="max-md:block">Inc.</span>
                </p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="col-span-12 hidden max-md:block pb-4">
          <swiper :slides-per-view="1" :space-between="30" :loop="true" :pagination="{ clickable: true }" class="pb-10">
            <swiper-slide class="">
              <div class="relative img-edge-2">
                <img src="https://i.ibb.co/jWRYvQS/Globe-Lorem-1.png" class="img-box-height w-full max-w-full object-cover z-10"/>
                <!-- my-auto aligned the img element to its parent div-->
                <p class="absolute top-0 left-0 m-2 text-lg text-white text-special-elite" >
                  Global Lorem <span class="max-md:block">Inc.</span>
                </p>
              </div>
            </swiper-slide>
            <swiper-slide class="">
              <div class="relative img-edge-2">
                <img src="https://i.ibb.co/jWRYvQS/Globe-Lorem-1.png" class="img-box-height w-full max-w-full object-cover z-10"/>
                <!-- my-auto aligned the img element to its parent div-->
                <p class="absolute top-0 left-0 m-2 text-lg text-white text-special-elite">
                  Global Lorem <span class="max-md:block">Inc.</span>
                </p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </article>
      <div class="reviews scroll-out-1440">
        <p class="ml-20 max-md:ml-8 text-lg max-md:text-sm text-mango font-medium pb-3"> 
          What we recently discovered
        </p>
        <article class="s-sm">
          <swiper :slides-per-view="1" :space-between="30" :loop="true" :pagination="{ clickable: true }" class="mx-0 pb-14">
            <swiper-slide class="px-8 py-4 img-edge-4">
              <p class="text-sm pb-2">
                “At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum delenit atque corrupti quos
                dolores et quas molestias exceptu sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt
                mollitia."
              </p>
              <div class="flex justify-between">
                <div class="">
                  <img
                    src="https://i.ibb.co/SJ7WKrL/Mask-Group.png"
                    alt="Mask-Group"
                    class="w-full max-w-full object-contain"
                  />
                </div>
                <div class="flex-grow flex flex-col justify-end pl-2 pt-1">
                  <p class="text-sm font-medium">Timothy Vaynerchuk</p>
                  <p class="text-sm pb-2 text-blue-500 font-medium">
                    CEO of Atvero Eos Inc.
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="px-8 py-4 img-edge-4">
              <p class="text-sm pb-2">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur."
              </p>
              <div class="flex justify-between">
                <div class="">
                  <img
                    src="https://i.ibb.co/nQdZSW7/Mask-Group-2.png"
                    alt="Mask-Group"
                    class="w-full max-w-full object-contain"
                  />
                </div>
                <div class="flex-grow flex flex-col justify-end pl-2 pt-1">
                  <p class="text-sm font-medium">Chloe Lok</p>
                  <p class="text-sm pb-2 text-blue-500 font-medium">
                    President of Lorem Inc.
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="px-8 py-4 img-edge-4">
              <p class="text-sm pb-2">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo."
              </p>
              <div class="flex justify-between">
                <div class="">
                  <img
                    src="https://i.ibb.co/3fbJj7p/Mask-Group-3.png"
                    alt="Mask-Group"
                    class="w-full max-w-full object-contain"
                  />
                </div>
                <div class="flex-grow flex flex-col justify-end pl-2 pt-1">
                  <p class="text-sm font-medium">Manu Lopez</p>
                  <p class="text-sm pb-2 text-blue-500 font-medium">
                    Chairman of Perspic Inc.
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="px-8 py-4 img-edge-4">
              <p class="text-sm pb-2">
                Ducimus qui blanditiis praesentium voluptatum delenit atque
                corrupti quos dolores et quas molestias exceptu sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia
                deserunt mollitia."
              </p>
              <div class="flex justify-between">
                <div class="">
                  <img
                    src="https://i.ibb.co/SJ7WKrL/Mask-Group.png"
                    alt="Mask-Group"
                    class="w-full max-w-full object-contain"
                  />
                </div>
                <div class="flex-grow flex flex-col justify-end pl-2 pt-1">
                  <p class="text-sm font-medium">Dustin Amoda</p>
                  <p class="text-sm pb-2 text-blue-500 font-medium">
                    Head of Andrea Inc.
                  </p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </article>

        <article class="s-md">
          <swiper
            :slides-per-view="2"
            :space-between="30"
            :loop="true"
            :pagination="{ clickable: true }"
            class="mx-0 pb-14"
          >
            <swiper-slide class="px-3 py-4 img-edge-4">
              <p class="text-sm pb-2">
                “At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum delenit atque corrupti quos
                dolores et quas molestias exceptu sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt
                mollitia."
              </p>
              <div class="flex justify-between">
                <div class="">
                  <img
                    src="https://i.ibb.co/SJ7WKrL/Mask-Group.png"
                    alt="Mask-Group"
                    class="w-full max-w-full object-contain"
                  />
                </div>
                <div class="flex-grow flex flex-col justify-end pl-2 pt-1">
                  <p class="text-sm font-medium">Timothy Vaynerchuk</p>
                  <p class="text-sm pb-2 text-blue-500 font-medium">
                    CEO of Atvero Eos Inc.
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="px-3 py-4 img-edge-4">
              <p class="text-sm pb-2">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur."
              </p>
              <div class="flex justify-between">
                <div class="">
                  <img
                    src="https://i.ibb.co/nQdZSW7/Mask-Group-2.png"
                    alt="Mask-Group"
                    class="w-full max-w-full object-contain"
                  />
                </div>
                <div class="flex-grow flex flex-col justify-end pl-2 pt-1">
                  <p class="text-sm font-medium">Chloe Lok</p>
                  <p class="text-sm pb-2 text-blue-500 font-medium">
                    President of Lorem Inc.
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="px-3 py-4 img-edge-4">
              <p class="text-sm pb-2">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo."
              </p>
              <div class="flex justify-between">
                <div class="">
                  <img
                    src="https://i.ibb.co/3fbJj7p/Mask-Group-3.png"
                    alt="Mask-Group"
                    class="w-full max-w-full object-contain"
                  />
                </div>
                <div class="flex-grow flex flex-col justify-end pl-2 pt-1">
                  <p class="text-sm font-medium">Manu Lopez</p>
                  <p class="text-sm pb-2 text-blue-500 font-medium">
                    Chairman of Perspic Inc.
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="px-3 py-4 img-edge-4">
              <p class="text-sm pb-2">
                Ducimus qui blanditiis praesentium voluptatum delenit atque
                corrupti quos dolores et quas molestias exceptu sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia
                deserunt mollitia."
              </p>
              <div class="flex justify-between">
                <div class="">
                  <img
                    src="https://i.ibb.co/SJ7WKrL/Mask-Group.png"
                    alt="Mask-Group"
                    class="w-full max-w-full object-contain"
                  />
                </div>
                <div class="flex-grow flex flex-col justify-end pl-2 pt-1">
                  <p class="text-sm font-medium">Dustin Amoda</p>
                  <p class="text-sm pb-2 text-blue-500 font-medium">
                    Head of Andrea Inc.
                  </p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </article>

        <article class="s-lg">
          <swiper
            :slides-per-view="3"
            :space-between="30"
            :loop="true"
            :pagination="{ clickable: true }"
            class="ml-20 pb-14"
          >
            <swiper-slide class="px-3 py-4 img-edge-4">
              <p class="text-sm pb-2">
                “At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum delenit atque corrupti quos
                dolores et quas molestias exceptu sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt
                mollitia."
              </p>
              <div class="flex justify-between">
                <div class="">
                  <img
                    src="https://i.ibb.co/SJ7WKrL/Mask-Group.png"
                    alt="Mask-Group"
                    class="w-full max-w-full object-contain"
                  />
                </div>
                <div class="flex-grow flex flex-col justify-end pl-2 pt-1">
                  <p class="text-sm font-medium">Timothy Vaynerchuk</p>
                  <p class="text-sm pb-2 text-blue-500 font-medium">
                    CEO of Atvero Eos Inc.
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="px-3 py-4 img-edge-4">
              <p class="text-sm pb-2">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur."
              </p>
              <div class="flex justify-between">
                <div class="">
                  <img
                    src="https://i.ibb.co/nQdZSW7/Mask-Group-2.png"
                    alt="Mask-Group"
                    class="w-full max-w-full object-contain"
                  />
                </div>
                <div class="flex-grow flex flex-col justify-end pl-2 pt-1">
                  <p class="text-sm font-medium">Chloe Lok</p>
                  <p class="text-sm pb-2 text-blue-500 font-medium">
                    President of Lorem Inc.
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="px-3 py-4 img-edge-4">
              <p class="text-sm pb-2">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo."
              </p>
              <div class="flex justify-between">
                <div class="">
                  <img
                    src="https://i.ibb.co/3fbJj7p/Mask-Group-3.png"
                    alt="Mask-Group"
                    class="w-full max-w-full object-contain"
                  />
                </div>
                <div class="flex-grow flex flex-col justify-end pl-2 pt-1">
                  <p class="text-sm font-medium">Manu Lopez</p>
                  <p class="text-sm pb-2 text-blue-500 font-medium">
                    Chairman of Perspic Inc.
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="px-3 py-4 img-edge-4">
              <p class="text-sm pb-2">
                Ducimus qui blanditiis praesentium voluptatum delenit atque
                corrupti quos dolores et quas molestias exceptu sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia
                deserunt mollitia."
              </p>
              <div class="flex justify-between">
                <div class="">
                  <img
                    src="https://i.ibb.co/SJ7WKrL/Mask-Group.png"
                    alt="Mask-Group"
                    class="w-full max-w-full object-contain"
                  />
                </div>
                <div class="flex-grow flex flex-col justify-end pl-2 pt-1">
                  <p class="text-sm font-medium">Dustin Amoda</p>
                  <p class="text-sm pb-2 text-blue-500 font-medium">
                    Head of Andrea Inc.
                  </p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </article>
        <article class="s-xl">
          <swiper :slides-per-view="4" :space-between="40" :loop="true" :pagination="{ clickable: true }" class="ml-20 pb-14">
            <swiper-slide class="px-3 py-4 img-edge-4">
              <p class="text-sm pb-2">
                “At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum delenit atque corrupti quos
                dolores et quas molestias exceptu sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt
                mollitia."
              </p>
              <div class="flex justify-between">
                <div class="">
                  <img src="https://i.ibb.co/SJ7WKrL/Mask-Group.png" alt="Mask-Group" class="w-full max-w-full object-contain"/>
                </div>
                <div class="flex-grow flex flex-col justify-end pl-2 pt-1">
                  <p class="text-sm font-medium">Timothy Vaynerchuk</p>
                  <p class="text-sm pb-2 text-blue-500 font-medium">
                    CEO of Atvero Eos Inc.
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="px-3 py-4 img-edge-4">
              <p class="text-sm pb-2">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur."
              </p>
              <div class="flex justify-between">
                <div class="">
                  <img src="https://i.ibb.co/nQdZSW7/Mask-Group-2.png" alt="Mask-Group" class="w-full max-w-full object-contain"/>
                </div>
                <div class="flex-grow flex flex-col justify-end pl-2 pt-1">
                  <p class="text-sm font-medium">Chloe Lok</p>
                  <p class="text-sm pb-2 text-blue-500 font-medium">
                    President of Lorem Inc.
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="px-3 py-4 img-edge-4">
              <p class="text-sm pb-2">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo."
              </p>
              <div class="flex justify-between">
                <div class="">
                  <img src="https://i.ibb.co/3fbJj7p/Mask-Group-3.png" alt="Mask-Group" class="w-full max-w-full object-contain"/>
                </div>
                <div class="flex-grow flex flex-col justify-end pl-2 pt-1">
                  <p class="text-sm font-medium">Manu Lopez</p>
                  <p class="text-sm pb-2 text-blue-500 font-medium">
                    Chairman of Perspic Inc.
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="px-3 py-4 mb-3 img-edge-4">
              <p class="text-sm pb-2">
                Ducimus qui blanditiis praesentium voluptatum delenit atque
                corrupti quos dolores et quas molestias exceptu sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia
                deserunt mollitia."
              </p>
              <div class="flex justify-between">
                <div class="">
                  <img src="https://i.ibb.co/SJ7WKrL/Mask-Group.png" alt="Mask-Group" class="w-full max-w-full object-contain"/>
                </div>
                <div class="flex-grow flex flex-col justify-end pl-2 pt-1">
                  <p class="text-sm font-medium">Dustin Amoda</p>
                  <p class="text-sm pb-2 text-blue-500 font-medium">
                    Head of Andrea Inc.
                  </p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </article>
      </div>
    </section>
    <section class="text-black flex flex-col pt-20 pb-40 max-md:pb-20 scroll-out-1440">
      <article class="grid gap-16 max-md:gap-8 grid-cols-2 max-md:grid-cols-1 flex-grow">
        <div class="pl-20 max-md:pr-0 max-md:pl-8 flex relative">
          <!-- img div is relative because the before and after is an absolute element -->
          <div class="relative img-edge-3">
            <!-- Adapt image height to parent and adjust its heights instead of width under akward brekapoints-->
            <img
              src="https://i.ibb.co/gZp5znY/Analytics-1.png"
              class="h-full max-h-full object-cover z-10"
            />
          </div>
        </div>
        <div class="pr-24 max-md:px-8 flex flex-col justify-center">
          <p class="text-lg max-md:text-sm text-mango font-medium pb-2">
            What we recently discovered
          </p>
          <p class="text-3xl max-md:text-3xl font-medium pb-3">
            The new trend of Lorem Ipsum.
          </p>
          <p class="text-lg max-md:text-sm pb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nost exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <a href="" class="text-lg max-md:text-sm greater greater-triangle-sm text-blue-500 font-medium">
            Read More
          </a>
        </div>
      </article>
      <article class="grid grid-cols-12 items-center pt-40 max-md:pt-20">
        <div class="yellow-line col-span-1 max-md:hidden"></div>
        <div class="col-span-10 max-md:col-span-12">
          <form class="w-form">
            <p class="text-3xl pb-2">
              Subscribe to our <span class="text-mango">Newsletter</span>
            </p>
            <p class="text-xs pb-4">
              Voluptatem accusantium doloremque laudantium, totam rem ipsum,
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto.
            </p>
            <div class="flex items-center text-sm">
              <div class="flex-grow border-gr rounded-md p-5px mr-2">
                <input type="text" placeholder="Email Address" class="rounded-md"/>
              </div>
              <button class="greater-triangle bg-blue-500 btn-size-sm flex justify-center items-center rounded-md">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div class="yellow-line col-span-1 max-md:hidden"></div>
      </article>
    </section>
    <section class="px-20 max-md:px-8 bg-bl text-sm">
      <article class="pt-8 scroll-out-1440">
        <p class="text-xl text-mango">JMaq Inc.</p>
      </article>
      <article class="grid grid-cols-12 max-md:grid-cols-2 scroll-out-1440">
        <div class="flex flex-col py-5 col-span-2 max-md:col-span-1">
          <a href="" class="pb-1 max-md:pb-2">What we do</a>
          <a href="" class="pb-1 max-md:pb-2">Who we are</a>
          <a href="" class="pb-1 max-md:pb-2">Our Insights</a>
          <a href="" class="pb-1 max-md:pb-2">Join Us</a>
          <a href="" class="pb-1 max-md:pb-2">Contact Us</a>
          <a href="" class="pb-1 max-md:pb-2 hidden max-md:block">Privacy Policy</a>
          <a href="" class="pb-1 max-md:pb-2 hidden max-md:block">Cookies</a>
        </div>
        <div class="flex justify-center py-5 col-span-8 max-md:col-span-1 ">
          <div class="flex max-md:flex-col max-md:justify-between max-md:py-2">
            <p class="px-6 max-md:px-4 text-blue-500">
              Call Us: <span class="block text-white">(12) 345 678</span>
            </p>
            <p class="px-6 max-md:px-4 text-blue-500">
              Email Us: <span class="block text-white">hello@jmaq.com</span>
            </p>
            <p class="px-6 max-md:px-4 text-blue-500">
              Call Us: <span class="block text-white">Taguig, Philippines</span>
            </p>
          </div>
        </div>
        <div class="py-5 col-span-2 max-md:col-span-2 flex flex-col items-end max-md:items-center pb-10">
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
import "swiper/swiper.scss";
import "../css/pagination.scss";
import "../css/jmaq.scss"

import SwiperCore, { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

SwiperCore.use([Pagination, A11y]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss">
.swiper-slide {
    color: black !important;
    background-color: rgb(255, 255, 255) !important;
}

.swiper-pagination-bullet {
    background-color: #3d83f6 !important;
    background: #3d83f6 !important;
}
</style>