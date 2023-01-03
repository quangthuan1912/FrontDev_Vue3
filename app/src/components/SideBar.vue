<template>
  <div class="wrap">
    <div class="container">
      <div class="row">
        <div class="col-md-6 d-flex align-items-center">
          <p class="mb-0 phone pl-md-2">
            <a href="#" class="mr-2"
              ><span class="fa fa-phone mr-1"></span> +00 1234 567</a
            >
            <a href="#"
              ><span class="fa fa-paper-plane mr-1"></span>
              youremail@email.com</a
            >
          </p>
        </div>
        <div class="col-md-6 d-flex justify-content-md-end">
          <div class="social-media mr-4">
            <p class="mb-0 d-flex">
              <a
                href="#"
                class="d-flex align-items-center justify-content-center"
                ><span class="fab fa-facebook-f"
                  ><i class="sr-only">Facebook</i></span
                ></a
              >
              <a
                href="#"
                class="d-flex align-items-center justify-content-center"
                ><span class="fab fa-twitter"
                  ><i class="sr-only">Twitter</i></span
                ></a
              >
              <a
                href="#"
                class="d-flex align-items-center justify-content-center"
                ><span class="fab fa-instagram"
                  ><i class="sr-only">Instagram</i></span
                ></a
              >
              <a
                href="#"
                class="d-flex align-items-center justify-content-center"
                ><span class="fab fa-dribbble"
                  ><i class="sr-only">Dribbble</i></span
                ></a
              >
            </p>
          </div>
          <div class="reg">
            <p class="mb-0">
              <a href="#" class="mr-2">Sign Up</a> <a href="#">Log In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <nav
    class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
    id="ftco-navbar"
  >
    <div class="container">
      <router-link class="navbar-brand" to="/">Liquor <span>store</span></router-link>
      <div class="order-lg-last btn-group">
        <router-link
          to="/cart"
          class="btn-cart dropdown-toggle dropdown-toggle-split"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="flaticon-shopping-bag"></span>
          <div class="d-flex justify-content-center align-items-center">
            <small>3</small>
          </div>
        </router-link>
      </div>

      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link
              class="nav-link dropdown-toggle"
              to="/products"
              id="dropdown04"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >Products</router-link
            >
            <div class="dropdown-menu" aria-labelledby="dropdown04">
              <a class="dropdown-item" href="product.html">Products</a>
              <a class="dropdown-item" href="product-single.html"
                >Single Product</a
              >
              <a class="dropdown-item" href="cart.html">Cart</a>
              <a class="dropdown-item" href="checkout.html">Checkout</a>
            </div>
          </li>
          <li class="nav-item">
            <router-link to="/blog" class="nav-link">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style></style>
