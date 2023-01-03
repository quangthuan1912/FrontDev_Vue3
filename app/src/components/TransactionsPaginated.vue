<template>
  <div class="row">
    <div class="col-md-4 d-flex" v-for="prod in paginatedData" :key="prod.id">
      <div class="product">
        <div
          class="img d-flex align-items-center justify-content-center"
          :style="{
            backgroundImage: `url(${require('@/assets/images/' + prod.image)})`,
          }"
        >
          <div class="desc">
            <p class="meta-prod d-flex">
              <a
                href="#"
                class="d-flex align-items-center justify-content-center"
                ><span class="flaticon-shopping-bag"></span
              ></a>
              <a
                href="#"
                class="d-flex align-items-center justify-content-center"
                ><span class="flaticon-heart"></span
              ></a>
              <router-link
                :to="'/products/0' + prod.id"
                class="d-flex align-items-center justify-content-center"
                ><span class="flaticon-visibility"></span
              ></router-link>
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
  <div class="row mt-5">
    <div class="col text-center">
      <div class="block-27">
        <ul v-if="products.length > 6 || currentPage > 1">
                  <li><button @click="onClickPreviousPage" :disabled="isInFirstPage">
                    <a href="#">&lt;</a>
                  </button></li>
                <li v-for="(page, index) in pages" :key="index" @click="onClickPage(page.number)" :class="{active : isPageAction(page.number)}">
                    <button><span>{{ page.number }}</span></button>
                </li>
                <li>
                    <button @click="onClickNextPage" :disabled="isInLastPage">
                    <a href="#">&gt;</a>
                    </button>
                </li>
                </ul>
      </div>
    </div>
  </div>
</template>

<script>
import createStore from "@/store/index.js";
export default {
    props: {
        data: {
            type: Array,
            required: true
        },
        maxVisibleButtons: {
        type: Number,
        required: false,
        default: 3
        },
        totalPages: {
        type: Number,
        required: true
        },
        total: {
        type: Number,
        required: true
        },
        perPage: {
        type: Number,
        required: true
        },
        currentPage: {
        type: Number,
        required: true
        }
        },
        computed: {
            products() {
                return createStore.state.products
        },

        paginatedData() {
            let start = (this.currentPage - 1) * this.perPage, end = start + this.perPage;
            return this.products.slice(start, end)
        },
        startPage() {
        if (this.currentPage === 1) return 1
        if (this.currentPage === this.totalPages) return this.totalPages - this.maxVisibleButtons + (this.maxVisibleButtons - 1)
        return this.currentPage - 1
        },
        endPage() { return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages) },
        pages() { 
            let range = []
            for (let i = this.startPage; i <= this.endPage; i++) {
                range.push({
                number: i,
                isDisabled: i === this.currentPage
                });
            }
            return range
        },
        isInFirstPage() {
        return this.currentPage === 1
        },
        isInLastPage() {
        return this.currentPage === this.totalPages
        }
    },

    methods: {
        onClickPage(page) {
        this.$emit('pagechanged', page)
        },
        onClickNextPage() {
        this.$emit('pagechanged', this.currentPage + 1)
        },
        onClickPreviousPage() {
        this.$emit('pagechanged', this.currentPage - 1)
        },
        isPageAction(page) {
        return this.currentPage === page;
        },
        onPageChange(page) {
        this.currentPage === page;
        }
    },

	mounted() {
		createStore.dispatch('getProducts')
	}
};
</script>
