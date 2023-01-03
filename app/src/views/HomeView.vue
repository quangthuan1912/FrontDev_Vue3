<!-- eslint-disable no-unused-vars -->
<template>
  <SideBar />
  <SliderHead />
  <SectionIntro />
    <section class="ftco-section ftco-no-pb">
			<div class="container">
				<div class="row">
					<div class="col-md-6 img img-3 d-flex justify-content-center align-items-center" :style="{ backgroundImage: `url(${require('@/assets/images/' + hinh)})` }">
					</div>
					<div class="col-md-6 wrap-about pl-md-5  py-5">
                        <div class="heading-section">
                            <span class="subheading">Since 1905</span>
                            <h2 class="mb-4">Desire Meets A New Taste</h2>

                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                            <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
                            <p class="year">
                                <strong class="number" data-number="115">115 </strong>
                                <span> Years of Experience In Business</span>
                            </p>
                        </div>
					</div>
				</div>
			</div>
	</section>

	<section class="ftco-section ftco-no-pb">
		<div class="container">
			<div class="row">
				<div class="col-lg-2 col-md-4 ">
					<div class="sort w-100 text-center ">
						<div class="img" :style="{'background-image': 'url(' + require('../../src/assets/images/kind-1.jpg') + ')'}"></div>
						<h3>Brandy</h3>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 ">
					<div class="sort w-100 text-center ">
						<div class="img" :style="{'background-image': 'url(' + require('../../src/assets/images/kind-2.jpg') + ')'}"></div>
						<h3>Gin</h3>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 ">
					<div class="sort w-100 text-center ">
						<div class="img" :style="{'background-image': 'url(' + require('../../src/assets/images/kind-3.jpg') + ')'}"></div>
						<h3>Rum</h3>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 ">
					<div class="sort w-100 text-center ">
						<div class="img" :style="{'background-image': 'url(' + require('../../src/assets/images/kind-4.jpg') + ')'}"></div>
						<h3>Tequila</h3>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 ">
					<div class="sort w-100 text-center ">
						<div class="img" :style="{'background-image': 'url(' + require('../../src/assets/images/kind-5.jpg') + ')'}"></div>
						<h3>Vodka</h3>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 ">
					<div class="sort w-100 text-center ">
						<div class="img" :style="{'background-image': 'url(' + require('../../src/assets/images/kind-6.jpg') + ')'}"></div>
						<h3>Whiskey</h3>
					</div>
				</div>

			</div>
		</div>
	</section>

	<section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center pb-5">
		<div class="col-md-7 heading-section text-center ">
		<span class="subheading">Our Delightful offerings</span>
		<h2>Tastefully Yours</h2>
		</div>
	</div>
			<div class="row">
				<div class="col-md-3 col-lg-3 d-flex" v-for="prod in products" :key="prod.id">
					<div class="product">
						<div class="img d-flex align-items-center justify-content-center" :style="{ backgroundImage: `url(${require('@/assets/images/' + prod.image)})` }">
							<div class="desc">
								<p class="meta-prod d-flex">
									<a href="#" class="d-flex align-items-center justify-content-center"><span class="flaticon-shopping-bag"></span></a>
									<a href="#" class="d-flex align-items-center justify-content-center"><span class="flaticon-heart"></span></a>
									<router-link :to="'/products/0' + prod.id" class="d-flex align-items-center justify-content-center"><span class="flaticon-visibility"></span></router-link>
								</p>
							</div>
						</div>
						<div class="text text-center">
							<span v-if="prod.salePrice" class="sale">Sale</span>
							<span v-if="prod.bestSaler" class="seller">Best Seller</span>
							<span v-if="prod.newProduct" class="new">New Arrival</span>
							<span class="category">{{ prod.category }}</span>
							<h2>{{ prod.name }}</h2>
							<p class="mb-0">
								<span v-if="prod.salePrice" class="price price-sale">$69.00</span> 
								<span class="price">{{ prod.price }}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-4">
					<router-link to="/products" class="btn btn-primary d-block">View All Products <span class="fa fa-long-arrow-right"></span></router-link>
				</div>
			</div>
		</div>
	</section>
  
    <section class="ftco-section testimony-section img" :style="{'background-image': 'url(' + require('../../src/assets/images/bg_4.jpg') + ')'}">
    <div class="overlay"></div>
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 text-center heading-section heading-section-white ">
        <span class="subheading">Testimonial</span>
            <h2 class="mb-3">Happy Clients</h2>
          </div>
        </div>
        <div class="row ">
          <div class="col-md-12">
            <div class="carousel-testimony ftco-owl">
              <div class="item">
                <div class="testimony-wrap py-4">
                    <div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-quote-left"></span>
                    </div>
                <div class="text">
                <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div class="d-flex align-items-center">
                    <div class="user-img" :style="{'background-image': 'url(' + require('../../src/assets/images/person_1.jpg') + ')'}"></div>
                    <div class="pl-3">
                        <p class="name">Roger Scott</p>
                        <span class="position">Marketing Manager</span>
                        </div>
                    </div>
                </div>
                </div>
              </div>
              <div class="item">
                <div class="testimony-wrap py-4">
                <div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-quote-left"></span></div>
                  <div class="text">
                    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div class="d-flex align-items-center">
							<div class="user-img" :style="{'background-image': 'url(' + require('../../src/assets/images/person_3.jpg') + ')'}"></div>
							<div class="pl-3">
								<p class="name">Roger Scott</p>
								<span class="position">Marketing Manager</span>
							</div>
						</div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimony-wrap py-4">
                <div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-quote-left"></span></div>
                  <div class="text">
                    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div class="d-flex align-items-center">
							<div class="user-img" :style="{'background-image': 'url(' + require('../../src/assets/images/person_2.jpg') + ')'}"></div>
							<div class="pl-3">
								<p class="name">Roger Scott</p>
								<span class="position">Marketing Manager</span>
							</div>
						</div>
					</div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>


		
    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 heading-section text-center ">
		<span class="subheading">Blog</span>
		<h2>Recent Blog</h2>
          </div>
        </div>
        <div class="row d-flex">
          <div class="col-lg-6 d-flex align-items-stretch ">
			<div class="blog-entry d-flex">
			<a href="blog-single.html" class="block-20 img" :style="{'background-image': 'url(' + require('../../src/assets/images/image_1.jpg') + ')'}">
              </a>
              <div class="text p-4 bg-light">
					<div class="meta">
						<p><span class="fa fa-calendar"></span> 23 April 2020</p>
					</div>
                <h3 class="heading mb-3"><a href="#">The Recipe from a Winemaker’s Restaurent</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <a href="#" class="btn-custom">Continue <span class="fa fa-long-arrow-right"></span></a>

              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch ">
				<div class="blog-entry d-flex">
					<a href="blog-single.html" class="block-20 img" :style="{'background-image': 'url(' + require('../../src/assets/images/image_2.jpg') + ')'}">
				</a>
				<div class="text p-4 bg-light">
					<div class="meta">
						<p><span class="fa fa-calendar"></span> 23 April 2020</p>
					</div>
                <h3 class="heading mb-3"><a href="#">The Recipe from a Winemaker’s Restaurent</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <a href="#" class="btn-custom">Continue <span class="fa fa-long-arrow-right"></span></a>

              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch ">
				<div class="blog-entry d-flex">
					<a href="blog-single.html" class="block-20 img" :style="{'background-image': 'url(' + require('../../src/assets/images/image_3.jpg') + ')'}">
				</a>
				<div class="text p-4 bg-light">
					<div class="meta">
						<p><span class="fa fa-calendar"></span> 23 April 2020</p>
					</div>
                <h3 class="heading mb-3"><a href="#">The Recipe from a Winemaker’s Restaurent</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <a href="#" class="btn-custom">Continue <span class="fa fa-long-arrow-right"></span></a>

              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-stretch ">
				<div class="blog-entry d-flex">
					<a href="blog-single.html" class="block-20 img" :style="{'background-image': 'url(' + require('../../src/assets/images/image_4.jpg') + ')'}">
				</a>
				<div class="text p-4 bg-light">
					<div class="meta">
						<p><span class="fa fa-calendar"></span> 23 April 2020</p>
					</div>
                <h3 class="heading mb-3"><a href="#">The Recipe from a Winemaker’s Restaurent</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <a href="#" class="btn-custom">Continue <span class="fa fa-long-arrow-right"></span></a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  <FooterF />
</template>

<script>

import { defineComponent } from 'vue';

// Components
import SideBar from '@/components/SideBar.vue';
import SliderHead from '@/components/SliderHead.vue';
import FooterF from '@/components/FooterF.vue';
import SectionIntro from '@/components/SectionIntro.vue';
import createStore from "@/store/index.js";

export default defineComponent({
  name: 'HomeView',
	data() {
		return {
			hinh: 'about.jpg',		
		}
	},
	components: {
		SideBar,
		SliderHead,
		FooterF,
		SectionIntro
	},

	computed: {
		products() {
			return createStore.state.products
		}
	},

	mounted() {
		createStore.dispatch('getProducts')
	}
});
</script>
