<template>
  <SideBar />
  <section
    class="hero-wrap hero-wrap-2"
    :style="{
      'background-image':
        'url(' + require('../../src/assets/images/bg_2.jpg') + ')',
    }"
    data-stellar-background-ratio="0.5"
  >
    <div class="overlay"></div>
    <div class="container">
      <div
        class="row no-gutters slider-text align-items-end justify-content-center"
      >
        <div class="col-md-9 mb-5 text-center">
          <p class="breadcrumbs mb-0">
            <span class="mr-2"
              ><a href="index.html">Home <i class="fa fa-chevron-right"></i></a
            ></span>
            <span>Products <i class="fa fa-chevron-right"></i></span>
          </p>
          <h2 class="mb-0 bread">Products</h2>
        </div>
      </div>
    </div>
  </section>

  <section class="ftco-section">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <div class="row mb-4">
            <div
              class="col-md-12 d-flex justify-content-between align-items-center"
            >
              <h4 class="product-select">Select Types of Products</h4>
              <select class="selectpicker" multiple>
                <option>Brandy</option>
                <option>Gin</option>
                <option>Rum</option>
                <option>Tequila</option>
                <option>Vodka</option>
                <option>Whiskey</option>
              </select>
            </div>
          </div>
          <TransactionsPaginatedVue 
            :data="trans"
            :total-pages="Math.ceil(trans.length / 4)"
            :total="trans.length"
            :per-page="6"
            :currentPage="currentPage"
            @pagechanged="onPageChange"
          />
        </div>

        <div class="col-md-3">
          <div class="sidebar-box">
            <div class="categories">
              <h3>Product Types</h3>
              <ul class="p-0">
                <li>
                  <a href="#"
                    >Brandy <span class="fa fa-chevron-right"></span
                  ></a>
                </li>
                <li>
                  <a href="#">Gin <span class="fa fa-chevron-right"></span></a>
                </li>
                <li>
                  <a href="#">Rum <span class="fa fa-chevron-right"></span></a>
                </li>
                <li>
                  <a href="#"
                    >Tequila <span class="fa fa-chevron-right"></span
                  ></a>
                </li>
                <li>
                  <a href="#"
                    >Vodka <span class="fa fa-chevron-right"></span
                  ></a>
                </li>
                <li>
                  <a href="#"
                    >Whiskey <span class="fa fa-chevron-right"></span
                  ></a>
                </li>
              </ul>
            </div>
          </div>

          <div class="sidebar-box">
            <h3>Recent Blog</h3>
            <div class="block-21 mb-4 d-flex">
              <a
                class="blog-img mr-4"
                :style="{
                  'background-image':
                    'url(' +
                    require('../../src/assets/images/image_1.jpg') +
                    ')',
                }"
              ></a>
              <div class="text">
                <h3 class="heading">
                  <a href="#"
                    >Even the all-powerful Pointing has no control about the
                    blind texts</a
                  >
                </h3>
                <div class="meta">
                  <div>
                    <a href="#"
                      ><span class="fa fa-calendar"></span> Apr. 18, 2020</a
                    >
                  </div>
                  <div>
                    <a href="#"><span class="fa fa-comment"></span> 19</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="block-21 mb-4 d-flex">
              <a
                class="blog-img mr-4"
                :style="{
                  'background-image':
                    'url(' +
                    require('../../src/assets/images/image_2.jpg') +
                    ')',
                }"
              ></a>
              <div class="text">
                <h3 class="heading">
                  <a href="#"
                    >Even the all-powerful Pointing has no control about the
                    blind texts</a
                  >
                </h3>
                <div class="meta">
                  <div>
                    <a href="#"
                      ><span class="fa fa-calendar"></span> Apr. 18, 2020</a
                    >
                  </div>
                  <div>
                    <a href="#"><span class="fa fa-comment"></span> 19</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="block-21 mb-4 d-flex">
              <a
                class="blog-img mr-4"
                :style="{
                  'background-image':
                    'url(' +
                    require('../../src/assets/images/image_3.jpg') +
                    ')',
                }"
              ></a>
              <div class="text">
                <h3 class="heading">
                  <a href="#"
                    >Even the all-powerful Pointing has no control about the
                    blind texts</a
                  >
                </h3>
                <div class="meta">
                  <div>
                    <a href="#"
                      ><span class="fa fa-calendar"></span> Apr. 18, 2020</a
                    >
                  </div>
                  <div>
                    <a href="#"><span class="fa fa-comment"></span> 19</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <FooterF />
</template>

<script>
import FooterF from "@/components/FooterF.vue";
import SideBar from "@/components/SideBar.vue";
import TransactionsPaginatedVue from "@/components/TransactionsPaginated.vue";
import createStore from "@/store/index.js";
import { mapActions, mapGetters } from "vuex";
export default {
  mounted() {
    this.loadTrans()
  },
  data() {
    return {
      currentPage: 1,
    }
  },
  methods: {
    ...mapActions(['loadTrans']),
    onPageChange(page) {
      this.currentPage = page;
    },
  },
  computed: {
    ...mapGetters(['trans'])
  },
  components: {
    SideBar,
    FooterF,
    TransactionsPaginatedVue,
  },
};
</script>
