<template>
  <SideBar />
  <section
    class="hero-wrap hero-wrap-2"
    :style="{'background-image': 'url(' + require('../../src/assets/images/bg_2.jpg') + ')'}"
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
            <span>Contact Us <i class="fa fa-chevron-right"></i></span>
          </p>
          <h2 class="mb-0 bread">Contact Us</h2>
        </div>
      </div>
    </div>
  </section>

  <section class="ftco-section bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="wrapper px-md-4">
            <div class="row mb-5">
              <div class="col-md-3">
                <div class="dbox w-100 text-center">
                  <div
                    class="icon d-flex align-items-center justify-content-center"
                  >
                    <span class="fa fa-map-marker"></span>
                  </div>
                  <div class="text">
                    <p>
                      <span>Address:</span> 198 West 21th Street, Suite 721 New
                      York NY 10016
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="dbox w-100 text-center">
                  <div
                    class="icon d-flex align-items-center justify-content-center"
                  >
                    <span class="fa fa-phone"></span>
                  </div>
                  <div class="text">
                    <p>
                      <span>Phone:</span>
                      <a href="tel://1234567920">+ 1235 2355 98</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="dbox w-100 text-center">
                  <div
                    class="icon d-flex align-items-center justify-content-center"
                  >
                    <span class="fa fa-paper-plane"></span>
                  </div>
                  <div class="text">
                    <p>
                      <span>Email:</span>
                      <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="dbox w-100 text-center">
                  <div
                    class="icon d-flex align-items-center justify-content-center"
                  >
                    <span class="fa fa-globe"></span>
                  </div>
                  <div class="text">
                    <p><span>Website</span> <a href="#">yoursite.com</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col-md-7">
                <div class="contact-wrap w-100 p-md-5 p-4">
                  <h3 class="mb-4">Contact Us</h3>
                  <form
                    method="POST"
                    id="contactForm"
                    name="contactForm"
                    class="contactForm"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="label" for="name">Full Name</label>
                          <input
                            type="text"
                            class="form-control"
                            name="name"
                            id="name"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="label" for="email">Email Address</label>
                          <input
                            type="email"
                            class="form-control"
                            name="email"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="label" for="subject">Subject</label>
                          <input
                            type="text"
                            class="form-control"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="label" for="#">Message</label>
                          <textarea
                            name="message"
                            class="form-control"
                            id="message"
                            cols="30"
                            rows="4"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="submit"
                            value="Send Message"
                            class="btn btn-primary"
                          />
                          <div class="submitting"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-md-5 order-md-first d-flex align-items-stretch">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4775076760448!2d106.63214551429705!3d10.774692562173213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ea168a65c0b%3A0x2a4a7dc43e177de1!2zMTIgVHLhu4tuaCDEkMOsbmggVGjhuqNvLCBIb8OgIFRoYW5oLCBUw6JuIFBow7osIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1671876366833!5m2!1svi!2s" width="600" height="auto" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default {
  components: { SideBar, FooterF },
};
</script>


